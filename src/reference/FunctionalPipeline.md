A typical function call looks like this:

```js
parseCsv(string)
```

The "word order" here is essentially `verb, subject`. In English, though, the normal word order is `subject, verb`. Thus, when we're writing code, it's sometimes more readable to state what data we're operating on before we specify the operation.

```js
pass(string, parseCsv)

function pass(subject, fn) {
  return fn(subject)
}
```

Similarly, I find it most natural to compose functions left-to-right, in the style of [[Unix]] pipelines. We can extend the definition of `pass` to support multiple verbs, which will be composed left-to-right.

```js
function pass(subject, ...fns) {
  return fns.reduce((subj, fn) => fn(subj), subject)
}
```

Now we can say:

```js
const ids = pass(string,
  parseCsv,
  validateColumns,
  selectCol("id"),
)
```

Why is this better than the naive phrasing, `selectCol(validateColumns(parseCsv(string)), "id")`? Well, look at the structure of the parentheses in each phrasing. In the functional pipeline version, the nesting is shallow and constant. We can add as many functions to the pipeline as we want, and only ever have two levels of nesting. The naive version, on the other hand, produces a [[DeepHierarchy]].

Why is the deep hierarchy bad? Because humans are bad at parsing _center-embedded_ structures. Consider the following sentence, invented by linguist Steven Pinker:

> The rapidity that the motion that the wing that the hummingbird has has has is remarkable.

This is a grammatical sentence, according to the formal syntax of English, but it's not something a human would ever say, and it probably took you a few moments to parse.

The syntax tree of the hummingbird sentence is center-embedded in exactly the same way that the naive function composition above is. Each `that` introduces a subclause—essentially, acting as a left parenthesis. Each `has` finishes a subclause, acting as a right parenthesis. When you read `that`, you have to push an item onto your mental stack to keep track of the fact that you are now expecting a verb to complete the subclause. The human brain appears to have a very limited stack depth, and three nested subclauses is all it takes to overwhelm it.

Contrast this sentence:

> The rapidity of the motion of the wing of the hummingbird is remarkable.

Here, the formal structure of the syntax tree is almost the same, but the mental activity of parsing it is very different. Because the preposition `of` does not leave us in suspense waiting for a verb to complete the clause, it takes up no mental stack space. Our brains are effectively doing [[TailCallElimination]] on the "code" that parses this recursive structure.

In summary: a flat composition of functions is better than a deeply nested composition because it is a better fit for our linguistic hardware.