# Clarity

Reading code is one of the most important things we can do to ensure that it is [doing what we intended](../correctness.html). In a study of peer code review at Cisco, Jason Cohen found that the first hour of code review uncovered more defects than an hour of QA testing. (_Best Kept Secrets of Peer Code Review_, 2006)

Not all code is equally easy to read, though. Tony Hoare put it this way:

> There are two ways of constructing a software design: One way is to make it so simple that there are _obviously_ no deficiencies, and the other way is to make it so complicated that there are no _obvious_ deficiencies. The first method is far more difficult.
>
> —The Emperor's Old Clothes

<!--Most of us have had the experience of reviewing code of the second variety, code that has no obvious deficiencies because it is so convoluted and obscure. In such code, it's often difficult to point out small, desirable changes, because the effect the changes would have is as obscure as the effect of the code as it stands. Such code often gets a perfunctory "looks good" from reviewers, but over the long term can be disastrous for a tea-->

_Clear code_ is code that is easy to read and understand. Code is clear when:

- We can see what its author meant it to do.
- We can easily assess whether it actually does that.

These two properties of clear code are somewhat independent. The first property can be obtained via comments and helpful variable names, but the second often can't be. To make a program's correctness easy to judge, it must be more than superficially readable; it must be _simple_.

## Simplicity

People have different definitions of what "simple" code is, but I have a very specific definition in mind. Code is simple when every complication in it is there for a demonstrable reason. That is, no complication can be removed without causing the code to do the wrong thing in some specific, identifiable, and important case.

Complications include:

- conditionals, including `if` and `switch` statements, ternary operators, short-circuiting boolean operations, and the `?` regex quantifier.
- iteration statements, including loops and the `*` and `+` regex quantifiers.
- calculations—numeric and otherwise
- function calls
- assignments to mutable variables and object properties
- references to function parameters

Note that this list is tailored to JavaScript. Other languages have their own forms of complication. I leave it up to you to draw appropriate analogies to constructs in those languages.

Some programmers seem to believe that simplifying code means eliminating abstractions—that is, minimizing the number of function and class definitions. While I think that reducing abstraction is sometimes the right move, that's not what I mean by simplicity. The question of whether a given abstraction hurts or helps the code as a whole is separate from simplicity. **Having more classes or functions does not necessarily make code less simple.**

### Complexity Metrics

If you're familiar with code complexity metrics, you might see similarities between my list of "complications" above and metrics like ABC complexity. You might be tempted to assign every function you run across a "complexity score" based on ABC or some other metric, and try to get it as low as possible. To do this would be to miss the point entirely.

What I mean by "simplicity" is not the inverse of any complexity metric. It is just what I said above: **code is simple when none of its complications can be removed.** Simplicity is a boolean property: it either is or it isn't, and you cannot assess it unless you know what the code is supposed to do.

> Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.
>
> —Antoine de Saint-Exupéry (translated and paraphrased)

Simplicity, by this definition, might seem easy to achieve. Experience tells me it isn't. One of the most common problems I see in code that I review is code that simply does not need to be there. You can delete it, leaving surrounding code untouched, and the program is equally—or in some cases more—correct.

### Why Simplicity Matters

> Code argues, by its very existence, that it is both correct and necessary.
>
> —Sandi Metz

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