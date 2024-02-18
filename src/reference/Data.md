**Data** are records of facts observed or derived from observation.

In order to be [[Meaning]]ful, data require interpretation. That is, data only have meaning in the context of a program whose structure encodes the knowledge of what to do with each datum. This is most apparent in languages like C where data types have no runtime representation. If you're looking at the memory of a C process, you can't generally tell if a given 8-byte sequence is supposed to represent a string, an integer, a floating-point number, a bitmap, or a machine instruction—the meaning of the data in memory is determined by how the program treats it. Misinterpreting data (e.g. due to a buffer overflow) is a common source of bugs and security vulnerabilities in C programs.

Higher-level languages generally don't let you treat the bytes of an integer as if they were a string, but they still leave opportunities for misinterpretation of data at the [[Domain]] level. For example, suppose we see the following array when debugging a JavaScript program:

```js
const emails = [
  {
    subject: "...",
    from: "...",
    to: "...",
    body: "...",
  },
  {
    subject: "...",
    from: "...",
    to: "...",
    body: "...",
  },
]
```

Are these emails we've received? Emails to be sent? Emails we've already sent? The contents of our spam folder? Made-up test data? The only way to know is to look at how the program treats the data.

In practice, the need for interpretation is no great obstacle to using data, but proponents of [[ObjectOrientedProgramming]]—notably [[AlanKay]]—make much of it. We wouldn't want to misinterpret the contents of our spam folder as a list of emails to be sent to customers, now, would we? Kay argues that in order to avoid errors of misinterpretation, data should always be bundled with the program that interprets it—i.e. data should be encapsulated within [[Object]]s.

## Pronunciation and Plurality

Is "data" the plural of "datum", or is it an uncountable mass noun, like "bread"? For that matter, how is "data" pronounced?

I assign meanings to _both_ pronunciations of "data". When the first "a" is the vowel heard in _cat_, "data" is the plural of "datum". When it's the vowel heard in _date_, "data" is a mass noun. I could disambiguate these pronunciations in writing by spelling the second one "däta" (as if it were German) but I suspect that would be both obnoxious and unnecessary.

## Formal-ish definition

A [[Value]] is a datum iff it...

- is [Immutable](Immutability)
- is indistinguishable from any [[Equal]] value, and is [[Equal]] to any indistinguishable value.

A value v1 is indistinguishable from another v2 if, for any [[Routine]] p that does not depend on the pointer identity of the values, the following calls are equivalent: `p(v1, v2)`, `p(v2, v1)`, `p(v1, v1)`, `p(v2, v2)`.

Expressions that operate on and return data are [ReferentiallyTransparent](https://github.com/benchristel/benchristel.github.io/wiki/ReferentialTransparency)