The principle of least marking says that, if a UI element has multiple states, the default or inactive state should be represented by the visual variant that is least distinct from its surroundings.

To apply this principle, the elements to be distinguished must be embedded in a context that has some "dead space" not occupied by any element. One way UIs fail to apply this pattern is by putting a pair of elements in an environment with no disambiguating context.

## Examples

On GitHub, inactive navigation tabs inherit the low-contrast bottom border of their context (the non-interactive portion of the navbar). The active tab has a markedly different border.

![Github tabs showing the active tab differentiated from the non-interactive part of the tab bar and the inactive tabs less differentiated](https://user-images.githubusercontent.com/693920/147423549-794a4594-bfcd-4865-830e-db9445238f40.png)

Another example from GitHub: the "write" and "preview" tabs of the wiki editor. Here the active tab is given a distinct background color as well as a marked border shape.

![Github editor tabs](https://user-images.githubusercontent.com/693920/147423651-091c25f3-480f-4019-8e05-8a8b02812347.png)