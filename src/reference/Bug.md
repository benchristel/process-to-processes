A bug in a piece of [[Software]] is a subset of the software's [[Behavior]] that does not help a user.

## Bugs vs. Features

The difference between a bug and a missing [[Feature]] is that a bug is an [[ErrorOfCommission]]—it is a subset of the actual [[Behavior]] whose member [[Interaction]]s are not [[Acceptable|Acceptance]]. By contrast, a missing feature is an [[ErrorOfOmission]]. A feature may be missing even when all interactions in the actual behavior are acceptable. One implication of this is that a feature always expands the [[Alphabet]] of [[Symbol]]s that can be exchanged among the components of the [[System]] (at some level of abstraction).

For example, suppose we have a calculator program which has the following interaction-sequence in its behavior:

```
user -> calculator 2
user -> calculator *
user -> calculator 2
user -> calculator =
user <- calculator 5
```

This is a bug, because `2 * 2 = 5` is not acceptable.

Note that this is still a bug even if `2 * 2 = 4` is _also_ a member of the behavior (perhaps the calculator is nondeterministic somehow). The key point is that `2 * 2 = 5` _must not_ be a member of the behavior, regardless of what other interaction-sequences are.

However, suppose we have a calculator where `2 * 2 = 4` is not in the behavior, because the calculator doesn't have a "multiply" function—there is no symbol `*` that can be sent from the user to the calculator. In this case, multiplication is a missing feature. It might be that all of the interaction-sequences in the calculator's actual behavior (involving addition and subtraction, let's say) are correct, so the calculator might have no bugs even though the user wishes it could multiply.

An interesting consequence of this view is that simply adding symbols to the alphabet can turn a missing feature into a bug. The moment we add a `*` symbol to our alphabet, we can ask what the calculator does when we send that symbol (noting that doing nothing is still doing something!) If the calculator doesn't do what the user expects in response to the new symbol, then we have a bug.

## There is more than one acceptable behavior

There is almost always more than one [[Behavior]] that [[User]]s will [[Accept|Acceptance]]. For example, the following ways of representing the digit 7 on a seven-segment display are probably both [[Acceptable]] to most people:

```
_    _
 |  | |
 |    |
```

Someone implementing a calculator could probably choose either of these, but users would want consistency—the digit 7 should be rendered the same way every time. If this is the only such ambiguity in the requirements, then there are exactly two [[Acceptable|Acceptance]] [[Behavior]]s: one where 7 has a "hook", and one where it doesn't.

To give another, more complex example: most users probably don't care exactly what happens when they input `0 / 0 =`, but they probably also expect the result to satisfy a couple constraints:

- the output should not resemble a number
- the output should be the same every time

In this case, the set of acceptable behaviors might be very large, if we're considering the level of abstraction of cells on an LCD. But it could still be enumerated.

## There are degrees of acceptability

Another example with a bit more nuance: what should the calculator do if you enter `2 + * 3 =`? Most people are born without an opinion on this question, but quickly develop one the moment they press the wrong function button on a calculator and want to undo their mistake. Ideally, I think, the result should be `6`, not `5` or anything else (and it _is_ 6 on the pocket calculator I used in middle school). Arguments can be made for outputting `6`, `5`, or some kind of error message, but probably `6` is the _most_ acceptable answer to most people. Is it a bug, then, if `2 + * 3 = 5` is in the behavior? According to the definition above, yes.

## If a tree falls in the forest...

Most people don't know they don't want something until you give it to them. Is a bug still a bug if no one ever runs into it?
Perhaps, but I'd say it's the software engineer's responsibility to _actively seek out_ feedback about things that might not be right.
Preempt bug reports by giving people things they don't want during user testing—not in production.

## One bug or many?

How do you know whether a set of undesirable interaction-sequences is one bug or several? The question is not particularly interesting for my purpose of creating a formal theory of bugs/features/behavior. Practically speaking, I think it's fine for people to split/group bugs in whatever way they find convenient for collaboration.