A tool for communicating between engineering and "the business"
An artifact that embodies a specific culture and way of working that emerged from Extreme Programming (2001) and flourished at Pivotal Labs between about 2008 and 2020

Extreme Programming promotes tight collaboration between users, programmers, and business stakeholders.  Tracker enables that collaboration. The goal is to build products that address the users' most important needs ASAP, and can be sustainably developed for a long time afterward.

What's the benefit of the Tracker way?
- building the right thing
- gives business visibility into progress without sacrificing team autonomy
- efficient planning that actually works (details later)
- forecasts answers to the question "when will feature X be ready to release" so you can answer such questions immediately on demand
- lets you easily explore hypotheticals ("what if we added two engineers to the team?" "what if we deprioritized this feature?") and see the effects on the release date
- Tracker can be the source of truth for all project-related communication
	- we didn't use slack or email
- fun, joy, enthusiasm

## The model: one queue, many cash registers

One backlog, many developer workstations

## How does work get into the backlog?

PMs put work items into the backlog in priority order, and when a dev finishes their current task, they take the top item off the backlog and work on it. PMs can re-order the backlog at their discretion. This ensures that the most important thing is always getting worked on, everyone has something to do, and there is no confusion about what to do next.

## What do work items look like?

- User stories
- Bugs
- Chores

### User Stories

Waterfall software development means we learn everything about our domain, then plan the whole project, build it, and test it, and finally release it to users who don't care anymore because the stuff we learned at the beginning of the process is now five years out of date.

Extreme Programming says we should instead plan a little, build a little, test a little, release a little, and do it again and again. That way we can address the most urgent needs right away, get feedback on our work, and course-correct for the next little piece we build.

A user story describes an increment of software functionality in a funny, oblique way. A user story is a little narrative about what a person will be able to do with the software once we've built the next piece of functionality. It usually starts like this:

As an X, I want to Y, so that I can Z

The twitter account @shituserstory has many bad examples of this. This is actually useful, because by looking at the bad examples we learn why they're bad and thus how to write good stories.

Y is a one-sentence description of a feature, and Z should be an actual goal or need that the user actually has. If you can't think of a Z, then that is an indication that whatever feature you're imagining should not be built.

#### Personas

The X in a user story can be a role "teacher", "learner", "district administrator", "content author", "donor" etc. But it's better if X is a _user persona_, which fleshes out the role with a bit of lively detail. A role may have many personas for different types of users.

TODO details and examples

#### Acceptance Criteria

Gherkin: GIVEN, WHEN, THEN
Like a test plan (arrange, act, assert) that we write before starting to build. In combination with the design mockups, it tells us exactly how the feature should work.

GIVEN examples:
- GIVEN I am logged in
- GIVEN I am on the /foo/bar/baz page
- GIVEN I am an admin
- GIVEN I have received an invite link to a class

WHEN examples:
- WHEN I enter a description and click the "submit" button
- WHEN I hit ctrl+R to refresh the page

THEN examples:
- THEN I arrive at the /baz/kludge page
- THEN I receive an email with the subject line "...."

Advantages: QE knows where to start testing. Everyone agrees on what needs to be built before devs start work. Thinking through the scenarios gives devs more of the information they need to estimate the difficulty of the work.

#### Estimates

Story points: measure relative "size" of the work: complexity, effort, risk. Where does it fall on the continuum from trivial to scary? How does it compare to other stories in the project? To avoid nitpicking about the estimates, we force all estimates to be approximate. Even if the biggest stories are 20 times the size of the smallest stories, we don't use all values from 1 to 20. We might use an exponential scale (1, 2, 4, 8, 16 or 1, 3, 9) the Fibonacci series (1, 2, 3, 5, 8) or alternate Fibonacci numbers (1, 3, 8). One of my former coworkers prefers "t-shirt sizes" S M L that simply get mapped to 1, 2, and 3 points.

Rationale: engineers are bad at estimating time, but less bad at estimating relative complexity. Time estimates get reinterpreted as commitments. Story points soften those effects by adding a layer of abstraction. You can still get good time estimates for the whole project by looking at velocity, which is how many story points the team gets done on average each week.

Some people say `#NoEstimates` are the best estimates. Over time, the average size of a story stays pretty constant. Variability in the size of stories gets smoothed out by averaging over a long project. The data shows that simply counting stories gets you forecasts that are just as accurate as using story points or time estimates.

However, that doesn't solve the problem of needing shorter-term estimates. Often the PM needs to answer a question like "will this feature be ready this week or next week". Story point estimates and velocity strike a good balance.

Moreover, the activity of estimation itself is valuable. Coming up with an estimates forces the devs to have a conversation about what's involved in implementing the story. The conversation can reveal risks or possible shortcuts that both affect the estimate and give the devs a better picture of what's ahead.

#### But really, a story is a placeholder for a conversation

Common complaint: "it's a waste of time to write all that stuff out". "we already know what we need to do"
Yes, it often is. You don't have to fill it all in ahead of time. But knowing how a fully-fleshed-out user story should look is helpful for the times when you do need to communicate very clearly, or record the outcome of a conversation.

#### Creating Stories

- user research (gradient)
- personas
- stories
	- "Sally buys a toothbrush"
	- "Jay the PM creates a user story in the backlog"
	- "Jay the PM adds a description to a user story"
	- "Melanie the programmer starts a user story"
	- "as an X, I want to Y, so that Z"
		- "the Connextra template"
- ux design
- ui design
- acceptance criteria
	- given, when, then (Gherkin)
- estimation
- engineering feedback (gradient)

### Chores

User stories start and end with the user. They don't concern themselves with implementation. What about engineering-centric work (like refactoring, creating a release branch, or rotating credentials)?

Tracker represents this work as backlog items called "chores". While the PM gets to decide what order stories go in, based on how important they are and how much they'll cost to implement, engineers decide when to do chores. The shared goal of the team is to keep velocity high, but sustainable. Engineers are responsible for keeping their work unblocked by making internal technical improvements. This requires trust.

Chores are not supposed to be for day-to-day work like refactoring code you just wrote, cleaning up existing code in preparation for writing a new feature, or writing tests. Those activities are an integral part of development, and we account for them in the estimates for each user story.

Chores are also not supposed to be months-long or even week-long projects to overhaul the system. Tracker's model of project management does not easily account for such disruptions. It should be possible to proceed with any migration or rewrite piecemeal, so the product is always in a shippable state. A consequence of this attitude is that ambitious migrations tended not to get finished at Pivotal. Rewrites would lose steam, and parts of the old system would hang around for a long time.

In theory, teams who take this approach should structure their software so that there are no non-local effects of deprecated code hanging around. That way, you can rewrite parts of the system as you need to work on them, without jeopardizing the project's sustainability. In practice, this may not always be possible.

#### Chores don't get estimates
Chores are unplanned work that emerges in the course of doing the planned work. Story points and velocity are supposed to give us forecasts; that is, help us answer the question "when will feature X be ready" for any X. If we gave chores story point estimates and added them into our velocity, that would jeopardize our forecasts' accuracy.

The theory behind this starts from a few assumptions: First, chores are "discovered" (that is, added to the backlog) at a more or less constant rate throughout the lifetime of a project. Second, chores take time to do. Third, the more time we spend on chores, the less we have to spend on user stories.

Now let's imagine we give chores story point estimates. In the first week, the team does 7 points of user stories and 3 points of chores. Great! Their velocity is 10. There are 100 story points left before the big launch. So the product will launch in 10 weeks.

Except it won't, because the backlog only contains the user stories we've planned out. It doesn't contain any chores—we'll only discover those as we do the work. And on average, we expect 3 points of chores to get added to the backlog every week (judging by our admittedly very limited historical data). That means we're only going to get through 7 points of user stories every week on average, so it will be about 15 weeks before we can launch. That's a 50% difference! That is not small!

If we don't give chores points, then the velocity is 7 and our forecasts are more accurate.

Why not give chores estimates, but just subtract those "chore points" from velocity? You could do that, and indeed nothing stops you from writing down estimates for chores, in the description field. But in practice, people don't do that, so they must not find chore estimates very valuable. Pivotal's philosophy is to not encourage people to do things that don't add any value.

#### Bugs

Tracker lets you create bug reports, just like every other issue-tracking software. They go in the backlog just like user stories and chores. Bugs don't have estimates, for the same reason chores don't: they're unplanned, emergent work. Our backlog isn't full of the bugs we plan to write in the future, so when we fix a bug that doesn't count toward our velocity down that backlog.

## How does work get out of the backlog?

- pairing!
	- no knowledge silos
	- shared ownership - anyone can work on anything
	- we can always work on the highest-priority items first

## Definition of "done"

Done means:
- we wrote the code
- it has automated tests
- the code communicates our understanding of the problem and its solution.
- the code is available for all engineers to build on
- it is deployed to a staging environment
- it passes the acceptance criteria as judged by QE or the PM
- it passes any other quality tests QE might do (exploratory testing for error cases, security, etc.)
Done does NOT mean:
- released to users. That is a business decision that can happen outside the team. The goal is to give the business stakeholders control by decoupling delivery of finished work from release.

- once a feature is deployed to a staging environment, devs mark it "delivered". The PM or their QE designee tests the feature and clicks "accept" if it looks good. If deficiencies are found, they click "reject", can leave a note describing the problem, and the story goes back to the top of the backlog.

Bugs also have a "delivered" state and require acceptance.

## Continuous Integration != Continuous Delivery != Continuous Deployment != Continuous Release

- "Integration": merge to `main` or `master` so all other engineers can build on my code
- "Delivery": make the latest `master` version that passes all automated tests available to internal stakeholders (e.g. on a staging environment)
- "Deployment": deploy to a production environment
- "Release": reveal new functionality to users

Many organizations conflate these, but they are different things.

## What's the point of all this?

- make sure high-value stuff gets worked on first
- have the right conversations at the right time
- deliberate, organized work, without undue bureaucracy
- dev utilization

- When will feature X be done?
- What features will make it into the next release?
- What would happen if....
	- we added more developers and velocity went up (caveat: it rarely does)
	- we delayed the release
	- we deprioritized features X, Y, and Z
- Is the team speeding up, slowing down, or keeping a sustainable pace?
- Is there a lot of toil that could possibly be automated (chores)?
- Are there quality issues (bugs)?


## Problems with Tracker

Relies on shared ownership (anyone can work on anything, people often switch between features or tracks of work, daily or at most weekly). We made that feasible by pair programming full-time. That was feasible because we all shared a schedule and a timezone.

- design is sort of sidelined - there's no state a story can be in where it's "in design". Either stories don't make it to the backlog until they are "design complete" (so designers can't use tracker to organize their work) or stories get added without designs and then designers have to use hacks to keep track of which things need design, are being designed, etc.
- in general, Tracker is sort of developer-chauvinist: it regards programming as the only work worthy of estimating, measuring, prioritizing.
- I don't know what the solution to this is!
	- have designer pair with devs on the highest priority thing?
		- problem: not enough designers
	- add a second backlog for design work?
		- problem: handoffs create pile-ups of work, delays in feedback
	- PM/design anarchy?
		- PMs and design can use a different tool (Miro?) to organize and communicate
- But competing products (Jira) don't really have an answer to this either