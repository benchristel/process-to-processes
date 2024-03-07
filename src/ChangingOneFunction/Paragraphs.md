# Technique: Paragraphs of Code

<div class="summary-block">

...a way to clarify code structure by visually grouping related forms.

</div>

## What it looks like

A **paragraph**, in code, is a group of lines separated from neighboring lines
by blank space.

```
foo();

bar();
baz();
quux();

kludge();
```

## Example 1

### Before

Here is an excerpt from a `index.ts` file that exports values and types from several other files:

```ts
export { Text } from "./display/Text"
export type { TextProps, CardinalDirection } from "./display/Text"
export { Theme } from "./display/Theme"
export type { Filled, Stroked } from "./display/Theme"
export { MovablePoint } from "./interaction/MovablePoint"
export type { MovablePointProps } from "./interaction/MovablePoint"
export { useMovablePoint } from "./interaction/useMovablePoint"
export type {
  ConstraintFunction,
  UseMovablePoint,
  UseMovablePointArguments,
} from "./interaction/useMovablePoint"
```

<cite>Source: [Mafs, by Steven Petryk](https://github.com/stevenpetryk/mafs/blob/e1eba6af30d3c1fdbb2d7b43662c1f842a03b955/src/index.tsx), blank lines removed</cite>

There is a pattern here: each file has a pair of export statements associated with it: one
for values and one for types. We'd like to maintain the invariant that each file is listed in the `index.ts` file only
once (so you can find all its exports in one place) and that there is exactly one value export and one type
export for each file.

However, it is not easy to see from the structure of this code (from which I removed the blank lines) that
this invariant exists.

### After

Here is the code as it actually appears in the repo. It's more readable than the example above, due to the use of
paragraphs that group together the related exports:

```ts
export { Text } from "./display/Text"
export type { TextProps, CardinalDirection } from "./display/Text"

export { Theme } from "./display/Theme"
export type { Filled, Stroked } from "./display/Theme"

export { MovablePoint } from "./interaction/MovablePoint"
export type { MovablePointProps } from "./interaction/MovablePoint"

export { useMovablePoint } from "./interaction/useMovablePoint"
export type {
  ConstraintFunction,
  UseMovablePoint,
  UseMovablePointArguments,
} from "./interaction/useMovablePoint"
```

<cite>Source: [Mafs, by Steven Petryk](https://github.com/stevenpetryk/mafs/blob/e1eba6af30d3c1fdbb2d7b43662c1f842a03b955/src/index.tsx)</cite>

A paragraph says "these lines are more closely related to each other than they are to what's around them."

## Counterexamples

Simply breaking up code into arbitrary chunks isn't helpful—it's counterproductive.

## Caveats

## Related Techniques

- {{link ArrangeActAssert}} is a specific application of this technique
- {{link ScopingBlocks}} is often a good follow-up to this technique