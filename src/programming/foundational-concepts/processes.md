# Process and Processes

The title of this book, _Process to Processes_, refers to the twin facts that 1) all software is developed by some kind of _process_, and 2) the ultimate result of software development is a set of running _processes_ on one or more computers. Processes are the beginning and the end of software development, and they often show up in the middle, too. I will refer to the first type of process as a _development process_, and to the second type of process as a _software process_.

## Software Processes

A software process is the running instantion of a program. Programs are static data: bytes of code written to a file. Processes, by contrast, are dynamic, mercurial; real and yet intangible. In the same way that sheet music comes to life when an orchestra performs it, a program comes to life by directing the movements of a process.

```
program : computer : process :: sheet music : orchestra : concert
```

On a macOS or Linux system, you can list the currently running processes by running `ps aux` at a terminal.

A single program may give rise to many independent processes. If you have `node` installed on your computer, you can see that this is true by opening several terminal windows and running `node` in each one. Each time you run `node`, you get a JavaScript interpreter where you can type JavaScript statements and have them execute. These interpreters are independent. For example, variables that you define in one don't affect the others. The reason this is so is that each invocation of `node` produces a new process with its own _state_, its own memory of the things that have happened to it. Throughout all of this, the _program_ `node` is unaffected. The 86 million or so bytes in its file will remain unchanged no matter how many times you run it (though of course, they _will_ change if you upgrade it). 

Some modern operating systems, notably macOS, obscure the difference between programs and processes, by making _applications_ the primary user-facing concept. The operating system's user interface doesn't let you run multiple instances of an app simultaneously. However, this restriction is superficial: a matter of policy, not a limitation of the underlying mechanism, which is still "everything is a process". If you try hard enough, you can run e.g. multiple instances of Firefox on macOS.

## A Definition of "Process"

Operating system processes are quite complicated due to features like shared memory and threads. When writing JavaScript, though, we don't have to think about these complications. We can reason about our software processes in a more abstract way. In this section, we will refine a definition of "process" that is a suitable description of the life of a running JavaScript program. Incidentally, we can base this simpler definition of "process" on the concept of a Turing machine, which is perhaps *the* foundational concept of all of computer science. So we're on fairly solid ground here.

### Turing Machines

TODO: definition of Turing machine

A system that is capable of simulating a Turing machine is said to be _Turing complete_, and is provably capable of computing anything that can be computed. In reality, _no_ system can ever be Turing complete, because true Turing completeness requires infinite memory. In practice, though, we usually hand-wave this away and refer to systems as Turing complete if they _would_ be so given infinite memory and perfectly reliable hardware.

### An Aside on Turing Completeness

When I first learned about Turing completeness, the concept bothered me because it seemed to have little relationship to the *practical* capabilities of a system. For example, one of my teachers mentioned that SQL is Turing complete. "Does that mean you can write graphical user interfaces in SQL?" I wondered. The answer to this question, frustratingly, turns out to be "it depends, but in general, no, because the environments in which SQL code runs (e.g. databases) don't provide any facilities for creating windows or graphical widgets". I didn't fully understand how this could be. _Computers_ can create graphical user interfaces, clearly. SQL is Turing complete, so it can compute anything that can be computed. Why can't it do everything a computer can do? Why can't it create a GUI?

The distinction I was missing was that between _computation_, which occurs within a process, and _effects_, which are enabled by the _environment_ where the process runs. We'll explore this distinction in much more detail in later chapters, but for now, note the following properties of Turing machines:

- Turing machines get all their input in the form of symbols on the tape, and all the input must be on the tape when the machine starts. Turing machines can't, for instance, call web services or prompt a user for input. In fact, Turing machines have no concept of users, web services, or any other real-world entities—not even computers—because they are purely abstract, mathematical objects. The "tape" of a Turing machine is a convenient metaphor.
- Turing machines produce all their output as symbols on the tape, too. There is no `console.log` or graphical display on a Turing machine. To read the result of a computation from the tape, you simply have to know where to look, and what the symbols mean.

### Deterministic Processes

A *deterministic process* is a sequence of _states_, defined by an initial state, S<sub>0</sub>, and an _algorithm_ that obtains the (n+1)<sup>th</sup> state, S<sub>n+1</sub>, from the n<sup>th</sup> state, S<sub>n</sub>. Each state is a _value_, which you can think of as a bundle of information—or, if you like, as a data structure. The sequence of states in a deterministic process is infinite. A deterministic process is said to _halt_ if it ends with one state repeating infinitely (note that if a state appears twice consecutively, it will repeat forever after that). If the process eventually repeats some sequence of states with length > 1 (i.e. enters a nontrivial infinite loop), we say it _crashes_.

The following TypeScript function evolves a deterministic process until it halts, by repeatedly calling `next` on the current state to obtain the next state.

```ts
function evolve<State>(initialState: State, next: (s: State) => State): State {
  let state = initialState
  while (!equal(state, next(state))) {
    state = next(state)
  }
  return state
}
```

<!--
But what exactly *is* a process? We have an intuitive notion of what a *development process* is, abstracted from examples like Scrum, Extreme Programming, and Waterfall. A development process tells you what steps to follow to make software. We also use the word "process" to mean the running instantiation of a _program_. We can list the running *processes* on a macOS or Linux computer using the `ps aux` command. Is there some notion of a process that is general enough to cover both of these senses of the word? I think there is.

## Definition of "Process"

A process is a sequence of _states_, defined by an initial state, S<sub>0</sub>, and an _algorithm_ that obtains the (n+1)<sup>th</sup> state, S<sub>n+1</sub>, from the n<sup>th</sup> state, S<sub>n</sub>. You can think of each state as a bundle of information—or, if you like, as a data structure. The sequence of states in a process is potentially infinite.

Let's first look at how this definition applies to software processes. Suppose we have the following JavaScript program:

```js
let i = 1;
while (i < 10) {
  i++;
}
```

There is one variable in this program, `i`, so we can model the state of the process it generates as a data structure holding a number and some indication of which line of the program will be executed next. Something like this (TypeScript):

```ts
type State = {i?: number, nextLine: number}
```

When our program starts running, the initial state is (conceptually):

```js
state = {i: undefined, nextLine: 1}
```

The first line of the program sets `i` to `1`. After that line executes, our state is:

```js
state = {i: 1, nextLine: 2}
```

The second line of the program checks whether `i` is less than `10`, continuing at line 3 if so and at line 4 if not. In this case, `i` *is* less than `10`, so we go to line 3. The next state is:

```js
state = {i: 1, nextLine: 3}
```

Line 3 increments `i` and loops back to line 2.

```js
state = {i: 2, nextLine: 2}
```

On line 2, we perform the check again; `i` is still less than 10, so we go back to line 3.

```js
state = {i: 2, nextLine: 3}
```

The state keeps evolving as we go around and around the loop. Eventually, `i` reaches 10. Here's what the state looks like immediately after `i` is incremented to 10 on line 3:

```js
state = {i: 10, nextLine: 2}
```

Back on line 2, the `i < 10` comparison evaluates to `false`. We go to line 4.

```js
state = {i: 10, nextLine: 4}
```

Line 4 is the end of the program, so each subsequent state in the process will be the same as the current one. Our process has *halted*.

This precise definition of a process isn't a perfect fit for either *software processes* or *software development processes*, though the nature of the misfit is different in each case.

The definition doesn't perfectly apply to software processes because the state of a software process can be changed by an intervention from outside the process (e.g. an _interrupt_, or the result of a _system call_). So the process's algorithm doesn't fully determine the sequence of states.

-->