I use the following terms to refer to callable units of code:

- Routine
  - A section of code that can be [[Call]]ed.
- [[Procedure]]
  - A routine that has [[Effect]]s or [[Access]]es process-external state (e.g. makes [[SystemCall]]s).
  - If a procedure does not [[Access]] any [[FreeVariable]]s, its [[ProcedureClosure]]s are [[Value]]s.
- [[Method]]
  - A routine that takes and returns [[Value]]s and does not make [[SystemCall]]s, but [[Access]]es [[FreeVariable]]s.
- [[Function]]
  - A [[Nilpotent]], [[ReferentiallyTransparent|ReferentialTransparency]] routine that operates on [[Value]]s and does not refer to any state.
- [[Constructor]]
  - A [[Nilpotent]], Non-[[ReferentiallyTransparent|ReferentialTransparency]] routine that returns a new [[Object]], and does not refer to any [[State]].
- [[Instrument]]
  - A routine that technically makes [[SystemCall]]s, but none that feed back into the logic of the program. For example,
    an [[Instrument]] might [[Log]] to a file or measure performance.

The types of routines vary in their [[Capabilities|CodeCapability]].

Note that all of these terms refer to static/source-code entities. A [[Closure]] is a runtime instantiation of a routine in which [[FreeVariables]] of the routine are looked up in the [[LexicalScope]] that was in effect at the time and place of the closure's creation.  We can thus speak of [[ProcedureClosure]]s, [[MethodClosure]]s, and [[FunctionClosure]]s. There can be many different closures in a process that originate from the same routine.

## State Interactions

The ways in which a routine can interact with [[State]] are:

- making [[SystemCall]]s, a.k.a. having [[Effect]]s.
- [[Access]]ing [[ProcessGlobalState]].
- receiving [[Object]]s as parameters.
- returning [[Object]]s.
- accessing [[LocalState]] in its enclosing lexical scope.
