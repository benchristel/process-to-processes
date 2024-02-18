In a **layered architecture**, code is organized into a stack of "layers", where each layer calls the one below it. The typical separation is into presentation, domain, and data persistence layers.

```
UI / HTTP controllers
         |
         v
Domain / Business logic
         |
         v
      Database
```

Martin Fowler describes the architecture here: https://martinfowler.com/bliki/PresentationDomainDataLayering.html

## Discussion

While I think the layered architecture is in a sense inevitable for many application delivery mechanisms (e.g. the web), it divvies up code at a granularity that is too coarse for my liking. Simply knowing what layer a piece of code goes in does not tell me enough about its relationships to other pieces of code for me to feel comfortable working with it. I need to learn more about those relationships before I feel like I understand the code.

The following diagram is a better representation of my [[MentalModel]]. The vertical lines represent dependency relationships. The horizontal arrows represent data flow.

```
                        Entrypoint
     ________________________|__________________________
    /          /             |           \              \
Input -> Parsing -> Business Logic -> Presentation -> Output
```

Note that this is the _dependency_ graph, and [[TheDependencyGraphIsNotTheCallGraph]]. If the entrypoint passes input/output [[Procedure]]s into the business logic code ([[DependencyInjection]]), the call graph might look like this:

```
                        Entrypoint
     ________________________|__________________________
    /                        |                          \
Input Constructor     Business Logic                Output Constructor
    _________________________|______________________________________________
   /             /           |          \          \           \            \
Input -> Pure Functions -> Input -> Pure Funcs -> Output -> Pure Funcs -> Output
```