Some facts about how I design and test code:

- I sketch the [[Interface]] of the code I'm going to test, before I write any tests. I think about the [AlgebraicProperties](AlgebraicProperty) I want the interface to have, and consider whether I can reuse [[UbiquitousInterfaces]].
- If I'm starting a new project, I design the [[Architecture]] before writing any tests. I think about the [[Ennead]] and try to push more of the interesting, test-worthy logic toward the bottom right. I try to flatten the dependency tree so my code remains comprehensible and I don't end up with [[Mock]]s, [[SystemTest]]s, or duplicate test coverage.
- My tests are very fast. A test that takes more than a millisecond to run is too slow. I can run all the tests I care about within the [[DohertyThreshold]].
- I rarely use [[Mock]]s or [Spies](Spy). I rarely write [[SystemTest]]s.
- My test coverage is all-or-nothing, depending on the module. App/UX-specific code tends to have zero test coverage. Since such code isn't [[Stable]] and changes frequently, I rely on type safety and manual testing to know that it works. On the other hand, my domain code tends to have 100% coverage.
- I don't aim for a test coverage target. I rarely use code coverage tools, and when I do, my goal is just to find untested code that I think should be tested.
- I treat tests as an append-only log of desired features. If I have to remove or substantially change a test, that means I've made a breaking change to the code. I try to avoid such breaking changes (though I don't always succeed).
- I write flat test suites, without nested contexts or `describe` blocks. I don't define implicitly-called `setup` methods. Such clevernesses tend to hide what the tests are actually doing, which makes them harder to understand.
- As much as possible, the units of code that I test pass immutable [[Data]] across their interfaces. Data are nice because they have a reliable, associative, commutative equality operation that is familiar to every programmer working in the language. This fact makes assertions on data easy to write, read, and debug.
- I use the [[TestDataBuilderPattern]] to remove duplication from my test setup.