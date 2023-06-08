# Values and Objects

Consider JavaScript.

In JavaScript, a number like `3` is a _value_. So is a string like `"Hello, world"`.
So are `true`, `false`, `null`, and `undefined`.

To be a value, a thing must have two properties:

1. Values must be immutable; after we create it we aren't allowed to change it. Note
  that we're talking about _values_ and not _variables_. In the following code,
  we reassign a new value to the variable `a`, but no values are mutated:

  ```js
  let a = 1
  let b = 2
  let c = a
  a = a + b
  ```

  After the `a = a + b` statement, the variable `a` refers to the value `3`. But that's
  not because we somehow turned `1` into `3`, but because we assigned a whole new value
  to `a`. The value of `c` is still `1` after the reassignment.

2. Values must be comparable to other values for equality. Two values that contain
  the same information must compare equal; values that contain different information
  must compare unequal. In JavaScript, we can use `===`, or its negation `!==`, to compare values.

  ```js
  1 === 1        // true
  1 !== 2        // true
  true === true  // true
  false !== true // true
  1 !== true     // true
  null === null  // true
  "hi" === "hi"  // true
  "hi" !== "bye" // true
  ```

## Objects

Not everything is a value in JavaScript. Some things are _objects_. Objects differ from
values in that they are mutable:

```js
let obj = {a: 1}
obj.a = 2
obj.a === 2 // true
```

The statement "x is mutable" only makes sense if x has an _identity_ that links together its
various "versions". Whenever an _object literal_ like `{}` or `{a: 1}` is evaluated in JavaScript, a new object is created with its own identity.

Because objects are mutable, it doesn't make sense to compare objects the same way we
compare values. Two objects that hold the same information might not be equal according
to `===`.

```js
let first  = {a: 1}
let second = {a: 1}
first !== second // true
first === first  // true
```

The `===` operator compares objects by _identity_.

## Are Arrays Objects?

In JavaScript, the word "object" is often used to refer to the type of thing you'd
create by writing curly braces with properties in between. Technically, arrays
are also objects.

```js
typeof Array === "object" // true
```

Arrays are mutable in JavaScript, and are compared by identity when you use `===` on them,
so according to the definition above, they are objects.

To avoid sowing confusion, I will refer to entities created with the `{}` syntax as _plain old JavaScript objects_ or _POJOs_ throughout the rest of this book. I will use the term "object"
to mean any mutable entity, but if I'm referring specifically to an array I will call it an array. To do otherwise would just be confusing.

## Viewing POJOs and Arrays as Values

In many programming languages, the equivalents of POJOs and arrays are values, not mutable objects. This is often very convenient. It would be nice if we could say:

```
// this is wishful thinking
let a = {a: 1}
let b = {a: 1}
a === b
```

and have `a === b` evaluate to `true`. Having to think about object identity makes reasoning about our programs more complicated. Whenever we mutate an object, we have to think "is some other code holding a reference to this object? Will that code still do what we want if we change the object?"

Although POJOs and arrays are not technically values, I will be treating them as if they are throughout most of this book. We can treat POJOs and arrays as if they are values if we
accept the following constraints:

- Once we have created a POJO or array, we promise ourselves not to mutate it.
- When we compare POJOs or arrays, we always do so with an `equals` function that recursively compares their contents. We don't use `===` on POJOs or arrays.


