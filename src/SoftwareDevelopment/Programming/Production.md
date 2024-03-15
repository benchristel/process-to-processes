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

You will get what you reward—this is {{link GoodhartsLaw}}. If programmers are given incentives to produce more code, they'll find a way to produce more code, whether that actually creates value for the business or not.

The idea that programming is mostly typing code is flatly contradicted by data from real projects. I was once on an ambitious project that tasked 80 programmers with rewriting half a million lines of code in a new programming language. Over the course of more than two years, we spent an estimated 8000 programmer-days on the project, ending up with about 700,000 lines of code in the new language. You might think that a rewrite project—simply translating from one programming language to another—would have a high proportion of time spent typing, yet 700,000 lines in 8,000 days works out to less than 90 lines per programmer-day. This equates to a typing speed of about 2 words per minute. Of course, we were not abysmally slow typists. Instead, this apparently slow "production" speed resulted from two causes:

- We spent only a small about of time each day with our fingers on the keys—maybe an hour, occasionally two. The rest of the time was spent reading code and communicating with coworkers.
- Much of what we typed did not end up in the codebase—because programming is {{link FiguringThingsOut}}.

> As developers, we’re not paid for what we do. We’re paid for what we know how to do. Our limitation is how much we can know. You can tell, because we don’t sit there typing all day, and most of what we type, we delete.
>
> —<cite>Jessica Kerr, ["Shaving the Golden Yak"](https://www.youtube.com/watch?v=10Foa_lulK4&t=1213s)</cite>

It is clear to everyone who studies it that programming productivity is not a matter of typing speed. There is something else going on when we program.

## Does More Code Mean More Value?

If the code is never released to anyone, it has no value. The {{link TimeValueOfMoney}} implies that we should release new features as soon as they are ready.

Features are valuable not just because they are useful to someone today, but because they bring in information about how we might make the software even more useful tomorrow. By watching people use the software we've built, we learn things that are impossible to learn in any other way. It behooves us to get these insights as early as possible.

## Does Adding More Programmers to a Project Make It Go Faster?

Software projects are not infinitely parallelizable. Usually the number of "tracks" of work that can proceed in parallel is quite small. Adding more programmers beyond this limit does nothing.

Moreover, programmers working in parallel need to coordinate their efforts to some degree. This leads to Brooks' Law: increasing communication overhead means that adding more programmers to a late project makes it later.

{{link PairProgramming}} provides a way to double the number of programmers on a project and finish it in ~60% of the time (TODO: source). However, a big part of the speedup comes not from increasing "productivity" in the sense of producing code, but from eliminating handoffs (e.g. for code review).

The bottleneck on programming is learning, not typing—{{link Programming/FiguringThingsOut}}. Ten people can't learn something faster than one person can.

## But What If We Plan Better?

It's tempting to try to overcome the finite parallelizability of software projects by planning all the coding work upfront. If only we had a perfect plan that detailed exactly what code needed to be written, we could dole out each module or file to a separate programmer and be done coding in record time!

Give up on this idea. A perfect plan for what to code _is_ code, in the sense of being just as formal and precise as the code that would run on a machine. And to the extent that the plan is _less_ formal than the code being planned, there is room for mistakes which would have to be fixed by the programmers—the very thing the plan purports to avoid. A plan has the additional disadvantage that you can't actually run it, test it, or debug it. Typecheckers and other formal tools do not work on it. A detailed plan thus has all the disadvantages of code, with none of the advantages.

Because of this, a detailed plan is unlikely to work as written. John Gall put it this way:

> A complex system designed from scratch never works, and cannot be patched up to make it work. You have to start over, beginning with a working simple system.
>
> —<cite>John Gall, _Systemantics_</cite>

Remember: typing code is not the bottleneck. So don't ask yourself "how can we minimize coding time," but rather "how can we make something valuable as quickly as possible?" The fastest way to get a perfect plan is to skip the detailed upfront planning and start experimenting with code. Get a simple system working—{{link WalkingSkeleton}}, {{link MakeItRunMakeItRight}}—and evolve from there.

As I once said to my teammates: "by the time we're done planning, the code will already be written!"

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
