# Clarity

Reading code is one of the most important things we can do to ensure that it is [doing what we intended](../correctness.html). In a study of peer code review at Cisco, Jason Cohen found that the first hour of code review uncovered more defects than an hour of QA testing. (_Best Kept Secrets of Peer Code Review_, 2006) Reading code is one of the best debugging techniques around.

Not all code is easy to debug by reading it, though. Tony Hoare put it this way:

> There are two ways of constructing a software design: One way is to make it so simple that there are **obviously** no deficiencies, and the other way is to make it so complicated that there are no **obvious** deficiencies. The first method is far more difficult.
>
> —The Emperor's Old Clothes

<!--Most of us have had the experience of reviewing code of the second variety, code that has no obvious deficiencies because it is so convoluted and obscure. In such code, it's often difficult to point out small, desirable changes, because the effect the changes would have is as obscure as the effect of the code as it stands. Such code often gets a perfunctory "looks good" from reviewers, but over the long term can be disastrous for a tea-->

_Clear code_ is code that is easy to read and understand. Code is clear when:

- We can see what its author meant it to do.
- We can easily assess whether it actually does that.

These two properties of clear code are somewhat independent. Comments and variable names can help with the first (understanding intent), but not with the second (assessing correctness). To make a program's correctness easy to judge, it must be more than superficially readable; it must be _simple_.

## Simplicity

> Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.
>
> —Antoine de Saint-Exupéry (translated and paraphrased)

People have different definitions of what "simple" code is, but I have a very specific definition in mind. Code is simple when every complication in it is there for a demonstrable reason. That is, no complication can be removed without causing the code to do the wrong thing in some specific, identifiable, and important case.

Complications include:

- conditionals, including `if` and `switch` statements, ternary operators, short-circuiting boolean operations, and the `?` regex quantifier.
- iteration statements, including loops and the `*` and `+` regex quantifiers.
- calculations—numeric and otherwise
- function calls
- assignments to mutable variables and object properties
- references to function parameters

Note that this list is tailored to JavaScript. Other languages have their own forms of complication. I leave it up to you to draw appropriate analogies to constructs in those languages.

### What Simplicity Isn't

Some programmers seem to believe that simplifying code means eliminating abstractions—that is, minimizing the number of function and class definitions. While I think that reducing abstraction is sometimes the right move, that's not what I mean by simplicity. The question of whether a given abstraction hurts or helps the code as a whole is separate from simplicity. **Having more classes or functions does not necessarily make code less simple.**

If you're familiar with code complexity metrics, you might see similarities between my list of "complications" above and metrics like ABC complexity. You might be tempted to assign every function you run across a "complexity score" based on ABC or some other metric, and try to get it as low as possible. To do this would be to miss the point entirely.

What I mean by "simplicity" is not the inverse of any complexity metric. It is just what I said above: **code is simple when none of its complications can be removed.** Simplicity is a boolean property: it either is or it isn't, and you cannot assess it unless you know what the code is supposed to do.

Simplicity, by this definition, might seem easy to achieve. Experience tells me it isn't. One of the most common problems I see in code that I review is code that simply does not need to be there. You can delete it, leaving surrounding code untouched, and the program is equally—or in some cases more—correct.

### Why Simplicity Matters

To understand why simplicity is important, consider what would happen if we adopted its opposite as a goal. What if we tried to fill programs with as many unnecessary complications as possible? What if we tried to make every program a [Rube Goldberg machine](https://en.wikipedia.org/wiki/Rube_Goldberg_machine)?

Of course, that's absurd, because there's no end to the amount of complication we can add. "Add as much complication as possible" is a task that can never be finished. But let's suppose we tried.

Now imagine reading the resulting program. How easy would it be to debug? How easily could you find the bits that are actually meaningful?

And if you found some code you thought _wasn't_ needed, how could you be sure it was really safe to remove?

Simplicity matters because complication is virulent. Not only does it have immediate bad effects (making code harder to read), it perpetuates itself (because, once it's been in production for a while, it's very hard to be sure it's safe to remove).

As Sandi Metz put it,

> Code argues, by its very existence, that it is both correct and necessary.
>
> —Sandi Metz

- it slows us down as we're reading the code, because there's more to parse.
- people are averse (and rightly so) to removing complications they don't understand.
- determining whether a line of code is necessary or unnecessary is, in general,
  undecidable (as a specific case of Rice's theorem).
- therefore, complications, once in production, are risky to remove, so they tend to persist.

The solution is to remove complication at the earliest opportunity, while the code is still fresh in your mind, and no one is yet depending on it.

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

<!--

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

## Clarity Depends on Abstractness

Clarity makes code easier to read, but in any program larger than a toy, clarity isn't enough. It isn't feasible to read all the code whenever we want to make a change. Therefore, a large portion of the system must be made of code that can be safely used and reused without being read.

To put it another way: in order to understand code, we need to be able to mentally manipulate the building blocks of which it is composed, without having to understand the internal structure of those building blocks.

This principle applies even in a "small" codebase—a ten-line NodeJS script, let's say. You don't have to understand the internals of NodeJS in order to make changes to such a program—even though those internals are far more complicated than your script, comprising many megabytes of machine code compared to your few hundred bytes of JS. You understand the language primitives at a conceptual level, and that's enough. The quality of those language primitives that makes this possible is _abstractness_.

The topic of _abstractness_ will be further explored in the next chapter.
