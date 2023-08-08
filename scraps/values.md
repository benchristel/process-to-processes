# Values: Data and Objects

In JavaScript (and TypeScript), the things that we can assign to variables are called _values_. Numbers, strings, arrays, objects, and functions are all types of values.

Some values are _mutable_ (changeable), and some are _immutable_. To see the difference, consider the following code:

```js
let a = ["sun", "stars"]
```

If we want to change the value that `a` refers to, we can of course assign a new value to the variable, with a statement like `a = ["duck pond"]`. But because JavaScript arrays are mutable, we can also change the "meaning" of `a` without using the `=` operator.

```js
console.log(a) // prints ["sun", "stars"]
a.push("moon")
console.log(a) // prints ["sun", "stars", "moon"]
```

Calling `push` changes what `console.log(a)` prints.

Strings, on the other hand, are immutable. When a variable refers to an immutable value like a string, we cannot change the meaning of that variable unless we use `=` to explicitly reassign it. Merely calling a method on the value won't change it, as we can see below:

```js
let s = "forest leaves"
console.log(s) // prints "forest leaves"
s.toUpperCase()
console.log(s) // prints "forest leaves"
```

The `toUpperCase` method returns a new string; it doesn't (and can't) modify the existing one. If we want to change the meaning of the variable `s`, we need to assign it a new value with `=`:

```js
s = s.toUpperCase()
console.log(s) // prints "FOREST LEAVES"
```

## Advantages of Immutability

In the example above where we mutated an array with `.push()`, it was pretty obvious what we were doing. However, consider the following:

```js
let a = ["sun", "moon"]
someComplicatedFunctionYourCoworkerWrote(a)
console.log(a) // What will this print?
```

What will this code print? It depends on whether `someComplicatedFunctionYourCoworkerWrote` mutates the array passed to it. When our values are mutable, it can be quite hard to tell what code will do, because mutation can be hidden under layers of function calls.

If, on the other hand, we are using strings or other immutable values, our code becomes much more predictable:

```js
let s = "sun and moon"
anotherComplicatedFunction(s)
console.log(s) // prints "sun and moon"
```

Immutability also helps ensure that we don't create bugs when we refactor code. Consider the following:

```js
function getUsername(user) {
  return user.username || "guest"
}
```

Because the string `guest` is immutable, we are free to extract it to a constant. We don't have
to worry that the caller of this function might mutate the value it returns and thus change the default username.

```js
const defaultUsername = "guest"
function getUsername(user) {
  return user.username || defaultUsername
}
```

If, on the other hand, we're returning a mutable value like an array, things are different:

```js
function getEmailAddresses(user) {
  return user.emails || []
}
```

Here, we're returning an empty array of emails if `user.emails` is null or undefined. If the caller mutates the array we return, that's their business; it won't affect subsequent calls to `getEmailAddresses`. However, if we extract a constant...

```js
const none = []
function getEmailAddresses(user) {
  return user.emails || none
}
```

Now we're returning the same array each time `getEmailAddresses` is called with a user whose `emails` property is null. If our caller adds an item to the returned array, it will change the meaning of `none` and affect every subsequent call to `getEmailAddresses`! Not only that, but the results of _previous_ calls may be affected if those return values are still referenced somewhere. This type of bug is called _spooky action at a distance_, and the thought that it might happen in your code ought to scare you. Bugs like this are often extremely hard to track down and fix.

<!--
If `anotherComplicatedFunction` needs to transform the value passed to it, it can simply return the updated value:

```js
let s = "sun and moon"
s = anotherComplicatedFunction(s)
console.log(s)
```
-->

## Choosing Immutability

We just saw that immutability has benefits: you can see exactly when the meaning of each variable changes, and you don't have to worry about "spooky action at a distance" bugs. But it's not practical to restrict ourselves to using inherently immutable values like strings and numbers. We have to be able to use arrays and objects to program effectively.

In order to get the benefits of immutability, we can simply promise ourselves not to mutate arrays and objects. If we trust each other to adhere to this policy, we can make simplifying assumptions when reading the code. For example, we can assume that functions won't mutate arrays or objects passed into them.

You might wonder if you shouldn't rather choose a programming language that enforces immutability, like Elm or Haskell. I actually recommend against this. Mutability can be extremely useful if approached in a structured and careful way. So in my view, it's actually preferable to have a cultural prohibition against mutability that is relaxed in specific circumstances. If you don't trust your coworkers to keep their promise not to mutate things, you have bigger problems than your choice of programming language. In future chapters, I'll talk about how to use mutable values without sacrificing comprehensibility.

## Objects and Data

In functional programming, the word _data_ is used to refer to immutable values of any kind. In this book, I'll stretch the term slightly to cover any values, including objects and arrays, that we're choosing to _treat_ as immutable.

The word _object_ presents difficulty, because there is an entire programming paradigm, _object-oriented programming_ (OOP), that relies substantially on mutability and assumes that at least some values are mutable. OOP attempts to make mutation more comprehensible by requiring all requests to read or update mutable state to go through _methods_. Methods are like functions attached to an object, which are responsible for keeping the object's state consistent and exposing only as much information as callers need. In the rest of this book, I will use the word _object_ to refer to a mutable OOP-style object, and the term _plain old JavaScript object_ (POJO) to refer to data created with the `{}` syntax, like `{foo: "bar"}`.

Here is a handy taxonomy:

```
values
- objects (mutable)
- functions
- data (immutable)
  - POJOs
  - arrays
  - strings
  - numbers
  - booleans
  - `null`
  - `undefined`
  - ...
```