The non-diegetic [[State]] of a [[System]] is state which is outside the control and awareness of the system, but is externally visible. Non-diegetic state is usually metadata about the system's [[DiegeticState]].

For instance, imagine a text editor that implements "undo" and "redo" commands. While invoking "undo" does revert some of the state of the editor to its previous value, the state of the editor as a whole is not reverted: the undone command is pushed onto the redo stack. We can draw a [[SystemBoundary]] around the part of the editor's state that _is_ reverted; with respect to that system, the undo and redo stacks are non-diegetic state.

[[TheEyeCannotSeeItself]]

---

Alan Turing distinguished between the diegetic and non-diegetic state of a Turing machine, though he didn't use the word "diegetic".

From [Wikipedia](https://en.wikipedia.org/wiki/Turing_machine):

> Turing (1936) made a strong distinction between a record of what he called the machine's "m-configuration", and the machine's (or person's) "state of progress" through the computation—the current state of the total system. What Turing called "the state formula" includes both the current instruction and all the symbols on the tape:
>
> >   Thus the state of progress of the computation at any stage is completely determined by the note of instructions and the symbols on the tape. That is, the *state of the system* may be described by a single expression (sequence of symbols) consisting of the symbols on the tape followed by Δ (which is supposed to not to appear elsewhere) and then by the note of instructions. This expression is called the "state formula".
> >
> > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— The Undecidable, pp. 139–140, emphasis added
