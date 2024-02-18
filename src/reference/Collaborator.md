The collaborators of an [[Object]] are the objects to which it may send [[Message]]s *and to which there are references in other scopes*.

The second part of this definition is important. If there are no references to an object's collaborators elsewhere in the program (which can only happen if the "collaborators" are created by the object and never passed elsewhere), there's no need to think of them as collaborators: from an external perspective, they are simply part of the internal state of the object (note that this assumes the particular definition of [[Object]] given on this wiki; that is, an Object's "methods" must be true [[Method]]s and may not be [[Procedure]]s)

Having collaborators thus means that an object shares mutable state with some other part of the program. [[CollaboratorsConsideredHarmful]].

