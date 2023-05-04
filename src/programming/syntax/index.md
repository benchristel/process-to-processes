# Syntax

As a new programmer, I spent a lot of time thinking about the _syntax_ of my programming language and looking for ways to simplify it. I gravitated toward languages with superficially simpler syntax: Ruby and Python were nice, JavaScript was so-so, and Java was the worst. Whenever I could, I tried to use macros (as in C) or runtime metaprogramming (as in Ruby) to simplify the syntax of my programs.

TODO: add example of Ruby metaprogramming. Maybe `attr_accessor`?

This was all fine and good and natural: when you're relatively new to programming, getting the syntax right is the first of several hard parts of your job. It makes sense to look for ways to lighten the load.

As I gained more experience, I found myself thinking about syntax less and less. In much the same way that a proficient reader of English doesn't focus on the specific curl of a `t` or a `g` in the text they're reading, I no longer "saw" the syntax of my programming language. Most of the time, I was only conciously aware of the higher-level structures. I perceived _if statements_ and _functions_ and _variable assignments_ as if the abstract syntax tree, not the bytes of my file, were the tangible thing.

As this ability grew stronger, I found I no longer cared as much about the syntax of my language. My main concern was that the _computer_ should be able to parse the syntax easily, so it could give me helpful error messages when I made a syntax mistake. The languages that help the computer most in this regard are those with more pedantic syntax restrictions—the ones that want the curly braces _just so_—and those where each token has few possible meanings. When considering syntax from this angle, Ruby is about as confusing as you can get. JavaScript is better, but still pretty bad, because curly braces and parentheses get used for so many things. Go is great. Assembly is nearly perfect.

The takeaway from all this is that different syntaxes help different people at different times. Whether you're a senior engineer who thinks entirely in design patterns and couldn't care less about syntax, or a junior engineer who hates semicolons, try to empathize with the other side and see the tradeoffs you make for what they are.

## Simplifying Syntax in Any Language

No matter your skill level or language preference, there are a few things you can do to make your programs _objectively_ easier for humans (and possibly machines) to parse.

- lighten the left branch
- unnest
- optimize breadth-first scanning
- shorten lines