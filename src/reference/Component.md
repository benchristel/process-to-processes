A **component**, in a [[Model]] of a [[SoftwareSystem]], is a coherent piece of the system that has a [[Boundary]] separating its inside from its outside. [[Message]]s cross the boundary, allowing the component to communicate with its [[Context]] (a set of [[Collaborator]]s). In a typical system model, the components are people, [[Device]]s, [[Process]]es, and [[Service]]s.

## Interactions with third-party components

Components can be categorized as first-party or third-party. A first-party component of a [[System]] [[Model]] is one that the makers of the model are tasked with designing/building. A third-party component, or [[Collaborator]], is one built by someone else.

When designing the system, we are usually free to design the [[Interaction]]s between first-party and third-party components any way we like (assuming that third-party components can be [Adapt](Adapter)ed to speak our [[Protocol]]). However, we cannot generally make assumptions about the exact behavior or availability of third-party components; in general we should assume that any sequence of messages that our protocol can represent could be emitted by a third-party component.

For example, suppose we're designing an application that's going to take a search query from the user, call Google Search's REST API, and display the search results. We should assume that all of the following can occur:

- Google returns a 200 response containing search results.
- Google returns a 200 response with no search results.
- Google returns a 200 response, but its body isn't well-formed JSON.
- Google returns a 200 response with well-formed JSON, but it's not shaped like a list of search results.
- Google returns a 200 response containing search results, and some extra JSON fields we don't recognize.
- Google returns some other HTTP status code.
- Google returns something that isn't a well-formed HTTP response.
- Google returns nothing at all; our HTTP request simply goes unanswered.
- Google returns an HTTP response, but &nbsp; v e r y &nbsp;&nbsp;&nbsp; s l o w l y.
- Google returns an HTTP response, and the body never ends.
- The TLS handshake fails.
- The DNS lookup fails.

Our HTTP client will hopefully deal with some of these for us and signal an error somehow. Ideally, we'll only need to detect errors in the protocol that's specific to _our_ application, not errors in the layers below (HTTP, TLS, TCP, etc.)

But the overall point is, we can't control what third parties do.

## Examples

Concrete examples of components that our software might collaborate with:

- A user of the software (perhaps abstracted to mouse and keyboard inputs, and video output)
- The [[Clock]]
- An SMTP server
- A filesystem
- An operating system service for generating random noise (e.g. `/dev/urandom`)
- A printer

## Team organization

[[ConwaysLaw]] dictates that component boundaries align with team boundaries; each component is likely to be "owned" (that is, designed and developed) by a coherent group of people.

## Choice of boundaries

In many cases, the boundaries we draw around components don't exist "out there" in the world; they're a feature of the map, not the territory. Accordingly, we have some flexibility in how we draw the boundaries.

Depending on the boundaries we choose, the [[Behavior]] of our components may become easier or harder to describe.

For example, suppose we are designing a pocket calculator, and we are considering how to draw the boundary around the core logic of the thing: the component that takes input from the user, remembers the input, does arithmetic, and displays the results.

Let's say the calculator is going to use a seven-segment LCD that can display at most 10 digits. Then we can model its output as either:

- the set of segments that are turned on
- a tuple of 10 digits, the location of the decimal point, and flags for any other special segments (the minus sign, the `E` to indicate overflow)

If we try to give examples of correct [[Behavior]] in terms of the first output model, we're likely to be overwhelmed by the [[AccidentalComplexity]] of the model. Representing the output as a set of LCD segments allows many more possible values than we need, most of which are meaningless garbage. A textual representation of such an output format is almost certain to be illegible.

With the second representation, however, it's much easier to communicate examples of correct [[Behavior]]. It does, however, require that we add a shim to the display to convert our format into one that the physical display understands.

## Elsewhere

[The British Computer Society defines a _component_ as](http://www.testingstandards.co.uk/bs_7925-1_online.htm#Component):

> component: A minimal software item for which a separate specification is available.

further defining "specification" along the lines of my term [[Behavior]].