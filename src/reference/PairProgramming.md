## What is Pair Programming?

Pair programming (or simply "pairing") is a software development practice where two people sit at the same computer and solve a programming problem together. Pairing can happen virtually as well, using screen-sharing and video-conferencing tools.

## Why Pair?

In controlled studies, pairing has been shown to dramatically increase software quality and decrease cycle time (the time between when a feature starts being worked on and when it is released) for [a modest (~20%) increase in programmer-hours spent working on the code](https://collaboration.csc.ncsu.edu/laurie/Papers/XPSardinia.PDF).

In [one study of pair programming among undergraduates](https://collaboration.csc.ncsu.edu/laurie/Papers/ieeeSoftware.PDF), pairing decreased bug rates (measured by the number of test cases failed) by around 50%. A study of professional programmers found that pairing increased the readability of the code produced (as judged by a panel of reviewers) in addition to producing fewer bugs and more feature-complete programs.

One criticism that is often leveled at pair programming by people who have not read the literature is that it's obviously going to cost twice as much. This isn't true; though pairing does cost more in person-hours than soloing, the cost increase is not 100%; it's closer to 15% or 20%. Note that this means work gets done in about **40% less time** when two programmers pair on it.

However, the measurement of cost in these studies is somewhat simplistic because it doesn't take into account all the other costs that are reduced by pairing on real-world projects, but were not present in the experimental setups. These costs include:

- meetings
- task-switching
- interruptions
- code review
- documentation-writing
- redoing work that was rejected by QA or code reviewers
- reading poorly-designed code

The effect of pairing on these costs is difficult to measure. But even if it was zero, I'd personally gladly pay 20% more for a 50% reduction in bugs. This other stuff is just gravy!

### Pairing Minimizes Work in Flight

It is simply a mathematical reality that pairing means the team will be working on half as many things at once. This is a good thing. Work in flight is a liability. In the language of lean manufacturing, work in flight is _inventory_: it's stuff you've paid for but can't sell yet. More work in flight means more for the team to mentally juggle, and more risk of merge conflicts, interdependencies, and other sequencing issues. By having fewer things in flight, and getting each one done faster via pairing, you reduce risk and gain efficiency.

### Pairing Reduces Knowledge Silos

The default on many teams is that if a bug or issue comes up, the person who is most familiar with the relevant part of the code will work on it. This has some short-term advantages: the fix is likely to be made quickly and with high quality. However, doing this repeatedly builds _knowledge silos_, where all the knowledge about a particular part of the code resides in one person's head, and the responsibility for that code rests solely on them. If that person goes on vacation or leaves the company, work on that code stops. Knowledge silos thus jeopardize a team's ability to deliver value sustainably.

Pairing dismantles knowledge silos. If a particular area of the code needs to change, have the person who knows the most about it pair with someone who knows less. Be sure to tell them that knowledge-sharing is an explicit goal of this process (otherwise, they will fall into the "performance pairing" anti-pattern where the more knowledgeable person is always typing, and moving too fast for the other to keep up).


## Why _not_ pair?

[At least one study shows](https://www.researchgate.net/publication/258453106_Pair_Programming_Issues_and_Challenges) that pairing is less valuable if both people are familiar with the problem at hand. The more practice they have had with very similar problems, the less valuable pairing is. Pairing is not a good technique to apply to repetitive busywork. (It _is_ a good technique to use when figuring out how to automate away the busywork, though!)

Anecdotally, I have found that pairing doesn't work well for reading-heavy tasks like perusing documentation, since people have different reading speeds and there is no way to really collaborate on reading. It also doesn't work well for extremely open-ended problems that are best approached by doing a few experiments (e.g. to see what design will work best) before diving into implementation. In those cases, it makes sense for the pair to split up and each person to experiment on their own. Then the pair can reconvene and share the results of the experiments.

Pairing is both exhilarating and socially exhausting. Kent Beck, who popularized the practice of pair programming in his book _Extreme Programming Explained_, says he can only pair effectively for five or six hours a day. I suggest bookending one's day with solo tasks like reading emails and doing research, and pairing for several hours in the middle.

Pairing across timezones is tricky. You can only pair when both people are online. If the overlapping time window is small, both people will find themselves soloing for part of the day. In the next section I talk about some ways to mitigate the downsides of pairing across timezones.

## Prerequisites for pair programming

Managers should read this section. These are not hard prereqs, but they make pairing a lot easier. By ensuring that these patterns are present on your team _before_ people start pairing regularly, you will set them up for success.

<!--

### Focus on Work Items at Meetings

Process steps like planning and standup meetings should be organized around _the work to be done_ (i.e. the "stories" or "issues" or "tasks") rather than the people doing the work. That means, for example, that at standup the team should go over the work items that are in flight and talk about how to make progress on each one. Part of this discussion is deciding who should work on each item, and whether it should be a soloist or a pair.

### Schedule Standups in the Middle of Pairing Hours

This section applies only to teams that are distributed across timezones. In teams where everyone is collocated, it's usual for standup to be the first thing every day. During the standup meeting, people decide who will work on what, which usually entails switching pairing partners.

This doesn't work when people are distributed across timezones, because there is no "first thing every day". Everyone comes online at different times.

If I'm on the east coast of the US and my teammates are on the west coast, I start work 3 hours before they do—that is, 3 hours before standup. If I'm working on code for those three hours, it doesn't make sense for me to switch to another track of work at standup, because then there would be no one to bring the next person or pair up to speed on those 3 hours of work that I did. So I'm effectively forced to stick on that track of work until it's done. That might not be what's best for the team.

To enable freer [[PairRotation]] when people are in different timezones, schedule standup roughly in the middle of your shared pairing hours. That gives people time both before and after standup to share context on the work, so that when someone is left soloing at the beginning or end of their day, they are able to make progress. Of course, be mindful of when people want to take their lunch breaks too, and don't schedule standup during someone's lunch.

-->

### Evaluate Employees via Peer Feedback

Traditional measurements of employee performance disincentive pairing by focusing on the person's individual accomplishments, rather than their contributions toward the team's accomplishments. These performance metrics actually incentivize people to build knowledge silos, since the more unique knowledge a person has the more things they can do that no one else can, and the more the company will pay to keep them on board.

Performance evaluations should focus on the individual's skills, judgement, empathy, and ability to contribute toward the team's goals. The concept of individual "productivity"—how much work you get done—is not very meaningful in a pairing context. Productivity can only be measured at the team level.

This is fine, because on a team that pairs regularly:
- there is nowhere for laziness or incompetence to hide. There is intense social pressure to stay on task.
- as a result, no one slacks off (and if someone has built their career around slacking off, they often voluntarily exit the team).
- and as a result, it is obvious that any issues with the team's productivity are due to a lack of tools, skills, knowledge, or other resources, rather than some moral failing on the part of individual members.

This does wonders for team members' morale and growth mindset. The software industry is rife with imposter syndrome; we always think the next person is just inherently smarter or more driven than we are. Pairing shatters this illusion. If you're soloing and run into a problem, it's easy to think "I'm stupid and bad at my job". But if you're pairing and run into the same problem, it's a lot easier to see the problem as the result of external factors that you can change, rather than something intrinsically wrong with yourself. If _two_ people are confused by something, it's probably genuinely confusing!

As a result of all this, managers of teams that pair don't need to measure individual "productivity", because pairing forces this to a maximum (within the limits set by one's skills, knowledge, and judgement). The task for the manager then becomes to assess and improve team members' skills, knowledge, and judgement. This improvement will happen gradually through pairing anyway, but more focused interventions can provide a boost. For example, the most valuable feedback I ever got was from a manager who recommended that I read Sandi Metz's _Practical Object-Oriented Design in Ruby_ to become more effective in our object-oriented codebase. I later passed on that same feedback to another developer I paired with at a different company (and I bought the team a copy of the book with my pro-dev budget). After reading it, she thanked me profusely.

How, though, do managers figure out what a team member needs to improve? The technique that I've seen work is that they just ask. Feedback on a person's skills, judgement, and empathy can be collected from their peers, who have an intimate knowledge of these qualities from pairing, and an incentive to help them improve. Employees who see their manager as a trusted source of information on engineering practices and tools may also ask for help directly if they're struggling with a certain thing.

It can be tricky to collect honest feedback from a person's peers. Especially in a team that pairs, people form tight social bonds that make them unwilling to say anything that might jeopardize a teammate's career. Remind them that, as a former manager of mine liked to say, "it's not the feedback you get that matters, but what you do with it". If you get better at something in response to constructive feedback, that deserves recognition (like a raise). By giving someone constructive feedback, you're actually giving them an opportunity: if they become better at this thing, they get more money! It may also help to point out that _everyone_ has room for improvement and that giving constructive feedback does not mean that someone is doing a bad job in some objective sense. We're all climbing the slope of engineering expertise together, and no matter where we are we can climb higher: the mountain has no top, and no bottom either.

### Reassure the Skeptics

Some employees will balk at these new ways of measuring performance, because they've put a lot of effort into building a knowledge silo and it's how they measure their self-worth. They may also have the sense that "their" part of the code defines how they fit into the company: that _their job_ is to maintain this one part of the code, and without that one-to-one coupling it's not clear what their job even is anymore. They may not like the idea of other people coming into their part of the codebase and changing things. Their dislike of pairing may be tied to a deep-seated distrust of Agile and OOP and TDD and other such things, which is probably justified (senior engineers have likely worked in more than one company that tried to adopt these ideas and failed spectacularly). The first thing to realize here is that this is an emotionally fraught situation and purely rational arguments are not likely to convince the person that pairing is okay. A few different lines of discussion may help:

- You could appeal to their ego by pointing out that the rest of the team could better appreciate how great their code is if they paired on it. The other team members could probably learn a lot from them (don't overdo this though, as it can create unhealthy pairing dynamics).
- You could remind them that their _general_ programming and design skills have a lot more long-term value than their knowledge silo. No program lives forever (well, okay, `cat` will probably live forever, but their program probably isn't cat).
- You could point out that learning or doing things beyond the walls of their knowledge silo doesn't actually diminish their knowledge of the silo. It just means they can have a bigger impact on the whole product/company. Point out that their skills are underutilized currently and you completely trust that they will be effective in a higher-impact role.
- You could paint a picture of how great things will be when we're all pairing. A new problem to solve every day! The opportunity to mentor and learn from other engineers! The satisfaction of shipping code that you _know_ is correct!
- Explain how evaluations will work and tell them you're sure their performance will look just as good as it did with the old way of doing evaluations (but only say this if you really think it's true)

However, these arguments are only likely to work with people who are on the fence. Some engineers just don't value the things that pairing brings, and you can't easily change what people value. Above all, don't force them to pair; if you do, know that they will probably quit.

### Set the team up for success with good tools

The Google image search results for "pair programming" break my heart. Almost invariably, the images show two people seated at a computer with a SINGLE monitor, keyboard, and mouse. Usually one person is leaning in awkwardly from the side, craning their neck to see what's on the screen. Either that, or they're looming over their partner who's typing. Pairing like this is a truly horrible experience.

For in-person pairing to work well, each participant must have adequate personal space and be able to see and control what's on the screen. Switching between "driver" and "navigator" roles should require no physical handoff of the keyboard. The ideal setup is two mirrored monitors, two keyboards, and two mice.

In the post-COVID world, remote pairing has become the default way to pair. This removes the issue of personal space, but comes with its own pitfalls. While screensharing tools are ubiquitous, most of them unfortunately do not provide a way for the remote participant to control the host computer. If both participants are fluent in the technologies being used, screensharing without remote control is a (barely) acceptable way to pair. However, it's disastrous for junior-senior pairings. If the senior engineer is the one sharing their screen and typing, the junior engineer gets no opportunity to build the muscle memory that is so important for writing code. If the junior shares their screen, they often struggle to turn the senior's verbal suggestions into syntactically valid code, which frustrates both parties.

To do remote pairing effectively, you must use screensharing tools that allow both people to control the same computer via mouse and keyboard. In 2023, such tools include [Tuple](https://tuple.app/) ($30/mo as of August 2023) and [Pop](https://pop.com/) (free).

## Does Pairing Replace Code Review?

One of the commonly cited benefits of pair programming is that it removes the need for asynchronous code review, allowing work items to move more quickly through the development pipeline because there are fewer handoffs. But can pair programming really provide all the benefits of independent code reviews? In  _Best Kept Secrets of Peer Code Review_, Jason Cohen sums up the issue nicely:

> There's a controversial issue about whether pair-programming reviews are better, worse, or complementary to more standard reviews. The reviewing developer is deeply involved in the code, giving great thought to the issues and consequences arising from different implementations. On the one hand this gives the reviewer lots of inspection time and a deep insight into the problem at hand, so perhaps this means the review is more effective. On the other hand, this closeness is exactly what you don't want in a reviewer; just as no author can see all typos in his own writing, a reviewer too close to the code cannot step back and critique it from a fresh and unbiased position. Some people suggest using both techniques – pair-programming for the deep review and a follow-up standard review for fresh eyes. Although this takes a lot of developer time to implement, it would seem that this technique would find the greatest number of defects. We've never seen anyone do this in practice.

I concur with Cohen's assessment. I've been on one team that used both pairing and independent reviews, and the independent reviews found bugs that pairing didn't. I also think independent reviewers are in a better position to spot readability problems in the code. Paired programmers are, as Cohen points out, too close to the code to be able to assess its readability objectively.

### Process Review

Does this mean we should prefer independent code reviews over pairing? Not quite. Pairing has a major advantage over independent review when it comes to assessing quality: by pairing, we can review not only the _code_, but the _process_ by which the code was created.

This "process review" becomes important when using [[TestDrivenDevelopment]] and [[Refactoring]]. In these practices, the sequence of steps taken to produce the code matters, because knowing the sequence of steps gives you information about the resulting code that's very hard to gain any other way.

For example, if you watch someone perform a series of small refactorings, each one provably behavior-preserving, while running the tests continuously and keeping them passing, then you know that the resulting diff preserves behavior. But if all the refactorings are lumped into one commit and you're just reviewing the diff for that commit, it's very hard to see whether the change as a whole preserves behavior or not.

Similarly, if you watch someone test-drive code, you can be confident that the code is the simplest implementation of the behavior specified by the tests. But if you're just reviewing the end result, it's harder to be sure. You might have to do something like [[MutationTesting]] to figure out if the code can be simplified at all without failing a test.

In my experience, teams that pair tend to refactor a lot more than teams that only do async code review. Refactoring with async code review requires much more discipline: you have to go through the annoying rigamarole of creating a feature branch and opening a pull request, and if you want your reviewer to have a chance of finding mistakes you need to do each [[Refactoring]] in a separate commit so they can see the whole sequence of changes. I'd go so far as to say that async code reviews discourage refactoring.

Therefore, if you can afford to combine pair programming with traditional code review, I'd recommend doing so. You'll achieve the highest [[InternalSoftwareQuality]] and find the most bugs that way.
