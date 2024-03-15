# View: Programming as Production

The "production" view says that programming is assembly-line work, and that a programmer's job is to produce code. It's a common enough view, especially among managers, who have reasons to wish it were true. Unfortunately, as we'll soon see, it is deeply flawed.

<!--
- The "More" frame: no code means no software, some code means some software. So more code must mean more software.
-->

First, however, let's look at the strengths of the production view—because it *is* accurate in a certain limited sense. The production view predicts that if no code gets written, there will be no software. And that's true! Thus, it suffices to get us from zero to one—from no software to *some* software. But after that, it begins to cause problems. It beguiles us into believing several common myths about programming.

Specifically, the "programming is production" view leads us to believe:

- **Myth 1:** we can measure programmer productivity by counting lines of code (or, less perniciously, features completed).
- **Myth 2:** more code = more features = more value. As long as mountains of useful code are piling up, the project is going well.
- **Myth 3:** we can make a project go faster by adding more programmers (i.e. more workers to the assembly line). After all, 10 people can type more words per day than 5 people.
- **Myth 4:** coding is the bulk of the work in programming; therefore it's important to make detailed plans up front, in order to minimize the time spent coding.
- **Myth 5:** if we delete code, that's a problem, since it means we're throwing away completed work.
- **Myth 6:** if we revisit and rework code, that's a problem, since it means we made a mistake the first time around.
- **Myth 7:** if coding could be automated, software companies could fire all the programmers and save tons of money!

These myths have a grain of truth in them—as long as the following assumptions hold:

- Programmers are writing machine code, or a similarly low-level language.
- Each programmer works on an independent program or part of a program, and no coordination between programmers is necessary.
- Customers will purchase the software for an upfront lump sum. They will make purchasing decisions based on the list of features in the marketing brochure.

Suffice it to say that while these assumptions may have been valid in certain contexts in, say, the 1950s, the first two are almost never true today. The production view of programming is a relic of an earlier era. It is woefully inadequate to describe what goes on in modern software development.

When modern software teams act as if these myths are true, their effectiveness is impaired. So let's debunk the myths.

## Can Programmer Productivity Be Measured in Lines of Code?

## Does More Code Mean More Value?

If the code is never released to anyone, it has no value. The {{link TimeValueOfMoney}} implies that we should release new features as soon as they are ready.

Features are valuable not just because they are useful to someone today, but because they bring in information about how we might make the software even more useful tomorrow. By watching people use the software we've built, we learn things that are impossible to learn in any other way. It behooves us to get these insights as early as possible.

## Does Adding More Programmers to a Project Make It Go Faster?

## Is Deleting Code a Sin?

## Is Re-coding a Sign of Incompetence?

## Can Programming Be Automated?

The programmer's task used to be equated with that of punching holes in paper tape. In the 1940s, it seemed that "programming," so defined, was about to be automated. "Automatic programming" systems would punch the holes based on an abstract (assembly language) description of the algorithm, rendering human programmers obsolete. David Parnas describes this exciting vision of the future:

> All that one would have to do with [an] automatic programming system would be to write a code such as CLA, and the computer would automatically punch the proper holes in the tape. In this way, the programmer’s task would be performed automatically by the computer.
>
> —<cite>David Parnas, ["Software Aspects of Strategic Defense Systems"](https://web.stanford.edu/class/cs99r/readings/parnas1.pdf)</cite>

Parnas concludes that "automatic programming" has always meant "programming in a higher-level language than was previously available."

<!--

Common as the production view is, it doesn't account for a bunch of observations about programming.



If we see programming as producing code, then {{link TestDrivenDevelopment}} makes no sense. Writing automated tests in addition to production code means you have to write approximately twice as many lines to produce a given feature. GeePaw Hill calls this mistaken view the [lump of coding fallacy](https://www.geepawhill.org/2018/04/14/tdd-the-lump-of-coding-fallacy/).

View programming as producing features, and TDD starts to make more sense. Feature production is a more enlightened view of programming than code production (by which I mean, it helps us make better predictions) but it still has flaws—see {{link Programming/Repair}} for the counterpoint.

-->
