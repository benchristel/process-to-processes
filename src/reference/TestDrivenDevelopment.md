## Definition

In _Test Driven Development By Example_, Kent Beck says,

> TDD is an awareness of the gap between decision and feedback during programming, and techniques for controlling that gap.
>
> — https://dl.acm.org/doi/10.5555/579193

I love this definition. It encompasses a wide variety of practices, and avoids prescribing any particular mechanism or time frame
for getting feedback. The focus is on the programmer controlling _their own_ experience and process, in whatever way works for them.

## Red/Green/Refactor

There's a lot more to TDD than [[RedGreenRefactor]]. But if you want to _learn_ TDD, you should start with red/green/refactor. If you don't,  you're probably not learning TDD.

## TDD Epiphanies

- *Did you know* that you can take the guesswork out of writing code by running your program (or parts of it) as you're writing it?
- *Did you know* that you can record these experiments in a reproducible form, by phrasing them as "tests"?
- *Did you know* that you can [view](36Views) your tests as a specification of desired [[Behavior]]?
- *Did you know* that you can test your tests by running them before the code is working, and making sure they fail in the expected way?
- *Did you know* that getting [fast feedback](DohertyThreshold) as you code turns programming into a virtuosic dance between you and the machine, in which your working memory ceases to be the bottleneck on what you can accomplish?
- *Did you know* that fast, simple, reliable tests are _so useful_ that it's worth rethinking the design of your code so you can write them?
- *Did you know* that designing code for testability nudges it toward evincing the [FifteenFundamentalProperties](FifteenPropertiesInSoftware), making it more likely to serendipitously accommodate unforeseen uses?

If you know all those things—_experientially_, not just theoretically—then congrats, you're _[[TestInfected]]_. You're now aware of the gap between decision and feedback, and so you're always doing TDD, whether you like it or not.

In this way, the epiphanies listed above are similar to the concept of [vipassanā](https://en.wikipedia.org/wiki/Vipassan%C4%81) in Buddhism—they are experiences that fundamentally, irreversibly change how you think.

## Analogy to the Scientific Method

[[Code]] is a [[Hypothesis]] about how to solve a problem. When the code has survived many [[FormalTest]]s and has been simplified and [Refactored](Refactoring), we can call it a [[Theory]] of how to solve the problem.

A [[FormalTest]] is a reproducible [[Experiment]] that can, in principle, falsify a [[Hypothesis]] about how to solve a problem. Just as a scientific hypothesis is falsified if it incorrectly predicts the outcome of an experiment, code is wrong if it fails a test.

The goal of TDD/science is to generate the simplest code/theory that passes/explains all the tests/data, by [repeated alternating](AlternatingRepetition) steps of evidence-based elaboration followed by simplification. To quote Einstein:

> The supreme goal of all theory is to make the irreducible basic elements as simple and as few as possible without having to surrender the adequate representation of a single datum of experience.
> —Albert Einstein

The analogy between science and TDD can be summarized as:

| Science | TDD |
| --- | ------- |
| Nature | User/Client |
| Observation | Desired [[Interaction]] |
| Experiment | [[FormalTest]] |
| Hypothesis | [[ShamelessGreen]], the dumbest code that passes all the tests so far |
| Theory | [Refactored](Refactoring) code that passes all the tests we can think of |

Zenna Tavares says, "the space of theories is a little bit like the space of programs, and therefore scientific discovery is a little bit like program synthesis." https://www.youtube.com/watch?v=eGunohFHbK0&t=694s

Programs are like scientific theories in another way: just as there are many different programs that express the same [[Behavior]], there are often many different theories that are equally good at explaining phenomena. But the choice between equivalent programs/theories is not arbitrary. We choose which program or theory to use based on the ways we anticipate needing to reason about or extend it. Here's [Feynmann's explanation](https://www.youtube.com/watch?v=NM-zWTU7X-k&list=PLyQSN7X0ro23NUN9RYBP5xdBYoiv2_5y2&index=3):

> Suppose you have two theories, a and b, which look completely different psychologically. They have different ideas in them and so on. But that all the consequences that are computed are exactly the same. You may even say they even agree with experiment.
>
> The point is that that the two theories, although they sound different at the beginning, have all consequences the same. It’s easy, usually, to prove that mathematically, by doing a little mathematics ahead of time, to show that the logic from this one and this one will always give corresponding consequences.
>
> Suppose we have two such theories. How are we going to decide which one is right? No way, not by science. Because they both agree with experiment to the same extent, there’s no way to distinguish one from the other.
>
> So two theories, although they may have deeply different ideas behind them, may be mathematically identical. And usually people say, then, in science one doesn’t know how to distinguish them. And that’s right.
>
> However, for psychological reasons, in order to guess *new* theories, these two things are very far from equivalent. Because one gives a man different ideas than the other. By putting the theory in a certain kind of framework, you get an idea of what to change.

If you replace "theory" with "program" and "science" with "testing" in Feynmann's statement, the [[Consilience]] with software development is essentially perfect.

### The value of approximations

In science, even a theory that has been proven incorrect can be useful, if it is "correct enough" in some circumstances. The classic example is Newtonian mechanics. Although disproven by Einstein, Newton's laws are still useful if you're, say, doing ballistics, or building a bridge.

The same is true in programming. An "incorrect" program can still be used, and may even be preferred, if it is simpler, faster, or more portable than the correct program. For example, a lexicographic sort function that doesn't handle accented letters in a locale-sensitive way may be just fine for an application where only ASCII is expected, all the users speak English, or the exact sort order is not critical. Another example: floating-point numbers lead to all kinds of wacky behavior, but we prefer them to arbitrary-precision numbers because they're cheap to store and compute with.

See also: [Roughness](https://github.com/benchristel/benchristel.github.io/wiki/FifteenPropertiesInSoftware#11-roughness).
### Differences Between Science and TDD

There is a major difference between science and TDD, which is that in science, we have nature as an [[Oracle]] for falsifying hypotheses. In TDD, a test can be "wrong"; that is, the test might not actually represent desired behavior. Sometimes there is an [[Oracle]], e.g. a spec, or an [[OnsiteCustomer]], but most often, there isn't, so we just have to muddle through.

[[JamesCoplien]] complained about the scarcity of oracles in [[WhyMostUnitTestingIsWaste]].

## In [[NotesOnTheSynthesisOfForm]]

> [I]n practice we see good fit only from a negative point of view, as the limiting case where there are no high spots.
>
> Suppose we are given a button to match, from among a box of assorted but­tons. How do we proceed? We examine the buttons in the box, one at a time; but we do not look directly for a button which fits the first. What we do, actually, is to scan the buttons, rejecting each one in which we notice some discrepancy (this one is larger, this one darker, this one has too many holes, and so on), until we come to one where we can see no differences. Then we say that we have found a matching one. **Notice that here again it is much easier to explain the misfit of a wrong button than to justify the congruity of one which fits**.
>
> When we speak of bad fit we refer to a single identifiable property of an ensemble, which is immediate in experience, and describable. Wherever an instance of misfit occurs in an ensemble, we are able to point specifically at what fails and to describe it. It seems as though in practice the concept of good fit, describing only the absence of such failures and hence leaving us nothing concrete to refer to in explanation, can only be explained indirectly; it is, in practice, as it were, the dis­junction of all possible misfits.
>
> —p. 23, emphasis added