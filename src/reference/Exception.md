[Eric Lippert classifies exceptions](https://ericlippert.com/2008/09/10/vexing-exceptions/) into _fatal_, _boneheaded_, _vexing_, and _exogenous_.

- **fatal**: the exception will kill your process and there's nothing you can do (e.g. out of memory)
- **boneheaded**: a programmer goofed, and something totally preventable went wrong. Usually a sign of bad design. I like to use [[AlgebraicType]]s to rule out boneheaded exceptions at compile time.
- **vexing**: a [[Routine]] threw an exception even though the error case is a totally expected one. This is a design smell. It's usually more civilized for the routine to signal the error some other way, e.g. `Optional<T>`. [[Parser]]s often throw vexing exceptions.
- **exogenous**: the error originates from another [[Process]] or [[Service]] outside your control.

I rather like this scheme—with one addition: exogenous errors should not be handled by domain code, since they originate from infrastructure. See [[CheckedException]].