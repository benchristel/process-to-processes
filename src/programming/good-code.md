# Good Code

We all want to do our best work. We all want our work to create joy and not create suffering. For those of us who are programmers, this starts with writing "good code".

Everyone has a slightly different idea of what "good code" is, and I encourage you to develop your own. By way of offering inspiration, though, here is my definition.

Good code is code that works for the needs of today, and is easy to build on to meet the needs of tomorrow. Specifically, good code is:

- [Correct](correctness.html): it does what its programmers intended.
  - includes functional correctness, maybe performance?
- [Economical](economy.html): it doesn't cost too much to develop, release, or run.
  - development time
  - execution time - as efficient as it needs to be to satisfy its users.
  - [Trustworthy](trustworthiness.html): its correctness and performance characteristics are easy to verify. If our code isn't trustworthy, we'll take longer to release it, which has an opportunity cost.
- [Sustainable](sustainability.html): it doesn't impede the organization from accomplishing its goals. In particular, good code doesn't impede its own further development.
  - [Comfortable](comfort.html): it is simply nice to work with and live in. It seems at ease in its own skin, and isn't trying to be anything it doesn't need to be. Concretely, that means it is constrained only by what really matters: the users' needs, the programmers' human strengths and weaknesses, and the development tools available.
  - [Repairable](repairability.html): good code has "seams" where you can pull it apart, to repair, replace, or upgrade just one piece of it.
  - [Educational](#): it helps maintain its own quality by being exemplary. Good code is merely unsurprising, but great code can teach you something new about how to solve a problem.
- [Mutually beneficial](mutual-benefit.html): it has positive externalities, conveying benefit to all the people and systems it touches.
  - [Reusable](reusability.html): Repairability goes hand in hand with reusability: a module that can be isolated from the rest of its program for repair can also, quite possibly, be used in other contexts—perhaps in entirely different programs.
