# View: Programming as Repair

TODO: is this really a view of software development, not programming?

Our fifth and final view of programming envisions it as a process of **repair**.

In this view, programming is about fixing {{link Mismatch}}es that impede {{link InformationFlows}} within a {{link SoftwareSystem}} of interacting humans and machines.

The story of every repair goes something like this:

- Our protagonist, a human, wants to do something.
- The system they're in doesn't let them do that thing comfortably. Something about it is frustrating or alienating.
- A designer (or sometimes an engineer) notices our protagonist's plight.
- They change something to make the frustration/alienation go away. That is, they *repair* the system. It's like oiling the chain of an old bicycle.
- Our protagonist is happy because now it's easier to do the thing.

Note that, when I talk refer to _the {{link SoftwareSystem}}_ in this book, I don't mean a program or application. I mean the much bigger system that encompasses software, computers, and the people who use and maintain them. Within this larger system, an act of "repair" might involve creating a whole new application to solve a particular user need.

The "repair" view stands in stark contrast to the {{link Production}} view of programming. While the production view likened programmers to assembly-line workers churning out *things*, the repair view tells us that no *things* are created when we program. Instead, there is only one *thing*—the existing system—which is either healed or harmed by every change.

When we see programming as repair, programmer productivity is revealed to be a multifaceted, ambiguous, messy concept. It's a bit like trying to measure the productivity of doctors or therapists.
If you talk to a therapist about the problems in your life, you might try to quantify their "productivity" by saying "well, they helped me with this problem and this problem and this problem, so that's three problems they fixed." But that's silly. What is happening in therapy is not that specific problems are getting "solved," but that you, as a whole person, are *healing*. Human problems tend to be more interrelated than not, and software is all about solving human problems.

There are ways to project quantifications onto the results of programming (e.g. counting the number of {{link Feature "Features"}} or {{link StoryPoints}} completed). But these quantifications are artificial at best and misleading at worst, like counting the number of patients a doctor can see in a day. We don't add features just for features' sake; we do it (we hope) to qualitatively improve the system as a whole — see {{link Wholeness}}. <!--We don't refactor code just for the sake of {{link Refactoring}}; we do it because it lets us understand the code better, and thus makes the whole development process easier.-->

Our task as programmers is not to make *the software*, in isolation, "better" in some abstract sense, but to make *the whole human-software system* better for the humans in it. I'll say that again, because it's important.

<blockquote class="pullquote">

Our task as programmers is not to make the software, in isolation, “better” in some abstract sense, but to make the whole human-software system better for the humans in it.

</blockquote>

This applies to all software development activities at all levels of scale.

- {{link Refactoring}} makes code easier to understand and change for the programmers in the system.
- ... TODO fill in the rest of this list


I think a lot of software would be better off if its stewards adopted a repair-based mindset. How often have you fallen in love with an app when it was new and fast and just what you needed, only to grow to dislike it as its creators saddled it with more and more features? Seeing programming as repair, not {{link Production}}, might help stave off featuritis. When designing software, we should ask not "what features should we add" but "how can we heal the system?"

Related:
- {{link MutualBenefit}}
- {{link Wholeness}}
- ["Optimize For Our Humans"](https://www.geepawhill.org/2024/02/23/optimize-for-our-humans/) – GeePaw Hill on making systems better for the humans in them.