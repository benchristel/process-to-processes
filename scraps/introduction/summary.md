# Overview of the Introduction

1. **The System.** There is a system of interacting people and computers that creates value for your employer. As a software engineer, your job is to improve the system so it nets more value. A few subtleties are often overlooked:
    - Because money is limited and the future is uncertain, the system cannot be created, all at once. It must be _grown_, bit by bit.
    - Improving the system involves reshaping both human-computer *and* human-human interactions.
    - Code, viewed as instructions for a computer, is a) very cheap, and b) a poor proxy for value.
    - A better proxy for value is the "intelligence" of the whole system: its ability to act effectively and to learn. Your own skills and learning abilities contribute to this, but the smartest organizations are smarter than the sum of their members.

1. **Centers.** Your system—like every sociotechnical system—can be modeled as a system of internally coherent, interrelated, fuzzily-bounded regions that I call _centers_.

2. **Forces.** Centers are shaped by _forces_. The forces acting on a center push it to develop in a certain direction, or constrain it to have certain properties. For example, the forces acting on a piece of code might push it toward being correct, performant, and maintainable.

3. **Conflict.** Forces can be in _conflict_ with one another. For example, the push to make code correct may conflict with the push to release it by a certain date. Where conflict touches human systems, we experience it as _suffering_.

4. **Design.** _Design_ is the art of shaping centers to resolve conflicts between forces.

5. **Patterns.** Experienced engineers develop _patterns_ for doing design. These take the form _if {A, B, C ...} are true, then maybe Y is a good idea_. Of course, you still have to evaluate whether Y is actually a good idea, but at least the pattern gives you a clue about what to try. Much of this book is devoted to describing patterns.

6. **Feedback and Evaluation.** In order to know whether a pattern applies to a situation you must have some way to know if the result of applying it is any good. There are two parts to this. The first, _feedback_, is the mechanism by which you sense the results. The second, _evaluation_, is how you know if the result is good. This book tells you how to get feedback and how to evaluate results.

7. **The Fundamental Process.** The fundamental process for improving a system is a variant of the OODA loop (OODA = observe, orient, decide, act):
    1. Observe the system, just as it is.
    2. Notice something that could be better.
    3. Make a small change to make that thing better without making anything else worse.
    4. Evaluate the results. If your change made things worse, undo it.
    5. Repeat.

8. **Attitude.** The fundamental process relies on practitioners adopting certain attitudes toward their work:
    - **Humility.** The opposite of grandiosity. This manifests as a willingness to admit you don't have all the answers, and to make many small changes rather than large, risky ones.
    - **Kindness.** Good engineers recognize that everything they experience is part of one interconnected system. Healing the system is healing yourself. Healing yourself is healing the system.
    - **Transparency and Trust.** The process requires that programmers have the autonomy and permission to experiment. The organization must trust the programmers and not micromanage. Programmers earn the organization's trust by delivering good work quickly and reliably. But this is only possible if programmers are transparent about the constraints and costs that affect their work.
    - **Letting go.** Maturing as a software organization means letting go of the unattainable desire for certainty and control: abandoning elaborate plans and Procrustean processes in favor of a more adaptive approach that is grounded in what really matters to people.

9. **What's left?** The rest of this book is less philosophical and more concrete. The devil's in the details—and code is _all_ details.