An object is a container for [[State]]. A [[UnitOfCode]] that can [[Access]] an object can also access the [[State]] it contains; however, access to the state is often mediated and controlled by [[Method]]s.

An object's state (and therefore the return values of its [[Nilpotent]] methods) is a function of its constructor arguments and the messages that have been sent to it over its lifetime. This stateful form of purity is valuable because it makes the object's behavior comprehensible—nearly as comprehensible as the behavior of a truly pure, stateless function. As David Parnas wrote in 1972:

> The basis of the [specification] technique is a view of a program module as a device with a set of switch inputs and read-out indicators. The technique specifies the possible positions of the input switches and the effect of moving the switches on the values of the readout indicators. We insist that the values of the readout indicators be completely determined by the previous values of those indicators and the positions of the input switches.
>
> —David Parnas, "A Technique for Software Module Specification with Examples", 1972

An object, then, could just as well be represented statelessly as a list of all messages sent to the object plus a reducer function that derives a scalar value from the messages. The advantage of stateful objects is that they conserve memory, and [[Couple|Coupling]] the message sequence to the object's identity, preventing the message list from being substituted willy-nilly (as it could be in the functional implementation).

Objects can be defined recursively as follows:

Base case: A [[MethodClosure]] is an object.

Recursive case: Members of an [[AlgebraicType]] are objects if any of the [[Limb]]s of the type are objects. Thus, any type that holds [[MethodClosure]]s is an object. Usually an object is represented as a [[ProductType]] where every [[Limb]] is a method.

An object ought to adhere to a few principles:

- Assuming the [[Process]] has sufficient available memory to do its work, it should not matter exactly when an unreferenced object is deallocated. That is, garbage collection of objects should have no side effects.
- It should not be possible for a [[UnitOfCode]] to [[Access]] the [[State]] of an object unless it has a direct reference (e.g. via an [[Identifier]] to that object. That is, there should be no [[SpookyActionAtADistance]].

One [[View|36Views]] of objects is that they bundle together state that all becomes irrelevant at the same time.

A [[MutableStruct]] is equivalent to an object with trivial [[AccessorMethods]] (at least, from a [[Synchronic]] perspective—they have different [[Evolvability]] characteristics). [[MutableStruct]]s are therefore a type of object.
