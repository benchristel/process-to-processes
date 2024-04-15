# Technique: Say Why ✥

The "Say Why" technique is a way to:

- assess how well your other techniques are working.
- estimate the likely benefit of future actions.

> Step 1 is to say, "I am solving **this** problem. The problem is X and therefore we're going to do Y." I have seen so much software made where no one ever said that. No one ever wrote that down. And then we have a whole system, and no one ever said what problem it's supposed to solve. If we're not solving problems, I have no idea why we're in this room.
>
> <cite>[Rich Hickey](https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=f84n5oFoZBc)</cite>

I'll start from what I think is a fairly obvious but actually radical position: that when we're developing software, we ought to do things for reasons. Whenever we do an activity, we should know why we're doing it—why it benefits us.

I think this is an *obvious* position because its opposite—the idea that we should go out of our way to do things without any reason—is absurd (see {{link OccamsRazor}}). I think it is a *radical* position because in reality, when I ask programmers and others involved in software development why they're doing a particular thing, I often get non-answers:

- "That's just the way we do it here."
- "It's a best practice."
- "We have to do it this way."
- "We have a tool that does this, so why not use it?"

I consider these non-answers because they don't address the intent of the question. _What benefit_ are you hoping to secure by doing this particular thing in this particular way?

"Benefit" means "benefit for a _person_." Who benefits? When? How?

The reason I feel it's important to have a good answer to this question is that if we don't know why we're doing something, we can't assess how well it's working, or whether something else might work better. Change becomes unthinkable, and improvement impossible.

Now, I don't blame the folks who don't know why they're doing things. Before I got into the habit of asking myself "why?" all the time, I did a lot of things without being able to articulate the reasons. And when I started to build the habit, it was quite uncomfortable, because it forced me to face the fact that I often didn't know why I did certain things.

(Also, sometimes you just like doing a thing, just because it's the thing that you do. It's comfortable. Asking "why" threatens that. What if other people don't like your reasons, once they come out? They might make you stop doing the thing!)

Fortunately, finding out why you do something isn't that hard. Just stop doing it, and you'll soon learn what, if anything, it was giving you. Doing this at work carries some risk, of course, so I recommend using {{link PersonalProjects}} as laboratories for this purpose.

In an organization without {{link PsychologicalSafety}}, being publicly honest about why you do what you do can feel like you're putting your reputation on the line. Saying "I write automated tests so I can catch my programming mistakes faster" implies that you make mistakes, and that you have a hard time detecting them without tests. Hopefully you can at least be honest with some of your fellow programmers. If even that isn't the case where you work, then I don't know if this book can help you. You should probably look for a different job.

## Corrolary: Ask Why

Someone says "A is better than B" but doesn't say what they mean by "better"? Ask what they mean. So many technical discussions devolve into people talking past each other because each is guessing at what the other really wants.

## Code Review

If you're requesting changes in a code review, explain why. You owe it to the author to describe how the changes you're asking them to make will benefit someone. If you can't explain why you want the changes, don't ask for them. By requesting changes that are likely to seem arbitrary, you risk alienating your coworker—{{link LifeAndDeathOfSystems}}.
