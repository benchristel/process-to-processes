# Principle: Empiricism

This book describes an empirical approach to software — that is, one based on observation and experience, rather than made-up images of how things should be. The empirical thread runs throughout the book, showing up explicitly in techniques like {{link ExplainWhy}}, {{link FundamentalProcess}}, {{link TestDrivenDevelopment}}, {{link WalkingSkeleton}}, and {{link ExploratoryTesting}}, and in views like {{link FiguringThingsOut}} and {{link Controllability}}.

The "empiricism" principle prompts us to ask "how might we test our assumptions? How might we find out we're wrong faster?"

## Empirical &ne; Quantified

Often, people assume that empirical methods only apply to what can be quantified, and that anything unquantifiable cannot be measured or improved. I hope to show in this book that this is far from true. We can apply empirical thinking to unquantifiable matters quite easily, using {{link RelativeAssessment}} of changes made by {{link SmallSteps}}.

## The Scientific Method

It's a sad commentary on the state of the U.S. education system that I feel the need to explain the scientific method in a book for technology professionals. Yet, given that I myself had to learn it from [a Harry Potter fanfic](https://hpmor.com/), it is probably worth spending some words on.

The purpose of science is to develop **theories** (or _models_) of how things work. The purpose of a theory is to predict the future; a good theory is one that makes accurate predictions. Having predictive theories about a system is essential if you want to *use* that system for something. Without some kind of theory of the system, you have no basis for planning your actions within it, because you have no way to predict what the results of those actions might be.

The formal scientific method is not the only way of getting theories. Theories that are good enough to be practical can be developed without it. However, the formal method increases the precision of the theories we can create.

Simplified to its bare essentials, the scientific method works like this:

1. Observe the system of interest. (Don't put too much effort into this, though, or step 2 will be harder.)
2. Come up with a set of general rules that accounts for your observations. Keep it simple. Make sweeping generalizations; admit no special cases. This provisional explanation is a *hypothesis*.
3. Imagine some of the ways in which your hypothesis might be wrong—i.e. might make inaccurate predictions.
4. Do experiments to try to prove that your hypothesis is, in fact, wrong. To do an experiment, first use the hypothesis to predict the result of some action. Then do the action and see if the result matches the prediction. If it doesn't, the hypothesis is wrong (assuming you really performed the action you thought you did).
5. Once you've disproved the hypothesis, go back to step 2 with your new observations in hand, and repeat.

What scientists actually do is quite a bit more complicated than this, of course, but this simplified view will work for now. In particular, note that I am glossing over the use of statistical methods in science — I assume that each experiment can definitively reject a hypothesis. That simplification works for our context. In this book, our experiments will be definitive.

A few points about this process warrant further comment:

First, note that in step 2, we want to create the _simplest_ hypothesis that fits the facts. We do this for a couple reasons:

- Simple hypotheses are easier to understand than complex ones.
- Simple hypotheses are easier to disprove than complex ones. The whole process can go faster when we make simple hypotheses.

It's always possible to complicate a hypothesis, e.g. by tacking on extra ideas that don't affect the result. [Russell's teapot](https://en.wikipedia.org/wiki/Russell's_teapot) is a humorous example. There is thus no limit to how complex we can make a hypothesis, but there is a limit to how simple we can make it if it is to account for all the observed facts. In science, as in computing, we always look for ways to simplify things — though we must also be on the lookout for reasons to complicate them.

<blockquote class="pullquote"><p>We always look for ways to simplify things — though we must also be on the lookout for reasons to complicate them.</p></blockquote>

<!--

Einstein put it this way:

> The supreme goal of all theory is to make the irreducible basic elements as simple and as few as possible without having to surrender the adequate representation of a single datum of experience.
>
> <cite>[Albert Einstein, "On the Method of Theoretical Physics"](https://www.jstor.org/stable/184387)</cite>

TODO: Einstein wasn't talking about hypotheses when he said this, but about the fundamental elements of a theory, i.e. those not deduced from other elements. Is there a better quote about simplicity?

-->

Second, note that at no point in the scientific process do we ever prove that a hypothesis is *true*. Experiments can never prove a hypothesis right—they can only prove it wrong. A theory is simply a hypothesis that has withstood so many diverse experiments that we feel confident relying on it for consequential matters. Thus, the answers we get from the scientific method are never quite final—but they are very useful.

## The Map is Not The Territory

When I was three or four years old, I had a placemat with a map of the U.S. states on it. I remember distinctly the moment when my mom pointed out the San Francisco Bay to me and said "this is where we are." I shook my head. "I don't think so." I pointed to the color of California on the map and then pointed outside. "It isn't red enough out there."

The map is not the territory. A scientific theory gives us a map of some aspect of the world, a way of describing it — but it isn't how the thing actually *works*.

A theory simply helps us make predictions. Theories do not describe how things "really are," out there in the world beyond our direct perception. If you believe that they do, you will be very confused by theories like the wave-particle duality of light. The truth is not that light is somehow both a wave and a particle, but that waves and particles are _models_ that relate the behavior of light to that of ocean waves and billiard balls. Each of these models is effective in different circumstances. But neither model, nor even a combination of the two, should be mistaken for the real thing.

> At first, light was seen to behave very much like a rain of particles. Then with further research it was clear that this was not right but that light actually behaved like waves. And then, in the 20th century, on further research it appeared that light actually behaved, in many ways again, like particles. This growing confusion was resolved in 1925 or '26, with the advent of the correct equations for quantum mechanics. Now we know how electrons and light behave — but what can I call it? I can't say "they behave like a particle-wave" or "they behave in typical quantum-mechanical manner." There isn't any word for it. If I say they behave like particles, I give the wrong impression — or if I say they behave like waves. They behave in their own inimitable way. They behave in a way that is like nothing you have ever seen before.
>
> <cite>Richard Feynman, ["Probability and Uncertainty: The Quantum Mechanical View of Nature"](https://archive.org/details/probabilityanduncertaintythequantummechanicalviewofnature/probabilityanduncertaintythequantummechanicalviewofnaturereel1.mov)<!--timestamp 4:38--></cite>

Christopher Alexander put it this way:

> The mechanistic idea of order can be traced to Descartes, around 1640. His idea was: if you want to know how something works, you can find out by pretending that it is a machine. You completely isolate the thing you are interested in — the rolling of a ball, the falling of an apple, the flowing of the blood in the human body — from everything else, and you invent a mechanical model, a mental toy, which obeys certain rules, and which will then replicate the behavior of the thing. It was because of this kind of Cartesian thought that one was able to find out how things work in the modern sense.
>
> However, the crucial thing which Descartes understood very well, but which we most often forget, is that this process is only a _method_. This business of isolating things, breaking them into fragments, and of making machinelike pictures (or models) of how things work, is not how reality actually _is_. It is a convenient mental exercise, something we do to reality, in order to understand it.
>
> <cite>Christopher Alexander, _The Phenomenon of Life_, p. 16</cite>

When you were a child, did you ever try to smell a photograph of a flower? There is a difference between a thing and a picture of the thing, which can never be eliminated. If it were eliminated, the picture would cease to be a picture, and would become a duplicate. In software, duplicating things is easy—it's understanding them that's hard. Therefore, our pictures must always remain pictures: flawed, simplified, but useful.

<!--
Every model has limits to its fidelity, and we have to understand those limits to use the model well. Otherwise, we'll be like Derek Zoolander confronting an architectural model — "what is this, a center for ants?" Or consider — when you were a child, did you ever try to smell a photograph of a flower? There is a difference between a thing and a picture of the thing, which can never be eliminated. If it were eliminated, the picture would cease to be a picture, and would become a duplicate. In software, duplicating things is easy—it's understanding them that's hard. Therefore, our pictures must always remain pictures: flawed, simplified, but useful.
-->

So, all useful models and pictures of the world have limits. Part of using them well is understanding those limits. Echos of this idea will show up in later chapters, e.g. {{link GoodhartsLaw}}.

## Further Resources

- [Eliezer Yudkowsky, _Harry Potter and the Methods of Rationality_](https://hpmor.com/)
- Robert Pirsig, _Zen and the Art of Motorcycle Maintenance_

Richard Feynman's entertaining description of the scientific method is well worth the 10 minutes it will take to hear:

<youtube-embed videoid="EYPapE-3FRw"></youtube-embed>

Adam Savage's explanation is inspiring too:

<youtube-embed videoid="v6JPhkWg_ok"></youtube-embed>
