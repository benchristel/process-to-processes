[[DeepHierarchy]] is the root of all evil in [[SoftwareTesting]], and very possibly the root of half of the evil in [[SoftwareDesign]] (the other half is, as [[DonaldKnuth]] says, [[PrematureOptimization]].

By deep hierarchy, I mean any decomposition of a program into modules where the dependency graph of a random 3-node connected subgraph is more likely to look like A than B below:

```
// A (bad)

    X
    |
    Y
    |
    Z
```

```
// B (good)

    X
   / \
  Y   Z
```

Why is deep hierarchy so bad? The first reason is that process-external [[Effect]]s are a [[Contaminant]]. If module Z has process-external effects in the examples above, then with design A, both X and Y are "infected"—they too will have effects when invoked. In design B, only X is infected; Y remains pure.

When testing design A, we have several options:

1. Don't write tests. The test suite will be very fast, but coverage will obviously be zero.
2. Write only [[IntegratedTest]]s that actually invoke the process-external effects. Accept that the tests will be slow and flaky as a result.
3. Mock module Y in the tests for X, and mock module Z in the tests for Y. Write integration tests for Z that invoke process-external effects. This results in high coverage (measured as % of statements executed by a test) and a fast test suite.

Option 3 seems like the most reasonable one, and it's the one that many teams adopt. However, it's a scam: the apparent test coverage it provides is an illusion.

To see why this is the case, consider the tests for module X, in which we mock out module Y. Note that it must be true that module Y performs some pure [[Calculation]]s in addition to calling Z—otherwise, X would just call Z directly. Also note that since X has a statically analyzable dependency on Y, it relies on the correctness of Y's calculations for its own correctness; i.e. a bug in Y will probably cause a bug in X.

Now we can ask: where is the test that will fail if Y does not perform the calculations that X needs it to perform? And the answer is, "probably nowhere". Sure, Y has tests. But there is no automated check that ensures that the "correct behavior" enforced by those tests is the same "correct behavior" that the tests for X assume when they mock Y.

This is a roundabout way of saying something that is probably pretty obvious: when a test suite always mocks all collaborators of each unit under test, nothing is testing the integration points.

If design A had no flaws other than poor testability, perhaps we might still prefer it over B. But its evils extend beyond testing, into code reusability. Since module Y combines [[Calculation]]s with a dependency on Z's [[Effect]]s, Y cannot be reused except in circumstances where we want Z's effects to happen as well.

"Now wait a minute," I hear you saying. "Isn't the whole point of mocking that it forces us to _break_ static dependencies, so that Y does not _actually_ depend on Z, but can have anything with Z's interface injected into it?" To which I'd reply, yes, that is precisely the point, and if you actually understand what that implies and know how to write a sufficiently abstract contract between Y and Z such that the correctness of Y can be reasoned about in the absence of Z, then congratulations, you can successfully write mocked unit tests without ruining your life. However, most teams that I've worked with can't.

## Widening Hierarchies

A strange consequence of the definition given above,

> By **deep hierarchy**, I mean any decomposition of a program into modules where the dependency graph of a random 3-node connected subgraph is more likely to look like A than B

is that it predicts that when hierarchies cannot be made shallower, making them _wider_ will improve testability. Surprisingly, this turns out to be true.

```js
// Example of difficult-to-test code.
function allPermissions(): Array<Permission> {
  let perms = []
  perms = perms.concat(allAdminPermissions())
  perms = perms.concat(allReadOnlyPermissions())
  perms = perms.concat(allModerationPermissions())
  perms = perms.concat(allWritePermissions())
  return perms
}

test("allPermissions", {
  "includes admin permissions"() {
    expect(allPermissions(), hasSubset, allAdminPermissions())
  },
  "includes read-only permissions"() {
    expect(allPermissions(), hasSubset, allReadOnlyPermissions())
  },
  // ...
})
```

The tests for this code exactly mirror the structure of the implementation. What we really want to test is that the code concatenates lists correctly, but the tests are forced to depend on the actual _data_ being manipulated as well. But since we don't want the tests to fail when we add a new permission, we call the functions used by `allPermissions` in the tests. This results in tests that seem _almost_ tautological. They would be tautological, except that they're testing the array-concatenation logic.

The dependency graph for the part of the code shown above, which in this case is the same as the call graph, looks like this:

```
       *
  ,---,+.---.
 /   /   \   \
*   *     *   *
```

To fix the testing problem in the code above, we can introduce a `concatenate` function and test that:

```js
function allPermissions(): Array<Permission> {
  concatenate([
    allAdminPermissions(),
    allReadOnlyPermissions(),
    allModerationPermissions(),
    allWritePermissions(),
  ])
}

function concatenate<T>(arrays: Array<Array<T>>): Array<T> {
  let ret = []
  for (const a of arrays) {
    ret = ret.concat(a)
  }
  return ret
}

test("concatenate", {
  "returns an empty array given no arrays"() {
    expect(concatenate([]), equals, [])
  },
  "returns an empty array given empty arrays"() {
    expect(concatenate([[], []]), equals, [])
  },
  "unwraps a single non-empty array"() {
    expect(concatenate([[1, 2]]), equals, [1, 2])
  },
  "concatenates several non-empty arrays"() {
    expect(concatenate([[1, 2], [3, 4]]), equals, [1, 2, 3, 4])
  },
})
```

This code is better in several ways.

- We now have an explicit `concatenate` concept that makes it clear what the code is doing
- `concatenate` is generic and can be reused
- We no longer have the tautological testing problem. The tests don't refer to production data.
- Maintenance of the code is now easier. New permissions can be added to `allPermissions` with less boilerplate.

The hierarchy is no shallower than it was before, but it is _wider_. Instead of four dependencies, `allPermissions` now has five.

```
       *
  ,---,+.---.
 /   / | \   \
*   *  *  *   *
```

It is this widening of the hierarchy that has, surprisingly, improved testability and simplified the code.

(yes, I am aware that this example is artificial, because JavaScript has the `...` operator which renders a `concatenate` function unnecessary. Imagine it's written in some other language if this bothers you.)