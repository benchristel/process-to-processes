# The Fundamental Process

The fundamental process for all software development activities is a variant of the OODA (observe, orient, decide, act) loop, which goes like this:

1. **Observe** the system in its current state. Don't judge what's good or bad about it just yet, but note any suffering that is occurring.
2. **Form a theory** about how the system works. The theory must be able to predict how the system will respond to possible future changes and events.
3. **Decide what to change.** Identify some suffering that your theory says you might be able to alleviate.
3. **Try** to change the system. Avoid changing too much at once. Make the smallest change you can that will have an impact you can observe. Make sure the change is reversable, since there's a good chance your theory is wrong and the improvement you predict will not happen.
4. **Assess** the results. Did things get better or worse? If they got worse, undo the change you made. In any case, go back to step 1 and repeat the process.

All software development boils down to these five steps, repeated over and over at various levels of scale.

## Observing the System

The first step in the process is to observe the system in operation.

Recall that when I talk about "the system", I mean not only computers and software, but also people, organizations, and physical structures: teams, vendors, customers, office buildings, departments, etc. These various types of substructure may overlap quite a bit, and it is likely impossible to organize them into a strict tree-shaped taxonomy. For example, the UX design department in your organization may be a cohesive structure, but each designer within the department may be embedded in a different cross-functional team that includes engineers and a product manager—and those cross-functional teams may also be cohesive structures. A team, in turn, may be spread across multiple offices, and an office may house multiple teams.

This absence of tree-like taxonomic or hierarchical structure is neither a weakness to be eliminated, nor a metric to be optimized for its own sake. It is simply the kind of organization that happens, and that has to happen, in systems that are healthy and self-sustaining.

To acknowledge the fuzziness and non-hierarchical organization of software development systems, I call the sub-structures _centers_ (following the lead of the architect Christopher Alexander). Centers are cohesive and identifiable; you can name them, point to them, count them, and recognize ones you've seen before. However, centers do not necessarily have a precise boundary, so they may not be separable from their context.

The concept of a center may seem a bit hard to grasp. However, I am sure that you already have an intuitive and practical sense of the concept, though you may not be used to paying attention to centers or talking about them.

To see that you already understand what a center is, imagine a whirlpool in a stream.

![a whirlpool](whirlpool.png)


What is a whirlpool? It's not a set of water molecules. The physical material that makes up the whirlpool is rapidly and constantly changing. It's also not an exact shape; the particular ripples in the water are constantly changing. It's not separable from the stream itself; you can't lift it out of the water and take it home with you.

Yet you can point to it. You can name it. If there are several whirlpools, you can count them. If you come back the next day and the whirlpool is still there, you can say "it's the same one I saw yesterday". If you know you can do all those things, then you know what a center is.

There are, of course, also centers that are more like "objects"—things that _can_ mostly be separated from their context, and that _do_ have a more or less consistent physical makeup. You are used to thinking and talking about these, so I won't dwell on them.

Once you have identified the centers in your software development system, you can watch them interact. Observe the flow of resources—especially money and information—among the centers. Withhold judgment, for now. Just watch the system and accept that what's you see is what's happening.

_A customer complains. A UX change request shows up in your backlog. A programmer commits to version control. A failing test run gets retried. A new version your product is released. QA does a full test pass. There are 7 reported regressions. A lucrative deal closes. A new business unit forms. An engineering team struggles with technical debt. The CEO calls an all-hands meeting; most of the attendees spend it multitasking._

As you observe, pay special attention to suffering in the system. **This is not the same thing as judging interactions as good or bad.** Your judgments are subjective and conditioned by your experience. Suffering is objective. **Suffering occurs when two centers are in conflict: when one is resisting or working against the other.** Frustration, inner conflict, and thwarted desire all produce suffering.

The following anecdote might help explain the difference between judgments, objective defects, and suffering. I once pair-programmed with a developer—let's call him L—who was not used to unit testing. I thought that not having unit tests was bad (my judgment) and tried to convince him that having some tests would help us release with fewer defects. His response? "So what if the software has a few bugs? If customers report bugs, we'll patch them." When I said I'd rather not release buggy software in the first place, he became a bit disgruntled. He was reluctant to pair after that.

I couldn't convince L that adding unit tests was a good idea, because I presented tests as a way to avoid bugs, and the bugs in his code weren't causing him any suffering. His manager wasn't telling him to write fewer bugs. His other teammates weren't telling him to write fewer bugs. There was nothing in the system or within himself that resisted his current way of working—until  I arrived and tried to sell unit testing to him. I was the only thing making him suffer, so he did the obvious thing in response: he avoided me.

Suffering is distinct from pain and discomfort. When suffering occurs within a person, it is because two parts of their mind are in conflict. Often, the conflict is _about_ a source of pain or discomfort, which is why we associate suffering with these phenomena.

For example, imagine you're in the middle of an exercise routine—running, perhaps. You're out of breath, your heart is pounding, and your joints and muscles ache. You're experiencing discomfort and pain. But you only start suffering when some part of your mind speaks up and says _you know, we could stop and walk for a bit_ and another part of your mind counters with _no, we have to keep going!_ If you were wholeheartedly committed to your exercise regimen, you wouldn't dream of stopping, and you wouldn't suffer. If you were wholeheartedly committed to stopping, you'd just stop, and you wouldn't suffer. You only suffer when different parts of your mind have conflicting goals.

Suffering can be associated with pleasure as well as with pain. For example, suppose you're tempted to stay up late playing video games, but you know you'd regret it the next morning. While just thinking about video games is inherently pleasant, that thought still causes suffering because it conflicts with the more prudent part of your mind that countermands it.

Suppose you do stay up all night playing games, though, and you are tired the next morning. Your suffering at that point isn't caused by the tiredness itself, but by your desire to either sleep or be more alert. Since you probably can't do either, your desire is in conflict with reality, and so you suffer.

## Forming a Theory

As you observe the system, you will naturally start telling yourself stories about _why_ the system is the way it is. You'll form mental models of the various actors in the system, and you'll see how their actions affect other centers. These explanatory stories and characterizations form a _theory_ of the system that you can use to predict what might happen to it in the future.

The longer and more carefully you observe, the more refined your theory will become. You'll see situations where your initial theory made incorrect predictions, and you'll revise your theory to match these new observations. You can often get more perspectives by interviewing participants in the system, and refine your theory that way. However, attempting to create a perfect theory—trying to find out what's "really" going on—is a quixotic goal. A perfect theory is neither necessary nor attainable. Once you have a predictive theory of any quality, you should probably move quickly to the next step: deciding what to change.

## Deciding what to Change

## Making a Change

Making a change breaks down into two sub-steps:

- Deciding what change to make
- 

September 3rd, 2023