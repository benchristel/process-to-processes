# Clarity

Code is clear when:

- We can see what its author meant it to do, by reading it.
- We can easily assess (perhaps via a combination of inspection and automated tests) whether the code actually does what it's supposed to.

Clarity is, in theory, orthogonal to correctness. It's possible for code to be clear but not correct, or correct but not clear. However, the two qualities are often found together, because when code is clear it's much easier to make it correct.

## Simplicity

Code can help us understand its author's intent in many different ways. The most commonly cited are:

- Unit tests. Tests document, in machine-executable form, the possible inputs to the code that the author anticipated. They also verify that the code's output in response to those inputs is what the author wanted.
- Variable and function names.
- Comments.

However, the most powerful way to make code communicate intent is to make it [simple](simplicity.html). People have different definitions of what "simple" code is, but I have a very specific definition in mind. In simple code, every conditional, iteration statement (e.g. loop), and variable is there for a demonstrable reason—preferably actually demonstrated by a test. None of them can be eliminated without rendering the code incorrect.

Some programmers seem to believe that making code simple means eliminating abstractions—that is, minimizing the number of function and class definitions. While I think that reducing abstraction is sometimes the right move, that's not what I mean by simplicity. The question of whether a given abstraction hurts or helps the code as a whole is separate from simplicity.
<!--

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

Some readers might opine that the length check makes the code more explicit and is thus desirable even if it's not technically necessary. I say you should put that information in a unit test:

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

Clarity makes code easier to read, but in large codebases, it's not enough. We don't have _time_ to read all the code; we need code that lets us avoid reading as much of it as possible. The quality of code that makes this tenable is _abstractness_, which will be explored in the next chapter.