Contract testing is a means of verifying that a [[TestDouble]] adheres to the same [[BehavioralContract]] as the [[Component]] it stands in for.

The general principle of contract testing is that the same suite of tests ought to pass when run against the production implementation of a system *or* against the [[Fake]] implementation used in testing.

If you use [[TestDouble]]s but don't contract-test them or write [[IntegrationTest]]s, it's more likely that you'll find yourself in a situation where all your [[UnitTest]]s pass but the system as a whole doesn't work.

Contract tests have many of the same benefits as [[IntegrationTest]]s, since they can alert you to cases where the pieces of the system won't work together. But while integration tests are slow, flaky, difficult to debug, and tend to proliferate (due to the exponential explosion of execution paths in a large system), contract tests are easy to debug, fast(er), less flaky, and grow linearly with the size of the codebase.

## vs. J.B. Rainsberger's Definition

J.B. Rainsberger uses the term "contract test" to refer to a suite of test cases that one can run against any object to validate that it correctly implements an interface. However, my impression from reading J.B.'s blog is that he stops short of actually running the contract
tests against his test doubles, because he doesn't build test doubles that correctly implement interfaces—he just uses mocks and stubs.

> Unfortunately, it remains possible to write a contract test that contradicts a collaboration test. It remains possible to change a stub or an expectation or a spy or a mock and not notice that the new behavior doesn’t match the contract tests. It seems that this doesn’t fix the drifting test doubles problem after all. So what do I do? Who tests the contract tests?
>
> https://blog.thecodewhisperer.com/permalink/who-tests-the-contract-tests

His solution to this is, apparently, to manually verify that every interaction he programs into a mock or stub has a corresponding contract test that runs against the real implementation.

> - Match the stubs in your collaboration tests to “assert equals” checks in your contract tests.
> - Match the expectations in your collaboration tests to actions in your contract tests.
> - Writing code “client-first” means writing collaboration tests and building the test list for the contract tests associated with the next layer.
> - Writing code “supplier-first” risks the Chunnel Problem: not knowing that you’ve built enough of the right things and only enough of the right things until you try to connect it to some clients; therefore, when in doubt, write code client-first.

So, borrowing from [his `countWords` example](https://blog.thecodewhisperer.com/permalink/a-real-life-contract-test), if he wants to write a test for an editor plugin that calls `countWords`, he does something like this:

```javascript
// pseudocode
const countWords = stub().given("text with four words").returns(4)
const plugin = new MyPlugin(countWords)
// ... assert some stuff about the plugin here
```

And then he makes sure that the contract suite for `countWords` contains a test like this:

```javascript
assert(countWords("text with four words"), is, 4)
```

That seems like a lot of work to avoid calling a real reference implementation of the interface. Note that by constraining his stubs to only
return values that the real `countWords` would return, he's essentially coupling his tests for `MyPlugin` to the real behavior of `countWords` anyway.

In this case, I wouldn't use test doubles at all. `countWords` is a pure freaking function, for crying out loud! You don't need to stub it! Perhaps you're worried that the CPU time required to call a potentially deep stack of library functions will slow down your tests, but let me remind you of an important point:

[[AnyCodeIsFastForSmallInputs]]

Algorithms are not slow. Or, more precisely, it is meaningless to ask how fast or slow an algorithm is, in [[WallClockTime]]. Algorithms have a time complexity that is a function of input size. If your [[UnitTest]]s are slow, the fix is almost always to use smaller data. If your data is already as small as possible, refactor to flatten the dependency hierarchy, and find boundaries at which you can make dependencies more abstract so real collaborators can be replaced with [[Fake]]s (and contract-test those fakes!)

## Tools

RSpec's shared example groups let one easily run a suite of tests against two different subjects. This makes contract testing easier.

In JUnit, you can create an abstract test class and put your contract test cases there. Then you can inherit from that abstract class to create a test suite for each class that must implement the contract. Here is an example: [the abstract contract test class](https://github.com/benchristel/Bank-kata/blob/master/src/test/java/bank/TransactionStoreTest.java), and two subclasses: [one](https://github.com/benchristel/Bank-kata/blob/master/src/test/java/bank/FileTransactionStoreTest.java), [two](https://github.com/benchristel/Bank-kata/blob/master/src/test/java/bank/InMemoryTransactionStoreTest.java).