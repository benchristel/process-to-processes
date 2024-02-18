This page is specifically about _software quality_, as opposed to [[Quality]] more generally or [[TheQualityWithoutAName]].

Note that it is difficult to reach a shared definition of "quality", because, since [[Quality]] is a [[SynonymForGood]], every [[Ideology]] wants to claim it as their own.

However, that's never stopped me from trying.

## Fitness to Context

Quality is not a property of of an _object_, absent any observer, but neither is it "subjective" in the sense of being arbitrary. Rather, quality is a property of the _interaction_ between an object and its context. An interaction is high-quality if it exemplifies good fit between the object and the context. The user, and the user's goals, are the most salient part of the context, but there are other constraints (e.g. technological, physical, and financial constraints) that contribute to judgments of quality.

Quality is most recognizable in its absence: rather than observe quality directly, what we really do is tally up _misfits_, or points of low quality. In software, a misfit can occur when:

- the software forces the user to wait for longer than the [[DohertyThreshold]] (or in some cases, longer than 80–100 milliseconds—the "threshold of noticeability")
- the software interrupts the user to present information the user doesn't care about
- the user doesn't understand the information being presented
- the user misinterprets the information being presented
- the software doesn't implement some functionality that the user expects it to
- the user cannot find the function they need
- the [[Interaction]] could be better [Compressed](Compression) (e.g. it takes too many clicks to do some repeated task).

This is a partial list.

Note that "the user" in these scenarios is not some abstract entity, but the actual person using the software. A given piece of software may be high-quality for some users and low-quality for others. For instance, Git is high-quality for users who understand [[ContentAddressing]], [[MerkleDAG]]s, and [[Unix]] command-line conventions, and low-quality for just about everyone else. This is why it's important to know who the users of your software are, and design the software around [[UserPersona]]s.

## Conceptual Integrity

Fred Brooks documents the concept of conceptual integrity in _The Mythical Man-Month_. His view is that in order for a system to be usable and comprehensible to its users, it must be organized around a small set of concepts or metaphors. One of the architect's responsibilities is to say "no" to feature requests that jeopardize the system's conceptual integrity. Conceptual integrity seems related to [[Wholeness]]. A feature addition that is in line with the system's existing concepts or metaphors is a [[WholenessExtending]] transformation, while an addition that destroys the conceptual integrity is [[WholenessDestroying]].

## Thinginess

See: [[Thinginess]]