A nilpotent [[Routine]] is one that has no observable effect aside from its return value and its consumption of CPU cycles. Calling a nilpotent routine _N_ times (and ignoring its return value) is equivalent to calling it zero times.

Nilpotency is a weaker guarantee than [[ReferentialTransparency]]. Consider the following code:

```
var x = f(3)
return g(x, x)
```

If `f` is referentially transparent, `x` can be inlined without changing the meaning of the program:

```
return g(f(3), f(3))
```

However, this is _not_ generally possible if `f` is nilpotent. `f` might create and return a mutable [[Object]], and the logic of the program might depend on `g` receiving the selfsame object as both of its arguments. This might happen if `g` alters the [[State]] of its arguments in any way.

Note that, by the same token, it is not generally safe to extract variables for the result of a nilpotent routine: given `return g(f(3), f(3))` we cannot assume that the repeated `f(3)` call can be extracted to a variable.