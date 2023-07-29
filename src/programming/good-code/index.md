# Good Code

We all want to do our best work. We all want our work to create joy and not create suffering. For those of us who are programmers, this starts with writing "good code".

Everyone has a slightly different idea of what "good code" is, and I encourage you to develop your own. By way of offering inspiration, though, here is my definition.

Good code is code that works for the needs of today, and is easy to build on to meet the needs of tomorrow. Specifically, good code is:

- [Correct](correctness.html): The code does what its programmers intended.
  - includes functional correctness, maybe performance?
- [Economical](economy.html): The code doesn't cost too much to develop, release, or run.
  - Inexpensive: the code is easy and cheap to improve.
  - Fast: it is as efficient as it needs to be to satisfy its users.
  - [Trustworthy](trustworthiness.html): The code's correctness and performance characteristics are easy to verify. If our code isn't trustworthy, we'll take longer to release it, which has an opportunity cost.
    - [Clear](clarity.html): It is obvious from reading the code that it does what it's supposed to do.
    - [Simple](simplicity.html): Every conditional, loop, and mutable variable is demonstrably necessary.
    - [Testable](testability.html): It is easy to confirm empirically that the code does what it's supposed to, by running it.
    - [Provable](provability.html): Desirable properties of the code can be proved by formal methods. Typechecking is one common way of proving things about code.
    - [Abstract](abstraction.html): Once we understand what a named piece of code does, we can compress our mental representation of it into a form that is easy to recall and manipulate. We don't have to think about the internals of the code every time we use it.
- [Sustainable](sustainability.html): The code doesn't impede the organization from accomplishing its goals. In particular, good code doesn't impede its own further development.
  - [Comfortable](comfort.html): The code is simply nice to work with and live in. It seems at ease in its own skin, and isn't trying to be anything it doesn't need to be. Concretely, that means it is constrained only by what really matters: the users' needs, the programmers' human strengths and weaknesses, and the development tools available.
  - [Repairable](repairability.html): Good code has "seams" where you can pull it apart, to repair, replace, or upgrade just one piece of it. A good system lets you see into its internal state, so you can easily diagnose problems.
  - [Educational](#): Good code helps maintain its own quality by being exemplary. Code that is merely _good_ is just unsurprising, but great code can teach you something new about how to solve a problem. "You know you are working on clean code when each routine you read turns out to be pretty much what you expected. You can call it beautiful code when the code also makes it look like the language was made for the problem." —Ward Cunningham
- [Mutually beneficial](mutual-benefit.html): Good code has positive externalities, conveying benefit to all the people and systems it touches.
  - [Reusable](reusability.html): Repairability and trustworthiness produce reusability. A module that can be isolated from the rest of its program for repair can also, quite possibly, be used in other contexts—perhaps in entirely different programs.

This list of qualities isn't meant to be exhaustive, and the items in it aren't necessarily orthogonal. For example, you might argue that clarity and testability contribute more to sustainability than to economy. And I might agree with you. All of these qualities are interrelated.

In the chapters that follow, we'll explore these qualities, and ways we might obtain them, in more detail.