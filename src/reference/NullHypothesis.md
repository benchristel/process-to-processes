```
STATUS: DRAFT
```

In [[SoftwareTesting]] (and science more generally), the null hypothesis is the one that purports no difference between two conditions. The point of experimentation or testing is to try to disprove the null hypothesis by finding a counterexample. If we disprove it, we adopt a new hypothesis that is the _simplest_ one that explains our observations. (I'll explain what "simplest" means later in this article).

## Example from Science

For example, let's say we want to know if drinking coffee lengthens or shortens your life expectancy. The null hypothesis is "no"—we assume, initially, that coffee consumption doesn't affect your lifespan in any way. We can try to falsify that hypothesis by observing a lot of people who habitually drink different amounts of coffee and noting when they die.

Let's suppose that in our first round of testing, we _do_ notice a difference: people who drink at least one cup of coffee live longer than those who don't. An abstracted plot of our data might look like this:

```
Lifespan
   ^
   |
   |      x
   |      
   |x
---|------|------|---> Cups of Coffee
   |0     1      2
```

We now have two data points. But in order to have a useful theory, we need to be able to generalize. What about people who drink half a cup of coffee a day, or two cups?

The simplest hypothesis that fits our observations is that the relationship continues linearly: that is, whatever increase in lifespan we get by drinking a cup of coffee a day is doubled if we drink two, and reduced if we drink less. Note that this is _also a null hypothesis_ in the sense that it purports no difference between conditions—but its claim is about the _first derivative_ of the `lifespan(coffee)` function instead of the function itself.

A thought experiment suggests, of course, that this hypothesis is probably demonstrably wrong: a person who drinks a million cups of coffee a day is not going to be immortal—more likely, they'd die of a caffeine overdose. There must be some limit at which the benefits of drinking coffee diminish. Our next experiment should try to find that limit.

We then examine people who drink ten cups of coffee a day, and find that they don't live as long as people who don't drink coffee at all.
Our plot now looks like this:

```
Lifespan
   ^
   |      x
   |
   |x     
   |      
   |                       x
---|------|------|-- ... --|--> Cups of Coffee
   |0     1      2         10
```

What type of curve should we interpolate between these points? A parabola is arguably the simplest curve that can be made to fit three points exactly, so perhaps we go with that. We now have a null hypothesis about the _second derivative_ of the curve.

We could go on like this, gathering more data and fitting higher and higher order polynomials to them, but a more fruitful direction may be to look for discontinuities—regions of the domain where the `lifespan(coffee)` function appears to have a definition which cannot be predicted by looking at the other regions.

As we gather more data, it looks like there _are_ discontinuities. Between 0 and 6 cups, the relationship between coffee and lifespan appears to be linear, but at about 7 cups it drops off sharply and continues downward.

```
Lifespan
   ^
   |                 x
   |              x
   |           x
   |        x                  
   |     x
   |  x
   |x     
   |                    x
   |                       x
---|--|--|--|--|--|--|--|--|
   |0 1  2  3  4  5  6  7  8
```

If we were to encode our theory as JavaScript, it might look something like this:

```js
const C1 = // ... some constant to make our function fit the data
const C2 = // ... some constant to make our function fit the data
function lifespanIncrease(cupsOfCoffee) {
  if (cupsOfCoffee < 7) {
    return C1 * cupsOfCoffee
  }
  return C2 * -cupsOfCoffee
}
```

We now have a fairly detailed picture of the relationship between coffee and life expectancy—but, crucially, no more detailed than is supported by the data.

## Example from Software Testing

Suppose we are test-driving a function that outputs a clock time in `HH:MM` format, given a number of seconds since midnight. The function represents our hypothesis of how to solve the problem.

We start from a single example of correct behavior—that is, a single test case:

```js
test("hhmm", {
  "given 0 seconds since midnight"() {
    expect(hhmm(0), is, "00:00")
  }
})
```

We then assume the null hypothesis: that the function's value is the same for all inputs.

```js
function hhmm(secondsSinceMidnight) {
  return "00:00"
}
```

And indeed, any tests we write for values between 0 and 59 seem to confirm the null hypothesis.

Once we get to 60, though, things change:

```js
"given 60 seconds since midnight"() {
  expect(hhmm(60), is, "00:01")
}
```

Now we encounter an interesting question: what is the _simplest_ code that will make this test pass?

Some people would add a conditional expression, like this:

```js
function hhmm(secondsSinceMidnight) {
  return "00:0" + (secondsSinceMidnight < 60 ? "0" : "1")
}
```

However, we know that's the wrong direction—we'd have to remove this code later. And I think our definition of "null hypothesis" justifies linear extrapolation. That is, I'd argue that the code below is _simpler_ than using a conditional:

```js
function hhmm(secondsSinceMidnight) {
  return "00:0" + (secondsSinceMidnight / 60)
}
```

And, to correctly account for values between 1 and 59, we can do this:

```js
function hhmm(secondsSinceMidnight) {
  return "00:0" + Math.floor(secondsSinceMidnight / 60)
}
```

One might wonder what our a priori justification for using the number `60` here is. And if we don't have a test for `59` already, there is no justification! The following code might pass all the tests we've written:

```js
function hhmm(secondsSinceMidnight) {
  return "00:0" + Math.floor(secondsSinceMidnight / 42)
}
```

Perhaps, once we notice that the function is discontinuous, we should try to narrow down the boundary of the discontinuity with more examples. You could also argue that since we're intelligent humans and are in fact making up the requirements for this function as we go along, we should just know that 60 is the right number and we shouldn't bother testing it. I'd buy that.

Our current hypothesis looks correct for values up to 599. When we get to 600, we discover that it is wrong:

```js
"given 600 seconds since midnight"() {
  expect(hhmm(600), is, "00:10") // Failed! expected 00:010 to equal 00:10
}
```

Then we have to invent zero-padding.

```js
function hhmm(secondsSinceMidnight) {
  return "00:" + zeropad(Math.floor(secondsSinceMidnight / 60))

  function zeropad(n) {
    return padding(n) + n  
    function padding(n) {
      return n < 10 ? "0" : ""
    }
  }
}
```

At this point our hypothesis will be confirmed by every value we test up to 3599. After that, we need something like this:

```js
function hhmm(secondsSinceMidnight) {
  const hours   = Math.floor(secondsSinceMidnight / 3600)
  const minutes = Math.floor(secondsSinceMidnight % 3600 / 60)
  return zeropad(hours) + ":" + zeropad(minutes)

  function zeropad(n) {
    return padding(n) + n  
    function padding(n) {
      return n < 10 ? "0" : ""
    }
  }
}
```

Finally, the clock needs to roll over to 00:00 at 24 hours:

```js
function hhmm(secondsSinceMidnight) {
  const hours   = Math.floor(secondsSinceMidnight / 3600 % 24)
  const minutes = Math.floor(secondsSinceMidnight % 3600 / 60)
  return zeropad(hours) + ":" + zeropad(minutes)

  function zeropad(n) {
    return padding(n) + n
    function padding(n) {
      return n < 10 ? "0" : ""
    }
  }
}
```

A further extension makes it work for negative inputs. Here is the final code and tests (runnable at https://benchristel.github.io/try-taste/)

```js
function hours(n) {
  return n * 3600
}

function minutes(n) {
  return n * 60
}

test("hhmm", {
  "0 seconds since midnight"() {
    expect(hhmm(0), is, "00:00")
  },
  
  "1 second since midnight"() {
    expect(hhmm(1), is, "00:00")
  },
  
  "59 seconds since midnight"() {
    expect(hhmm(59), is, "00:00")
  },
  
  "60 seconds since midnight"() {
    expect(hhmm(60), is, "00:01")
  },
  
  "10 minutes since midnight"() {
    expect(hhmm(600), is, "00:10")
  },
  
  "1 hour - 1 second since midnight"() {
    expect(hhmm(3599), is, "00:59")
  },
  
  "1 hour since midnight"() {
    expect(hhmm(3600), is, "01:00")
  },
  
  "2:30"() {
    expect(hhmm(hours(2.5)), is, "02:30")
  },
  
  "23:59"() {
    expect(hhmm(hours(23) + minutes(59)), is, "23:59")
  },
  
  "rolls over at 24 hours"() {
    expect(hhmm(hours(24)), is, "00:00")
  },
  
  "rolls over below zero"() {
    expect(hhmm(-1), is, "23:59")
  },
})

function hhmm(secondsSinceMidnight) {
  const hours   = Math.floor(secondsSinceMidnight / 3600 % 24 + 24) % 24
  const minutes = Math.floor(secondsSinceMidnight % 3600 / 60 + 60) % 60
  return zeropad(hours) + ":" + zeropad(minutes)

  function zeropad(n) {
    return padding(n) + n  
    function padding(n) {
      return n < 10 ? "0" : ""
    }
  }
}
```

## Simplicity

Finally we get to the crux of this article. I said earlier that the null hypothesis is the _simplest_ one that fits the data. But that's a weasely word, "simplest". (it's a [[SynonymForGood]].) What do I actually mean by it?

### Constants are Simple

The simplest hypothesis is that a function is constant—that is, that it's the same for all inputs.

In the absence of other evidence, you can assume that a function that just returns a constant value is an okay solution to the problem. If the function has known discontinuities, you can assume that within each region of the domain in which it is continuous, it always returns the same value.

### Linear functions are simple

If a constant function won't solve your problem, a linear one might.

What "linear" means for types like strings is a little unclear. My working definition is "the input gets copy-pasted into the output". If all your function does is refer to variables and do non-introspective things with them like appending them to a list or concatenating them with a string, it's probably linear.

### Monotonic functions are simple

If linearity won't work, try monotonicity. A monotonic function either increases forever as its input increases, or decreases forever as its input increases.

The concept of monotonicity is hard to apply outside the domain of numbers.

### Continuous functions are simple

If all else fails, try to make your function continuous. A discontinuous function is one that requires if statements or other conditional forms.

## Why Simplicity?

If we don't assume simplicity in our descriptions of the world around us, we have no basis for inductive reasoning. The idea that there is a simple, finite-length description of how any part of the world works is necessary for us to anticipate the future or make any kinds of inferences at all of what things are like outside our direct experience.

Simply put, simplicity is what allows us to generalize. If we assume complexity, we end up with a bunch of [[AdHocHypotheses|AdHocHypothesis]] that cover very specific circumstances, and no ability to generalize beyond those circumstances. [[KatrinaOwen]] gives a memorable example of this in her talk ["Overkill"](https://www.youtube.com/watch?v=GWEEPt8VvmU): a novice programmer's solution to the [[BobKata]] that involved a long if-else chain that exactly mirrored the test cases.

## Criticism of "Out of the Tar Pit"

In [["Out of the Tar Pit"|OutOfTheTarPit]], the authors criticize software testing on the grounds that testing with one set of inputs tells you _nothing at all_ about how the software will behave with a different set of inputs. This is not actually true, because we assume (in fact, we know) that the software has a finite-length description. Testing allows us to refine a simple hypothesis about how the software works into a more complex one.

## The importance of framing

In any experiment, we have to define which parameters are variable and which are held constant. Choosing a different variable may result in a different null hypothesis.

For example, suppose you discover the crash site of an alien spaceship. Inside the ship, you find a small amount of glowing green goo. You start to wonder what would happen if you ate it.

One possible experimental variable is "eat vs. not eat". The null hypothesis in this case is "this alien goo will have no effect on me if I eat it".

However, a different, possibly wiser, variable is "alien goo vs. anything else in the universe". The null hypothesis in this case is "this alien goo is probably no different from a random terrestrial piece of radioactive jelly, and will have similar effects on me if I eat it."

## The Transformation Priority Premise

Bob Martin has an idea called the TPP that seems related to my hierarchy of simplicities above: https://blog.cleancoder.com/uncle-bob/2013/05/27/TheTransformationPriorityPremise.html