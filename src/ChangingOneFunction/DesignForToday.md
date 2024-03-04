# Technique: Design For Today, Not Tomorrow

The {{link TimeValueOfMoney}} means that spending later is equivalent to spending less.

Strategy 1:

- Write the simplest code that resolves the {{link Forces}} present today. (easy)
- When the code needs to change in the future, adjust the design so it accommodates the new change. (hard)

Strategy 2:

- Write code that resolves today's {{link Forces}} and also accommodates predicted future changes (hard)
- If and when those future changes actually need to happen, make them. (easy)

In Strategy 1, we defer complicating the design of the code until the complication actually helps. By paying later, we pay less.

In Strategy 2, we do extra work upfront to prepare for a future that might or might not come to pass. We incur more expense earlier, and our
investment in design is not guaranteed to pay off.

## Caveats

We want to defer _complication_. This does not mean we defer refactoring. Refactoring to make the code simple and clear benefits us today (by making it easy
for our coworkers and ourselves to understand the code in its current state).

When working on a team, there is often an advantage to getting architecture in place upfront so work can be parallelized more easily.
