The **test subject**, a.k.a. [[SystemUnderTest]], is the thing we're trying to learn about by running the test.

In a well-designed [[FormalTest]], the test subject is generally whatever isn't directly specified by the test's preconditions / setup steps, but could cause the test to fail if changed.