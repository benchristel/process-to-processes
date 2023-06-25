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

