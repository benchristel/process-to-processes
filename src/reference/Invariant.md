An invariant property of a software system, [[Object]], etc. is one that always holds. Invariance implies a notion of [[Time]] or [[Space]] in which something *could* potentially vary; accordingly, we can talk about invariance with respect to [[ExecutionTime]], [[DevelopmentTime]], or [[WallClockTime]]. Describing and/or enforcing the invariants of a software system can greatly ease understanding of its architecture and help [[Practitioner]]s reason about the likely effects of changes to the system.

## Examples

- In some [[Redux]]-based web applications that follow the [[ElmArchitecture]], a [[ProcessSpace]] invariant is that all [[State]] resides in the Redux store.