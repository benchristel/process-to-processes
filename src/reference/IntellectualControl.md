The goal of [[TestDrivenDevelopment]]—and all [[InternalSoftwareQuality]] efforts—should be to enable the programmers to build a good mental model of the software. A good mental model is one that gives the programmers control over the software's [[Behavior]] as it evolves, allowing them to make changes without introducing bugs.

## Is all software shit?

[[AndrewEdstrom]] recently [remarked](https://andrewedstrom.substack.com/p/not-so-daily-drew-all-software-is) that it's an "open industry secret" that "all software is shit". As evidence, he points out that most apps have a lot of bugs. The explanation he gives is that "no one knows the right way to do this. The best programmers in the world write code that’s full of bugs and spend hours every day trying to understand why their code isn’t working how they thought it would."

It may be true that all software has bugs, but it's certainly not true that all software has the same _density_ of bugs. Many crucial pieces of software infrastructure, like web browsers and the Linux kernel, have very few bugs despite their extraordinary complexity. Moreover, not all _bugs_ are the same. It's true that some bugs are nightmarishly difficult to fix, but many others are easy to fix. The best programmers are those whose bugs are mostly in the latter category. It's simply not true that "the best programmers in the world" "spend hours every day trying to understand why their code isn't working". I hardly spend any time debugging anymore.

While the intellectual control afforded by good mental models isn't, in my experience, sufficient to prevent all bugs, it does make bugs much easier to fix when they're discovered. The time between my receiving a bug report and having a working, tested fix is often less than half an hour. Almost always, when I get a bug report, I immediately know the cause and can describe how to fix it on the spot. I have the sense that this isn't the norm on most software projects.

## What's needed to create mental models?

There is no silver bullet for creating code that's easy to mentally model, but I've found that the following things help a lot:

- A specification for at least the "hard parts" of the problem. Web browsers and the Linux kernel both have this advantage.
- The ability to catch mistakes quickly. Incremental testing is key. Test first or test last, as you prefer—but test! And test in very small steps: write a line of production code, and then write a test. If you write your tests after the production code, be sure to check that each test actually fails, with an understandable error message, when the corresponding code is broken.
- Static type safety.
- Code designed to be tested and observed.
- Intelligible, normalized data passed between components.
- A relatively shallow call graph and dependency graph. See  [[ShallowHierarchy]], [[DeepHierarchy]],[[TheDependencyGraphIsNotTheCallGraph]]
- A clear division between app-architecture-specific, domain-specific, and general-purpose code.
- A clear division between code with process-external effects and code without.
- A bias toward immutability and single-assignment (e.g. `const` in [[JavaScript]]). Reassignable variables aren't evil, especially when encapsulated inside objects, but if you create one, it should be to solve a specific problem that isn't easily solvable without reassignment.
- Components with [AlgebraicProperties](AlgebraicProperty) that simplify reasoning. A "lightweight" example of an algebraic property is [[Idempotence]], which frees you from worrying whether a function might be called multiple times (e.g. if the user retries an action). A "heavyweight" example is the eventual consistency guarantee of [[CRDT]]s.