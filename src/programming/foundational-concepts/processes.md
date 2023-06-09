# What is a Process?

In this book, I use the word _process_ to mean "a sequence of changes to some part of the world, that proceeds according to invariant rules". We'll call the part of the world that a process changes the _state_ of the process. The rules that a process follows to get from one state to the next I'll call a _program_. Each _step_ in a program takes the current state of the process and transforms it—often just a tiny bit—to get to the next state. Though each step may be small, a long sequence of steps can produce intricate structures or perform complex calculations.

Processes are interesting and useful because they give us a way to carry out very complex tasks with limited computational or mental resources. The machinery that performs each step tends to be restricted in some dimension: perhaps it has limited built-in memory, or a limited amount of time to perform each step. Perhaps the machinery is divided up into many parts that each act on a corresponding part of the state, and can only communicate with each other in limited ways. By recording information in the state for later use, the machinery is enabled to do its job.

Processes are everywhere. One everyday example of a process is pen and paper arithmetic. Most of us don't have the mental machinery to be able to multiply two ten-digit numbers in our heads, but by writing down the problem and performing a series of mechanical _steps_ on that written _state_, we can reliably solve such problems.

Another example of a process is baking bread. When kneading dough, in particular, there is feedback from the dough to the baker; the process of kneading cannot be done insensitively if you want the result to be good. You need to assess the texture of the dough at every step, and continue adding flour just until the texture is right.

In both of these examples, note the key fact that the current state of the process informs the next step. This idea—that the state feeds back into the development of the process—is common to all processes.

## Software Processes

A software process is the running instantiation of a program. Programs are static data: bytes of code written to a file. Processes, by contrast, are dynamic, mercurial; real and yet intangible. In the same way that sheet music comes to life when an orchestra performs it, a program comes to life by directing the movements of a process.

```
   program     : computer  : process
:: sheet music : orchestra : concert
```

On a macOS or Linux system, you can list the currently running processes by running `ps aux` at a terminal. A new process is created every time you run a program. For example, if you run `node` to start a JavaScript REPL, that creates a process. A single program can give rise to multiple concurrent processes. For example, if you open multiple terminal windows, you can run `node` in each one. The program `node` is unaffected by this; it remains, unchanging, on disk. The several _processes_ instantiated from the program are identified (by the operating system) by different process IDs (PIDs), each associated with an independent _state_. The operating system arranges things so that each process's state evolves according to the rules of its program. (Note: this model of how processes work is extremely simplified, but it is adequate for the purposes of writing JavaScript.)

One way to understand code is to "simulate", in our heads, the process it produces. I put "simulate" in quotes because this "simulation" _is_ a real computational process. A mental process can perform useful computational work just as a silicon-based one can, as we can see in the following example:

```js
const plain  = "abcdefghijklmnopqrstuvwxyz"
const cipher = "nopqrstuvwxyzabcdefghijklm"

function caesarCipher(s) {
  let result = ""
  for (const char of s) {
    result += cipher[plain.indexOf(char)] ?? char
  }
  return result
}

let deciphered = caesarCipher("terng juvgr junyr")
```

If you can simulate in your head (or on paper) the process of running this code, you will obtain the knowledge of what the ciphertext `"terng juvgr junyr"` means, just as well as if you had run the program on a computer. The mental process is _equivalent_ to the computerized one—though it is quite a bit less efficient.

This is not true for every program, however. Consider this one:

```js
function showDate() {
  document.write(new Date())
}

showDate()
```

The purpose of this program is to display the current date and time on an HTML page. We can only simulate its process in our heads at a very abstract level, by imagining potential times that it might display and what they would look like on a computer screen. Whereas the mental process for the `caesarCipher` function could proceed very concretely, and produce actual knowledge, our mental process for `showDate` cannot produce the knowledge or the effect that the program would produce when run on a computer. We can't pluck knowledge of the current time out of thin air, nor can we telekinetically project text into our web browser. Thus, the process of mentally simulating this program is fundamentally incommensurate with the process produced by running it on a computer.

It seems that there are two types of processes:

1. Those that can produce their intended result when carried out mentally.
2. Those that can't.

What causes a process to belong to one or the other of these categories? Processes of the first type deal only with _symbol manipulation_, while processes of the second type need computer _hardware_ to do their job. For example, the `showDate` program is only useful if our computer has a display and an internal clock.

I will call proceses of the first type (and their corresponding programs) _symbolic_. I'll call processes and programs of the second type _effectful_, because they have _effects_ on (and are affected by) the outside world via the computer's hardware. Examples of _effects_ include:

- reading or writing a file
- displaying text or graphics
- receiving input from a mouse, keyboard, touchscreen, camera, or other device
- controlling a robot
- making network calls, e.g. HTTP requests
- communicating with other processes
- getting the current time
- generating random numbers
- waiting or sleeping

## Symbolic Code Works The Same Everywhere

The great thing about purely symbolic code is that it does the same thing everywhere, every time.
Symbolic processes aren't dependent on the operating system version, the state of the user's files, the current time or timezone, or services running on some other computer (a.k.a. "the cloud"). There are no
"works on my machine" bugs in purely symbolic code.

Consider the following fragment of a NodeJS program, which reads a config file if it exists, and creates it if not.

```js
// TODO: fix pseudocode
const configFilename = ".myconfig"
function readConfig() {
  fs.exists(configFilename).then(() => {
    return fs.readFile(configFilename, "utf-8")
  }).catch(() => {
    return fs.writeFile(configFilename, defaultConfig, "utf-8")
      .then(() => defaultConfig)
  })
}
```

This handles two of the possible cases, but leaves out many others. What if `.myconfig` is a directory, not a regular file? What if it exists, but isn't readable? What if the file doesn't exist, and the user doesn't have write permissions for the directory in which this program would be created?

While these edge cases might be rare, they are likely to create frustration for users and programmers alike. When users encounter such issues, their experience will simply be that the program "doesn't work". Programmers fielding bug reports probably won't be able to reproduce the bug on their machine. Everyone suffers.

Consider an alternative design where the program reads its configuration through command line arguments instead of a file:

```js
function readConfig() {
  return process.argv.slice(2)
}
```

This code is purely symbolic: If you pass the same command-line arguments, the program's configuration will be the same, on any system. This code avoids the "works on my machine" bug.

You might argue that command-line arguments provide a worse user experience than a config file. While this depends on the situation and the user, there are certainly cases where I would agree with this criticism. The idea I'd like you to take away from this chapter is not "effects are evil" but "effects have risks and costs". It's up to you and your team to weigh the risk and cost of an effect against the benefit, and treat effectful code with the extra care it deserves.

## Symbolic Code Is Easier to Test

## Symbolic Code Is Easier to Reuse

<!--
## Effectful Code Is Hard to Reason About

Consider the fact that, as programmers, we often "run code in our heads" to figure out what it will do when run on a computer. This is much easier to do for portions of the program that are purely symbolic. The following NodeJS program illustrates the kinds of issues that can happen in effectful code:

```js
import * as fs from "node:fs/promises"

async function writeToUniquelyNamedFile(text) {
  const id = await fs.readFile("next-id", {encoding: "utf-8"})
    .then(parseInt)
    .catch(() => 0) // Default the ID to 0 if the next-id file doesn't exist

  await Promise.all([
    fs.writeFile(String(id), text, {encoding: "utf-8"}),
    fs.writeFile("next-id", String(id + 1), {encoding: "utf-8"}),
  ])
}

const strings = [
  "Hello, world!",
  "Tea and cookies",
  "Walrus-feeding time",
]

for (const s of strings) {
  await writeToUniquelyNamedFile(s)
}
```

This program defines a function `writeToUniquelyNamedFile` that attempts to generate unique
filenames by incrementing an ID that is itself stored in a file. As written, the program (mostly) works as intended. However, problems arise if we try to make the program more efficient by doing the writes concurrently. Suppose we change the final stanza of the program from this:

```js
for (const s of strings) {
  await writeToUniquelyNamedFile(s)
}
```

to this:

```js
await Promise.all(strings.map(writeToUniquelyNamedFile))
```

Now the program is broken; each call to `writeToUniquelyNamedFile` will now read the _same_ ID from the `next-id` file, and the writes will clobber each other.

You might say that this problem is due to the combination of concurrency and state, not effects _per se_. However, because JavaScript is single-threaded, concurrency and state are a much less volatile combination than they are in multi-threaded languages. The following code, which keeps track of the next ID using an in-process variable, works regardless of whether the writes happen serially or in parallel:

```js
import * as fs from "node:fs/promises"

let nextId = 0

async function writeToUniquelyNamedFile(text) {
  await fs.writeFile(String(nextId++), text, {encoding: "utf-8"})
}

const strings = [
  "Hello, world!",
  "Tea and cookies",
  "Walrus-feeding time",
]

await Promise.all(strings.map(writeToUniquelyNamedFile))
```

When we read effectful code, we have to think about not only the state of _our_ process, but the state of the hardware, the OS, and the other processes with which ours communicates. When our programs are complex, this gets very tricky!



<!--

The processes listed by `ps aux` are what I'll call _operating system processes_; the abstract idea of a _software process_ is more general. Operating system processes are _Turing complete_, so an OS process can simulate any number of other processes—it can even simulate a whole operating system! We can think of `node` as being just such a process simulator. `node` processes can perform any number of tasks, from serving web requests to compiling TypeScript, by reading in the source code of a JavaScript program and then "simulating" the evolution of a process instantiated from that program. I put "simulating" in quotes because these "simulated" processes can do quite real and useful work!

We can go one level further, and create our own simulated processes within a JavaScript process. The mechanism JavaScript provides for this is _generator functions_. Here is an example of a generator function:

```js
function *greetForever() {
  let n = 0
  while (true) {
    console.log("Hello, world " + n + "!")
    n++
    yield
  }
}
```

The `*` before the function name makes `greetForever` a generator function. If we call `greetForever`, it does not enter an infinite loop, but simply returns a process-like object that JavaScript calls a `Generator`.

```js
const process = greetForever()
```

How do we actually run this process? We can call the `next()` method on it:

```js
process.next()
```

This causes the generator function to run until execution reaches a `yield` statement. Once a `yield` statement is reached, the process pauses execution, and the call to `next()` returns.

The visible effect of calling `process.next()` is that it logs `Hello, world 0!`. Internally, it also increments the `n` variable (part of the process's _state_). If we call `next()` again, it will log `Hello, world 1!`, and so on.

There is more to learn about generator functions in JavaScript, but it can wait for future chapters.

## Deterministic Processes

## Process to Processes

The title of this book, _Process to Processes_, refers to the twin facts that 1) all software is developed by some kind of _process_, and 2) the ultimate result of software development is a set of running _processes_ on one or more computers. Processes are the beginning and the end of software development, and they often show up in the middle, too. I will refer to the first type of process as a _development process_, and to the second type of process as a _software process_.

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