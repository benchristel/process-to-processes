The Principle of Attachment tells you how to distinguish between fixed and movable UI elements. UI elements that cannot move relative to their parent should appear recessed, while those that are transient, movable, or, dismissible should appear to float over their parent.

To emphasize that content is scrollable, the scroll container can be recessed.

## Examples

Apple's early OSX versions were a paragon of this principle. Notice how the window, which can move relative to the desktop, has an outer drop shadow that makes it appear to "float" above the desktop. The search input and header buttons, on the other hand, cannot be moved, resized, or dismissed, and accordingly appear to be engraved into the brushed metal of the window border. The folder icons, which are draggable, are also given a subtle drop shadow.

![Apple OSX Finder showing inset search input and outset window](https://user-images.githubusercontent.com/693920/147426709-ab88f45f-6401-48f8-9e84-62f9baac20fc.png)

At first glance, the shadow under the (fixed) menu bar appears to be a violation of this principle. However, it serves an important purpose: by placing the menu bar on the same visual plane as the window, it makes it clear that the window cannot be dragged over the menu bar—instead, the two objects collide so that the menu bar is always visible.

Another example: these cards make it clear that the content is not attached to the map (the map can scroll and zoom behind the cards). Example from https://material.io/components/cards#behavior

![material design cards floating over a map](https://user-images.githubusercontent.com/693920/147430037-9c9e8613-c55e-4abe-a29a-378538ed1366.png)

## Negative Examples

Here, Google inappropriately makes the search bar appear to float over the background. The search bar can't be moved, dismissed, or resized, so why is it floating? (it's probably because that makes more people click it)

![google search bar](https://user-images.githubusercontent.com/693920/147427438-30f6acba-5de6-4b76-af59-5edb6cdef873.png)
