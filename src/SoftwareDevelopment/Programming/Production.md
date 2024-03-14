# View: Programming as Production

The "production" view says that programming is assembly-line work: the task of producing code.

<!--
- The "More" frame: no code means no software, some code means some software. So more code must mean more software.
-->

This view is accurate in a certain limited sense. It predicts that if no code gets written, there will be no software. And that's true! The production view of programming suffices to get us from zero to one—from no software to *some* software. But after that, it begins to cause problems. It beguiles us into believing several common myths about programming.

Specifically, the "programming is production" view leads us to believe:

- Myth: we can measure programmer productivity by counting lines of code.
- Myth: we can make a project go faster by adding more programmers (i.e. more workers to the assembly line). After all, 10 people can type more words per day than 5 people.
- Myth: if we delete code, that's a problem, since it means we're throwing away completed work.
- Myth: if we revisit and rework code, that's a problem, since it means we made a mistake in our work the first time.
- Myth: if we could automate the task of writing code, we could fire all the programmers and make tons of money!

These myths impair the effectiveness of software teams that act as if they're true. If you make decisions based on the flawed model of the world they suggest, you'll get worse results than if you used a more accurate model. So let's debunk the myths.

## Can Programmer Productivity Be Measured in Lines of Code?

## Does Adding More Programmers to a Project Make It Go Faster?

## Is Deleting Code a Sin?

## Is Re-coding a Sign of Incompetence?

## Can Programming Be Automated?

The programmer's task used to be equated with that of punching holes in paper tape. In the 1940s, it seemed that "programming," so defined, was about to be automated. "Automatic programming" systems would punch the holes based on an abstract (assembly language) description of the algorithm, rendering human programmers obsolete. David Parnas describes this exciting vision of the future:

> All that one would have to do with [an] automatic programming system would be to write a code such as CLA, and the computer would automatically punch the proper holes in the tape. In this way, the programmer’s task would be performed automatically by the computer.
>
> —<cite>David Parnas, ["Software Aspects of Strategic Defense Systems"](https://web.stanford.edu/class/cs99r/readings/parnas1.pdf)</cite>

Common as the production view is, it doesn't account for a bunch of observations about programming.

If we see programming as producing code, then {{link TestDrivenDevelopment}} makes no sense. Writing automated tests in addition to production code means you have to write approximately twice as many lines to produce a given feature. GeePaw Hill calls this mistaken view the [lump of coding fallacy](https://www.geepawhill.org/2018/04/14/tdd-the-lump-of-coding-fallacy/).

View programming as producing features, and TDD starts to make more sense. Feature production is a more enlightened view of programming than code production (by which I mean, it helps us make better predictions) but it still has flaws—see {{link Programming/Repair}} for the counterpoint.
