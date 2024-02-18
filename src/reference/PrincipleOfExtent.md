The Principle of Extent tells you how big to make the clickable area of an element. The clickable area should be coterminous with the element's visible bounds. This ought to be obvious, but unfortunately common sense is anything but common.

## Negative Examples

Jira provides an example of an egregious violation of this principle. In order to focus a rich text input in the issue creation form, you have to click a 16-pixel-tall area in the center of this big blank box:

![](https://user-images.githubusercontent.com/693920/147430713-fd193856-138b-4dfd-92b5-2937e04145d4.png)

The only place you can click to focus the textarea is in the one-line-tall area where I've typed some text. Clicking above or below does nothing.