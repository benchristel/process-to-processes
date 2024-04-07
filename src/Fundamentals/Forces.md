# View: Forces, Not Requirements

<div class="summary-block">

How do we deal with competing priorities and needs on a software project?

Where do the {{link Centers}} that appear in software come from?

</div>

- most software has few hard requirements
- "forces" expresses the squishiness of the constraints on software
- we often have to make tradeoffs between competing forces
- the best designs transcend tradeoffs

It's common to speak of software "requirements", as if our to-do list were set in
stone and absolutely everything on it must get done. But in reality, few software
products have such hard requirements. Usually, we are in a situation where some to-do items are more important
than others — {{link StackRankedPriorities}} — and time and money are limited. To avoid over-spending on less important
items, the members of a {{link BalancedTeam}} constantly renegotiate the {{link Team/Scope "scope"}} of the
project — see {{link Team/NegotiateScope "negotiating scope"}}.

Therefore, it is useful to think of software as being shaped by **forces** instead of "requirements". A force is a soft
constraint that pushes the {{link SoftwareSystem system}} to develop in a certain
direction. Not all forces are equally strong—they have a magnitude. Forces can push in the same direction and add together,
or they can oppose each other and cancel out.

A system changes as long the forces within it do not sum to zero. If the forces sum to zero, the system will remain in a steady state. Any stable structures that emerge in a system are there because they effectively balance the local forces currently acting on them.

Examples of forces:

- "It would be really nice to wrap up Project A in two months—otherwise, we won't have enough
  programmers to staff Project B as soon as the client is ready to start."
- "Our website needs to work on old smartphones."
- "This app would feel a lot nicer to use if it didn't take so long to load."
- "It shouldn't be possible for a user to get these form fields into an inconsistent state."

Managers like to set targets, deadlines, and thresholds for things, so they can declare unambiguous success or unambiguous failure. I'm not going to claim that drawing a line in the sand has no value,
but it's not as essential to the healthy functioning of an organization as some people think it is. Metrics and targets *come from somewhere*, and they're not handed down on stone tablets.
Where do they come from? They come from us. Our qualitative assessments of the system state, and our desire for things
to be different. Instead of pushing ourselves to hit arbitrary, artificial targets (which often incentivize bad behavior—{{link GoodhartsLaw}}) we can continuously ask ourselves "do we still care about improving this?" If the answer is "no", we stop doing the thing.

(_because really, that's what we're doing anyway. Goalposts often get moved. The reason goalposts move is that the person in charge of setting the goal realizes that movement in the direction of the goal is no longer the highest priority._)

Say we're working on improving the performance of our software. If we don't have metrics or targets, how do we know when to stop? Easy: we stop when we no longer feel a net force pushing us to change. We stop
when the cost of further action outweighs the benefit.

## Example: URLs of Pages In This Book

Forces:

1. I want to be able to easily add, rename, and reorganize chapters
2. I want to be able to easily link between chapters
3. I don't want those links to break
4. I don't want to have to write a huge amount of custom code to make linking work
5. I want my URLs to be short, human-readable, pronounceable, and memorable, for a whole host of reasons.
6. Readers might want the ability to permalink to a page within the book — e.g. to bookmark a page, or link from their own website to a page.
7. Readers might be using assistive technology like screen readers, or web browsers that differ from mine in ways that are hard to predict. To make sure the links work for them, I should use standard HTML `<a>` elements, rather than doing something fancy with JavaScript.
8. When I'm editing the book, I want to be able to find the file I want to change.

- I could create stable URLs by assigning each page a unique, random ID that never changes. This would satisfy forces 1, 3, 6, and 7. Editing would be a pain (8) because all my files would have meaningless names. Creating links between files (2) would be annoying for the same reason. I could of course write more code, in the form of specialized tools, to work around these problems (4), but I'd like to avoid that.

I guessed that (6) wasn't much of a concern because, at least early on in the writing of the book, few people would link to it, and even fewer would link to specific pages. (Later, analytics data bore this out—all traffic was coming from my newsletter or search engines. Note however, that I had to take a risk and choose a URL format before I could collect any analytics data!)

(TODO: write about the link macro in mdsite)

In summary, the process of making even this very simple decision was, by necessity, intuition-driven, risk-laden, context-dependent, and iterative. I could and did look at other websites to see how they solved this problem, but there was no single "best practice" I could unthinkingly adopt.

## Forces Acting on Code

Good code is **correct**, **efficient**, **verifiable**, **portable**, and **instructive**. Each of these virtues can be viewed as a force that pushes the centers in the code toward particular shapes and arrangements.

### Correct

Correct code does what its programmer intended, and nothing else. Code can only be as correct as its programmer's intentions are clear. Muddled intentions invariably produce buggy code.

### Efficient

Code is more efficient when it takes less time to run and uses fewer scarce resources (e.g. memory, file handles, network bandwidth).

### Verifiable

Code is verifiable when you can tell whether it is correct or incorrect. Verifiability breaks down into several sub-virtues:

- static verifiability
  - readability
  - type safety
  - lint
- dynamic verifiability
  - testability
  - observability

### Portable

Code is portable when it can be carried forward into new contexts.

Portability may either mean:

- the code can be reused as-is in new contexts, or to solve new problems.
- maintenance of the code does not require big or invasive changes.

### Instructive

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

## Further Reading

- ["Change Pro-Tip: Lining Up The Betters"](https://www.geepawhill.org/2019/05/15/change-pro-tip-lining-up-the-betters/) – GeePaw Hill on mutual benefit