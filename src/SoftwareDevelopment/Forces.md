# View: Forces, Not Requirements

<div class="summary-block">

How do we deal with competing priorities and needs on a software project?

</div>

- most software has few hard requirements
- "forces" expresses the squishiness of the constraints on software
- we often have to make tradeoffs between competing forces
- the best designs transcend tradeoffs

It's common to speak of software "requirements", as if our to-do list were set in
stone and absolutely everything on it must get done. But in reality, few software
products have such hard requirements. Usually, we are in a situation where some to-do items are more important
than others, and time and money are limited. To avoid over-spending on unimportant
items, the members of a {{link BalancedTeam}} constantly renegotiate the {{link Team/Scope "scope"}} of the
project—see {{link Team/NegotiateScope "negotiating scope"}}.

Therefore, it is useful to think of software as being shaped by **forces** instead of "requirements". A force is a soft
constraint that pushes the {{link SoftwareSystem system}} to develop in a certain
direction. Not all forces are equally strong—they have a magnitude. Forces can push in the same direction and add together,
or they can oppose each other and cancel out.

Just as in Newtonian mechanics, a system changes as long the forces acting on it do not sum to zero.

Examples of forces:

- "It would be really nice to wrap up Project A in two months—otherwise, we won't have enough
  programmers to staff Project B as soon as the client is ready to start."
- "Our website needs to work on old smartphones."
- "This app would feel a lot nicer to use if it didn't take so long to load."
- "It shouldn't be possible for a user to get these form fields into an inconsistent state."

Managers like to set targets, deadlines, and thresholds for things, so they can declare unambiguous success or unambiguous failure. I'm not going to claim that drawing a line in the sand has no value,
but it's not as essential to the healthy functioning of an organization as some people think it is. Metrics and targets *come from somewhere*, and they're not handed down on stone tablets.
Where do they come from? They come from us. Our qualitative assessments of the system state, and our desire for things
to be different. Instead of pushing ourselves to hit arbitrary, artificial targets (which often incentivize bad behavior—{{link GoodhartsLaw}}) we can continuously ask ourselves "do we still care about improving this?" If the answer is "no", we stop doing the thing.

(_because really, that's what we're doing anyway. Goalposts often get moved. The reason goalposts move is that the person in charge of setting the goal realizes that movement in the direction of the goal is no longer the highest priority._)

Say we're working on improving the performance of our software. If we don't have metrics or targets, how do we know when to stop? Easy: we stop when we no longer feel a net force pushing us to change. We stop
when the cost of further action outweighs the benefit.
