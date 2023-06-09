# Correctness

Consider the process that a typical software organization goes through to design new software:

1. First, user research: Observations of potential users are distilled into use cases or needs.
2. Then, user needs are translated into product requirements.
3. A product manager translates the product requirements into features.
4. A designer crafts the user experience and user interface of each feature.
5. A summary of all this information is handed over to the programmers, often in the form of a _user story_.
6. The programmers translate their understanding of the user story into code.
7. Computers translate that code into a set of running processes, which hopefully do what the users wanted.

Every step of this process is essentially a translation from one form of information to another, and has to be carried out with care lest we introduce mistakes. Mistakes in any one of these steps will feed into the subsequent steps, and could diminish the value of the resulting product.

However, as programmers, we don't have direct control over most of the steps. In most cases, the only step we really control is step 6: translating user stories into code.

There are really two parts to step 6, which I'll call 6a and 6b:

6a. Programmers make sure they've understood the user story, by asking the other participants in the process to clarify anything they're unsure about.

6b. Programmers translate their improved understanding into code.

Problems in 6a are not, in my experience, usually caused by lack of skill or knowledge. The success or failure of 6a is determined by the degree of interpersonal trust on the team and the programmer's humility or pride. In order to ask clarifying questions, you have to:

- Recognize when you're unsure about something.
- Be willing to admit what you don't know.
- Trust that the other person will not think less of you for asking a question.

Step 6a is not, therefore, something this book is likely to be able to help you with. Improving 6a means improving your relationship with yourself and with the other people on your team.

Step 6b is the crucial step, the risky step, and the one this book can teach you to do better. Step 6b has a unique property: it is the moment at which the information in the software design pipeline gets translated into a form that only the programmers can understand. If mistakes occur in the earlier steps, organizations have mechanisms for compensating. For example, they can encourage more communication between designers and product managers and programmers, closer contact with users and the support team, realignment of efforts with the company's mission, faster iteration, more feedback between the steps, etc. This is possible because the communication between these steps is in human language. The moment the information is translated into code, it disappears from the view of everyone but the programmers. While almost anyone in the organization can help out with the previous steps (or at least offer a perspective), step 6b is a battle that programmers must fight alone.

Even in the healthiest organizations I've worked in—the ones where people generally trusted each other completely, and communication was clear and open—buggy software got released, and the value of products was delayed or diminished, because of mistakes in 6b. There was very little the organizations could do about this except offer the programmers generous professional development budgets (which usually didn't get spent).

## What is "Correctness"?

It's hard for people to agree on what constitutes "correct" software. Users might think of correct software as software that meets their needs and works the way they expect. More technocratically-minded people might insist that correctness is the degree to which software conforms to some formal specification.

For programmers, both of these views of correctness are distractions. We can't know exactly what users want, and there's usually no formal spec for what we're doing.

> Set aside "correctness" (a meaningless term if I’ve ever heard one). Don’t worry about "working software". Instead think about the question on our minds as we write code, the question we had from our first moment of coding, and that we still ask as we do our jobs today: is the software doing what I expect?
>
> —[David Bryant Copeland, "Actual Reasons to Use TDD"](https://naildrivin5.com/blog/2022/09/06/actual-reasons-to-use-tdd.html)

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

