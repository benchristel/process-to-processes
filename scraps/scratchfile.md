Programming as Production

- data entry / typing

the idea that code is valuable, and we should minimize changes to it isn't wrong, but...
when it comes from the production view, it can be destructive.
in order to be productive, it needs to come from a different place - a different view.

this is what's so subtle and tricky about views. + why it's so useful to make views explicit. two people can state the same general principle, like "we should design software to minimize the amount of code change needed for each behavior change"
but if they're coming from different views they'll disagree violently on how to interpret that principle.

Programming as Translation

analogy: translating one human language to another.

translating human language to machine language.

- humans and computers have completely different ways of seeing the world
- Moravec's Paradox - the hard problems are easy and the easy problems are hard

Programming as Thinking

- if typing is only 10% of programming, what's the other 90%?
- some people think it's thinking
- the story we tell ourselves about programming: first you think about the problem. Then you think of the algorithm that will solve it.
  then you write down that algorithm in code.
- "thinking" is right but this story is wrong. Programming is not a linear progression from problem to algorithm to code.

Programming as Dialogue

- preceding views envisioned programming as a monologue
  - programmer creates, software is passive, dumb artifact

- the next three views are about programming as dialogue.
  - programmer says something, the machine says something back
  - "yes that makes sense" or "nope, try again"
  - debugging, testing, typechecking are all ways the machine shares its perspective on the software with us.

the idea that making is a dialogue between the maker and the work is not new, nor is it unique to programming.

- quote RPG on writing
- quote Michelangelo
- Kent Beck - mystical programming
- Christopher Alexander

Programming as Exploration

Programming as Science

Programming as Repair

- seems programming repairly? Or only software development?
- every act of programming repairs a {{link Mismatch}} that is causing {{link Conflict}}

Flows

- information, money
- mismatches between "pipes" create blockages/friction/turbulence in flows, which create forces
- a force either causes some part of the system to move (until the motion fixes the mismatch and the force subsides)
- ...or it is opposed by an equal and opposite force, so there is no motion. The parts of the system transmitting the opposing forces
  experience a kind of "pressure". I'll call this {{link Conflict}}.

Forces and Motion

example: a bug: "new messages can't be received by old versions of the app. Some users can't upgrade to the new version because their phones are too old."
forces cause parts of the system to move:
- users bug their friends to get new phones
- friend groups migrate to competitor messaging apps
- programmers try to fix the bug
these forces, and the motion they cause, will persist until the system reaches an equilibrium.

another example: "I want to get information XYZ out of this code, but it's hard to obtain"
- mismatch between programmer's needs and the shape of the code
- motion: maybe they refactor the code to a more convenient shape
- or if programmers are feeling pressed for time (opposing force) maybe they don't refactor and just press on.
  this conflict makes programmers unhappy. If this keeps happening, they may want to leave the company.
  If the forces preventing them from leaving become weaker than the forces driving them to leave, they will leave (motion).