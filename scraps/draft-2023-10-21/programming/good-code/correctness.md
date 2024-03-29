# Correctness

I have a simple definition of "correct code": it's code that does what you meant it to do.

It's hard for people to agree on what constitutes "correct" software. Users might define it as software that meets their needs and works the way they expect. But every user wants something slightly different. More technocratically-minded people might insist that correctness is the degree to which software conforms to some formal specification.

For most programmers, both of these views of correctness are distractions. We can't know exactly what users want, and there's usually no formal spec for what we're making. We need a practical view of correctness that can guide our actions moment by moment toward good outcomes.

"Code that does what you meant it to do" is such a view. It isn't the same thing as "good software", but it's clearly a prerequisite. If I write some code and it _doesn't_ do what I meant, something's very likely to go amiss in the resulting product.

> Set aside "correctness" [...] Instead think about the question on our minds as we write code, the question we had from our first moment of coding, and that we still ask as we do our jobs today: is the software doing what I expect?
>
> —[David Bryant Copeland, "Actual Reasons to Use TDD"](https://naildrivin5.com/blog/2022/09/06/actual-reasons-to-use-tdd.html)

As programmers, we can't directly ensure that the software we create is valuable, useful, or desirable. For better or for worse, we're not usually responsible for decisions at that level. What we _are_ responsible for is making sure that the software's actual behavior matches our current best understanding of what our clients want.

## Assessing Correctness

There are a few strategies we can employ to determine whether our code works as we intended:

- Reading the code to understand it holistically
- Running the code, i.e. testing it
- Proving things about the code, e.g. typechecking it

I call these _confidence-building strategies_ because while they can't guarantee that code is 100% correct, they _can_ point out problems. If we diligently apply all the confidence-building strategies and don't find problems, that gives us grounds for believing that the code might actually be correct.

The effectiveness of each of the confidence-building strategies depends on the shape of the code. A given program behavior can be encoded in many different ways, and different encodings have different readability, testability, and provability properties. A big part of what distinguishes "good code" from "bad code" is whether each bit of code has readability, testability, and provability in the right proportions to give its makers confidence in the whole system.

Code that makes it easy to gain confidence in its correctness is _verifiable_. In the following section, I'll describe the properties of verifiable code in more detail.


<!--
Each of these 

Code can be read by people (e.g. during programming or code review) or it can be "read" by machines (e.g. linters and typecheckers). In each of these cases, the task being performed is a type of _static analysis_.

Static analysis has limits. [Rice's theorem](https://en.wikipedia.org/wiki/Rice%27s_theorem) states that all non-trivial semantic properties of programs are undecidable; that is, it's not possible to write a program that can look at arbitrarily-structured code and reliably determine whether it has some desired correctness property. Consider the halting problem as a particular case: given an arbitrary program, it's not possible for an algorithm to reliably determine whether it contains an infinite loop.

You might think that human beings, by virtue of not being driven by simple algorithms, might be able to overcome the limits of static analysis, and (for example) solve the halting problem. But they can't. While humans are more complex than any (current) computer, the limits on computation posed by Rice's theorem are mathematical, not merely practical—that is, they apply to _all_ systems that compute, no matter how complex. So unless you want to claim that humans can perform an infinite amount of computation in a finite time, you have to conclude that we're not going to solve the halting problem anytime soon.

The limits of static analysis mean that we can't rely on it alone. We generally have to run our programs to gain confidence that they are working—i.e. we have to _test_ them.

Unfortunately, testing, too, has limits. As Edsger Dijkstra put it, testing "can be used to show the presence of bugs, but never to show their absence." While a test can demonstrate that a bug exists, no feasible amount of testing can prove a program bug-free, since bugs might always be hiding in the combinations of inputs we haven't tested.

Effective testing relies on our ability to read and understand the code.
Inspecting the code being tested gives us a basis for believing that testing we've performed is sufficient to describe the code's behavior—for example, a five-line function is unlikely to need hundreds of tests to get all the bugs out. Effective testing relies on our ability to read the code and see how each part of it corresponds to some wrinkle of its behavior. Reading the code gives us a sense of where the error-prone parts are, thus where to focus our testing. By reading the code, we can also get a sense of when our tests have covered all the cases. Therefore, our ability to test relies on our ability to read and understand the code.

Typechecking and testing complement each other, so to get the best possible picture of our code's correctness we need to use both. Typecheckers can prove definitively that we haven't made certain types of common mistakes, like forgetting a `return` keyword or treating a string as if it's a number. Testing can show that our code does what we wanted it to do in at least a small set of cases. Here is one way of thinking about the difference:

- Types prove that **the code "always does something"** —that is, it won't throw a type error at runtime because a value was used improperly.
- Tests prove that **the code sometimes does the right thing**.

Neither of these statements, or even both together, can prove code correct, but it should be clear that both are useful statements to be able to make. We want to be sure these statements are true of our code.



We can't hope to understand code by reading it unless the code is _clear_. The next section discusses this important property of good code.

<!--
When I refer to "correctness" in this book, I don't mean correctness according to some external standard. Correct code, as far as I'm concerned, is code that does what you meant it to do. If we're confining our view of programming to the act of typing code into a computer, that's really the best we can hope to achieve.

Of course, even if software does what we intended, it still might not be useful or valuable. But if our software _does not_ do what we intend, it almost certainly has problems. In a way, "software that does what you intend" seems like a pretty low bar for quality—but I don't think it is. It is a bar that most teams today consistently fail to reach.


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

-->