# Creation and Destruction

There are two great pleasures in programming: writing pristine, new, _greenfield_ code, and deleting code. The opportunity to create or destroy is treasured because it is rare. Most of the time, we're not creating or destroying, but _changing_ code—making small modifications in the innards of an existing program.

It is possible to build more creation and destruction into our software-making process, in a few ways:

- We can add new functionality to a program by putting it in a new module, and calling it from an existing module, instead of building it directly into old code.

- If our modules are sufficiently small and single-purpose, it is more likely that c

I like to view programs as immutable data structures. We can conceptualize changes to a program as throwing away the old program and creating a new one, which is a copy of the old but with a few small modifications. Still, this isn't very satisfying—it certainly doesn't feel like we're deleting a bunch of code and writing it afresh when we change an existing program.

The problem is that the changes we make are small compared to the pieces of the program (functions, classes, or modules) in which they're embedded. When changes are e