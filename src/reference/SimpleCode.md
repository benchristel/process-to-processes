The word **simple**, applied to code, is often a [[SynonymForGood]]—that is, it often means little more than "understandable" (or sometimes "efficient"). I have a somewhat more precise definition.

By "simplicity", I mean the kind of simplicity demanded by [[OccamsRazor]]. Code is simple when it contains no extraneous non-uniformities or "wrinkles". In simple code, every wrinkle is necessary; smoothing out any wrinkle would have some demonstrable bad effect on the code's [[Behavior]]. Ideally, there should be [[UnitTest]]s that actually demonstrate this.

## Complications

A statement is more complicated than the absence of a statement.

```js
// Simple, but wrong. Note, though, that this will pass
// a test like `expect(firstOf([])).toBe(undefined)`.
function firstOf(array) {}

// Could be simpler: the const is unused
function firstOf(array) {
  const first = array[0];
  return array[0];
}

// Simple and correct.
function firstOf(array) {
  return array[0];
}
```

A parameter reference is more complicated than a constant reference.

```js
// Simple, but wrong. `at` is supposed to return the element at the given index
function at(index, array) {
  return array[0];
}

// This complication is needed:
function at(index, array) {
  return array[index];
}
```

A variable reference is more complicated than a parameter reference.
By "variable" I mean a binding that gets reassigned like a `let` or mutable object property.

```js
// Simple, but wrong. This counter doesn't count, though it will pass any tests
// that only call `add()` once.
function Counter() {
  let currentValue = 0
  return {
    add(increment) {
      currentValue += increment;
      return increment;
    }
  };
}

// This complication is necessary to pass tests that call `add()` more than once.
function Counter() {
  let currentValue = 0;
  return {
    add(increment) {
      currentValue += increment;
      return currentValue;
    }
  };
}
```

A conditional expression is more complicated than an unconditional one.

```js
// Not simple. The initial guard clause is not needed, because `some` returns
// false when called on an empty array.
function containsAVowel(word) {
  if (word === "") {
    return false;
  }

  return characters(word).some(isVowel);
}

// Simple.
function containsAVowel(word) {
  return characters(word).some(isVowel);
}
```

Recursion is more complicated than the absence of recursion.
By "recursion" I mean to include all forms of iteration.

```js
// Relatively simple.
function parseColumns(row) {
  return row.split(/\s/g);
}

// Adding a + to the regex makes the code more complicated,
// but might be necessary depending on the use case.
function parseColumns(row) {
  return row.split(/\s+/g);
}
```

A type with more possible values is more complicated than a type with fewer.
An object with more possible states is more complicated than an object with fewer.

```js
// With only `push` and `size` methods, the Stack only needs a `#size` variable
// to keep track of its internal state. It doesn't need to remember the
// items that were pushed.
class Stack {
  #size = 0;

  push(item) {
    this.#size++;
  }

  size() {
    return this.#size;
  }
}

// Once `pop` is added and required to return the last `item`, more complicated
// internal state is warranted.
class Stack {
  #items = [];
  
  push(item) {
    this.#items.push(item);
  }

  pop(item) {
    if (this.#items.length === 0) {
      throw new Error("cannot pop empty stack");
    }
    return this.#items.pop(item);
  }

  size() {
    return this.#items.length;
  }
}
```