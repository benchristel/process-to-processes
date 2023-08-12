# Good Code

We all want to do our best work. We all want our work to create joy and not create suffering. For those of us who are programmers, this starts with writing "good code".

Everyone has a slightly different idea of what "good code" is, and I encourage you to develop your own. By way of offering inspiration, though, here is my definition.

Good code is code that works for the needs of today, and is easy to build on to meet the needs of tomorrow. Specifically, good code is:

- [Correct](correctness.html): The code does what its programmers intended.
  - includes functional correctness, maybe performance?
- [Verifiable](verifiability): The code's correctness and performance characteristics are easy to verify. If we can't verify our code's correctness, we'll lack confidence and take longer to release it, which has an opportunity cost.
    - [Clear](trust/clarity.html): It is obvious from reading the code that it does what it's supposed to do.
    - [Abstract](trust/abstraction.html): Once we understand what a named piece of code does, we can compress our mental representation of it into a form that is easy to recall and manipulate. We don't have to think about the internals of the code every time we use it.
    <!-- - [Simple](simplicity.html): Every conditional, loop, and mutable variable is demonstrably necessary. -->
    - [Testable](trust/testability.html): It is easy to confirm empirically that the code does what it's supposed to, by running it.
    - [Provable](trust/provability.html): Desirable properties of the code can be proved by formal methods. Typechecking is one common way of proving things about code.
- [Economical](economy.html): The code doesn't cost too much to develop, release, or run.
  - Inexpensive: the code is easy and cheap to improve.
  - Fast: it is as efficient as it needs to be to satisfy its users.
- [Sustainable](sustainability.html): Good code doesn't impede the organization from accomplishing its goals. In particular, good code doesn't impede its own further development. The biggest threat to the sustained health of code is its programmers. If the programmers stop caring about the code, they will stop caring _for_ it. Therefore, sustainability is largely about maintaining a healthy relationship between programmers and code. To that end, the code must be...
  - [Comfortable](comfort.html): The code is simply nice to work with. It puts the reader at ease, because it isn't grandiose, dogmatic, or overly clever. It seems not to care what you think of it, and it isn't trying to be anything it doesn't need to be. It is, in other words, constrained only by what really matters: the users' needs, the programmers' human strengths and weaknesses, and the development tools available.
  - [Tinkerable](repairability.html): Good code has "seams" where you can pull it apart, to repair, replace, or upgrade just one piece of it. A good system lets you see into its internal state, so you can easily diagnose problems. Good code is like a delightful and satisfying puzzle that you can take apart and put back together again and again.
  - [Educational](#): Good code helps maintain its own quality by being exemplary. The best code can even teach you something new about how to solve a problem. "You know you are working on clean code when each routine you read turns out to be pretty much what you expected. You can call it beautiful code when the code also makes it look like the language was made for the problem." —Ward Cunningham
- [Mutually beneficial](mutual-benefit.html): Good code has positive externalities, conveying benefit to all the people and systems it touches.
  - [Reusable](reusability.html): Tinkerability and trustworthiness produce reusability. A module that can be isolated from the rest of its program for repair can also, quite possibly, be used in other contexts—perhaps in entirely different programs.

This list of qualities isn't meant to be exhaustive, and the items in it aren't necessarily orthogonal. For example, you might argue that clarity and testability contribute more to sustainability than to economy. And I might agree with you. All of these qualities are interrelated.

Note that these are qualities of good _code_, not good _software products_. Software products need to satisfy additional requirements, like usefulness, usability, accessibility, and security. Good code is just one of the prerequisites for obtaining those product-level qualities.

In the chapters that follow, we'll explore the qualities of good code, and ways we might obtain them, in more detail.