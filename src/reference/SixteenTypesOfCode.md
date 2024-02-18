There are sixteen types of [[Code]] in your application. Each fits in a different place in your architecture, and requires a different [[ConfidenceStrategy]] to know if it [[DoesWhatYouIntend]].

## The Types of Code

| .                         | [[Procedure]]s | [[Object]]s | [[Function]]s | [[Data]]  |
| ------------------------- | -------------- | ----------- | ------------- | --------- |
| Glue ([[Controller]]s)    | 1. e.g. REST handlers, GraphQL resolvers, Redux thunks or sagas, some React components | 2. Stateful parsers | 3. Stateless parsers, validators, presenters | 4. framework config
| UI ([[View]]s)            | 5. eliminate!     | 6. React components and UI widgets with state | 7. Pure React components, text formatting functions | 8. HTML
| Domain Logic ([[Model]]s) | 9. eliminate!     | 10. eliminate! | 11. business logic | 12. domain types |
| Infrastructure            | 13. database, file, and network access. RNG. Time. | 14. ADTs, mutexes, iterators, streams | 15. lodash, ramda | 16. strings, numbers, etc. Immutable ADTs. |

## 1. Procedural Glue

### Examples

- [[CompositionRoot]]
- REST controllers / HTTP request handlers
- GraphQL resolvers
- `main` in a typical C program
- in a CLI, the procedures that run when you invoke a command
- in a Redux app, [thunks](https://npmjs.com/package/redux-thunk) or [sagas](https://npmjs.com/package/redux-saga).
- in a React app, components that plug specific thunks, sagas, or other [[Procedure]]s into the event handler props of [[View]] components. (The rationale for including these components in this category is that you can't test that the right event handlers get wired up without rendering the component and triggering or simulating DOM events.) 

### Challenges

- testing side effects is hard.
- has all the [[CodeCapability]], so if you're not careful, _all_ your code will end up here.

### Confidence Strategies

- Reduce the amount of conditional code here as much as possible.
- Write a [[UnitTest]] to cover each conditional branch. Each test you write will be expensive to maintain and run, so you want to not have very many of them, hence the first guideline about limiting conditionals. See also [[FunctionalCoreImperativeShell]], [[Boundaries]].
- You can [[Mock]] out [[Effect]]ful sub[[Routine]]s, replace them with [[Fake]]s, or just let your tests exercise the real thing. Each of these has advantages and drawbacks:
  - [[Mock]]ing forces you to [[MessageBasedVerification]], which is only rarely what you actually want. Most of the time, you don't care about the sequence of messages that was sent; you just care that the final state is correct, hence [[StateBasedVerification]] results in less [[Brittle]] tests. However, mocked tests usually run quickly, and the fixed/upfront [[DevelopmentTime]] cost of a mock is usually less than that of a fake (though mocks generally can't be reused between tests).
  - [[Fake]]s provide an [[ExecutionTime]] speed advantage over using the real thing, but can be complex and labor-intensive to maintain. You'll want to check that your fakes behave like the real thing using [[ContractTesting]], which add to your test [[ExecutionTime]] because they also have to run against the real (presumably slower) implementation. However, unlike mocks, well-written fakes can be reused by many tests. If you're able to achieve that reuse, fakes can be a good choice.
  - Invoking real [[Effect]]s is the strategy I usually choose, at least when those effects can be isolated to my dev environment.
- A good type system can be a real help in [Verify](Verification)ing that things are wired up correctly.
- You might choose to have no [[AutomatedTest]]ing for this code at all. If your type system is expressive and [Sound](TypeSoundness), the code is simple, and you're doing manual [[ExploratoryTest]]ing and UX testing anyway, automated [[FunctionalTest]]ing of your glue procedures may not be worth the cost. I usually choose this approach on personal projects.
