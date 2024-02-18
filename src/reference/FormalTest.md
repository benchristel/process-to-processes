A **formal test** describes a desirable [[Interaction]] between a [[Component]] and its [[Collaborator]]s in algorithmic (executable) language. Running a formal test demonstrates whether the interaction is a  member of the component's [[Behavior]].

A formal test describes an [[Interaction]] by:
- partitioning the [[Component]]s involved into a [[TestSubject]] and [[Collaborator]]s
- simulating an interaction between the [[TestSubject]] and its collaborators, usually by playing the role of one collaborator and sending messages to the [[TestSubject]] as if it were that collaborator, or by using [[TestDouble]]s.

"Formal" means the test has unambiguous preconditions, steps, and postconditions. Because a formal test places unambiguous requirements on the [[TestSubject]], it can signal a pass/fail result.

A [[FormalTest]] can be either [Automated](AutomatedTest) or [Manual](ManualTest). It can be a [[UnitTest]] or a [[SystemTest]].