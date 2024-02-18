> Write smaller things.
>
> —Sandi Metz

> Write programs that do one thing and do it well.<br>
> Write programs to work together.<br>
> Write programs to handle text streams, because that is a universal interface.
>
> —Doug McIlroy

> Write more datastructures.
>
> —Richard Feldman

> Write more state machines.
>
> —me

What's the intersection of all of these? They certainly don't seem to me to describe incompatible visions of programming. Rather, they all seem to be pointing toward the same thing.

> Know when you're dealing with data and data transformation, when you're dealing with a state machine, and when you need to perform side effects. Don't make something an object (i.e. a state machine) when it can just be data. Only perform side effects if you absolutely must. Write small, [abstract](Abstraction) pieces that compose. Let objects communicate via ubiquitous interfaces. Keep hierarchies shallow.