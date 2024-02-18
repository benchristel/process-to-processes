A unit test is a type of [[Formal|FormalTest]] [[AutomatedTest]] in which the test code runs in the same [[Process]] as the code under test and calls it directly. One way to think about this is that your unit tests are like a separate app (a [[MakingApp]]) whose job is to output the test results. The unit test app incorporates bits and pieces of the production app into its code.

Unit testing contrasts with [[SystemTest]]ing, in which the tests interact with a deployed or installed [[SoftwareSystem]] (usually through a [[GUI]], HTTP [[API]], or [[CLI]]).

## Other definitions

Several other definitions of the term "unit test" are current in industry:

- [a test that is isolated from other tests](https://tanzu.vmware.com/content/blog/what-is-a-unit-test-the-answer-might-surprise-you). A unit test should be able to run on its own without depending on other tests for setup. Nor should it interfere with tests that may be run after it.
  - I like test isolation and agree that a unit test ought to be isolated. The problem is, *every* type of testing benefits from isolation, making this definition so all-encompassing as to be useless. In most modern software dev shops, test isolation goes without saying.
- a test that invokes a relatively small amount of code when it runs
  - I agree that it's best to keep unit tests "small", but I think this definition is too vague about what a "small" amount of code is.
- a test that interacts with a single [[Object]], with all [[Collaborator]]s replaced by [[TestDouble]]s
  - I find this definition harmful because it implies that in order to do unit testing properly you cannot refactor one object into many
    unless you also split up its tests and mock each object's collaborators. That makes refactoring laborious and error prone (since it is no longer covered by tests). See also [[LondonTDD#Criticism]].
- a test that only invokes a single [[Method]] of an [[Object]].
  - This definition effectively prohibits [[ObjectOrientedProgramming]], because the only reason to have [[Method]]s and [[Object]]s is if the
    methods interact in an interesting way (via the object's state). To test the interesting behavior of an object, you need tests that invoke multiple methods.
