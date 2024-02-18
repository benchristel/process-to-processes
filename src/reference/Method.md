A method is a [[Routine]] that can [[Access]] in-process [[State]] within a certain [[LexicalScope]]. To be useful _as a method_ (rather than just a [[Function]]), a method must thus reference [[FreeVariables]]. For the purposes of this definition, a method may not have [[Effect]]s.

This definition is inspired by the [[ObjectsAreClosures]] equivalence.

Below is an example in JavaScript. `inc`, `dec`, and `val` are methods on a counter object. Note that the `class` keyword is _not_ used, to illustrate that methods have nothing to do with classes. Run the code at https://benchristel.github.io/try-taste.

```js
function Counter() {
  let n = 0
  return {inc, dec, val}

  function inc() {
    n++
  }
  
  function dec() {
    n--
  }

  function val() {
    return n
  }
}

test("a counter", {
  "starts at zero"() {
    const c = Counter()
    expect(c.val(), is, 0)
  },

  "increments once"() {
    const c = Counter()
    c.inc()
    expect(c.val(), is, 1)
  },

  "increments twice"() {
    const c = Counter()
    c.inc()
    c.inc()
    expect(c.val(), is, 2)
  },

  "decrements once"() {
    const c = Counter()
    c.dec()
    expect(c.val(), is, -1)
  },

  "decrements twice"() {
    const c = Counter()
    c.dec()
    c.dec()
    expect(c.val(), is, -2)
  },

  "is independent of other counters"() {
    const a = Counter()
    const b = Counter()
    a.inc()
    expect(b.val(), is, 0)
  },
})
```

