# Empiricism

This book describes an empirical approach to software — that is, one based on observation and experience, rather than made-up images of how things should be. The empirical thread runs throughout the book, showing up explicitly in techniques like {{link ExplainWhy}}, {{link FundamentalProcess}}, {{link TestDrivenDevelopment}}, {{link WalkingSkeleton}}, and {{link ExploratoryTesting}}, and in views like {{link FiguringThingsOut}} and {{link Controllability}}.

Often, people assume that empirical methods only apply to what can be quantified, and that anything unquantifiable is only a matter of opinion. I hope to show that this is far from true. We can apply empirical thinking to unquantifiable matters quite easily, using {{link RelativeAssessment}} of changes made by {{link SmallSteps}}.

## The Scientific Method

It's a sad commentary on the state of the U.S. education system that I feel the need to explain the scientific method in a book for technology professionals. Yet, given that I myself only grokked the topic after reading [a Harry Potter fanfic about it](https://hpmor.com/), it probably warrants explication.

The purpose of science is to develop **theories** (or _models_) of how things work. The purpose of a theory is to make predictions. A good theory is one that lets us predict what the results of an action will be. Having good, predictive theories about a system is essential if you want to *use* that system for something. Without a theory of the system, you have no basis for planning your actions on it, because you have no way of predicting what the results of those actions might be.

The formal scientific method is not the only way of getting theories. Theories that are good enough to be practical can be developed without it. However, the formal method increases the precision of the theories we can create.

The method works like this:

1. Observe the system of interest. (Put minimal effort into this, or step 2 will be harder.)
2. Come up with the *simplest* predictive theory you can that accounts for your observations. This provisional theory is a *hypothesis*.
3. Imagine some of the ways in which your hypothesis might be wrong—i.e. might make inaccurate predictions.
4. Do experiments to try to prove that your hypothesis is, in fact, wrong. To do an experiment, first use your hypothesis to predict the result of some action. Then do the action and see if the result is what you predicted. If the result does not agree with the prediction, the hypothesis is wrong (assuming you really performed the action you thought you did).
5. Once you've succeeded in disproving the hypothesis, go back to step 2 and repeat.

Note that at no point do we ever prove that a hypothesis is *true*. Experiments can never prove a hypothesis right—they can only prove it wrong. A theory is simply a hypothesis that has withstood so many diverse experiments that we feel confident using it for consequential matters. Thus, the answers we get from the scientific method are never quite final—but they are very useful.

Also note that theories do not describe how things "really are." If you believe that they do, you will be very confused by theories like the wave-particle duality of light. The truth is not that light is somehow both a wave and a particle, but that waves and particles are _models_ that relate the behavior of light to that of sound waves and billiard balls. Each of these models is effective in different circumstances.

Richard Feynman's entertaining description of the scientific method is well worth the 10 minutes it will take to hear:

<youtube-embed videoid="EYPapE-3FRw"></youtube-embed>

## Applying the Scientific Method to Programming
