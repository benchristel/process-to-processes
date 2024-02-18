A test is **brittle** if it fails when the observable [[Behavior]] of the [[TestSubject]] (i.e. its effects on its [[Collaborator]]s) has not changed.

## Causes of brittle tests

- Assertions that are too specific; e.g. asserting on the order of elements in a returned array, when the order is not actually significant. The fix is to use looser assertions, or to change the data type so that equivalent results are equal (e.g. using a set instead of an array).
- Using [[MessageBasedVerification]] in cases where the exact sequence of messages sent isn't important. The fix is to use [[StateBasedVerification]], or to rework the interface between the [[TestSubject]] and its [[Collaborator]]s so that there is only one correct sequence of messages.