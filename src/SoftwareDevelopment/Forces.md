# View: Forces, Not Requirements

<div class="summary-block">

- How do we deal with competing priorities and needs on a software project?

</div>

It's common to speak of software "requirements", as if our to-do list were set in
stone and absolutely everything on it must get done. In reality, few software
products have such hard requirements.

In this book, I'll refer to **forces** instead of "requirements". A force is a soft
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
but it's not as essential as some people think it is. Metrics and targets *come from somewhere*.
Where do they come from? Our qualitative assessments of the system state, and our desire for things
to be different. Instead of pushing ourselves to hit arbitrary, artificial targets (which often incentivize bad behavior—{{link GoodhartsLaw}}) we can continuously ask ourselves "do we still care about improving this?"

(_because really, that's what we're doing anyway._)

Say we're working on improving the performance of our software. If we don't have metrics or targets, how do we know when to stop? Easy: we stop when we no longer feel a net force pushing us to change. We stop
when the cost of further action outweighs the benefit.
