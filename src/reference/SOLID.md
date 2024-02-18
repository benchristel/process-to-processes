SOLID is an acronym coined by [[RobertCMartin]]. It is a set of [[Principle]]s to guide [[ObjectOriented|ObjectOrientedProgramming]] software design.

Here is my rephrasing/summary of the principles:

- the [[SingleResponsibilityPrinciple]]
  - A unit of code should have only one reason to change.
- the [[OpenClosedPrinciple]]
  - It should be possible to change what code does by swapping out parts (e.g. objects), with minimal changes to existing code.
- the [[LiskovSubstitutionPrinciple]]
  - What is observably true of a class should be true of all its subclasses.
- the [[InterfaceSegregationPrinciple]]
  - Code should demand only the inputs it needs to do its job, and no more.
- the [[DependencyInversionPrinciple]]
  - Code should not depend on specific other classes. Rather, collaborating objects should agree on abstract communication protocols
    that can have many different implementations.