An **interaction**, in a Model of a [[SoftwareSystem]], is a (possibly infinite) sequence of [[Message]]s exchanged between a [[Component]] and its [[Collaborator]]s. The set of all possible interactions is the component's [[Behavior]].

Interactions are useful when designing/modeling software because:

- they draw clear boundaries between [[Form]] and [[Context]], helping us answer the question "what are we designing/describing"?
- they can easily turn into [[FormalTest]]s.
- they are concrete, and so easier to talk about than generalizations. It is easier to determine if an interaction is desirable than to determine if a software component is "correct".

Since an interaction is ordered, it imposes some notion of [[Time]] on our model of the system. I've found it practical to make as few assumptions about this "time" as possible, by assuming only that messages are causally ordered. If the software needs to know about [[WallClockTime]], that information can be communicated to it in messages. This makes testing and comprehending the software easier.