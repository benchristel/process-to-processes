**Red, green, refactor** is the mantra for [[TestDrivenDevelopment]]. It's a brief reminder of the steps you go through to test-drive code.

1. **Red**: Write a failing test. Some people say _write no more test code than is sufficient to get a failure_. Compilation failures because the production code doesn't exist yet count as failures.
2. **Green**: Write the most straightforward code you can to get the test to pass. Don't worry about elegance, generality, or performance. [[SandiMetz]] emphasizes this by calling it [[ShamelessGreen]].
3. **Refactor**: Consider the code as a whole. Identify specific [[CodeSmell]]s and fix them via a sequence of small, behavior-preserving changes ([[Refactoring]]s)

## Criticism

Red-green-refactor is neither necessary nor sufficient to produce good code, or even well-tested code. This conclusion is drawn from [research](http://people.brunel.ac.uk/~csstmms/FucciEtAl_ESEM2016.pdf) and my own experience. Think of it like training wheels: it's what you do to get a feel for how test-driven development works, and it can be a helpful ritual when you're tackling a really hard problem, but most of the time, it's overkill.

The real benefit of TDD comes not from the exact order of steps, but from what you think about while working. When I am test-driving code, I am always thinking:

- How can I test this code? How can I rearrange the interfaces between the parts to make testing each part simpler?
- Are my tests readable? Could someone else use them as example of how to use my code, and as documentation of what it does?
- Do I trust my tests to fail if I change this code in a way that breaks the user-facing functionality it supports?
- Will my tests continue to pass if I change the code in a way that _preserves_ the user-facing functionality?
- How do I know my tests are working? (Note that the way to test a test is to break the production code intentionally and confirm that the test fails. Programming test-first is one way to do this, since by writing the test first and seeing it fail, we prove that it _can_ fail.)
- When a test fails, is the failure message easy to understand? Does it tell me, clearly and concisely, exactly what is broken?
- Are my tests fast? How can I get useful feedback within the [[DohertyThreshold]] of 400 milliseconds?

## Revision

I posit that the most important step in test-driven development is one that almost no one talks about. It's the step that comes before **red**. That step is **design**.

It's often said that when you do TDD, the design emerges organically from the process. But this is only true of the *internal* design of the code—the stuff that you change when you refactor. You still need to deliberately design the *interfaces*, the *external* design of your code. This includes, at a minimum, things like what functions or methods exist, what arguments they take, and what they return.

If you think about it, you'll realize that it's impossible to do TDD without some form up upfront interface design. You can't write a test without specifying at least part of the interface of the code you're testing. If there's no interface, there's nothing for your test to call. Therefore, interface design must come *before* the "red" step of red-green-refactor.

It's important to design interfaces carefully because your tests depend on those interfaces, and in doing so, make them harder to change. If you change a function to require different arguments or return data in a different format, all your tests for that function will have to change as well.

I feel like this is often the thing that frustrates people about TDD. They hear "emergent design" and they think that means no deliberate design at all. Then they write a bunch of [[UnitTest]]s that lock in less-than-ideal interfaces and wonder why their code is such a mess and so hard to change.

To state it again: You should **design interfaces and refactor implementations**. TDD gives you the freedom to refactor the internals of your code, but the tradeoff is that you must get the interface right (or nearly right) up front.

So, the process I'd recommend is:

- **Design.**
- **Red.**
- **Green.**
- **Refactor.**