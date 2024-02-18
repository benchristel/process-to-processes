Occam's Razor is a principle in the philosophy of science that ties into [[TestDrivenDevelopment]], the concept of [[Simplicity]] in design, and [[ChristopherAlexander]]'s concept of [[Symmetry]].

> Complexity (in the bad sense) consists of distinctions which unnecessarily complicate a structure. To get simplicity, on the other hand, we need a process which questions every distinction. Any distinction which is not necessary is removed. To remove a distinction we replace it by a symmetry.
>
> —[[ChristopherAlexander]]

The [Wikipedia article on Occam's Razor](https://en.wikipedia.org/wiki/Occam%27s_razor#cite_note-25) has many tidbits that might be relevant for this wiki; I'm dumping them all here for the time being.

- The concept of an [[AdHocHypothesis]] as a way to prevent a theory from being falsified—this is analogous to the strategy of fixing a test failure by adding a conditional. The resulting code (i.e. the [[Hypothesis]] about how to implement the desired behavior) is likely to still, ultimately, be wrong.

- "The idea here is that a simple [theory](Theory) applies to more cases than a more complex one, and is thus more easily falsifiable."
- "If a sign is not necessary then it is meaningless. That is the meaning of Occam's Razor." —Wittgenstein
  - This is an argument for removing dead code.