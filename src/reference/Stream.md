Streams are a [[SoftwareDesignPattern]] that shows up, e.g. in the Unix shell.

The general principle is that, when data needs to be processed by a pipeline of transformations, rather than reifying all the data in memory and then passing it to the (composed) pipeline function, it is much more memory-efficient to load and process a bit of data at a time. This means the processing nodes have to be stateful, rather than pure functions. As the data flows through, they need to accumulate state.

```javascript
function NumberLines(andThen) {
  let lineNum = 0
  return (text) => {
    // ...
  }
}
```

Annotated with [[Capabilities|CodeCapability]], this looks like:

```javascript
function NumberLines[C]<In, Out>(andThen: (Out, C) => void, constructor) {
  let lineNum = 0
  return (text: In): void => {
    // ...
  }
}
```

That is, the capability of `NumberLines` is exactly the capability of the 