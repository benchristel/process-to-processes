# The Fundamental Process

The fundamental process for all software development activities is a variant of the OODA (observe, orient, decide, act) loop, which goes like this:

1. **Observe** the system in its current state. Don't judge what's good or bad about it just yet, but note any suffering that is occurring.
2. **Form a theory** about how the system works. The theory must be able to predict how the system will respond to possible future changes and events.
3. **Make a change** that your theory predicts will alleviate some of the suffering in the system. Avoid changing too much at once. Make the smallest change you can that will have an impact you can observe. Make sure the change is reversable, since there's a good chance your theory is wrong and the improvement you predict will not happen.
4. **Assess** the results. Did things get better or worse? If they got worse, undo the change you made. In any case, go back to step 1 and repeat the process.

All software development boils down to these four steps, repeated over and over at various levels of scale.

## Observing the System

The first step in the process is to observe the system in operation.

Recall that when I talk about "the system", I mean not only computers and software, but also people, organizations, and physical structures: teams, vendors, customers, office buildings, departments, etc. These various types of substructure may overlap quite a bit, and it is likely impossible to organize them into a strict tree-shaped taxonomy. For example, the UX design department in your organization may be a cohesive structure, but each designer within the department may be embedded in a different cross-functional team that includes engineers and a product manager—and those cross-functional teams may also be cohesive structures. A team, in turn, may be spread across multiple offices, and an office may house multiple teams.

This absence of tree-like taxonomic or hierarchical structure is neither a weakness to be eliminated, nor a metric to be optimized for its own sake. It is simply the kind of organization that happens, and that has to happen, in systems that are healthy and self-sustaining.

To acknowledge the fuzziness and non-hierarchical organization of software development systems, I call the sub-structures _centers_ (following the lead of the architect Christopher Alexander). Centers are cohesive and identifiable; you can name them, point to them, count them, and recognize ones you've seen before. However, centers do not necessarily have a precise boundary, so they may not be separable from their context.

The concept of a center may seem a bit hard to grasp. However, I am sure that you already understand what centers are, though you may not be used to paying attention to them or talking about them.

To see that you already understand what a center is, imagine a whirlpool in a stream.

![a whirlpool](whirlpool.png)


What is a whirlpool? It's not a set of water molecules. The physical material that makes up the whirlpool is rapidly and constantly changing. It's also not an exact shape; the particular ripples in the water are constantly changing. It's not separable from the stream itself; you can't lift it out of the water and take it home with you.

Yet you can point to it. You can name it. If there are several whirlpools, you can count them. If you come back the next day and the whirlpool is still there, you can say "it's the same one I saw yesterday". If you know you can do all those things, then you know what a center is.

There are, of course, also centers that are more like "objects"—things that _can_ mostly be separated from their context, and that _do_ have a more or less consistent physical makeup. You are used to thinking and talking about these, so I won't dwell on them.

Once you have identified the centers in your software development system, you can watch them interact. Observe the flow of resources—especially information—among the centers. Withhold judgment, for now. Just watch the system and accept that what's you see is what's happening.

_A customer complaint becomes a UX change request, which becomes a commit to version control. Code changes stack up until their gathering weight triggers a software release. QA does a full test pass of the new software, yielding a crop of bug reports. A lucrative deal closes, and the influx of cash stimulates the formation of a new business unit. An engineering team struggles with technical debt; no matter how hard they push, the code pushes back harder. Trying to jam new features into the code is like trying to stuff clothes into a suitcase that's already overflowing._

As you observe, pay special attention to suffering in the system. **This is not the same thing as judging interactions as good or bad.** Your judgments are subjective and conditioned by your experience. Suffering is objective. However, suffering is distinct from inefficiency, waste, and other objective measures like software defects. **Suffering is when two centers are in conflict: when one is resisting or working against the other.**

The following anecdote might help explain the difference between judgments, objective defects, and suffering. I once pair-programmed with a developer—let's call him L—who was not used to unit testing. I thought that not having unit tests was bad (my judgment) and tried to convince him that having some tests would help us release with fewer defects. His response? "So what if the software has a few bugs? If customers report bugs, we'll patch them." When I said I'd rather not release buggy software in the first place, he became a bit disgruntled. He was reluctant to pair after that.

I couldn't convince L that adding unit tests was a good idea, because I presented tests as a way to avoid bugs, and the bugs in his code weren't causing him any suffering. His manager wasn't telling him to write fewer bugs. His other teammates weren't telling him to write fewer bugs. There was nothing in the system or within himself that resisted his current way of working—until  I arrived and tried to sell unit testing to him. I was the only thing making him suffer, so he did the obvious thing in response: he avoided me.

Suffering is distinct from pain and discomfort. When suffering occurs within a person, it is because two parts of their mind are in conflict. Often, the conflict is _about_ a source of pain or discomfort, which is why we associate suffering with these phenomena.

For example, imagine you're in the middle of an exercise routine—running, perhaps. You're out of breath, your heart is pounding, and your joints and muscles ache. You're experiencing discomfort and pain. But you only start suffering when some part of your mind speaks up and says _you know, we could stop and walk for a bit_ and another part of your mind counters with _no, we have to keep going!_ If you were wholeheartedly committed to your exercise regimen, you wouldn't dream of stopping, and you wouldn't suffer. If you were wholeheartedly committed to stopping, you'd just stop, and you wouldn't suffer. You only suffer because of the conflict between different parts of your mind that have different goals.

September 3rd, 2023