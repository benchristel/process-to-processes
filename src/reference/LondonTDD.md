London-school [[TestDrivenDevelopment]], a.k.a. [[Mock]]ist TDD, is the practice of motivating the internal design of software by writing tests that use [[TestDoubles]] to completely isolate every [[UnitOfCode]] under test from the code it interacts with in [[Production]]. It contrasts with [[DetroitTDD]].

## On Other Wikis

- https://github.com/testdouble/contributing-tests/wiki/London-school-TDD

## Criticism

I've been on a few teams that attempted to do London-school TDD, and we always ended up with extremely tight coupling between components (and between production code and tests). Since London TDD provides a mechanism (mocks) to make *any* code testable, no matter its shape, it exerted effectively no force on the design of our code. We simply slogged through any testing difficulties we encountered due to poor design and rationalized them as necessary because the alternative (writing more loosely-coupled tests and refactoring the entire system) was too expensive. See: [[HarderIsntHardEnough]]

The problem with a London-TDD'd system is that while the components might start out simple and nice, they are tightly coupled and so the system tends to grow by adding more functionality to existing units rather than by creating new types of objects to play existing roles. You can of course bud off some functionality into a new unit and call it from one of the existing ones, but if you mock at that boundary the tests for the calling unit are still made more complicated by the change.