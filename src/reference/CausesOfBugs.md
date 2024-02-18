Our job as programmers is to shape a software [[System]]'s [[Behavior]].

A [[Bug]] is an observed delta between the intended or expected behavior and the actual behavior.

One way of classifying bugs is by cause. The three main causes are **slips**, **misfeatures**, and **blunders**. These three causes produce bugs with different cost profiles.

| cause      | net cost to fix | tax on dev. | cure |
| ---------- | --------------- | ----------- | ---- |
| slip       | low             | medium      | pairing, code review, type checking, TDD, linters |
| misfeature | low             | low         | user research, user testing |
| blunder    | high            | high        | (unknown) |

## Slips

A _slip_ is a error in translating intent into code. For example, a very common slip is indexing into an array without handling the case where the index is out of bounds. Another is forgetting to `break` out of a `switch` statement in C-like languages. Slips can happen due to imperfect attention, forgetfulness, or tunnel vision. The mark of a slip is that once someone points it out, it is obvious.

To some extent, slips are unavoidable, but we have various techniques for catching them before they make it to production. Code reviews, pair programming, type checking, TDD, and linters each attack the problem from a different angle and are very effective when combined.

Slips caught before they're merged are usually trivial to fix. Finding a slip that makes it to production can be harder, because there is more code to debug, and because the symptoms of the slip can sometimes appear far from the cause (e.g. a null value may be passed through several units of code before it causes something to blow up). Many common types of slips (e.g. buffer overruns) can cause security issues and therefore the _net_ cost of fixing them is probably negative (since leaving them in the code can be disastrous).

Slips that are left in the code can slow down development. Programmers can mistake an existing slip for a regression in their code and thus waste time trying to debug it. Sometimes slips cause crashes or other problems that make manual testing harder. Since the cost of fixing a slip is low and the cost of leaving it in the code is nontrivial, it's wise to fix slips as soon as they're identified.

## Misfeatures

A _misfeature_ is an error in translating user needs into requirements or feature requests. The software team builds what they intend, but the software doesn't solve the user's problem.

Misfeatures can be expensive to fix since large chunks of the software might have to be rewritten; however, the value of fixing them usually offsets the cost. If a misfeature happens to be left in the code, it imposes no tax on development, since, all else equal, programmers can understand code that doesn't solve a real problem as well as code that does. Therefore, the decision to fix a misfeature or not can safely be made by the product manager or product owner (taking cost estimates from the dev team into account, as always).

## Blunders

A _blunder_ is a mistake made by guessing—making a decision and forging ahead without a solid understanding of the situation. This description may seem to imply carelessness, but not all blunders are careless. The usual thought process of a programmer committing a blunder goes like this:

- I have to implement this feature.
- I'm working in a 100,000-line codebase, of which I understand very little.
- I can't take the time to actually understand how it all works (and it might simply be beyond human comprehension).
- The change I've made seems to work for the cases I've tested (though I don't know what other features it might break, or what use cases it might fail to account for).
- I can hope that my reviewers (who understand the code better than I do) will catch any problems. 
- YOLO!

The "root causes" of blunders, therefore, are:

- Economic pressures: Programmers gotta get paid to eat to live. We have to ship in a limited amount of time, and we have to ship _this_ feature.
- Duct tape / Reductionism: previous programmers solved problems at the machine level, not at the semantic level. ("If I just add a variable here and store the previous result of X(Y(Z)) in it, it'll have the value I need to pass to Q when P happens"). This very quickly leads to fragile, incomprehensible code.
- The fog of war: library authors don't know all the needs of their clients. Clients don't know all of the library's behaviors. Programmers of a system don't know all of the users' needs.
- The programmers lack a coherent theory of the program, in the sense of [[ProgrammingAsTheoryBuilding]]

The user-facing problems caused by blunders are not necessarily worse than those caused by slips. However, blunders are a warning sign of two dangerous trends:

- The system has begun to escape the programmers' intellectual grasp
- There are economic pressures that prevent the programmers from regaining their grasp on the system

The trouble with blunders, compared to slips and misfeatures, is that while slips and misfeatures can be caught by creating and tightening feedback loops, blunders are often committed intentionally, as a strategic gamble, because there seems to be no better option. If a slip comes up in a retrospective, there are time-tested remedies the team can apply: more pairing, more rigorous testing, etc. Same with misfeatures: the team can commit to doing more user testing earlier in the process. But when the team realizes they've made a blunder, there is no clear path to prevent it from happening again. In retrospect, it seems that there was no feasible better option.

Blunders are often very hard to identify and fix, because by definition they happen in systems where the programmers don't really understand what the code is supposed to do. Often, when you see the symptom, you can't tell if the behavior is intentional or not. Similarly, when you look at blundered code, you can't tell if the code really needs to be that way or not.

Examples of blunders:

- When I needed to add a feature to a JS build pipeline (deploying to a non-root directory of the web server),
  I blindly copy-pasted webpack config from a stack overflow, hoping it would "just work" for my codebase. Webpack has a zillion
  config options—how could I understand them all? Luckily, I quickly discovered a case where the config didn't work, so I was able to
  revert my change. If the change had lived longer, future programmers might have been inclined to work around the problems it caused
  rather than revert it.
- Denormalized data has led to blunders—as different programmers use different facets of the data representation. Subtle inconsistencies in the data can lead to surprising behaviors.
- A very stateful, railroaded UX combined with data denormalization blunders led to users getting their accounts stuck in a mode they should not have been in.

Blunders impose a significant tax on development. Surprising behaviors lead to "did I break that?" moments when you're implementing a new feature. When it is not clear whether blundered code is intentional, [[ChestertonsFence]] comes into play: the safe thing to do is preserve the code exactly as it is, working around any problems it might cause with more code. This hampers refactoring and bloats the code, and thus makes it harder to evolve the codebase.

The implementation and use of libraries that don't conform to a well-defined specification (like JSON or HTTP) often lead to blunders. The library authors can't foresee all the situations in which their library will be used, so they guess at what it should do in certain cases. Library users don't have a comprehensive understanding of the library's behavior, so they guess that it will probably just work for their use case.

### Cures

Finding a cure for blunders is the subject of my current research (April 2022).

We might be able to directly counter the root causes listed above:

- Economic pressures: Reduce schedule pressure by continuously re-estimating and replanning ([[IterationPlanningMeeting]]).
- Duct tape: teach people how to program???
- The fog of war: insist on simple libraries, preferably ones that implement a well-known specification. Shun big, complicated
  tools with opaque, bespoke interfaces. Test and document library code you write clearly and thoroughly, revealing "implementation
  details" like platform dependencies where appropriate; if you can't do that, write a different library.
- Programming as theory building: Develop a pattern language with your team? Use it to describe your architecture.