# Process to Processes

<span style="font-size: 130%;font-weight:500;font-style:italic">
A Guide to Empirical Software Development
</span>

A work in progress by [Ben Christel](https://github.com/benchristel)

NOTE: you can use the left and right arrow keys to navigate between pages of this book.
They do the same thing as the "Prev" and "Next" links.

This is an early early draft and I would love to get your feedback on it. Send it to <a href="mailto:benchristel@gmail.com">benchristel@gmail.com</a>.

---

## Table of Contents

{{toc --include-latent}}

<!--
### What is Software Development All About?

Software is a type of technology. The purpose of technology is to resolve mismatches between:
- human needs and abilities
- the environment

In other words, technology is supposed to help us live better, by making the system we inhabit a more hospitable and comfortable one.

Another way of looking at it is that technology augments human abilities so we can better cope with the challenges our environment throws at us.

However, technology is a double-edged sword. It often generates new problems even as it resolves old ones.

For example, in the last century, we humans have gotten very good at manipulating the environment to fulfill our basic physical needs more efficiently. Food, water, shelter, and medicine are now abundant in most of the developed world. However, these benefits have come at a cost: environmental catastrophe and pandemic mental illness.

It's easy to blame "technology" or "capitalism" for these problems, but that doesn't get us any closer to solving them. "Technology" encompasses everything humans do and think, so it's not going away anytime soon. And "capitalism" is really just the observation that when you have more power, you can do more stuff.

So here is my diagnosis of the actual problem:

- Our current view of ourselves and the world is incomplete, and the cause of the destruction we see around us.
- Our current ways of doing things are inefficient, error-prone, and more painful than they need to be.

What we need is better views and better techniques

-->

<!--
### Contents

The book begins with some essays that set the scene. I start with the big questions—like, "what is software development?"—and zoom in from there. The purpose of this section is to ensure that we have a shared vocabulary and similar mental models of what software development entails. Terms introduced in this section will be used and reused throughout the book.

The rest of the book consists of **views** and **patterns**.

**Views** are ways of looking at things. A mental model is constructed from a set of complementary views. Mental models are a crucial part of any scientific or technical work, because they are what enable us to predict the modeled system's behavior. Unfortunately, mental models are bound to one mind; they cannot be communicated, only built "on-site". So instead of trying to give you my model, I will give you views. Views are the plans and diagrams that will help you construct your own mental models of the software systems you encounter.

**Patterns** are templates for solving common problems. You may have heard of patterns in the context of object-oriented design. But the concept of a pattern is much broader than that. The patterns in this book deal with problems large and small, technical and human. Most of the canonical OO design patterns are not covered here.

The views and patterns are presented in "smallest to largest" order. We'll start with tiny details of coding style and work our way up to software architecture, user experience design, and team dynamics. The reason for this presentation is practical: if you're trying to improve any situation, technical or human, it is most effective to start with the simplest and least dependent elements. It's always tempting to go the other way and tackle the biggest, most urgent problem first, but that's like trying to build a house on a foundation of quicksand. Get the foundations right; then everything else will fall naturally into place.
-->
## What is Software Development?

### View: A process, not a project

Abandon the illusion that your software will at some point be "done". Software is never finished, it's only adequate or inadequate for the needs of its users. As needs change over time (shaped by the software itself, among other things) adequate software becomes inadequate and must continue to evolve.

A software system is a living system, in the sense that it is made of self-sustaining causal loops. It is also mortal. Its self-sustaining mechanisms can get bricked / die. A healthy system is one that tends toward self-sustenance; an unhealthy one tends toward death.

## Process to Processes

The title of this book refers to the two kinds of process that bookend software development. On one end, we have the _development process_ that people go through as they learn about the system, make changes, and observe the results. On the other end, we have the _computational processes_ that run on computers—the things that are listed by the `ps` command on Unix systems.

<!--

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
-->

## Forces

Where do centers come from? Centers are shaped by **forces**.

The forces acting on a center push it to develop in a certain direction, or constrain it to have certain properties. For example, the forces acting on a piece of code might push it toward being correct, performant, and maintainable.

### Forces Acting on Code

Good code is **correct**, **efficient**, **verifiable**, **portable**, and **instructive**. Each of these virtues can be viewed as a force that pushes the centers in the code toward particular shapes and arrangements.

#### Correct

Correct code does what its programmer intended, and nothing else. Code can only be as correct as its programmer's intentions are clear. Muddled intentions invariably produce buggy code.

#### Efficient

Code is more efficient when it takes less time to run and uses fewer scarce resources (e.g. memory, file handles, network bandwidth).

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

But sometimes, I see code and have an "aha!" moment. The code is so lucid, so clear and simple, that it has communicated something new to me and I now understand both the problem and its solution more clearly.

For example, this regex for matching C strings taught me how to think about parsing escape sequences like `\n`:

```js
// A string consists of:
// - a double-quote character
// - any number of "units", where a unit is either:
//   - an escape sequence: a backslash followed by any
//     character
//   - a literal character other than a backslash, quote, or
//     newline
// - a closing double-quote.
const cString = /"(\\.|[^\\"\n])*"/
```

<!--
## Patterns

A **pattern** is a local arrangement of centers that solves some design problem. A *pattern class* consists of the following parts:

- A *trigger*—a situation that makes you go "aha! Pattern X might apply here."
- A *design move*. You can think of this as a function that transforms a system *S* that does not have the pattern into a system *S&prime;* that does.
- An *evaluator*—a function that tells you whether *S&prime;* is an improvement on *S*.

In this book, we will focus on a single evaluator: *wholeness*.
-->

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

### Related Patterns

- <pattern>O(1) tooling</pattern>
- <pattern>400ms feedback loop</pattern>
