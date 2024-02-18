The capabilities of a [[UnitOfCode]] comprise:

- the set of effects that might occur as a result of running the code
- the set of external [[Variables|Variable]] that might affect the code's behavior

Examples of capabilities include:

- [[Access]] to [[Variables|Variable]] in an enclosing [[LexicalScope]]
- [[Access]] to [[Variables|Variable]] passed by reference
- Throwing exceptions
- File IO
- Network IO
- Reading the system date/time

The concept of capability does not imply any particular level of granularity. I've found it useful to distinguish four levels of capability:

- [[Access]] to global state, whether [[Process]]-internal or process-external (e.g. a [[Procedure]])
- [[Access]] to non-global state from an enclosing [[LexicalScope]] (e.g. a [[Method]])
- Pure [[Function]]s

The concept of capability implies a [[LargerContext]] in which a [[Process]] evolves.

## Parameterized Capabilities

A single [[UnitOfCode]] may have many instantiations with different capabilities. An analogy can be made to [[TypeParameters]] in the data domain.

For example, the following [[Routine]] computes a result and calls a [[Continuation]]:

```javascript
function addAndThen(a, b, cont) {
  return cont(a + b)
}
```

What are the capabilities of this routine? The question can't be answered statically; at runtime, each call to `addAndThen` "inherits" the capabilities of its `cont` argument.

This parameterization of capability is necessary to account for streaming patterns like the following, which composes [[Object]]s that operate on [[Stream]]s into a pipeline that has side effects when invoked:

```javascript
pipeline(
  streamFileIn,
  splitIntoWords(),
  createFrequencyHistogram(),
  printStream,
)
```

`splitIntoWords` and `createFrequencyHistogram` have (inherently) no external side effects, though when this whole pipeline is invoked they will each pass data to the next routine in the pipeline which will *ultimately* cause the side effect of printing to the screen.

The only analysis of this code consistent with the capability [[Model]], then, is that `splitIntoWords` and `createFrequencyHistogram` have an invisible "capability parameter" (again, analogous to a type parameter) that determines their capability *in this context* without saying anything about their capabilities in other contexts.

The existence of languages like [[Frank]], which encodes capabilities and capability parameters in its type system, makes me confident that this theory can be formalized.