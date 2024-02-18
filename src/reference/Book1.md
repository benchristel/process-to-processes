# Learning to Love Tests and Types

## The monsters of testing

Most programmers I've talked to believe they should write automated tests for their code. There's just one problem: testing sucks!

Here's a short list of the monsters that haunt a typical programmer's testing practice:

(format the below as an idea cloud, to make it clearer that order is unimportant)

- Hard-to-test code
- Slow tests
- "Flaky" tests that fail when nothing's wrong
- Tests that fail when you refactor
- Tests that are harder to understand than the code
- Exponential explosion of cases to test
- Cryptic failure messages
- Hard-to-use testing tools
- Mocks

The real kicker, though: even when you've wrestled these monsters into submission, bugs escape to production anyway!

The good news is that the monsters are avoidable. It's possible to write bug-free software by making the code easy to understand and easy to test. Simply put, this book shows you a way to test your software that doesn't suck.

## Static types: cure or disease?

Many programmers have negative feelings about **static types**. That is, they see static types as a sometimes-necessary evil. Sure, they help the compiler optimize our code. They may even help us write more "correct" code. But they force us to write a lot of boilerplate in the process. In optionally-typed languages like JavaScript/TypeScript, it's easy to crank out a feature in a couple of hours—only to discover that you've introduced hundreds of type errors, each one a cryptic puzzle you have to solve before you can ship.

This book—you guessed it—shows you a way to use static types that doesn't suck. It focuses on **algebraic type systems**, which are becoming more and more prevalent in modern languages. Algebraic type systems are the ones that let you "or" together types like this:

```ts
type NetworkRequestResult<Data> = "loading" | "error" | {data: Data}
```

With the right design techniques, algebraic types can be extraordinarily powerful. For example, you can use them to prove that your software can't get into a bad or nonsensical state.

## Tests and types are tools

Tests and types sometimes seem like frustrating obstacles, but the reality is that they are tools designed for you, the programmer. Not for your manager—not for your software's users, even. You. Believe it or not, the people who invented types and tests were trying to help you! 

There *is* a way that tests and types can be truly helpful. But you have to let them into your workflow. Embrace them. Play to their strengths. _Rely_ on them, even.

(insert illustration of skil saw)

Imagine you're a carpenter and you've only ever used hand tools. Then one day, someone hands you a power tool: a skil saw. Are you going to keep it turned off, gripping the handle as you furiously push it back and forth, cursing its inability to make simple cuts? I hope not.

Test and types are power tools, and to use them effectively, **you need to change how you work.** This book describes those changes.

## Buzzwords you can put on your résumé

This section gives an overview of the "industry standard" concepts covered in this book. You can do a web search for these to learn more about them. Take what you read on the internet with a grain of salt, though. There's a lot of misinformation floating around.

#### Test-Driven Development

Test-driven development is a process for writing code, articulated and popularized by Kent Beck. It's often equated with a three-step cycle known as "red, green, refactor".

1. Write a test for functionality you wish you had. Watch it fail ("red").
2. Write the code to make the test pass ("GREEN").
3. Refactor the code to simplify it, while keeping all the tests passing.

However, there are other aspects of TDD that are more important than following the red-green-refactor process:

- Getting low-latency feedback, frequently, as you work.
- Working in small steps, where a "step" is defined as an interval of time where your code is in an "in-between", non-working state. (paraphrasing GeePaw Hill)
- Justifying each change you make to the code, with evidence.
- Keeping the code simple (following the principle of Occam's Razor).

TDD is, unfortunately, one of the most misused and maligned buzzwords in the software field today. Many of the descriptions of it on the Web oversimplify TDD, reducing it to the "red, green, refactor" mantra. Other descriptions add unhelpful, dogmatic cruft—"thou shalt mock every collaborator of the class under test," or "each test must call only one production function". If you learned TDD from one of these sources, you may have found it to be an unhelpful, bizarre set of rules.

Even if you've hated your TDD experiences so far, I hope this book will convince you to give it another chance. To clarify what I think TDD is *not*, here is a short list:

Test-driven development is **NOT**:
- writing tests for every method of every class
- automated testing through the UI
- always writing tests before the production code
- 100% test coverage
- testing classes and functions in isolation by mocking out all their dependencies
- having to wait more than a fraction of a second for your tests to run

If these are the things about "TDD" that have vexed you, you might like the way this book treats it.

#### Type-Driven Design

Type-driven design is the art of designing code by first designing the data on which it will operate. This is often preferable to starting with the code, because the type checker can give us very fast feedback about whether the data structures we've laid out make sense. Also, it's often easier to imagine the code if you can see the datatypes than to imagine the data if you can see the code. To quote Fred Brooks:

> Show me your flowcharts and conceal your [data] tables and I shall continue to be mystified. Show me your tables, and I won't usually need your flowcharts; they'll be obvious.

Wishful thinking is a key technique in type-driven design. When we're designing types-first, we give ourselves the freedom to imagine the data structures we wish we had—the structures that would make the code simple and easy to write. Then we write a bit of "parsing" code to convert from the data we actually have to the data we want.

It's not always obvious what you should wish for, though. That's where the techniques in the rest of this book come in.

#### Compositional Reasoning

#### Domain Modeling

## Definitions

> At the heart of [the debate about the merits of TDD] is confusion over terminology and what different things are.
> 
> —[Martin Fowler](https://www.youtube.com/watch?v=z9quxZsLcfo&t=22m25s)

A.K.A. what are we even talking about?

You can probably skip this section on a first reading and jump straight to the **Techniques**.

## Techniques

In priority order

### Get Feedback in Four Hundred Milliseconds

The process of programming can be considered a set of nested **feedback loops**. 

- syntax highlighting (< 1 second)
- compilation/type checking (< 1 second)
- unit tests (< 1 second)
- linters (seconds)
- automated system tests (minutes)
- manual system testing (hours or days)
- production monitoring (hours or days)
- user feedback and bug reports (days or weeks)

Each of these feedback loops gives us visibility into some aspect of the system, and tells us, as we're changing it, if we're making it measurably worse in some way. All else equal, a feedback loop is better if it warns us of more hazards, or more serious hazards. But it is also important for feedback loops to be *fast*.

Research done by Walter Doherty in the 1980s demonstrated that when computers respond to their users in 400 milliseconds or less, productivity skyrockets (compared to the previous "gold standard", a two-second response time). 400 milliseconds—the **Doherty threshold**—is about as long as you can wait for a program to respond without feeling like you're waiting. When you don't have to wait, running the tests ceases to feel like a burden. You no longer get distracted, or feel the urge to switch tasks while your tests are running. You also don't have to strategically decide when to run the tests. You can run them constantly—every time your code reaches a compilable state. The test results become an ever-present source of information about the state of your code—like syntax highlighting, or the errors and warnings that appear in your editor.

A sub-Doherty feedback loop obsoletes most other development conveniences. When you can run the tests constantly, you rarely have to read the failure messages in detail. If there's an unexpected test failure, you know that the last change you made is the cause, so you can easily diagnose and undo it. If you're also writing tests bit by bit as you write the code, you'll rarely need a debugger—the tests help you ensure your code is nearly bug-free from the start.

I'm sure the idea of 400-millisecond test runs sounds like a pipe dream to many programmers working in industry in 2022. Most unit test suites I've worked with professionally take at least several seconds to run. Some take minutes.

Still, I maintain that sub-Doherty feedback *is* possible, even for large projects. You need *some* feedback in 400 milliseconds, but you don't need *all* the feedback that quickly. Some things you can do to get closer to the ideal:

- **Choose a fast test framework.** At a minimum, your test framework should be able to run a thousand trivial tests per second. This is possible even in "slow" languages like Ruby. Some popular testing libraries are slower than that because they have fancy features—Jest's module mocking comes to mind. If you write code according to the guidelines in this book, you won't need those features, and can choose a faster test framework.
- **Stop testing the platform.** Many teams write test suites that invoke thousands of lines of library and platform code in every test—often because they're testing business logic through the user interface. It's not your job to test React, or the web browser. If you separate your business logic from your UI library, you can write much faster tests.
- **Don't run all the tests all the time.** If your codebase is divided into modules that are relatively isolated from each other, you can probably get away with just running the tests for the module you're changing. Of course, you'll still want to run all the tests before you promote your code to a wider audience (e.g. by pushing to the main branch, or deploying to production).
- **Split your tests into "fast" and "slow" suites.** Every project has some tests that are slower than others. If you split these out into a separate test suite, you can run the fast tests more frequently and the slower ones less frequently.
- **Test with smaller input data**. A common shortcut I've seen programmers take is to copy-paste real data into their test inputs. This real data is often much, much larger than the minimal data required for the test. In some cases, processing all that data can slow down the code under test. To fix this, you can lean on a static type checker to help you construct minimal input data by hand—e.g. by starting with an empty JSON object and adding the minimal amount of data needed to fix the type errors. You can also apply the **test data builder** pattern so each test can specify only the parts of the input data it cares about. Doing **type-driven design** will help you pare down your data even further.

Even when you're using the fastest tools and techniques available, some kinds of valuable feedback just can't be obtained in 400 milliseconds. System testing and production monitoring are unavoidably slow, but they have their place in a healthy development process. However, I think it's worth asking: how might we push more of the hard parts of programming under the microscope of our fastest feedback loops? If we can use unit tests to verify that the most interesting and complex parts of our code are working, there will be fewer unpleasant surprises in system testing and production, and our work will be faster and smoother overall.

### Get Feedback on Every Change




### Give Up On Proving Correctness

### Make Optimistic Hypotheses and Disprove Them Ruthlessly

### Demonstrate That Your Tests Can Fail

### Design Tests to Fail Informatively

multiple assertions per test is ok, as long as expected values are unique.

### Keep Test Output Tidy
### Call Your Shots and Investigate Surprises

### Don't Believe Code Coverage Tools

"how do I get my coworkers to write tests?"
### Move Logic Where You Can Test It


```
function foo() {}

assert(foo()).isUndefined()
```

### Don't Bother With Automated Tests For Unconditional or Unstable Code

### Avoid Testing Libraries

- mock them
- run codepaths that don't intersect with them


### Know What—and Why—You're Testing

Don't pretend to do load testing in a functional test.
Avoid realistic values in programmer unit tests.
Don't test functionality in integration tests.

### Design So You Can Test Only What You're Curious About

### Answer One Question At A Time
### Design Interfaces, Refactor Implementations

### Test Exceptional And Boundary Cases First

### Write Fewer Integration Tests

### Flatten Your Test Suites

### Inline Test Values

### Reduce Test Setup To Its Essence—But No Further
### Use Test Data Builders

### Create New Objects For Each Test

### Keep Assertions Snug

Avoid negative assertions

note about negative assertions being okay when they’re syntactic sugar for tight assertions, e.g. gomega’s Expect(err).NotTo(HaveOccurred())

### Separate Effects, State, and Calculations

A process is the running instantiation of a program...

### Move Effects Up The Call Stack

### Keep Effects Generic

### Maintain Ephemeral State In Objects

### Pass Data to Objects

Avoid passing objects to objects.

### Represent Time as a Message

### Separate Business Logic From Presentation

### Separate Mechanism From Policy

### Call Things What They Are

no missed opportunities for abstraction--often, code can be made app-agnostic just by renaming things.

### Treat Tests As An Append-Only List Of Requirements

### Document Desired Behaviors In Tests, Not In Production Code

### Write Characterization Tests For Legacy Code

### Separate Input, Processing, And Output

### Rule Out Inconsistencies Early

== "parse, don't validate"

### Enumerate The Possible States

### Eliminate Conditionals by Simplifying State

### Represent Independent Variables As Independent Variables

### Separate App Code From General-Purpose Code

### Flatten The Call Graph

### Use The Part You're Certain About To Discover The Part You're Uncertain About

### Avoid Mocking Static Dependencies

Use test doubles to evoke an open class of collaborators

### Use Contracts to "Cut" the Dependency Graph

### Design Contracts Around Algebraic Properties

### Fit Contracts To Ubiquitous Interfaces

### Use Types to Prove the Parts Fit Together

### Generate Types From API Specs

### Represent Domain Errors As Algebraic Types

### Represent Infrastructural Errors As Exceptions

### Represent Entities As Data, Not Objects

All essential state wants to be global, so use something like Redux to make that suck less.

You'll need to serialize your essential state, so keep it in a form that's amenable to JSONification.

### Encapsulate Accidental State 

### Design Essential State to Be Persisted and Transmitted

### Version and Migrate Essential State

### Compose Aspects

Caching? Monitoring? Error handling? Null checks? Database transaction management? These concerns usually don't need to be entangled with your business logic.

### Refactor Tests While They're Failing

### Don't Test Functionality Through The UI
UIs are designed for humans, not tests
You need to manually test your UI anyway
### Tests don't need to be soundly typed

### Shun Complicated Testing Tools
### Peer-Review Process, Not Just Code
### Embrace Imperfection
## Glossary

- Test
- Automated Test
- Manual Test
- Formal Test
- Informal Test
- Unit Test
- System Test
- Functional Test
- Non-functional Test
- Integration Test
- Contract Test
- Sum Type
- Union Type
- Object
- Entity
- Essential State
- Accidental State
- Test Double
- Mock
- Stub
- Fake
- Spy
- Dummy

- Call Graph
- Dependency Graph
- 


## Appendix A: Testing and the Philosophy of Science
## Appendix B: The Behavior of a Software System
## Appendix C: Research and Development
Programming is learning
## Appendix D: The Dao of Test-Driven Development