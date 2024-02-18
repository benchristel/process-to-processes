```
STATUS: DRAFT
```

A memoir of Pivotal Software, and the culture of feedback and growth in particular.

> - Don't let "perfect" be the enemy of "good enough".
> - Don't let "good enough" be the enemy of "better all the time".
>
> —me

> You are good enough. I see you; and I say to you: you are good enough. Put that burden down.
>
> —Sandi Metz

[[PivotalLabs]], and, later, Pivotal Software, had a singularly intriguing culture. I think part of what is so intriguing about it was that its whole was more than the sum of its parts: complex, effective action emerged from the composition of simple values and practices. It was a gem of object-oriented design.

If I had to sum it up in two words, they would be "[[ExtremeProgramming]]". But really, Pivotal went far beyond the version of XP set out in Kent Beck's _Extreme Programming Explained_ (even the second edition!) in many dimensions. We pushed the XP practices beyond the limits of what Kent considered feasible, and formalized many practices (like hiring) that he'd glossed over.


## What was Pivotal's culture?

- XP
- do the right thing, do what works, be kind
- monthly 1:1s with managers
- managers ask for feedback on their reports in 1:1
- "matrix-ish" management. ICs were always managed by other engineers who spent part of their time on management duties. These in turn reported to directors. An engineer's manager usually wasn't on their team and never dictated what they worked on (that was the PM's job). 
- feedback app
- very specific culture expectations upfront (like, on the careers page)
  - hours are 9 to 6
  - no remote work
  - you don't get a laptop. it is physically impossible to take work home (for both security / client confidentiality and work/life balance reasons)
  - 100% pair programming
  - daily pair rotation. stories/tasks aren't assigned to people; they're assigned to the team, and the first pair to become idle when that story is at the top of the backlog is the pair who works on it.
  - PM writes user stories; engineers give them relative cost estimates; PM prioritizes them; engineers work on highest priority thing.

These constraints meant that there were certain behaviors that explicitly **did not** equate to career growth:

- working long hours (prevented by the 9-to-6 schedule and no-laptops policy)
- taking sole ownership of an important project or area of the code (prevented by pairing and daily pair rotation)
- cutting corners to deliver work faster (prevented by the social pressure of pairing and the company's explicit engineering values.) There was absolutely no reason to try to be the variety of "10x engineer" who writes mountains of crappy code and leaves the mess for others to clean up, because a) managers collected feedback from the whole team, so irresponsible behavior was impossible to hide, and b) your manager wasn't accountable for your output anyway, so there was no way to suck up to them by trying to appear more productive.

You might ask: with those avenues for promotion (and, indeed, the concept of promotion itself) eliminated, what's left? What does it mean for an engineer to grow in such an environment?

Most people I know who worked at Pivotal were there for the same reason. They were there because Pivotal had a reputation. Pivotal _knew how to build good software_. They knew how to do it with empathy and kindness. And, perhaps most fundamentally, they knew that empathy and kindness are inextricable from quality. Empathy for the user, and empathy for other engineers, are the direct precursors of software quality.

To be clear, Pivotal was not all fun and games, nor rose-tinted rainbows. It had its share of problems like any software company. Sometimes people were dismayed to find that the company they'd heard so many good things about made them feel excluded, stressed, and burned out. What matters here is not the reality of what Pivotal was, but the reputation it had, and the type of person that reputation attracted.

Because, I think, the majority of engineers who went to work for Pivotal, who were willing to put up with the rigid schedule, substandard perks, confidentiality requirements (which meant that even if you built a killer app for a world-famous company, you'd have no bragging rights), and lackluster pay, did so because _they wanted to become better engineers_. What "better" means in this context was obvious to all of them, although it's nearly impossible for me to explain. Yet if you have ever watched a true master of the guitar play, you've glimpsed it: their fingers barely move, yet incredible music comes out. Engineering has the same texture of mastery. The goal is not to be the strongest or the swiftest or even the cleverest, but the simplest. Like the master butcher of Zhuangzi's parable, who cuts the meat where it comes apart naturally and so never blunts his knife, the engineer's goal is to see the structure of the problem as it really is, and then simply lay the pieces side by side. To an observer it seems there is almost no need to cut; no need for a knife. The problem flakes apart under the gentlest effort like perfectly cooked fish.

How can such a thing be measured? How can it be incentivized? How can it be rewarded? How can it even be sought?

Perhaps the answer is that it can't be. But it _is_ possible to create the _preconditions_ for mastery, and to measure them, and to reward the people who help create them.

And when I say that people came to Pivotal to become better engineers, I am not just saying that they came to get better at writing code. The creation of the prerequisites for mastery is also an engineering problem, and to many Pivots it was at least as fascinating a problem as anything computer-related. Pivotal's culture was, in fact, designed and built by master engineers, who understood that the question of how to design software that is good for the business and good for its users is a scientific question, and that the problem of how to organize people to build such a design is an engineering problem—one whose successful solution depends, crucially, on recognizing that people cannot be made to act like machines.

So. Into this milieu the novice enters. What do they find?

The first thing I encountered after joining Pivotal was _words, words, words_. When I joined, my small office was in between projects; we had a client due to start in a week. We spent that week building a prototype of their application. In that week, I learned a lot of words for things that I hadn't known had names. One memorable one was [[DependencyInjection]].

Simply knowing words goes a long way. I've sometimes quipped that you could get the equivalent of a college CS education if someone handed you the right list of words to Google. Of course, it would be up to you to Google them. And Google I did.

One of things I found was the C2Wiki. It amazed me that there was this virtual place where the textual avatars of Ward Cunningham, Kent Beck, Michael Feathers, and Martin Fowler hung out together with hundreds of other engineers. I found a post by one of my coworkers, Phil Goodwin, on the wiki, and was awestruck. But also—and the informal and dialectical tone of the wiki helped here too—it also made me wonder if maybe this "making software" business was _something I could do_. Maybe all of these software "titans" were just ordinary people trying to make sense of it all like the rest of us. Their level of wisdom wasn't unattainable. I could catch up to them.

- no (public) "levels". An engineer is a bag of skills. Everyone can learn from everyone.
- people asked for _specific types_ of feedback via our internal feedback app. E.g. "how can I improve my written communication skills?" "how can I be a better pair" "how can I get better at writing Java". Of course, this didn't help when the feedback the person really needed was in one of their blind spots. But it was a start.

## Bad

- No focused technical mentorship.
- Few really senior people. Wisdom didn't diffuse well via pair rotation alone. A lot of practices and patterns were misunderstood or misapplied. One benefit of this was that I got to see how things like TDD and OO go wrong and thereby understand them better. I wonder if there might have been a less costly way to do that, though.
- Very few skill-specific workshops or trainings. When we did these they were hugely successful and I have no idea why we didn't do it more (okay, I have some idea: there was pressure to / a culture of working only on the backlog and "staying billable")
- It seems like it must have been hard to help managers grow their skills, and similarly hard to reward managers who were doing really well. 
  Promotion to a higher level of the org chart was possible, but uncommon.
  Example: One manager got promoted to a director-level position—briefly, before deciding he hated it and going back to his old job.

  However, it's worth noting that in general Pivotal tried to spend as little money on managing as possible and "managers" were actually spending about 80% of their time doing the same activities as their reports (e.g. writing code). In light of that, it seems a bit more reasonable to take the view that "manager" was just a label Pivotal stuck to certain people, and if you had that label you got a (big) one-time pay raise with no real further growth opportunities after that. All the dimensions of growth that were available to ICs were also available to managers.
