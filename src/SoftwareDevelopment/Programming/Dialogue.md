# View: Programming as Dialogue

The problems with the preceding views of programming flow from a common source: they assume that the programmer is the thinker, the doer, the unmoved mover, and that the program is inert, unintelligent matter that the programmer shapes as a potter shapes clay. They assume that cause and effect flow in one direction only—from the programmer to the program.

I'm not going to say this assumption is _wrong_, because views aren't right or wrong, only helpful or unhelpful. So I'll just say: it's unhelpful. It doesn't help us make sense of what is going on when we're programming, and that should be reason enough to discard it.

The {{link SoftwareSystem}} we're in acts on us as much as we act on it. Existing code shapes our thoughts and constrains our actions. A system can even energize us or depress us — {{link Life}}.

More basically: the system contains *information*. It encodes, in its structure, all the knowledge that went into its creation. You could almost say the system itself *knows stuff*. As the system grows in complexity it comes to know more than any one of its maintainers. If we don't know how to coax that information out of it, the system will always outwit us.

Code begets ideas for more code. The structure of the system accommodates certain changes better than others. Richard Feynmann put it this way:

TODO: move this quote

> Suppose you have two theories, a and b, which look completely different psychologically. They have different ideas in them and so on. But that all the consequences that are computed are exactly the same. You may even say they even agree with experiment. The point is that that the two theories, although they sound different at the beginning, have all consequences the same. It’s easy, usually, to prove that mathematically, by doing a little mathematics ahead of time, to show that the logic from this one and this one will always give corresponding consequences.
>
> Suppose we have two such theories. How are we going to decide which one is right? No way, not by science. Because they both agree with experiment to the same extent, there’s no way to distinguish one from the other.
>
> So two theories, although they may have deeply different ideas behind them, may be mathematically identical. And usually people say, then, in science one doesn’t know how to distinguish them. And that’s right.
>
> However, for psychological reasons, in order to guess new theories, these two things are very far from equivalent. Because one gives a man different ideas than the other. By putting the theory in a certain kind of framework, you get an idea of what to change.
>
> <cite>[Richard Feynmann, "Knowing versus Understanding"](https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=NM-zWTU7X-k)</cite>


We can see software development as a {{link Computation}}, which is largely {{link ComputationalIrreducibility ComputationallyIrreducible}}, meaning that the fastest way to find out the outcome of a decision is to watch it play out in the real world.

Want to know if the compiler will accept a particular line of code? Write the code, and let it tell you. Want to know if some code is covered by a test? Delete the code, run the tests, and see if any fail — {{link MutationTesting}}.

In order for programming as dialogue to be effective, we must get fast feedback from the machine — ideally {{link 400MillisecondFeedback}}.