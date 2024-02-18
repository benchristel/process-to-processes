> The basis of the [specification] technique is a [view](36Views) of a program module as a [device](Device) with a set of switch inputs and read-out indicators. The technique specifies the possible positions of the input switches and the effect of moving the switches on the values of the readout indicators. We insist that the values of the readout indicators be completely determined by the previous values of those indicators and the positions of the input switches. 
>
> —[David Parnas, "A Technique for Software Module Specification with Examples", 1972](http://www.laputan.org/pub/papers/p330-parnas.pdf)

The **behavior** of a [[SoftwareSystem]] [[Component]] is the set of possible [[Interaction]]s between the component and its [[Collaborator]] components. An interaction is a (possibly infinite) sequence of [[Message]]s. In a [[SoftwareSystem]], [[User]]s are counted among the components. Other components might be [[Process]]es, [[Service]]s, or hardware [[Device]]s.

Generally, we're interested in a component's behavior because we're designing and building that component. In the terms of [[NotesOnTheSynthesisOfForm]], the component of interest is the [[Form]] and its collaborators are the [[Context]].

## Modeling the System

To describe a [[Component]]'s behavior, we need to design these aspects of the system at a high level:

- The initial [[State]] of the component
- The component's [[Collaborator]]s
- The [[Message]]s exchanged between the component and its collaborators

We have to model the initial state because each [[Interaction]] in the behavior is assumed to start from that state. In simple cases, there is an obvious choice of initial state like "just after a fresh install" or "just after a page reload". But in more complex cases, there may not be an obvious initial state. This isn't really a problem in practice—this formalized description of behavior isn't meant to be directly useful, but to inform other, more practical [Views](36Views).

We have to model the messages because behavior is defined in terms of discrete messages, but reality is analog. I don't know how to talk about behavior in terms of continuous [[Signal]]s—at the very least we need to impose a [[Clock]] to discretize those signals. But more probably we'll want to talk not in terms of voltages on wires, or even in terms of bits, but in terms of more abstract, structured messages, e.g. the members of [[AlgebraicType]]s.

Since the values of an [[AlgebraicType]] are enumerable, the set of messages that can be exchanged within the system is an [[Alphabet]].

## In object-oriented programming

The behavior of an [[Object]] is the set of possible sequences of [[Message]]s crossing its boundary.

For example, consider the behavior of a simple increment/decrement counter. If we represent messages going into the counter as `x ->` and messages coming out as `y <-`, place sequences of messages between `[]` square brackets, and use `{}` set notation, the (partial) behavior looks like this:

```
{
  []
  [
    inc ->
    1 <-
  ]
  [
    dec ->
    -1 <-
  ]
  [
    inc ->
    1 <-
    inc ->
    2 <-
  ]
  ...
}
```

That is, one possible sequence of messages is `[]`, the empty sequence. If we increment once, we get `1` back. If we decrement once we get `-1`. If we increment twice we get first `1` and then `2`. And so on.

One implication of this view of behavior is that it is not possible to exhaustively specify the behavior of a software system, even one as simple as a counter! The set of possible sequences of messages is infinitely large.

However, it is also apparent that one can choose certain representative examples of the behavior to form the basis of a specification. These can then be directly turned into test cases. Software that passes all the test cases is likely (if its implementation follows [[OccamsRazor]]) to correctly implement the specification.