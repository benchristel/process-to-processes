# Clarity

One of the most powerful ways to make code verifiably correct is to make it *clear*.

Code is clear when:

- We can see what its author meant it to do, by reading it.
- We can easily assess whether the code actually does what it's supposed to.

Clarity is, in theory, orthogonal to correctness. It's possible for code to be clear but not correct, or correct but not clear. However, the two qualities are often found together, because when code is clear it's much easier to make it correct.

## Simplicity

Code can help us understand its author's intent in many different ways. The most commonly cited are:

- Variable and function names.
- Comments.
- Unit tests. Tests document, in machine-executable form, the possible inputs to the code that the author anticipated. They also verify that the code's output in response to those inputs is what the author wanted.

However, the most powerful way to make code communicate intent is to make it [simple](simplicity.html). People have different definitions of what "simple" code is, but I have a very specific definition in mind. In simple code, every conditional, iteration statement (e.g. loop), and mutable variable or value is there for a demonstrable reason—preferably actually demonstrated by a test. None of these "complications" can be eliminated without rendering the code incorrect.

Some programmers seem to believe that simplifying code means eliminating abstractions—that is, minimizing the number of function and class definitions. While I think that reducing abstraction is sometimes the right move, that's not what I mean by simplicity. The question of whether a given abstraction hurts or helps the code as a whole is separate from simplicity.

### An Example of Complicated vs. Simple Code

The value of simplicity is perhaps best demonstrated by example.

<!--

Suppose we are writing a program that needs to extract JSON-style quoted strings
from its input. These strings are enclosed in double quotes, and within the
string, double quote and backslash characters must be escaped by a preceding
backslash.

Here is some complicated JavaScript that finds the first such string given some input
text. Don't worry if you don't understand what it's doing. The point is, it's hard to
understand. It was a pain in the butt to write, too.

```js
function firstQuotedString(input) {
  const startIndex = input.indexOf('"')
  if (startIndex === -1) {
    return undefined
  }
  let scanIndex = startIndex
  let endIndex = 0
  while (endIndex !== -1) {
    endIndex = input.indexOf('"', scanIndex + 1)
    if (endIndex === -1) {
      return undefined
    }
    let backslashCount = 0
    for (let i = endIndex - 1; i > 0; i--) {
      if (input[i] === "\\") {
        backslashCount++
      } else {
        break;
      }
    }
    if (backslashCount % 2 === 0) {
      return input.slice(startIndex, endIndex + 1)
    } else {
      scanIndex = endIndex
    }
  }
}
```

Here is some simple code that does the same thing:

```js
function firstQuotedString(input) {
  return firstMatch(/"(\\.|[^\\"])*"/, input)
}

function firstMatch(regex, string) {
  return string.match(regex)?.[0]
}
```

Perhaps you think regular expressions are cheating. Here's a relatively
simple version that implements the same regex match logic by hand:

```js
function firstQuotedString(inputString) {
  const input = new Reader(inputString)
  let result = undefined
  
  let nextChar
  while (nextChar = input.read()) {
    if (result === undefined) {
      if (nextChar === '"') {
        result = '"'
      }
    } else {
      if (nextChar === '"') {
        return result + nextChar
      } else if (nextChar === "\\") {
        result += nextChar + input.read()
      } else {
        result += nextChar
      }
    }
  }
}

class Reader {
  constructor(input) {
    this.input = input
    this.nextIndex = 0
  }

  read() {
    return this.input[this.nextIndex++]
  }
}
```

### Objective Measures of Simplicity

How do I know that the last example above is simpler than the first? Well, I wrote both of them, and I know the first one was tougher to get right. Ease of understanding and debugging should be your ultimate goal when you strive for simplicity.

In cases where you're not sure which of two implementations is simpler, you can fall back on numeric metrics. These metrics aren't a perfect proxy for ease of understanding, but they can be useful—for instance, when convincing managers that simplicity is a real thing they should pay attention to.

Some metrics you should consider are:

- Cyclomatic complexity, which (informally speaking) counts the number of distinct paths that execution can take through a function.
- ABC (assignments, branches, conditionals) complexity



-->

Here is some code that is more complicated than it needs to be:

```js
// This code isn't as simple as it could be; the initial length check is not needed
// because Array.some() always returns false if the array is empty.
function hasAVowel(word) {
  if (word.length === 0) {
    return false
  }
  const letters = [...word]
  return letters.some(isVowel)
}
```

The simpler version:

```js
function hasAVowel(word) {
  const letters = [...word]
  return letters.some(isVowel)
}
```

Some might argue that the length check makes the code more explicit and is thus desirable even if it's not technically necessary. I say you should put that information in a unit test:

```js
describe("hasAVowel", () => {
  it("returns false given a 'word' with no letters", () => {
    expect(hasAVowel("")).toBe(false)
  })

  // ...
})
```

## Assessing Correctness



More subtly, code can make it obvious by its structure that certain undesirable states or behaviors are in fact impossible. Consider the following two snippets of code:

```js
const messages = ["hello", "goodbye"]
let i = 0
while (true) {
  console.log(messages[i])
  i++
  if (i === messages.length) {
    break
  }
}
```

```js
const messages = ["hello", "goodbye"]
for (i = 0; i < messages.length; i++) {
  console.log(messages[i])
}
```

These examples do the same thing, but it's more obvious that the `for` loop is guaranteed to terminate.

In TypeScript, we can craft types to precisely describe the possible values that a variable might hold. More on this in future chapters.
-->

## Limitations of Clarity

Clarity makes code easier to read, but in large codebases, it's not enough. We don't have time to read all the code, so we need code that can be safely used without being read. The quality of code that makes this tenable is _abstractness_, which will be explored in the next chapter.