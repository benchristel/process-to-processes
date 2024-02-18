They *are* parts of reality, at least in our postmodern software world.

See [the Grove Design Diary](https://benchristel.github.io/blog/2017/12/25/highlights-from-the-grove-design-diary/):

> ...we no longer have computers, the way
> people in the '80s had computers. Reality is just more
> complicated now, and faster, and our tools for making
> sense of it and predicting it are constantly outmatched
> because they are themselves part of the thing they're
> supposed to be modeling.

## Eric Normand: The Art of Domain Modeling

In [[EricNormand]]'s talk on domain modeling (https://old.lispcast.com/talk-the-art-of-domain-modeling/), he describes a data model for a pizza restaurant that includes a `pizza` type with a `remove-topping` function.

`remove-topping` is not an operation that generally exists for physical pizzas (once you add the tomato sauce,
you can't take it off) but that's fine—the program doesn't deal with physical pizzas! It deals with _information about_
pizzas.

Consider: you can imagine a "build your pizza" UI where you can both add and remove toppings from the pizza you're about to order, or even change the size of the pizza.
Even though we can't change the size of a physical pizza once it's made, it's useful to be able to express that operation on data _about_ pizzas: e.g. "I want a pizza that's like this pizza, but bigger" or "I want a pizza that's like this pizza, but without tomato sauce".

When we've separated [[Computation]] from [[Effect]]s in our code (as we should), it no longer makes sense to limit the operations on data to just those that can be performed on the data's real-world referent. All that matters is that the data we end up with is valid (in the sense that it represents some possible effect we can have on the world, like making and delivering a particular pizza) and correct (in the sense that the effect is what we wanted).
