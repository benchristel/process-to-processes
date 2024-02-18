[[Message]]-based verification is a [[SoftwareTesting]] technique that involves making assertions about the sequence of [[Message]]s the [[SystemUnderTest]] sends to its [[Collaborator]]s. Often, [[Spies|Spy]] or [[Mock]]s are used to detect the messages. The technique contrasts with [[StateBasedVerification]].

Message-based verification is most useful when the exact sequence and number of the messages is important. For example, when testing a [[UnitOfCode]] that sends emails, the number of emails sent is important.

[[Message]]-based verification is usually implemented as a layer atop [[StateBasedVerification]] techniques. This is because most programming languages don't let code directly observe or reflect on messages being passed. Instead, the messages alter the internal state of a [[Spy]]. The test can then get the messages from the spy and make assertions about them.

[[Mock]]s are one way to implement "pure" message-based verification, which doesn't rely on inspecting objects' state: the mocks are pre-programmed with an expected sequence of messages so they can perform the assertions themselves. I consider this approach silly, because it imbues the mocks with knowledge of how to make assertions, duplicating behavior of the test framework (see [[OrthogonalFeatures]]). Use [[Spies|Spy]] instead.

## On Other Wikis

[[MartinFowler]] calls this "behavior verification": https://martinfowler.com/articles/mocksArentStubs.html#ChoosingBetweenTheDifferences