# Verifiability

A system is **verifiable** if it gives us a rational basis for believing that it [does what its author intended](../correctness). Good code has several properties that make it more verifiable:

{{toc}}

Clarity is perhaps the most powerful and general of these. Clarity makes it possible for programmers to debug code by reading it. To be sure, testing and typechecking are important, but the ability to read and understand the code is often worth a hundred tests[<sup>1</sup>](#cohen2006).

Ideally, we have a set of automatic checks—tests, linters, and typecheckers, for example—that we can run to verify our code. When verification is quick, thorough, and automatic, we can do it frequently as we make changes to the software. The more often we verify, the less investigation and debugging we have to do if verification catches a problem.

Even on small, personal projects, infrequent verification leads to pain. I can recall many times when, after changing hundreds of lines of code in one spurt of in-the-zone programming, I've discovered that my software no longer works. Where's the problem? I have to hunt through all my changes to find it. Perhaps you've had similar experiences.

But what if you had a magic lightbulb at your desk that flashed the moment you introduced a bug? Debugging would be no problem. Whenever the light flashed, you'd just hit "undo", perhaps after looking over the change you'd just made, to understand why it was wrong. This is the power of rapid verification.

The frequency and speed of verification become even more important when multiple people are working on the software, because changes pile up faster, and different programmers' changes can conflict with each other. _Continuous integration_ is a set of techniques that enable frequent verification for team projects.

<!--
## Do we need trustworthy code?

If we don't trust our code, we'll be afraid to release it. That fear manifests in many ways—among them, a demand for lengthy QA passes. That has both a monetary cost (paying QA testers) and an opportunity cost (delaying revenue from the new software).

I sometimes see programmers take the attitude that they don't need to be good at finding bugs because QA will do it. And they may be right—but I'd ask whether long QA cycles are really the most cost-effective way to ensure a high-quality release.

Manual testing, including QA, is great for finding problems with the software's user interface or its support for various platforms. "The UI doesn't adapt to mobile screen sizes." "I can't paste into this input box on Android." "There's a rendering glitch on Safari." "This button is inaccessible for keyboard-only users." These types of bugs are difficult to catch with automated tests, and hard to spot by reading the code—because at the code level, these problems are usually caused by the programmer leaving out some necessary complication.

QA is _not_ a cost-effective way of finding problems with the application's internal logic. The programmers who write the code ought to be in the best position to spot and correct those problems. Very often, the problems can be reproduced in a unit test to ensure that once fixed, they never return.

If an organization relies on QA to catch logic errors, 

In most industries, UI glitches are not showstoppers. They almost never cause data corruption or incorrect behavior, and there's usually a workaround.
-->

<a name="cohen2006">1:</a> See Jason Cohen's _Best Kept Secrets of Peer Code Review_ (2006). An hour of reading the code finds more bugs than an hour of testing, though there are diminishing returns.