This page sketches some ideas that may turn into a whole 'nother website. It outlines a value set, process, pattern language, and geometry for software development. The goal is to provide a complete, end-to-end view of the most effective way I know to create software.

As far as I know, nothing like this has been attempted before. Many pattern languages for software have of course been written, including:

- The Gang of Four patterns book
- [Trygve Reenskaug's pattern language for MVC](http://www.argos.vu/wp-content/uploads/2016/05/MVC_pattern-1.pdf)
- [Jenifer Tidwell's HCI pattern language](http://www.mit.edu/~jtidwell/interaction_patterns.html)
- [Matt Parker's](http://www.mattkparker.com/) _Radically Collaborative Patterns for Software Makers: A Mini-Encyclopedia_.

Various attempts have also been made at defining a set of values for software development—for example Kent Beck's _Extreme Programming Explained_. The [Unix Philosophy](https://homepage.cs.uri.edu/~thenry/resources/unix_art/ch01s06.html), documented by Eric Raymond in _The Art of Unix Programming_, describes the values and principles underlying Unix programs.

However, I don't think anyone has yet tried to provide an end-to-end view.

## Values

Some software organizations say they have values. In practice, their values often sound more like _principles_ to me: the ways they choose to work _toward_ their values. The values themselves are left unstated.

For example, here are GitLab's stated values:

- Collaboration
- Results
- Efficiency
- Diversity, Inclusion, and Belonging
- Iteration
- Transparency

Now, these are just buzzwords chosen to spell "CREDIT" so perhaps GitLab can be forgiven for not having the perfect word choices here. But, on the face of it, most of these things just are not values. Inclusion and Belonging get close. Transparency, maybe. But the rest are means to an end. They leave us asking, "to _what_ end?" The most egregious one is "results". Saying you value "results" is about as hollow as saying you value "value". _What kind of results_?

Your real values are not something you hang up by the door when you leave the office. They pervade your whole life. They underlie your vision of the world you wish was real, and they bend your actions toward that vision.

Here are my values:

- Belonging
  - community, kinship, and connectedness to others
- Enthusiasm
  - joy and awe
- Autonomy
  - diversity and local adaptation
- Mastery
  - getting better all the time
- Involved caring
  - doing small things with great love
- Non-harm
  - Everything has rights. the thingier a thing is, the more right it has to keep on being thingy.

See how those, aren't, like, strictly work-related? That's how you know they're actual values, and not corporate buzzwords. The fact that this spells "BEAM IN" is pure coincidence.

While GitLab's values were maybe too corporate, these values seem not corporate enough. They have no obvious relationship to software. However, when you consider that software is made for people and is a culture-bearing artifact, the relevance of these values starts to become apparent. Good software, in my view, promotes belonging, enthusiasm, autonomy, mastery, involved caring, and non-harm.

Bad software is the opposite. It:

- divides people, killing Belonging;
- makes them suffer, killing Enthusiasm;
- takes away their control and paves over local adaptations with its Master Plan, killing Autonomy;
- denies users any insight into how the system works and treats them like mindless grunts, killing Mastery;
- alienates people from their work, killing Involved Caring; and
- destroys things (often, past versions of itself)

We've all suffered at the hands of bad software. It should now be clear that good software—_that good itself_—is the opposite.

## Practices

## Patterns

- functions and values
- expressive data
  - requires an algebraic type system
  - _Domain Modeling Made Functional_ (Scott Wlaschin)
  - "Make Impossible States Impossible" and "Write More Datastructures" (Richard Feldman talks)
  - "Show me your flowcharts and conceal your tables, and I shall continue to be mystified. Show me your tables, and I usually won't need your flowcharts; they'll be obvious" —Fred Brooks
- mechanisms
  - == stateful objects that have no shared-state dependencies.
  - mechanisms just update their state in response to messages.
  - they receive and return values.
  - Find Parnas quote equating behavior to movement patterns of toggle switches.
- procedures
  - don't test 'em (or use coroutines)
- manual dependency injection
- ubiquitous interfaces enable true dependency inversion
- toys for tests
  - make your fakes real
- functions live with the most peripheral value they deal with
  - if you're querying data from a GraphQL API, you probably have "GraphQL types" and "domain types".
  - all dependency arrows should point inward, toward your domain model. You don't want your domain
    model to refer to stuff at the boundary. So if you have a function
    that converts a GraphQL type to a domain type or vice versa, it should live with the GraphQL stuff.
- all comments are technical debt

## Geometry

(inspired by [[ChristopherAlexander]]'s [[15FundamentalProperties]] of form)

- Shallow Hierarchies
  - keep control flow structures, dependency trees, and inheritance hierarchies shallow.
  - small is better than big, but sometimes big is what's needed. Then wide is better than deep.
- Levels of Scale
  - ["The Magical Number Seven, Plus or Minus Two: Some Limits on Our Capacity for Processing Information"](https://www.musanim.com/miller1956/)
  - if you can split the information you need to comprehend in detail into ~5 chunks, it's easily comprehensible. 7-9 is pushing it. More than 9 starts to be incomprehensible.
  - adjacent levels of scale in a program should have grain size ratios between 2:1 and 5:1
  - 5 words per line, 5 lines per method, 5 methods per class, 5 classes per module
  - these are just rough guidelines; don't take them too literally
  - chunks _don't_ have to be given names. Extracting chunks into functions would sometimes violate the shallow hierarchy principle.
- Local Symmetry / Alternating Repetition
  - make similar things look similar, so important differences stand out.
  - boil away all duplication with the [[FlockingRules]].
- Echoes
  - similar patterns apply at different levels of scale or in different places
  - see: XP's principle of self-similarity
- Intensive Centers
  - "this above all: to thine own self be true"
  - units of code should be "inward looking"—internally coherent. You shouldn't have to know about its callers to be able to tell that it's correct.
  - names that describe how something is used are a smell
- Boundaries
  - data munging, adapters, and anti-corruption layers make up a huge percentage of real systems.
  - done right, these concerns are completely separated from business logic, which remains clean and contains all the essential complexity.
  - find Alan Kay quote about cells putting huge amounts of energy into sanitizing their input
- Roughness
  - don't spend time on things that don't matter
- Simplicity
  - build up complexity from a "language" of small, simple parts
- Not-separateness
  - implement and depend on ubiquitous interfaces
  - do not require your callers to conform to your unique way of doing things
  - (but do whatever you like _within_ your own walls)