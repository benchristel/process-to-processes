A test double is an [[Object]] or [[Value]] that is controlled by [[TestCode]] and interacts with a [[TestSubject]]. Usually, the test double is specially crafted to reveal some specific characteristic or behavior of the [[TestSubject]]. See ["New Thoughts on Test Doubles"](https://benchristel.github.io/blog/2019/08/10/new-thoughts-on-test-doubles/) for more.

The traditional hierarchy of test doubles includes the following classifications:

- [[Dummies|Dummy]]
- [[Fake]]s
- [[Stub]]s
- [[Spies|Spy]]
- [[Mock]]s

To which I'd add

- [[TestValue]]s

which have been largely ignored in the literature due to [[OOCentrism]].

Of these, [[TestValue]]s, [[Fake]]s, and [[Dummies|Dummy]] see the most use in my code; I occasionally use [[Spies|Spy]] when [[MessageBasedVerification]] is appropriate.

A [[Mock]] is a [[Spy]] that performs its own assertions instead of providing an interface to inspect the messages it received; while this is perhaps theoretically interesting as a technique for doing pure [[MessageBasedVerification]] without reliance on [[StateBasedVerification]], in practice it's simply a way of adding coupling to [[TestCode]] for no real benefit.