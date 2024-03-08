# Technique: The Fundamental Development Process

The fundamental process for improving a system is a variant of the OODA loop (OODA = observe, orient, decide, act):

1. Observe the system, just as it is.
2. Notice something that could be better (e.g. an impedance mismatch or a weak/latent center)
3. Make a small change to make that thing better without making anything else worse.
4. Evaluate. If your change made things worse, undo it.
5. Repeat.

## Incremental Change

We have to change software incrementally for two reasons, one technical and one human.

- A technical reason: changes to the system generate new forces which have to be accounted for. These forces are very difficult to predict in advance, so it's prohibitively expensive to plan for them. It's much cheaper and easier to use the software itself as a laboratory to find out what will happen when we change it.
- A human reason: incremental changes let us show steady progress, which helps build trust.

Incremental change != continuous release!

## Computational Irreducibility of the Process

Non-incremental approaches are doomed to technical success.

- For very small problems, we can fit all the forces in our head. When forces conflict, there are clear priorities we can use to choose one over the other.
  - E.g. a string formatting function. It's not difficult to get the code to do what we want, and we can easily decide how to trade off readability and performance. It's easy enough to change the code later if we get this tradeoff wrong.
- Large, complex systems do not fit in our head. When the interactions between forces are too complex to tackle all at once, we can use the system itself as a kind of analog computer which will work out its own solution.