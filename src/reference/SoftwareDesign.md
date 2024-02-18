## Design as Process

All of my advice about software design boils down to two bullet points:

- Look for ways to simplify.
- Look for reasons to complicate.

The key here is: _ways_ to simplify, and _reasons_ to complicate. We all know we should keep our designs simple, but it's not always obvious which simplifications are possible. Simplification is a skill that can be learned.

At the same time, the design should not be simplistic—that is, it should not be so simple that it can't do its job well. Just as everything that doesn't help the system must be left out, everything that _does_ help must be put in.

However, complications should only be added if we can articulate why we're adding them. Knowing that a complication is beneficial, and being able to articulate the reason, are skills that can be learned. It takes practice to recognize the _reasons_ why a design needs to be made more complex.

### In [[TestDrivenDevelopment]]

The way these two design maxims play out in TDD is: we first look for reasons to complicate the code we have—perhaps it has a bug, or doesn't do something that it needs to do, or isn't threadsafe, or whatever—and then we write a failing test to prove that the complication is needed. Then we update the code to make the test pass. Once all the tests are passing, we look for ways to simplify the code by refactoring. If we can make these simplifications without causing any test failures, we can be more confident that the simplified code is not simplistic.

## Design as Quality

What makes a good software design?

- Each [[Component]], at every level of detail, has a simple, easily described [[Behavior]].
- It is easy to make a convincing argument (perhaps by a combination of [proof](AlgebraicType) and [demonstration](SoftwareTesting)) that each component implements its intended behavior correctly.
- Edge cases, dependencies, leaky abstractions, etc. are not hidden, but made explicit and brought out into the open where they can be analyzed and dealt with.
  - This helps ensure that the correctness argument is not oversimplified, and therefore unsound.
- It is easy to see how the internal parts of the component work together to produce the external behavior.
  - This property creates ease of change.
- These properties apply to the whole system, considered as a [[Component]], and to every part, fractally.

The goal of these properties is, first of all, correctness, and second, ease of understanding the system. Ease of change, per se, ranks third. While it's nice to be able to add a new feature by changing only a few lines of code, understandability must take priority. If you can't understand the code, how will you find the place that needs to change to implement your feature?

Anecdotally, I've found that systems that were designed with "ease of change" as the overriding goal were actually open to only a few types of change that the designers foresaw. The actual types of change that were needed, however, tended to be different from the ones that were predicted.