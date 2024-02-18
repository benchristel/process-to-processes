The "onion architecture" is similar to what Gary Bernhardt calls a "functional core, imperative shell" architecture.

In an onion architecture, side-effecting glue code calls pure business logic and domain code.

Layers:

- Glue [[Procedure]]s (e.g. `main`, HTTP handlers, event handlers)
- UI glue [[Function]]s (React/JSX, presenters, animations)
- Business rules
- Domain types
- Language extensions (i.e. app-agnostic utilities)

In my estimation, based on code that I've seen, app-agnostic utilities typically make up less than 5% of the codebase. Domain types and business rules, perhaps 20% each. Over half of a typical codebase might be glue code.