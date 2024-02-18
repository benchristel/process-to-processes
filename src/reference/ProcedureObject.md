Use the Procedure Object [[SoftwareDesignPattern]] to clean up a [[Procedure]] (or really, any [[Routine]]) that has many local [[Constant]]s with entangled logic for computing their values.

This clarifies which code produces each value, and prevents variables from being used before they are initialized (if that's a thing in your language).

Before:

```javascript
function foo() {
  const a = // ... some complicated code
  const b = // ... some complicated code
  // ... more code
  const c = // ...
  // ...
  return f(a, b + c)
}
```

After:

```javascript
function foo() {
  return f(a(), b() + c())

  function a() {
    return // ...
  }

  function b() {
    return // ...
  }

  function c() {

  }
}
```

Annotated with [[Capabilities|CodeCapability]], this looks like:

```
function foo[C]() {
  return f(a(), b() + c())

  function a[*:C]() {
    return // ...
  }

  function b[*:C]() {
    return // ...
  }

  function c[*:C]() {

  }
}
```

That is, if `foo` has capability `C`, `a`, and `b`, and `c` may each have a capability not exceeding `C`. This is pretty straightforward because the inner routines don't [[Escape|VariableEscaping]] `foo`.