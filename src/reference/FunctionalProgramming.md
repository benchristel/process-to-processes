**Functional programming** is an approach to the internal design of software characterized by:

- The reification of [[Routine]]s as [[Value]]s. In order to qualify as functional, a programming language must let you assign functions to
  variables, pass them as arguments to other functions, and return them from functions.
- Heavy use of pure [[Function]]s that operate on [Immutable](Immutability) [[Data]].
- Collocation of [[State]] and [[Process]]-external [[Effect]]s near the top of the [[DependencyGraph]].
- Use of algebraic identities, category theory, and other ideas from mathematics to prove that programs have certain desirable properties and that those properties are invariant under certain [[Refactoring]]s.