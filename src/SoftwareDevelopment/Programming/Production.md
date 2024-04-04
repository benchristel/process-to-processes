# View: Programming as Production

The "production" view positions *typing code* as the central, defining activity of programming.

Typing is the *sine qua non* of software development: if no code is written, software ain't gonna happen.
But it's misguided to *equate* programming with typing. There's a lot more to it than that.

Here's a simple thought experiment: estimate the number of programmer-hours that went into the codebase you work on.
Now count the lines of code, with a command like `find src -type f | xargs wc -l`. How long would it take you
to type that many lines? You're almost certain to conclude that only a single-digit percentage of your team's programming
time was spent typing the code that exists in your codebase today.

In upcoming chapters, we'll investigate where the rest of the time goes. For now, note that programming is mostly *not* a matter of typing out the "finished" product.

Even if we consciously reject the production view on intellectual grounds, it remains embedded in our industry's collective
subconcious. It's constantly slipping into our thoughts and our speech. Any time someone argues that writing tests
takes too long to be worth it, or that extensive upfront planning will help us do less "work" (i.e. typing), or that we can hit
a looming deadline by adding more programmers to the project, the production view is lurking just below the surface.

Here are seven common myths about software development that spring from the production view:

- **Myth 1:** we can measure programmer productivity by counting lines of code.
- **Myth 2:** more code = more features = more value. As long as mountains of useful code are piling up, the project is going well.
- **Myth 3:** we can make a project go faster by adding more programmers. After all, 10 people can type more words per day than 5 people.
- **Myth 4:** coding is the bulk of the work in programming; therefore it's important to make detailed plans up front, in order to minimize the time spent coding.
- **Myth 5:** deleting code is bad, because it means throwing away completed work.
- **Myth 6:** reworking code is bad, because it means we made a mistake the first time around.
- **Myth 7:** if coding could be automated, software companies could fire all the programmers and save tons of money!

The most pernicious thing about these myths is that there's a grain of truth in each one. That makes them difficult to reject completely.
For example, myth 6 seems to echo the received wisdom that we should design code to minimize the size and spread of future changes to it. In itself, this advice isn't bad, but if we see it from the production view, we're likely to misinterpret it. The reason we want to minimize code change is *not* so we can spend less time typing, as the production view would have us believe.

Therefore, rather than try to debunk these myths, I will present alternative views of programming in the chapters that follow. It's only by using *all* the views that we can build a comprehensive mental model of what programming is.

## Progress and Momentum

Framing programming as production can feel good. When we measure our accomplishments in terms of tickets closed, lines of code written, or commits to version control, we can look back at our history of activity and feel like we've _done_ something. That feeling of accomplishment gives us energy to do the next thing.
