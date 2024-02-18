A Value Object is a [[Value]] whose [[Limb]]s are pure [[Function]]s.

A [[FunctionClosure]] is the "base case" value object.

Value objects are useful for computing a set of values lazily, or creating partially applied functions.

Example:

```javascript
function Path(components) {
  return {
    forUnix: cache(forUnix),
    forWindows: cache(forWindows),
  }

  function forUnix() {
    return components.join("/")
  }

  function forWindows() {
    return components.join("\\")
  }
}
```

Annotated with [[Capabilities|CodeCapability]]:

```
declare cache[func]<T>([func]() => T): [func]() => T

function Path[func](components) {
  return {
    forUnix: cache(forUnix),
    forWindows: cache(forWindows),
  }

  function forUnix[func]() {
    return components.join("/")
  }

  function forWindows[func]() {
    return components.join("\\")
  }
}
```

Not complicated—everything here is a pure function.
