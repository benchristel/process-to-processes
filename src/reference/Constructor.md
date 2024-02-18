A constructor is a [[Nilpotent]], non-[[ReferentiallyTransparent|ReferentialTransparency]] [[Routine]] that returns an [[Object]].

Example:

```
function Counter() {
  let count = 0
  return {increment, decrement, value}
  
  function increment() {
    count++
  }

  function decrement() {
    count--
  }

  function value() {
    return count
  }
}
```