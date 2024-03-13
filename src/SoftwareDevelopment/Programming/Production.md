# View: Programming as Production

- The "More" frame: no code means no software, some code means some software. So more code must mean more software.

The production view of programming gets us from zero to one—from no software to *some* software. But it gives us a misleading view of what differentiates an effective programmer from an ineffective one. It beguiles us into thinking that we can measure programmer productivity by counting lines of code.

The programmer's task used to be equated with that of punching holes in paper tape. In the 1940s, it seemed that "programming," so defined, was about to be automated. "Automatic programming" systems would punch the holes based on an abstract (assembly language) description of the algorithm, rendering human programmers obsolete. David Parnas describes this exciting vision of the future:

> All that one would have to do with [an] automatic programming system would be to write a code such as CLA, and the computer would automatically punch the proper holes in the tape. In this way, the programmer’s task would be performed automatically by the computer.
>
> —<cite>David Parnas, ["Software Aspects of Strategic Defense Systems"](https://web.stanford.edu/class/cs99r/readings/parnas1.pdf)</cite>

Common as the production view is, it doesn't account for a bunch of observations about programming.

If we see programming as producing code, then {{link TestDrivenDevelopment}} makes no sense. Writing automated tests in addition to production code means you have to write approximately twice as many lines to produce a given feature. GeePaw Hill calls this mistaken view the [lump of coding fallacy](https://www.geepawhill.org/2018/04/14/tdd-the-lump-of-coding-fallacy/).

View programming as producing features, and TDD starts to make more sense. Feature production is a more enlightened view of programming than code production (by which I mean, it helps us make better predictions) but it still has flaws—see {{link Programming/Repair}} for the counterpoint.
