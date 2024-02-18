A **closure** is an instance of a [[Routine]]. While routines are a [[Static]] (source-code) concept, closures are a [[Dynamic]] (runtime) concept. An analogy to [[ObjectOrientedProgramming]] might help here: closures are to routines as objects are to classes. Indeed, one way to [View](36Views) closures is that they are like objects that have a single [[Method]], `call(...arguments)`. Some languages (notably Java) implement closures in exactly this way.

A closure retains a reference to the [[LexicalScope]] in which it was instantiated. It can generally read variables within that scope (and reassign them, too, in some languages).

## Understanding Closures

Closures are an inherently difficult concept to learn, because they require you to mentally manipulate objects and concepts that don't correspond one-to-one with syntactic forms in the source code.  However, closures are so essential to an understanding of complex programs that it pays to master the concept early on. Many programmers' first exposure to closures is in JavaScript, so I'll use JavaScript examples here.

The first key thing to understand is this: **the `function` keyword in JavaScript creates a new closure when it executes, just as the `{}` object syntax creates a new object, or `[]` creates a new array.** Arrow-function syntax (`() => {}`) also creates a closure in exactly the same way.

Why do we care when a new closure gets created, though? In order to understand why this is important, we need to look at how closures interact with variables.

Closures are easiest to grasp if we first look at how they work in the absence of [[VariableReassignment]]. Take a function like `getMessage()`, below:

```js
const message = "Hello, world!"
function getMessage() {
  return message
}
```

You can probably guess what `getMessage` does: it always returns `"Hello, world!"`. The interesting thing about it is that in order to do this, it references a [[Constant]] defined outside itself (in the language of this wiki, a [[FreeConstant]]).

A useful mental model for reasoning about this program is what Abelson, Sussman, and Sussman in [[StructureAndInterpretationOfComputerPrograms]] call the [[SubstitutionModel]]. The first rule of the substitution model is that we can replace the name of any constant with the value of that constant. If we replace `message` with its value, we get:

```js
const message = "Hello, world!"
function getMessage() {
  return "Hello, world!"
}
```

This is not a particularly interesting example, because the `getMessage` function is declared at the top level. That means there will only ever be one closure instantiated from this function, because the code that defines it is only executed once.

Here's a more complex example:

```js
function makeGreeter(message) {
  function greet() {
    return message
  }
  return greet
}

const spanish = makeGreeter("Hola")
const english = makeGreeter("Hello")

console.log(spanish()) // logs "Hola"
console.log(english()) // logs "Hello"
```

Here, we have a `makeGreeter` function that returns a closure instantiated from the `greet` function. You can think of the `function` keyword in JavaScript as creating a new closure when it executes, in much the same way as the `{}` object syntax creates a new object, or `[]` creates a new array. So in this program, line 2 creates a new closure instance, which gets returned from `makeGreeter` on line 5.

We can apply the substitution model to this code, too. The second rule of the substitution model is that whenever we see a function call, we can replace it with the value that the function would return given those arguments. Applying the rule to `spanish` and `english`, we get:

```js
function makeGreeter(message) {
  function greet() {
    return message
  }
  return greet
}

const spanish = function greet() {
  return "Hola"
}
const english = function greet() {
  return "Hello"
}

console.log(spanish())
console.log(english())
```

This example is interesting because we call `makeGreeter` twice with different arguments. Each time, we get back a new closure, and those closures do different things—they return different messages. This is very similar to having our `makeGreeter` function return an object:
```js
function makeGreeterObject(message) {
  const greeter = {
    message: message
  }
  return greeter
}

const spanish = makeGreeterObject("Hola")
const english = makeGreeterObject("Hello")

console.log(spanish.message)
console.log(english.message)
```

Here, we get a new object from each call, and the objects' properties can have different values. In just the same way, we get a new closure each time we call `makeGreeter` in the previous example, and those closures can have different behavior.

Note, though, that the substitution model is not a complete model of how closures work in JavaScript. It only works if objects are never mutated and variables are never reassigned. If we introduce variable reassignment to the greeter example, things get pretty mind-bending:

```js
function makeGreeter(message) {
  function greet() {
    return message
  }
  function setMessage(newMessage) {
    message = newMessage
  }
  return {
    greet: greet,
    setMessage: setMessage,  
  }
}

const greeter = makeGreeter("Hello")
console.log(greeter.greet()) // logs "Hello"
greeter.setMessage("Hola")
console.log(greeter.greet()) // logs "Hola"

const french = makeGreeter("Bonjour")
console.log(french.greet()) // logs "Bonjour"
console.log(greeter.greet()) // still logs "Hola"
```

Here, we're returning an object from `makeGreeter` as a convenient way of returning two closures.

Now, the return value of each `greet` closure depends on whether anyone has called the `setMessage` closure returned from the same `makeGreeter` call. Every time we call `makeGreeter`, we get a different pair of `greet` and `setMessage` closures.

How can we reason about this program? The key to seeing what's going on here is to imagine how the [[CallStack]] grows and shrinks as our program runs.

Consider the call `makeGreeter("Hello")`. To execute this code, the computer pushes a new frame onto the stack with room for the `message` variable. It assigns `message` the value `"Hello"`. Then it starts executing the code in the `makeGreeter` function. It instantiates a new closure from the `greet` function, and—this is the key point—**that closure has access to the stack frame in which it was created**. That is, it can get and set the `message` variable.

The weird thing here is that although when `makeGreeter` returns, its stack frame is popped, the stack frame doesn't disappear. It gets moved to another area of memory, and **the closures created by `makeGreeter` still have access to it**. The stack frame is like an invisible "ghost object" that's kept floating around, accessible only through the closure functions.

Is this a memory leak? Potentially, if the closures stick around forever. But if the closures are no longer referenced anywhere, they will be garbage-collected, and any "ghost" stack frames they reference will be cleaned up too.

## Nested Closures

TODO
