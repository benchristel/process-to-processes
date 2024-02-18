A system call introduces non-determinism into a [[Process]] by pausing the deterministic execution of its code and yielding control to the [[RuntimeEnvironment]] (ultimately, an [[OperatingSystem]] or sometimes the bare [[Hardware]]), which then _does stuff_ in the outside world, possibly modifies the process's [[State]] to give it information obtained by _doing the stuff_, and (usually) resumes deterministic execution. System calls are encoded in the program and so occur at predictable [[ExecutionTime]]s (as opposed to, say, [[Interrupt]]s, which also introduce non-determinism).

Examples of actions that usually invoke system calls include:

- reading or writing a file
- getting or sending data over a network
- getting the current time
- generating a random number (though pseudorandomness can be achieved without system calls, by seeding a random number generator like a [[MersenneTwister]] with in-process [[State]])
- writing to the user's terminal or drawing graphics on the screen
- reading input from the user
- sleeping

I don't consider system calls to be a variant of [[ProcessGlobalState]] manipulation because they access state that can change for reasons not discoverable by inspecting the source code of the program. See also the discussion on [[State]].