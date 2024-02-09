# Process to Processes

<span style="font-size: 130%;font-weight:500;font-style:italic">
A Guide to Empirical Software Development
</span>

A work in progress by [Ben Christel](https://github.com/benchristel)

NOTE: you can use the left and right arrow keys to navigate between pages of this book.
They do the same thing as the "Prev" and "Next" links.

Can't wait for the book? Read the books that inspired me instead:

- Kent Beck:
  - _Extreme Programming Explained_, 2nd ed.
  - _Test Driven Development By Example_
- Christopher Alexander:
  - _The Timeless Way of Building_
  - _A Pattern Language_
  - _The Nature of Order_
- Eric S. Raymond: [_The Art of Unix Programming_](http://www.catb.org/esr/writings/taoup/html/)
- Culadasa: _The Mind Illuminated_
- Marijn Haverbeke: [_Eloquent JavaScript_](https://eloquentjavascript.net/)
- Stephen Wolfram: [_A New Kind of Science_](https://www.wolframscience.com/nks/)

---

## The System

A **system** of interacting people and machines creates **value** for your employer. As software developers, our job is to improve the system so it nets more value.

A system is composed of interacting parts. The interactions take many forms. The kind of interaction that software can directly affect is **information flow**. All software does, really, is route torrents of information from one place to another, swirling, splitting, and joining it along the way.

The word "information" in English is an unemotional one. It feels thin, dry, and colorless. I think that is unfortunate. Like water, information can comfort, quench, heal, threaten, and destroy. Information can make you laugh, or it can punch your guts out.

Information is the stuff of experience, and it is all you will ever experience.

It is information that turns the value-generating wheels of the software organization.

Information flows through people and machines. Each twist, turn, and interface it traverses is an opportunity for **friction**. Resistance, turbulence, bottlenecks, crosstalk, impedance mismatches—these are some of the metaphors we use to talk about information flows gone wrong.

Information is the lifeblood of the system. When the information flows are quick, clear, and harmonious, the system is healthy. When they are slow, muddy, and working at cross purposes, the system is sick.

A healthy system sustains itself with little effort. A system that is at death's door can only be kept alive by extreme heroics and frequent injections of money.

How can you tell if a system is healthy or unhealthy? It's easy: step into the system, and you can feel it. Being in the middle of an unhealthy information flow sucks! It makes you want to get out.

When unhealthy information flows touch human beings, we experience them as **suffering**. By contrast, healthy information flows produce a kind of pleasure that, over time, gives rise to a relaxed, joyful attitude.

Your employer pays you to work, not to feel good. Is it ethical to change how you work just so you feel better? It depends on the change, but the short answer is "yes". We do not improve the system only in order to feel better. We have feelings because they tell us how to improve. The feeling of pleasure or displeasure at information flows has been wired into us by natural selection _so that_ the systems we create will tend toward health and prosperity.

## Three Types of Information Flow

Broadly speaking, there are three types of information flow in a sociotechnical system:

- **Machine-to-machine.** In order to heal this kind of flow, we must learn to write correct, reliable programs.
- **Human-to-machine.** In software systems this breaks down into two subtypes:
  - **Programmer-to-machine.** This information flow is healed by structuring programs in a way that makes them easy to understand and change. It is intimately related to machine-to-machine information flows, because understandability and changeability are prerequisites for correctness.
  - **User-to-machine.** This type of information flow is healed by good user interface design.
- **Human-to-human.** This type of information flow is healed by good team structure and process. It is by far the most important, because all the other types of information flow can only be healed by humans working effectively.

While human-to-human communication is the most important, it's also nearly impossible to tackle head-on in an unhealthy system. Human-to-human flows pervade the entire system. They are deep, swift, and often cruel. Get in their way, and you _will_ get knocked down.

If you want to heal a system, you must start small: If you're a programmer, that means starting with the fingers-on-the-keyboard act of typing code. As you earn trust and gain confidence, you can work in larger and larger loops: improving architecture, team process, and user experience. If you succeed, others will want to emulate you. Then, and only then, can you start to coach them.

## Trust

Most people (rightly) do not trust programmers. If a programmer says something will take two days, it will actually take two weeks. Once the programmer says it's "done", it will still have multiple bugs.

If you want to improve the system you're in, you need autonomy. To get autonomy, you must earn people's trust. The simplest way to earn trust as a programmer is to do good work. (Doing good work _and hitting your estimates_ is harder; in general you should try to reframe conversations about estimates so you are not held to a date that turns out to be unrealistic.)

## Types of Friction

- Human-to-machine
  - interruption of service
  - ugly UI
  - inaccessible UI
  - too many clicks
  - slow performance
  - missing information, weak / latent centers
  - information overload
  - unconventional or inconsistent interactions (muscle memory)
  - not discoverable
- Machine-to-machine
  - incompatibility (should this go under human-to-machine? e.g. web app that's incompatible with old browsers)
  - incorrectness
  - performance?
- Human-to-human
  - Conflicting goals
  - Conflicting expectations (e.g. for communication)

## Value

**Value** is shorthand for "what is intrinsically good".

Value is not profit. Profit is an indirect result of value.

Consider the architecture of Sorrento, a beautiful city in Italy. To say that the buildings and public spaces of the city have *value* is simply to say that people like them: that they are beautiful, pleasant places to be. Because of this intrinsic value, the city has a thriving tourism industry, which generates revenue for the city. That is the connection between value and profit.

Why do we, as software developers, concern ourselves with value and not profit? Profit is not something we can directly control. There are too many factors influencing it. It is a fool's game to try to link a change in profits back to the efforts of an individual engineer or even an engineering team.

By contrast, value can be perceived more or less directly, objectively, and immediately. We can do quick tests to judge which of two alternatives is more or less valuable, even before putting our changes into production.

Judging value accurately, however, is challenging for many software developers. For many of us, our education has trained us to systematically ignore the kind of value I am talking about. To begin to perceive it, we have to reawaken a long-buried part of ourselves. This begins with learning a new mode of perception.

If we are to "improve the system", steadily adding to its value, we have to learn to see the system clearly. The fundamental constituents of any system are **centers**.

## Centers

Every sociotechnical system can be modeled as a graph of internally coherent, interrelated, fuzzily-bounded regions that I call **centers**. The term _center_ comes from Christopher Alexander, and was first applied to visual art and the design of the built environment. Although we are going to apply the concept of centers to human-computer systems, that application will be made easier by first studying the concept in its original context.

Christopher Alexander used the term *center* to refer to the visually coherent regions of space that appear in art and architecture. Centers are cohesive and identifiable; you can name them, point to them, count them, and recognize ones you've seen before. However, centers do not necessarily have a precise boundary, so they may not be separable from their context.

The concept of a center may seem a bit hard to grasp. However, I am sure that you already have an intuitive and practical sense of the concept, though you may not be used to paying attention to centers or talking about them.

To see that you already understand what a center is, imagine a whirlpool in a stream.

![a whirlpool](whirlpool.png)

What is a whirlpool? It's not a set of water molecules. The physical material that makes up the whirlpool is rapidly and constantly changing. It's also not an exact shape; the particular ripples in the water are constantly changing. It's not separable from the stream itself; you can't lift it out of the water and take it home with you.

Yet you can point to it. You can name it. If there are several whirlpools, you can count them. If you come back the next day and the whirlpool is still there, you can say "it's the same one I saw yesterday". If you know you can do all those things, then you know what a center is.

There are, of course, also centers that are more like "objects"—things that _can_ mostly be separated from their context, and that _do_ have a more or less consistent physical makeup. You are used to thinking and talking about these, so I won't dwell on them.

## Forces

Where do centers come from? Centers are shaped by **forces**.

The forces acting on a center push it to develop in a certain direction, or constrain it to have certain properties. For example, the forces acting on a piece of code might push it toward being correct, performant, and maintainable.

## Conflict

Multiple forces may propel a center in the same "direction"—that is, they may all push it toward the same shape or structure. This is delightful when it happens, because it means that the center, so shaped, can accommodate all of those forces well.

More often, though, we see that forces conflict. One force pushes a center toward one structure, and another pushes it toward a different structure. When conflict happens, we are forced to make tradeoffs. It is not possible to satisfy both forces at once, so we have to choose one, or make some compromise between them.

## Design

**Design** is the art of resolving conflicts between forces. By shaping and arranging centers in the right way, it is often possible to turn a situation of conflict into one of harmony and agreement.

Good designs often seem to come from a flash of inspiration or insight. While it may never be possible to reach a good design solely by following mechanical rules, design is a learnable skill. Designers learn by formulating and applying **patterns**.

## Patterns

A **pattern** is a local arrangement of centers that solves some design problem. A *pattern class* consists of the following parts:

- A *trigger*—a situation that makes you go "aha! Pattern X might apply here."
- A *design move*. You can think of this as a function that transforms a system *S* that does not have the pattern into a system *S&prime;* that does.
- An *evaluator*—a function that tells you whether *S&prime;* is an improvement on *S*.

In this book, we will focus on a single evaluator: *wholeness*.

## Wholeness

The **wholeness** of a system is its internal coherence. It is related to our senses of beauty, rightness, good fit, life, health, simplicity, and tranquility. When people are involved in a system that is whole, they tend to feel joy, satisfaction, confidence, trust, loving-kindness, and connectedness.

The degree of wholeness in a system inversely correlates with conflict between forces.

Holographic structure &rarr; wholeness. You can see evidence of the whole in each part.

Wholeness is recursive. A whole system consists of centers that are themselves whole.

Wholeness predicts predictability. "You know you're reading good code when each routine you look at turns out to be pretty much what you expected" —Ward Cunningham.

## Latent, Weak, and Strong Centers

Wholeness can often be enhanced by:

- Making implicit (latent) centers implicit, by giving them a definite identity and structure.
- Making weak but important centers stronger, by creating and arranging other centers within and around them to reinforce them
- Making strong but unimportant centers weaker (by indirection / decoupling?)

## How Centers Strengthen Each Other

Alternative titles: Fifteen Properties of Living Structure; the Structure of Seredipity



## Cognitive Efficiency and the Criterion of Life

- The rational part of your brain is slow, expensive, and weak.
- Our hardware is optimized for holistic perception and feeling.
- It is much easier to get wholeness by feeling your way to it than by trying to reason out all the interactions between forces.
- Compare: _Notes on the Synthesis of Form_ to _The Nature of Order_.
- Therefore, **our judgment of relative life must be our central guiding criterion as we design**. There is no other way to get quality/value at a reasonable speed.
- ...but we also have to confirm that our snap judgments are reasonable, e.g. by asking "who benefits"?
- We can also automate a lot of judgments about the software components of the system, e.g. with tests, types, and linters.

## The Fundamental Process

The fundamental process for improving a system is a variant of the OODA loop (OODA = observe, orient, decide, act):

1. Observe the system, just as it is.
2. Notice something that could be better (e.g. an impedance mismatch or a weak/latent center)
3. Make a small change to make that thing better without making anything else worse.
4. Evaluate. If your change made things worse, undo it.
5. Repeat.

## Computational Irreducibility of the Process

Non-incremental approaches are doomed to technical success.

## A Good Starting Point for the Process

The process takes many guises, depending on context, but is always ultimately the same.

Projects, teams, and codebases, of course, may look very different.

You will know better than I do how you should begin your project, but here are some suggested patterns. Use these as defaults, and customize to your liking.

Code: <pattern>walking skeleton</pattern>

People: <pattern>cross-functional team</pattern>

Plan: <pattern>ordered backlog</pattern>

Process: <pattern>shared schedule</pattern>, <pattern>top of backlog</pattern>, <pattern>weekly planning</pattern>, <pattern>weekly retrospective</pattern>, <pattern>manual system testing</pattern>, <pattern>test-driven development</pattern>

## Pattern: Walking Skeleton

Summary: A tiny, featureless, yet "complete" and working whole. A walking skeleton is a hilariously overbuilt "hello world" app that includes all the scaffolding on which you will hang your real functionality.

Trigger: you are starting a project

Evaluator: you shouldn't need to mess with the infrastructure (much) as you develop the skeleton into something useful. You can separate infrastructure changes from feature changes. New people on the team can get up and running easily.

Move: create a "hello world" app that uses the architecture and tools appropriate to your project. Including:

- version control
- production deployment or installer
- package manager
- dev build / server
- test runner
- typechecker
- linter
- formatter
- git hooks
- developer documentation
- editor configuration
- frontend/backend interaction
- database

### Examples

TODO

### Related Patterns

- <pattern>O(1) tooling</pattern>
- <pattern>400ms feedback loop</pattern>