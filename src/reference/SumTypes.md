I find sum types useful for reducing the number of states I have to think about.An example from code I worked on recently: a certain JavaScript GraphQL client emits responses like this to its observer:

```ts
type Response<T> = {
  data: T | null,
  error: Error | null,
  loading: boolean
}
```

Based on the type, it looks like there are 3 independent binary variables, and therefore 8 different states this thing can be in (data and error can be present or absent, loading can be true or false). However, there are only 4 meaningfully different states: "loading", "error", "data", and "data-and-reloading" (used when the data was fetched from a cache that might be stale, so we also have a network request in progress). We can express those states as:

```ts
type NormalizedResponse<T> =
  | {state: "data", data: T}
  | {state: "error", error: Error}
  | {state: "loading"}
  | {state: "data-and-reloading", data: T}
```

Once we've reformatted the Response thus, the code that processes it can have fewer conditionals (e.g. we don't have to check if data is null) and the typechecker can verify that we've handled all the cases (we'll get a compile-time error if we forget to handle some of the states.)One advantage of sum types over an OO solution for this is that sum types let you compose processing steps. E.g. perhaps we want to parse the incoming data into a more convenient form, folding parse errors into the error case of the NormalizedResponse. We can write a generic function that can do that for any datatype, given an appropriate parse function. I'm not sure how I'd write the same code in an OO style.To generalize a bit: I prefer sum types over OO polymorphism when I have a closed class of possibilities (i.e. I can enumerate all of them, and maintaining that enumeration is essential to correctness). I prefer polymorphism when there is an open class (i.e. you can plug-and-play different implementations and they should just work).