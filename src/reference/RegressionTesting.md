Regression testing attempts to ensure that the behavior of a piece of software won't regress (i.e. develop bugs or lose functionality) after it is initially built and tested.

The practice of running the full suite of automated tests for a piece of software before [[Promoting|SoftwarePromotion]] it to a wider audience is a means of regression testing.

## Test-first technique

Before fixing a bug, [[Programmer]]s first write a failing test that reproduces the bug. They then fix the bug, which should cause the test to pass. The idea is that if the bug is reintroduced later, the test will fail and prevent the software from being released to users.
