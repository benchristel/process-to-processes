```
STATUS: DRAFT
```

Inspired largely by [Tog's First Principles of Interaction Design](https://asktog.com/atc/principles-of-interaction-design/) and the [[UnixPhilosophy]].

These need better names.

A list of visual design principles for software:

- Principle of the [[NullHypothesis]]: if two things are the same in some respect, make that correspond to a sameness in the UI.
  - ...and if they're different in some respect, make that correspond to a difference in the UI.
  - Examples:
    - Selected tabs and menu items should appear different from non-selected items, and similar to other selected items.
- [[PrincipleOfLeastMarking]]: the "common case" or default value of a variable should be represented as the visual variant that is the _least_ distinct from its environment. E.g. if only one item in a list can be selected at a time, the selected state should be marked by some distinction from the surrounding context (e.g. the background of the page). The unselected state should be _less_ differentiated.
  - In order for this to work, the environment has to be visible.
- [[PrincipleOfDynamicRange]]: contrast should be as high as it can be, while keeping things visually comfortable. The full dynamic range of the variables available (e.g. color) should be used, so that signal/noise is as high as possible and cognitive load due to noise is minimized. The highest contrast (e.g. black on white) should be reserved for user data (whether inputs or printouts) and content leaf nodes (e.g. articles) since that is what users will want to pay the most attention to.
- [[PrincipleOfRedundancy]]: information should be communicated via several redundant channels. E.g. icons should be distinguishable by shape, color, _and_ position. This maximizes accessibility, because some people will have an easier time distinguishing shapes, some will have an easier time distinguishing colors, and some will find it easier to remember positions.
- [[PrincipleOfHorrorVacui]]: empty states (e.g. an empty list or empty set) should be distinguished from loading/error states. Displaying a blank page with no explanation is almost always the wrong thing to do.
- [[PrincipleOfUnfamiliarity]]: assume unfamiliarity with the interface and its concepts; do not require users to learn a new visual language to communicate with your software.
- [[PrincipleOfReversibility]]: in most cases, you can make mistakes reversible rather than trying to prevent them. Communicate to users that an action is reversible by using checkboxes, radio buttons, or dropdowns rather than buttons. Each action and its inverse should be available in the same part of the UI (e.g. if you can enable some mode from the main screen, don't require the user to go to "settings" to disable it).
- [[PrincipleOfTrust]]: Trust the user with their own data. Don't put roadblocks in their path, like unnecessary validations or confirmation dialogs. In return, they'll trust your software (not to break or lose their data). Be worthy of that trust.
  - If you're constantly warning the user about the terribly destructive or ill-advised thing they're about to do, the software will _feel_ error-prone and dangerous, even if it's not.
- [[PrincipleOfAttachment]]:
  - Use an inset border to indicate that an element is attached to (or embedded in) its surroundings and cannot be moved or collapsed (e.g. short text inputs).
  - Use an inset border to indicate that an element's content extends beyond its visible bounds (i.e. it is scrollable).
  - Use an outset border to indicate that the element is free to move or change shape or size (e.g. some textareas, cards).
- [[PrincipleOfConvention]]: Maximize [[Thinginess]]: buttons should look like buttons; inputs should look like inputs.
  - research suggests that [users are slower to identify elements that don't have clear role signifiers](https://www.nngroup.com/articles/flat-ui-less-attention-cause-uncertainty/) and [take longer to navigate UIs that have fewer clickability signifiers or don't use these signifiers consistently](https://www.nngroup.com/articles/flat-design-long-exposure/).
- [[PrincipleOfDistinction]]: The complement to the [[PrincipleOfConvention]] is the Principle of Distinction: Elements of different kinds should look different: buttons should not look like inputs or vice versa. Tabs should not be mistakable for scrollbars. Choose design languages in which elements are recognizable and different things look different.
- [[PrincipleOfConvexity]]: Use convexity to distinguish figures from the ground. Nonconvex shapes are significantly less thingy than convex ones. E.g. scrollbar thumbs have rounded ends to distinguish them from the track.
- [[PrincipleOfBoundedness]]: Orient the user by giving pages a clear structure. Elements like navigation headers, sidebars, forms, main content, etc. should be distinguished by borders or changes in color. More generally, if adjacent regions of the screen have different meanings or effects, they should be visually distinct.
  - One purpose of this principle is to establish a hierarchy of what controls what on a page and which things are grouped together. E.g. if an article has related metadata, the metadata should appear "within" the article and distinct from the rest of the content. If a nav element controls the rest of the page, it should appear distinct from what it controls. This helps users understand how the concepts represented by the UI relate to one another.
- [[PrincipleOfFeedback]]: If a user takes an action, _something_ should change to tell them that it worked (or failed, or is in progress).
  - Note that this doesn't contradict the [[UnixPhilosophy]]'s [[RuleOfSilence]] because in a Unix shell you _do_ get feedback that your command completed successfully: the command prompt is printed.
  - The feedback can almost always be quite subtle.
- [[PrincipleOfExtent]]: [[FittsLaw]] suggests that targets should be large. Don't make click targets smaller than they have to be (and _definitely_ don't make the clickable area of an element smaller than its visible boundary, as Atlassian does with some of their elements—that's just perverse).
- [[PrincipleOfMargin]]: To be legible, running text should not be too close to a visual edge.
- [[PrincipleOfConservation]]: Space should not be wasted.
- [[PrincipleOfImpatience]]: Users will not read documentation, or even more than a few words of in-app text, unless they aspire to be power users. (You will know if people aspire to be power users of your software because they will pay at least $30 for it.) Don't waste space on text that people won't read. Don't add documentation to try to excuse a bad UX.
- [[PrincipleOfAntipathy]]: [Users do not want to use your software](https://www.smashingmagazine.com/2016/01/nobody-wants-use-your-product/). They do not want to admire your creative branding strategy or bask in the glow of your technological prowess. They're using your software because they have a goal to accomplish; they want to accomplish it, and then close your program and not think about it anymore. Create UIs that humbly acknowledge this by not burdening the user with cruft. See: Kathy Sierra's _Badass: Making Users Awesome_.
  - however, do not remove elements that are necessary to create [[BiophilicStructure]]. E.g. you should still [[StrengthenLatentCenters]].
- [[PrincipleOfLiberty]]: The only legitimate purpose of software is to enhance people's ability to control their own lives. Thus, software should not restrict its users farther than logical, physical, or ethical limits demand.
  - Example of a logical limit: if data is really, truly, completely deleted, then it will not be accessible anymore.
  - Example of a physical limit: disks have a finite capacity.
  - Example of an ethical limit: users should not be able to access each others' private data (since if they could, that would impinge on the liberty of the other user).
- [[PrincipleOfConsistency]]: UIs generally shouldn't rearrange themselves. Crucial contextual elements should not be hidden.
  - this is not just for usability. It's a security concern! https://jameshfisher.com/2019/04/27/the-inception-bar-a-new-phishing-method/