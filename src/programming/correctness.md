# Correctness

> Set aside "correctness" (a meaningless term if I’ve ever heard one). Don’t worry about "working software". Instead think about the question on our minds as we write code, the question we had from our first moment of coding, and that we still ask as we do our jobs today: is the software doing what I expect?
>
> —[David Bryant Copeland, "Actual Reasons to Use TDD"](https://naildrivin5.com/blog/2022/09/06/actual-reasons-to-use-tdd.html)

When I refer to "correctness" in this book, I don't mean correctness according to some external standard. Correct code, as far as I'm concerned, is code that does what you meant it to do. If we're confining our view of programming to the act of typing code into a computer, that's really the best we can hope to achieve.

Consider the following code. Is it correct?

```ts
const alphabetizedWords: string[] = [...words].sort()
```

At first glance, it looks like not much could go wrong here. The problem, if there is one, lies in the fact that `sort()` compares strings based only on the numeric codes for each character. If the strings contain uppercase characters, or accented letters, the words won't be alphabetized the way a dictionary would alphabetize them. And what if the words use non-Latin alphabets, like Greek or Cyrillic? What about Chinese?

Is the program wrong, then? It depends on what it needs to do. Maybe the programmer who wrote this code knew it would only need to handle lowercase English words for the foreseeable future. Maybe they weighed the cost of writing a more sophisticated sort function against the benefits of doing so, and decided it wasn't worth it. Maybe they just didn't think about what would happen when `words` contains uppercase or accented characters.

Perhaps their decision was right, and perhaps it was wrong. We can't know without knowing the context in which this line of code will be used. But put yourself in this hypothetical programmer's shoes for the moment. Is there anything they could have done, given the knowledge that they had at the time, to improve this code? Assume they are very technically competent and have an encyclopedic knowledge of JavaScript.

- If they believed the program would only need to handle lowercase English words, then they made the best decision they could with the knowledge they had at the time.
- If they weighed the cost/benefit tradeoffs of a more sophisticated sort and came to the conclusion that the cost outweighed the benefit, then they made the best decision given the knowledge they had at the time.
- If they simply didn't know that `words` might contain uppercase or accented characters, then this is the best code they could have written given the information that they had.

This code might do what users need, or it might not. But if it doesn't, it's hard to fault the programming technique of the person who wrote it.

Now let's look at an example of code that is definitely incorrect according to the definition above.

```js
const numbers = numericStrings.map(parseInt)
```

It's clear what the programmer was trying to do here: they have an array of strings that represent numbers in decimal, like `"1234"`, and they want to convert that to an array of number values. Unfortunately, this code is completely wrong. It does not do what the programmer intended if `numericStrings` contains more than one value, because `parseInt` takes the _base_ of the number representation as its second argument (so that you can parse binary, octal, or hexadecimal numbers), and `map` passes the array index to its callback as the second parameter. So if `numericStrings` contains `["1", "2", "3"]`, `parseInt` receives the following sequence of calls:

```js
parseInt("1", 0) // -> 1   (since 0 is not a valid base, this defaults to decimal)
parseInt("2", 1) // -> NaN
parseInt("3", 2) // -> NaN
```

The programmer intended to parse an array of strings, but the code they wrote doesn't do that.

The above example is a bit of a strawman, since `.map(parseInt)` is a notorious JavaScript gotcha. Here's an example that is much closer to something I've seen in real code:

```ts
type Transaction = {amount: null | number}

function refundAll(transactions: Transaction[]) {
  let i = 0
  while (i < transactions.length) {
    if (transactions[i].amount == null) {
      continue
    }

    refund(transactions[i].amount)
    i++
  }
}
```

Here, it's also fairly clear what the programmer was trying to do. They have an array of `transactions`, some of which have a null `amount`. They want to `refund` each non-null `amount`.

Unfortunately, this function will loop infinitely if any of the amounts is null. Perhaps null amounts are rare—if so, this code might work almost all of the time. However, its infinite looping behavior is clearly not what the programmer intended.

## Improving Correctness

You might quibble that the correctness problems outlined above are _also_ due to the programmer having incomplete knowledge at the time they wrote the code, and that therefore there is nothing the programmer could have done differently. However, I contend that there is a major difference between these examples and the word-alphabetizing program we saw earlier.

In the word-alphabetizing program, the knowledge the programmer was missing was _outside_ the code. In the `parseInt` and `transactions` examples, the knowledge could be obtained from the code itself, by either:

- reading it
- running it

By using these two techniques, you can find and fix code that doesn't do what you or your teammates intended, _before_ it reaches production and affects users.

The upcoming chapter on [[clarity]] gives an overview of how to make code easier to read, understand, and even prove things about. Here I'll give a brief overview of the second technique for obtaining knowledge: running the code, i.e. _testing_.

## Testing

I define _software testing_ as "the art of running code to find out what it does". There are many different types of software testing with varying benefits and costs. I divide software testing into four overarching branches:

|              | Informal       | Formal       |
| ------------ | -------------- | ------------ |
| Manual       | Exploratory testing; poking around a dev environment | Traditional QA with a test plan
| Automated    | Testing scripts | "Tests"

A formal test specifies the expected output of the code being tested, and unambiguously signals pass or fail. An informal test relies on human observation and judgement to determine if the software's behavior is acceptable.

A manual test requires some amount of human interaction with the software while the tests are in progress. An automated test runs, start to finish, with no intervention needed.

These days, when programmers refer to "tests", they're usually talking about _formal automated tests_. This category includes unit tests, integration tests, system tests, end-to-end tests, smoke tests, and acceptance tests.

However, not all formal automated tests are created equal. Some tests are cheap to create, run very fast, and reliably indicate the presence or absence of a particular bug. Other tests are difficult to write, take a long time to run, and fail unpredictably, often for no apparent reason. Most programmers use the term _unit test_ to refer to the fastest, most reliable tests they typically write. They refer to the slower, less reliable tests by some other name.

Some types of testing give us additional benefits, too—often, for little or no extra cost—and so naturally these are the types of testing we should prefer. We get the most benefit, and the most _different kinds_ of benefits, from formal automated tests, with informal manual testing being a close second. Formal manual testing and informal automated testing should be avoided.

Suppose we're on a software project where all testing is manual. What are the benefits of automating that testing?



If we record our expectations in machine-executable form—as _formal automated tests_—then the tests also provide a record of exactly what our intentions were.

