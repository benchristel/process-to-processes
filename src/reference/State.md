State is whatever can change as a function of some notion of [[Time]], whether [[ExecutionTime]] or [[WallClockTime]].

A [[Process]] may have [[DiegeticState]] which is explicitly represented in the [[Program]] and manipulated by the process. Processes also have [[NonDiegeticState]] (such as the instruction pointer) which is not explicitly represented and can't be reflected on by the program (because such reflection would necessarily change the very state it is trying to observe).

Within a [[Process]], state resides in [[Variable]]s. State can be [[ProcessGlobalState]], meaning its variables retain their values and can be [[Access]]ed for the entire lifetime of the process, or it can be [[LocalState]], which only remains accessible for some portion of a process's life.

[[LocalState]] may reside on the [[CallStack]], or in [[Closure]]s on [[TheHeap]]. Heap storage is more difficult to formalize and reason about, as evidenced by the intricacies of garbage collectors and the sprawling discussion on the [[Routine]] page.

State also exists outside the process, and this type of state can be accessed via [[SystemCall]]s. I consider this type of state to be different from [[ProcessGlobalState]], since all possible changes to the latter can be grokked by inspecting the program, while changes to process-external state cannot be predicted by inspecting the program.