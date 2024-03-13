# View: Programming as Figuring Things Out

Yet another view is that the main task of programming is figuring things out. That is, collecting information, making inferences and deductions, forming hypotheses, testing them, and summarizing the results in a way that someone else can understand.

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

> As developers, we're not paid for what we do. We're paid for what we _know how_ to do. Our limitation is how much we can know. You can tell, because we don't sit there typing all day, and most of what we type, we delete.
>
> —[[JessicaKerr]] (https://www.youtube.com/watch?v=10Foa_lulK4&t=1213s)

The other 98% is not idle time. It's where the real work happens. That 98% consists of:

- Figuring out how the software currently works
- Figuring out what it should do differently
- Figuring out how to make it do that
- Communicating what you've figured out to other people

All that _figuring out_ is what software developers are paid to do. The stuff that developers figure out constitutes their employer's software <abbr title="intellectual property">IP</abbr>. Their collective body of knowledge is a large part of what makes one software company more valuable than another. It's imperative, therefore, that developers pass on what they learn to others ({{link PairProgramming}}), so their knowledge isn't lost when they switch teams or companies.

_Figuring out_ doesn't happen entirely in your head. It's usually a dialogue between you and the machine. You read some code. You have an idea. You write some code. It doesn't work the way you thought it would. You figure out why it doesn't work, and you learn something. You try again and again until you get the results you expect.

This process might look inefficient, but inefficiency is relative. It's only inefficient if something else would be _more_ efficient. In general, typing is cheap, computers are fast, our brains are slow and limited (see: {{link SoftwareDevelopment/Humans}}), and coding mistakes are easy to undo as long as we catch them quickly. For all of these reasons, performing experiments in the codebase is often the fastest way to learn what will and won't work.
