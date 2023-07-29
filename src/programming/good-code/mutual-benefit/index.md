# Mutual Benefit

**Mutual benefit** is a principle of [[ExtremeProgramming]]. It's the idea that sometimes, there's no meaningful tradeoff between different types of [[Good]]. If A is good, and B is good, and by increasing A we get more B too, then we should maximize A. It makes no sense to try to trade off A to get more B.

Concrete example: [[InternalSoftwareQuality]] (ISQ) and its effects on development cost and speed. Improvements to internal software quality make the software cheaper to develop and maintain, and usually produce improvements in [[ExternalSoftwareQuality]] (ESQ) as well—i.e. fewer bugs. Philip Crosby wrote that [[QualityIsFree]]—what this means is that the least expensive way to operate is to treat defects as unacceptable. Whatever you spend on eliminating defects is more than paid back by the money you avoid spending on customer support, bugfixes, etc.

## Positive Externalities

Another way of framing the mutual benefit principle is that we should try to do things in a way that has positive externalities, and avoid negative externalities whenever we can.

Specialization, compartmentalization, and reductionism destroy opportunities for positive externalities. In _Antifragile_, Nassim Taleb relates an anecdote about a businessman who employs a valet to lug his heavy suitcase up the hotel stairs. After checking in, the businessman goes straight to the hotel gym to lift weights. In effect, he pays someone to lift a heavy thing for him, and then pays someone else to give him access to a different heavy thing to lift. On the face of it, this seems farcically inefficient: a missed opportunity for positive externalities.

## Consequences for Complex Systems

As the people and machines in a [[SoftwareSystem]] interact to produce value, complex webs of mutual benefit tend to form. System components get used in off-label ways due to [[KranzsLaw]], simply because they (accidentally) have affordances for those uses. Side-channels get exploited because they happen to reveal useful system state. The value-harvesting tendrils of the system find their way, lichen-like, into every crevice and irregularity.

This is one major reason that big-bang rewrites of a complex system are doomed to fail. Most would-be utopian reformers don't take the time or have the patience to understand the positive externalities at work in the current system. The probability that the new system will have the same opportunities for positive externalities is small—more likely, the new system has a rigid, compartmentalized design that seems intended to destroy as many positive externalities as it can.

### Examples

A certain software company uses Slack as its primary communication platform. Employees often post to Slack with questions about internal systems. Some would-be reformers at the company want to replace this "inefficient" dialogue with documentation. The reformist view assumes that the only [[Good]] that comes out of asking questions on Slack is that the question-asker gets the information they're seeking. In fact, though, there are many positive externalities:

- There's an opportunity for interpersonal connection during a Slack interaction that doesn't exist when reading or writing documentation.
- Asking and answering questions in public signals to others that the company is a safe environment in which to ask questions.
- Questions about a system can be viewed as feedback about the user experience. If the same question gets asked over and over, the system probably has some rough edges, or doesn't accommodate a common use case.
- Answering questions in public establishes one's credibility and authority in that area. It can be a way to meet new employees and welcome them.
- Answering questions can be a great way to solidify your knowledge about a topic. The person who answers a given question need not be the most expert person in that topic. Often, it's better for all involved if the question-answerer has a middling amount of experience, because then they can put themselves in the question-asker's shoes more easily.
