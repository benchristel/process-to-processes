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

## Introduction

This book is for software developers who want to make better things in better ways. If you are interested in making software that is kinder, sturdier, more deeply felt, and better fit to your hand and mind, this book is for you. If you don't care about software so much, but just want to feel less stressed at work, I think you'll also find something of value here.

I'm writing _Process to Processes_ because I don't know of a single other resource that presents similar ideas in an orderly, linear fashion. My own journey toward creating better software has been rather roundabout. My hope is that yours will be less so because of this book.

### Contents

The book begins with some essays that set the scene. I start with the big questions—like, "what is software development?"—and zoom in from there. The purpose of this section is to ensure that we have a shared vocabulary and similar mental models of what software development entails. Terms introduced in this section will be used and reused throughout the book.

The rest of the book consists of **views** and **patterns**.

**Views** are ways of looking at things. A mental model is constructed from a set of complementary views. Mental models are a crucial part of any scientific or technical work, because they are what enable us to predict the modeled system's behavior. Unfortunately, mental models are bound to one mind; they cannot be communicated, only built "on-site". So instead of trying to give you my model, I will give you views. Views are the plans and diagrams that will help you construct your own mental models of the software systems you encounter.

**Patterns** are templates for solving common problems. You may have heard of patterns in the context of object-oriented design. But the concept of a pattern is much broader than that. The patterns in this book deal with problems large and small, technical and human. Most of the canonical OO design patterns are not covered here.

The views and patterns are presented in "smallest to largest" order. We'll start with tiny details of coding style and work our way up to software architecture, user experience design, and team dynamics. The reason for this presentation is practical: if you're trying to improve any situation, technical or human, it is most effective to start with the simplest and least dependent elements. It's always tempting to go the other way and tackle the biggest, most urgent problem first, but that's like trying to build a house on a foundation of quicksand. Get the foundations right; then everything else will fall naturally into place.

## What is Software Development?

### Exploration, not production

- figuring stuff out, not typing code
- making maps
- you can't map the territory until you've gone there
- dead ends are not caused by mistakes

### Forces, not requirements

- most software has few hard requirements
- we often have to make tradeoffs between competing forces
- the best designs transcend tradeoffs

### Controllability, not correctness

- when writing code, the best you can hope for is that the software does what you (the programmer) intended it to do.

### A process, not a project

Abandon the illusion that your software will at some point be "done". Software is never finished, it's only adequate or inadequate for the needs of its users. As needs change over time (shaped by the software itself, among other things) adequate software becomes inadequate and must continue to evolve.

A software system is a living system, in the sense that it is made of self-sustaining causal loops. It is also mortal. Its self-sustaining mechanisms can get bricked / die. A healthy system is one that tends toward self-sustenance; an unhealthy one tends toward death.

## Essay: Software Development is Figuring Stuff Out

Why does software take so long to build? Why are programmers paid so well? In what does the value of a software company consist?

In other words, what _is_ software development?

> Software development is an exercise in learning.
>
> —[[DaveFarley]] (https://www.youtube.com/watch?v=v21jg8wb1eU&t=949s)

> If we set things up to maximize learning instead of production, the value produced goes way way up.
>
> —[[KentBeck]] (https://www.youtube.com/watch?v=guycIP56YeY&t=14m15s)

> Software is what we learned along the way.
>
> —[Jim Nielsen](https://blog.jim-nielsen.com/2023/software-is-what-we-learned-along-the-way/)

> Software is the insights of the development team made manifest.
>
> —Baldur Bjarnason

Software development is not just (or even mainly) writing code. If it were, it would go many times faster than it does. You can demonstrate this to yourself with a thought experiment. First, estimate how many person-hours of work have gone into the codebase you work on. Then count the lines of code (with something like `find src -type f | xargs wc -l`) and calculate how long it would take you to type that much text (15 lines per minute is a conservative estimate). I predict the ratio will be above 50:1. In other words, less than 2% of a team's time is spent typing the code that goes into production.

The other 98% is not idle time. It's where the real work happens. That 98% consists of:

- Figuring out how the software currently works
- Figuring out what it should do differently
- Figuring out how to make it do that
- Communicating what you've figured out to other people

All that _figuring out_ is what software developers are paid to do. The stuff that developers figure out constitutes their employer's software <abbr title="intellectual property">IP</abbr>. It's a large part of what makes one software company more valuable than another. It's imperative, therefore, that developers pass on what they learn to others, so their knowledge isn't lost when they switch teams or companies.

_Figuring out_ doesn't happen entirely in your head. It's usually a dialogue between you and the machine. You read some code. You have an idea. You write some code. It doesn't work the way you thought it would. You figure out why it doesn't work, and you learn something. You try again and again until you get the results you expect.

This process might look inefficient, but inefficiency is relative. It's only inefficient if something else would be _more_ efficient. In general, typing is cheap, computers are fast, our brains are slow and limited, and coding mistakes are easy to undo as long as we catch them quickly. For all of these reasons, performing experiments in the codebase is often the fastest way to learn what will and won't work.

> As developers, we're not paid for what we do. We're paid for what we _know how_ to do. Our limitation is how much we can know. You can tell, because we don't sit there typing all day, and most of what we type, we delete.
>
> —[[JessicaKerr]] (https://www.youtube.com/watch?v=10Foa_lulK4&t=1213s)

### Is programming translation?

"Okay," you might be saying, "clearly figuring stuff out is a big part of what software developers do, but writing code is also important, right? Without code, there wouldn't be software."

Yes. But there are some caveats.

I have the impression that nontechnical people tend to think of programming as a kind of translation process, in which one takes human-language requirements and translates them into code that can be understood by a machine. This perception is reinforced in people who have tried programming once or twice, and have found that it's devilishly difficult to get the computer to do anything other than spit out a cryptic error message. If even one character is out of place, the program often won't even run.

To beginners, coding syntax seems like the hard part of programming. But it's actually the easy part. The real work begins only _after_ you have mastered syntax, and can reliably get your programs to run. Then you encounter hard questions like:

- What do I actually want this program to do?
- How can I tell if this program will do what I want in all circumstances?
- How can I change my program without breaking it for its current users?
- How can I communicate my mental model of the program to the people who have to use, extend, and repair it?
- How can I make the program fast, yet reliable?

Finding answers to these questions is not a simple matter of translation. It requires insight, creativity, empathy, good taste, and deductive reasoning. It's fundamentally a process of discovery, in which art and science become one.

_If_ you could somehow separate the work of figuring stuff out from the work of writing code, the latter would be a low-paid, menial task. Indeed, software teams of old used to try to make this separation, by dividing projects into "design" and "coding" phases. All the figuring out was supposed to happen in the design phase.

However, the tasks of design and coding _cannot_ be separated, because, as I stated earlier, the most efficient design process we know of involves a tight feedback loop between the designer and the machine, and code is part of that loop. Therefore, the engineers—the people who figure stuff out—must be coders, and the coders must be engineers.

## Process to Processes

The title of this book refers to the two kinds of process that bookend software development. On one end, we have the _development process_ that people go through as they learn about the system, make changes, and observe the results. On the other end, we have the _computational processes_ that run on computers—the things that are listed by the `ps` command on Unix systems.

## Flows of Information

A [**system**](reference/System.html) of interacting people and machines creates [**value**](reference/Value.html) for your employer. As software developers, our job is to improve the system so it nets more value.

We can analyze a system as a set of interrelated subsystems. In a software company, the subsystems of interest might include:

- Departments
- Teams
- Employees
- Office buildings
- Vendors
- Users
- Users' computers
- Codebases
- Files
- Servers
- Virtual machines

The first thing you probably notice about this list is how heterogeneous and all-encompassing it is. People, machines, and abstract ideas are all included.

The second thing you might notice is that subsystems contain subsystems of their own, and that the hierarchy is not a tree (where each subsystem belongs to exactly one parent system), but a [**semilattice**](reference/Semilattice.html) or <a title="directed acyclic graph" href="reference/DAG.html">DAG</a>. For example, a team might consist of people from multiple departments, and a server might run code from multiple codebases.

The system hangs together because its subsystems interact. The interactions between parts of a system take many forms. The kind of interaction that software can directly affect is **information flow**. All software does, really, is route torrents of information from one place to another, swirling, splitting, and joining it along the way.

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

### Forces Acting on Code

Good code is **correct**, **efficient**, **verifiable**, **portable**, and **instructive**. Each of these virtues can be viewed as a force that pushes the centers in the code toward particular shapes and arrangements.

#### Correctness

Correct code does what its programmer intended, and nothing else. Code can only be as correct as its programmer's intentions are clear. Muddled intentions invariably produce buggy code.

#### Efficient

Code is more efficient when it takes less time to run and uses fewer scarce resources (e.g. memory, file handles).

#### Verifiable

Code is verifiable when you can tell whether it is correct or incorrect. Verifiability breaks down into several sub-virtues:

- static verifiability
  - readability
  - type safety
  - lint
- dynamic verifiability
  - testability
  - observability

#### Portable

Code is portable when it can be carried forward into new contexts.

Portability may either mean:

- the code can be reused as-is in new contexts, or to solve new problems.
- maintenance of the code does not require big or invasive changes.

#### Instructive

Good code looks "pretty much like what you'd expect" (according to Ward Cunningham). But in my experience, the best code teaches you something new about how to solve a problem.

"Pretty much like what you'd expect" is a low bar—at least, it is when I'm the person doing the expecting. When I am looking at code I've never seen before, which solves a problem I've never had to solve, I often don't have a clear idea of what I expect to see. It's great if the code names variables and functions after concepts I'm familiar with, but again—that's a low bar.

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

If you can't see wholeness, you're doomed to thrash between micro-optimizations as you focus first on one force and then on another.

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

## Trust

Most people (rightly) do not trust programmers. If a programmer says something will take two days, it will actually take two weeks. Once the programmer says it's "done", it will still have multiple bugs.

If you want to improve the system you're in, you need autonomy. To get autonomy, you must earn people's trust. The simplest way to earn trust as a programmer is to do good work. (Doing good work _and hitting your estimates_ is harder; in general you should try to reframe conversations about estimates so you are not held to a date that turns out to be unrealistic.)

## Incremental Change

We have to change software incrementally for two reasons, one technical and one human.

- A technical reason: changes to the system generate new forces which have to be accounted for. These forces are very difficult to predict in advance, so it's prohibitively expensive to plan for them. It's much cheaper and easier to use the software itself as a laboratory to find out what will happen when we change it.
- A human reason: incremental changes let us show steady progress, which helps build trust.

Incremental change != continuous release!

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

## Further Reading

