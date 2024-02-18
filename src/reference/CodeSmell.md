Martin Fowler and Kent Beck popularized the term "code smell" in Fowler's book _Refactoring_. Fowler defines "code smell" like this:

> A code smell is a surface indication that usually corresponds to a deeper problem in the system.
>
> https://www.martinfowler.com/bliki/CodeSmell.html

The emphasis here is on "usually". A code smell doesn't always mean trouble. Knowing whether to [Refactor](Refactoring) to get rid of the smell requires [[Judgment]].

Code smells have catchy names so we can talk about them during pairing and code review. [_Data clump_](https://github.com/benchristel/refactoring-workshop/blob/master/docs/smells/data-clump.md), [_feature envy_](https://github.com/benchristel/refactoring-workshop/blob/master/docs/smells/feature-envy.md), [_message chain_](https://github.com/benchristel/refactoring-workshop/blob/master/docs/smells/message-chain.md), and [_primitive obsession_](https://github.com/benchristel/refactoring-workshop/blob/master/docs/smells/primitive-obsession.md) are some of the most commonly-cited ones.

The [language](PatternLanguage) of code smells originated at a time when [[ObjectOrientedProgramming]] was all the rage. Now [[FunctionalProgramming]] is more in style, and some of the smells (e.g. [_primitive obsession_](https://github.com/benchristel/refactoring-workshop/blob/master/docs/smells/primitive-obsession.md) and [_message chain_](https://github.com/benchristel/refactoring-workshop/blob/master/docs/smells/message-chain.md)) have to be reinterpreted for that [[Context]].

## Origin

Kent Beck describes the genesis of the term like this:

> Sometimes code works but it will be hard to understand and safely change later. The code makes money by working but loses (future) money by being hard or unsafe to change. 
>
> Some programmers don’t distinguish between code that works and is easy to change and code that works and is hard to change. “It works, that’s all that matters.” Working now and changing later both matter, are both ways programmers create value. Only creating half the potential value is wasteful.
> 
> To teach the difference between these 2 situations, my friend Massimo Arnoldi used the analogy of “smell”. Food might still be okay to eat if it smells bad but smelling bad is a warning. It’s also a warning of future problems. If it smells bad today it is going to be poison tomorrow.
>
> https://tidyfirst.substack.com/p/code-smells

I have a catalog of code smells here: https://github.com/benchristel/refactoring-workshop/tree/master/docs/smells