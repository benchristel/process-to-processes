# Trustworthiness

A system is **trustworthy** if it gives us a rational basis for believing in its correctness. Code can have several properties that make it more trustworthy:

{{toc}}

True trust requires caution. That is, trust implies the possibility of distrust.

If someone emails you out of the blue and offers you ten million dollars in exchange for a small favor, you probably won't trust them—even though, in the best case scenario, you stand to gain ten million bucks. To assess the trustworthiness of a system, we have to consider not only what might go right but also what might go wrong. This principle applies to code as well as spam emails.

I often read buggy code where it's clear that the programmer did not consider what might go wrong—because if they had, they would have spotted and removed the bug.

The ability to spot bugs is not an innate skill and cannot be gained by simply willing yourself to do better. One effective way to learn to spot bugs is to become an expert tester.

## Do we need trustworthy code?

If we don't trust our code, we'll be afraid to release it. That fear manifests in many ways—among them, a demand for lengthy QA passes. That has both a monetary cost (paying QA testers) and an opportunity cost (delaying revenue from the new software).

I sometimes see programmers take the attitude that they don't need to be good at finding bugs because QA will do it. And they may be right—but I'd ask whether long QA cycles are really the most cost-effective way to ensure a high-quality release.

Manual testing, including QA, is great for finding problems with the software's user interface or its support for various platforms. "The UI doesn't adapt to mobile screen sizes." "I can't paste into this input box on Android." "There's a rendering glitch on Safari." "This button is inaccessible for keyboard-only users." These types of bugs are difficult to catch with automated tests, and hard to spot by reading the code—because at the code level, these problems are usually caused by the programmer leaving out some necessary complication.

QA is _not_ a cost-effective way of finding problems with the application's internal logic. The programmers who write the code ought to be in the best position to spot and correct those problems. Very often, the problems can be reproduced in a unit test to ensure that once fixed, they never return.

If an organization relies on QA to catch logic errors, 

In most industries, UI glitches are not showstoppers. They almost never cause data corruption or incorrect behavior, and there's usually a workaround.