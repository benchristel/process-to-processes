In [[TheNatureOfOrder]], [[ChristopherAlexander]] describes fifteen ways that [[Center]]s help each other come to [[Life]] and create living [[Wholeness]]. He calls these the fifteen fundamental properties of living structure.

Alexander's concern is architecture; accordingly, he grounds his description in examples of physical, spatial systems that possess these properties. But curiously, [[Program]] text (a.k.a. code) also evinces these properties in a nonspatial (or maybe hyperspatial?) way, and the best programs tend to do so to a high degree.

While these properties can be described in a detached, ateleological, purely spatial way, they often happen to coincide with forms that are _useful_ for something. That is why it makes sense for us, as creators of practical things, to seek them. Perhaps that's why we find them beautiful.

## [[ChristopherAlexander]]'s Fifteen Properties of Living Structure

### 1. Levels of Scale

[[Center]]s can help each other by forming a hierarchy of scales. The smaller centers organize to create and reinforce larger ones.

Every program in a modern high-level language has levels of scale. Often, there are six or seven levels:

- tokens
- statements
- blocks
- [[Routine]]s
- classes
- modules
- architectural layers

For the levels of scale to work well together, and support each other, the jumps in grain size between them must not be too large. Ratios of between 3:1 and 5:1 are often considered healthy (the phrase "methods should be no more than five lines long" is an oft-repeated software design trope). A line should have a handful of tokens; a method a handful of lines; a class a handful of methods. This is necessary, I think, for us to be able to comprehend the relationship of each whole with its parts—indeed, for us to be able to see it as a _whole_ at all, rather than just an assortment of parts.

An interesting consequence of this constraint on grain size ratios is that it constrains how large the _program_ can be and remain comprehensible. There are various ways to fudge the numbers, but it seems to me that an architectural layer maxes out at around 10,000 lines of high-level code (like Ruby or JavaScript). If we divide our applications into infrastructure, domain, business, and UI layers, that means the maximum size of a program is around 40,000 lines. This aligns with my experiences of working on programs around that size: 40,000 lines is about as much as I can comprehend.

40,000 lines may seem like a cruelly tight constraint, but I believe this constraint is actually set by what the _user_ can mentally model. That is, 40,000 lines is the maximum size of a program that can effectively serve one person or one use case. I hypothesize that when a program grows beyond this threshold, its users will inevitably find its behavior inscrutable. The threshold precedes the design of languages and programs, not the other way around. That is, our programming languages have developed levels of scale _so that_ we can write 40,000-line programs, which is why we usually see languages with ~6 levels of scale rather than 3 or 12.

Note that the 40,000-line constraint does not apply when several orthogonal programs are composed together. For example, an IDE consists of many mostly-independent pieces: an editor, a syntax highlighter, a terminal emulator, a file browser. Each of these might be 40,000 lines. The whole remains human-scaled because the user does not have to comprehend how these different parts interact. They mostly _don't_ interact, except through the user.

Sometimes, not being able to see the forest for the trees is a good thing. A tree has a maximum size; a forest does not. We need forests, and things that are at the scale of forests, but we have to make them one tree at a time.

### 2. Strong Centers
One [[Center]] can help another by "pointing" towards it, thus helping it become more useful, more whole, more integrated with its environment. A center toward which many centers point is a _strong center_.

> One subtle but powerful way to promote compactness in a design is to organize it around a strong core algorithm addressing a clear formal definition of the problem, avoiding heuristics and fudging.
>
> —[Eric S. Raymond, _The Art of Unix Programming_, "Compactness and the Strong Single Center"](http://catb.org/esr/writings/taoup/html/ch04s02.html#id2895445)

Something should be at the _center_ of a program—the thing around which the other components revolve.

> The entire design sets up a vector field so that every point has the property that from that point the center is in a certain direction: one direction is going to the center, and another is going out away from it. As a result, the whole visual field is oriented towards the center, and the field feels centered.
>
> —Christopher Alexander

In a typical [[RubyOnRails]] app, the center is the database. We have a sense that HTTP requests come in at the "edge" and control moves inward through the controller, model, and database, and finally data is returned from the database to the model and back to the controller and the view.

The database of a Rails app is the core of the application; the other parts refer to it (often indirectly) and support it and serve it. If the code were lost and only the database survived, the system would still retain some degree of its wholeness; a new application might accrete around the old database. But lose the database, and the other parts become useless.

In a [[FunctionalCoreImperativeShell]] architecture, the center is the domain model, expressed as data types and the operations on those types. Interactions with the database happen on the periphery.

In such an architecture, the domain model is the center of the application; the other parts refer to it and support it and serve it. If everything else were lost and only the domain model survived, the software would still retain a degree of its wholeness. You could still use the domain model, if you happened to have data to feed it. But lose the domain model, and nothing else makes sense.

In [Druthers 3.0](https://druthers.app), [[GavinMorgan]] and I made a CRDT model the center of the program. Other parts of the program are, by necessity, acutely aware of the details of this model and the valid ways of interacting with it. Despite this arguable compromise of the design (OO proponents would probably like the data representation to be a bit more isolated from its clients) the program is extremely robust in the ways we wanted it to be; there are no race conditions that lead to bad states, which is an important property for a peer-to-peer, offline-first app to have. Without this CRDT model at the center, the rest of the code would be totally useless.

### 3. Boundaries
One [[Center]] can help another by forming a boundary between it and its environment. Boundaries define a center and make it distinct. They also bridge the gap between the center and its environment.

> the boundary must at the same time be distinct from the center being bounded, must keep this center distinct and separate from the world beyond it, and yet also have the capacity of uniting that center with the world beyond the boundary. Then the boundary both unites and separates. In both ways, the center that is bounded becomes more intense.

Examples of boundaries in software:

- [[AntiCorruptionLayer]]
- [[ParseDontValidate]]
- [[FunctionalCoreImperativeShell]]
- [[Interface]]s, [[DependencyInversion]]
- [[CompositionRoot]]

Code is intensified by the boundary because then it can have better shape: a more cohesive purpose, uncontaminated by the concerns of things external to itself. But the boundary is also quite literally the thing that connects the bounded code to the world outside, and in doing so it strengthens, rather than denies, the relationship of the bounded code to its context. It also directs attention to the context. After all, if the context didn't exist, there would be no reason for the boundary to exist.

[[ToddSedano]] et al. theorize that a product backlog in a software project is "a [boundary object](https://en.wikipedia.org/wiki/Boundary_object) that helps bridge the gap between the processes of generating user stories and realizing them in working code". https://works.bepress.com/cecile_peraire/43/

### 4. Alternating Repetition

Unix pipelines: the filter programs repeat, and so do the streams of data between them. Both form positive space. One way of seeing the pipeline is to see the filters as primary. Another is to see the streams of data as primary.

More generally, [[Routine]]s and data alternate throughout the structure of a program. Data types form the space "between" routines, since data are passed from routine to routine. I've seen too many programs
where programmers only thought about the routines, and the data was neglected. In a well-designed program, the data is as coherent as the code that processes it. The code becomes _more_ coherent when the data is coherent.

In [[TestDrivenDevelopment]], the rhythm of writing a test and then writing the code to make it pass repeats and
alternates. Either the tests or the code can be viewed as primary; both are positively shaped.

This property seems like a special case of Positive Space (below). Repetition is inevitable; it happens whenever it is necessary. It becomes
_Alternating_ Repetition only when both alternating sequences of centers are positive.

### 5. Positive Space
Two neighboring centers help each other when they are shaped so both are _positive_—relatively simple, convex, and locally symmetrical.

What does it mean for code to evince this property? A [[UnitOfCode]] is positive when it is coherent within itself, uncomplicated by outside concerns nosing in. Functions/methods/classes are inward-looking. Parameter names, function names, and comments don't refer to the functions' callers. It becomes easier to understand each [[UnitOfCode]] when it is coherent, centered in itself, even though it is related to and supported by many other [[Center]]s.

Positively shaped code is neighborly. It takes its shape while allowing its neighbors to take theirs.

> In all these cases, the positiveness of the space — what we might also call the convexity and compactness of the centers which form — is the outward manifestation of internal coherence in the physical system. —_The Phenomenon of Life_, p. 262

[[IdeaFragment]] is a specific antipattern that can appear in code that is _not_ positively shaped.

### 6. Good Shape
> When I began looking for living structures, I was surprised to find out how often, mixed with other properties, there was an element that seemed to defy analysis: the works contained elements with the most gorgeous, beautiful, powerful shapes. Sometimes this beauty of shape seemed subtle, complex, beyond analysis. I became aware of a special quality that I began to think of as _good shape_, but could not very easily explain it, or define it.
> —The Phenomenon of Life, p. 179

> It is easiest to understand good shape as a recursive rule. The recursive rule says that the elements of any good shape are always good shapes themselves. [...] In addition, we note that the simplest and most elementary good shapes are made from elementary figures.

> the Persian carpet [...] seems superficially "floral." But on close inspection it turns out to be made up of simpler forms, including triangles, rhombuses, hexagons, arrowheads, pieces of circles, all rather regular—and it is their regularity which allows the formation of so many ambiguous cross-relationships within the form.
> —p. 181

> You can call it beautiful code when the code makes it look like the language was made for the problem.
> —Ward Cunningham

"Good shape" is confusingly similar to "positive space". Here is an attempt at distinguishing between them (though I'm not sure I have it right):

While positive space describes the shape of individual units of code, it says nothing about their potential ways of relating. Code with good shape is always positive, but it has the additional property that it _composes_ well with other units of code. This is a familiar idea in [[FunctionalProgramming]], where many small pieces are often composed to create programs of astonishing simplicity and beauty. Good shape can also be found in imperative code, e.g. the `io.Reader` and `io.Writer` interfaces in [[GoLanguage]].

### 7. Local Symmetries

Consider the following:

```js
// Example 1:
function foo() {
  if (someCondition) {
    return "a"
  }
  return "b"
}

// Example 2:
function foo() {
  if (someCondition) {
    return "a"
  } else {
    return "b"
  }
}
```

The addition of the `else` in Example 2 doesn't impact the meaning of the program, but
it does enhance its symmetry. This symmetry lets us read the code breadth-first, outside-in.
If we collapse the blocks in both examples, we see:

```js
// Example 1:
function foo() {
  if (someCondition) { ... }
  return "b"
}

// Example 2:
function foo() {
  if (someCondition) { ... }
  else { ... }
}
```

Only in Example 2 is it clear that the two branches are mutually exclusive. This symmetry is a hallmark of [[StructuredProgramming]].

In Go, we sometimes see the following pattern, which shuns even the asymmetry
of the `else` keyword, and makes `false` as primary as `true`:

```go
switch someCondition {
  case true:  return "a"
  case false: return "b"
}
```

[[KatrinaOwen]] says to make similar things appear similar, so the important differences can stand out. Symmetry is what remains when we make similar things more similar until all the unnecessary distinctions have been sublimated away. As [[ChristopherAlexander]] puts it:

> Complexity (in the bad sense) consists of distinctions which unnecessarily complicate a structure. To get simplicity, on the other hand, we need a process which questions every distinction. Any distinction which is not necessary is removed. To remove a distinction we replace it by a symmetry.

The [[FlockingRules]] work essentially by enhancing latent symmetries in the code until some parts are exactly duplicated; those parts can then be factored out.

### 8. Deep Interlock and Ambiguity

Does an interface belong to its caller or its implementer?
Or is it a meeting place for both?

Does data belong to its producer or its consumer? Or both?

Does a function that converts numbers to strings belong in the `numbers` package? Or the `strings` package?

We should embrace such ambiguities, because their presence means the code/data/interface is doing real work—communicating between A and B, getting us closer to solving the problem at hand.

### 9. Contrast

> The brain [...] seems to actively increase the contrast between signal and noise, or between different aspects of the sensory input, in order to make it easier to work with.
>
> —[Simon Roper](https://www.youtube.com/watch?v=kUcMm-lS2Kk)

In a poorly-designed program, the contrast between different parts is low. All the code has the same texture: a mishmash of different stuff. Each file you look at has some of everything: a bit of SQL, a bit of math, a sprinkling of HTML. Imagine a PHP app written by a college student in 2008.

[[SandiMetz]] has a technique she calls the [[SquintTest]]: you lean back and squint at the code, looking for changes in shape and changes in color. The more coherence and consistency you see in each part, the better the code is.

When concerns are separated, there is contrast between the parts. The view code looks very different from the database access code. When you open a file, you can tell at a glance what type of thing it is, and know where it fits in the architecture.

> For functional and cognitive clarity, contrast is [...] practically necessary: the shop in the neighborhood is different from the houses next to it. [... Contrast] allows each center to take its proper nature. It permits more intensive attention to individual functions. And it creates a feeling of distinction which relaxes people, because it acknowledges and permits different dimensions of experience.
>
> Contrast is the thing which creates differentiation, and allows differentiation. It is the differentiation of the void which gives birth to matter. All differentiation requires that contrast is created in space, in order to give birth to anything at all.
>
> —_The Phenomenon of Life_, p. 203

### 10. Gradients

When you look at the methods of a class or the functions in a module, there is usually a gradient from public/primary to private/secondary.

When you read the tests for a module, there is a gradient from error cases to edge cases to central cases.

These gradients exist because of another gradient: human attention, as a function of the position of the scrollbar. We tend to start reading at the top of the file and scan downward. If we can't find what we're looking for, our attention is likely to drift. Good code acknowledges this by putting the stuff people  look for at the top.

> Gradients will follow as the natural response to any changing circumstance in space, as [center](Center)s become adapted correctly to the changes which move across space.
>
> —_The Phenomenon of Life_ p. 206

### 11. Roughness

> An irregular world struggling to be regular always achieves a certain level of regularity which is interrupted by unusual configurations created by the very forces that produce the regularity as they act against a framework of three-dimensional constraints inherent in space. [...] The quality of roughness, far from being caused by inaccuracy or "sloppiness," instead occurs where there is a partial misfit between a very well-defined order and the space or configuration where it occurs. This forces an apparent irregularity, not for its own sake but to create a greater regularity.
> 
> —The Phenomenon of Life p. 279

To make each piece of a program coherent, we sometimes have to stitch them together a bit at the edges.

No matter how good our type system is, there will be invariants it can't express, so we have to have a few runtime assertions.
These "holes" in a program's fabric are unavoidable, but by choosing where to put them we can keep the program intelligible.

At a syntactic level, the roughness of hand-indented code can aid readability. The auto-formatters of today are not able
to take context into account when deciding whether and where to break lines, which leads to awkwardnesses like this:

```js
const actionDispatchers = {
  undo: (...args) => dispatch(undo(...args)),
  redo: (...args) => dispatch(redo(...args)),
  decrementCountdown:
    (...args) => dispatch(decrementCountdown(...args)),
  revealSolution: (...args) => dispatch(revealSolution(...args)),
}
```

This would almost certainly be more readable if `decrementCountdown` were not broken into two lines, because none of the
other lines are broken that way.

```js
const actionDispatchers = {
  undo: (...args) => dispatch(undo(...args)),
  redo: (...args) => dispatch(redo(...args)),
  decrementCountdown: (...args) => dispatch(decrementCountdown(...args)),
  revealSolution: (...args) => dispatch(revealSolution(...args)),
}
```

Even better might be Go-style indentation—though the readability of that style, too, is context dependent.

```js
const actionDispatchers = {
  undo:               (...args) => dispatch(undo(...args)),
  redo:               (...args) => dispatch(redo(...args)),
  decrementCountdown: (...args) => dispatch(decrementCountdown(...args)),
  revealSolution:     (...args) => dispatch(revealSolution(...args)),
}
```

In any case, the local consistency of formatting matters more for readability than the global consistency of line length.
Yet formatters usually enforce the latter at the expense of the former, because that's easier.

Back when I wrote lots of Ruby, there were few auto-formatters for it available, and I hand-indented all my code. The process of
adjusting whitespace was half meditation, half close reading. It often showed me bugs.

> I have never been lied to by data in a .txt file which has been hand-aligned.
>
> —https://xkcd.com/1301/, title text

Roughness occurs at the semantic level when we choose an "incorrect" solution for its performance or simplicity. As Linus Torvalds pointed
out,

> "pi = 3.14" is (a) infinitely faster than the "correct" answer and (b) the difference between the "correct" and the "wrong" answer is meaningless.

Approximations and heuristics are often perfectly acceptable, and can be preferable to "correct" solutions because they are cheaper
either in computing resources or programmer time. See also: https://github.com/benchristel/benchristel.github.io/wiki/TestDrivenDevelopment#the-value-of-approximations

The psychological effect of each of these kinds of roughness is that one perceives the program as down-to-earth, humble, handmade,
human-scaled. Roughness touches the heart. But roughness manufactured for that purpose alone will always fail to be
touching. We love roughness in an object only when it shows that the maker was free—that they were constrained only by what really mattered
in that situation. That is, they were free to do the work in the most aware and effective way.

> In our time, many of us have been taught to strive for an
> insane perfection that means nothing. To get wholeness,
> you must try instead to strive for this kind of
> perfection, where things that don’t matter are left rough
> and unimportant, and the things that really matter are
> given deep attention. This is a perfection that seems
> imperfect. But it is a far deeper thing.
>
> —Christopher Alexander

### 12. Echoes

> Nature uses only the longest threads to weave her patterns, so each small piece of her fabric reveals the organization of the entire tapestry.
>
> —Richard Feynmann

Programs have echoes when they exhibit self-similarity at different levels of scale.

- services -> objects
- computers -> objects
- processes -> coroutines
- APIs -> APIs

> Often, when all the different details are members of a family, the task of making the building becomes simpler, the rhythm of making it faster, more economical. It can produce the necessary variety without trouble. If, on the other hand, the details are disparate, it is such an effort, mentally, to make the building at all, that there is less room for variation and invention. The result: in a building _without_ echoes, the final adaptation of the building to its needs is often weaker.
>
> —_The Phenomenon of Life_, p. 221

### 13. The Void

> differentiation of minor systems almost always occurs in relation to the "quiet" of some larger and more stable system.

Innovation blooms when programming languages, operating systems, and other platforms change slowly, and are unopinionated, quiet, and "empty".

See also [[TheVoid]].

### 14. Simplicity and Inner Calm

[[OccamsRazor]]

Unnecessary distinctions should be removed.

Code should not be duplicated.

Data should be normalized.

When data is normalized, simple, unduplicated code arises without effort.

### 15. Not-Separateness

Programs interact with other systems, both at runtime and during development. A library that flouts the norms of its programming language won't see much use, simply because it doesn't fit with the programs that exist or the mindset of the people working on them. Programs need not only to be comprehensible in the abstract but to be comprehensible through the tools (e.g. editors, debuggers) that programmers are actually using.
