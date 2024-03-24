# View: Controllability, Not Correctness

- when writing code, the best you can hope for is that the software does what you (the programmer) intended it to do.
- There will always be bugs. Even proving that our software conforms to a specification is no help unless the specification
  has already been tested by widespread use. There may be bugs in the spec.
- Testing is not guaranteed find all bugs. We can only asymptotically approach zero bugs.
- Therefore:
  - Write code that is as correct as you know how to make it—but know that your knowledge, and therefore your best efforts, will be imperfect.
  - Create cost-effective ways of verifying that the software is doing what you meant it to do.
  - Maintain control—intellectual and actual—over the software. This means knowing what it does, knowing what effect
    any given change will have, and being able to make and integrate changes in a timely way.

<!-- see also: https://en.wikipedia.org/wiki/Controllability -->
