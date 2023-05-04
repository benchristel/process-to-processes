# About This Book

My colleagues sometimes ask me if there's _one book_ I'd recommend that teaches "the stuff you need to know to be a senior engineer". I haven't been able to pick just one... until now!

This book teaches the concepts and techniques that I consider essential for application programmers working in a modern organization, circa 2023. Not all of these topics are widely discussed in the popular discourse. Some, like _general-purpose code_ and _shallow hierarchies_ (TODO links) are right under our noses, yet hardly ever mentioned. Others, like _test-driven development_ and _static typing_, are misunderstood in the industry at large, but can give you incredible leverage if you grok their essence. I try to cut through hype and misconceptions, frankly acknowledging the strengths and flaws of each idea I present.

This book covers holistic architectural concerns, nitty-gritty details, and everything in between. It starts with high-level philosophy and goals, and then zooms in to show how the philosophy motivates specific structures in the code.

Reading this book will give you new ways of looking at your programs. You'll learn to head off many potential problems before they impact production. You'll be able to explain to your teammates why you make the technical choices you do. And you will gain—and this is perhaps the most important thing—you will gain a deep and abiding sense of connection to your work, and to the scientific and technological community out of which our discipline has grown.

## Technologies

With few exceptions, I avoid discussing specific technologies in this book. There are a couple reasons for that. One is that over-reliance on any specific technology (say, React, or Jest, or Ruby on Rails) would limit the audience for this book, which would be a shame because the book contains many concepts that apply across technologies. A second reason is that technologies evolve and get replaced, so books about them tend to go stale quickly. In writing, as in programming, I prefer to avoid dependencies on specific technologies, when I can.

The exception is "foundational" technologies, like Unix, `git`, SQL databases, and (probably) your programming language of choice. It's worth spending the time to master these—they change slowly, so your knowledge will pay dividends for a long time—and you can hardly avoid using them in any case. The widespread use of foundational technologies tends to make them rock-solid stable, and demands a level of engineering rigor that is worth studying for its own sake. I point out many of these foundational technologies in the book, but I don't dive deep. Their documentation is easy enough to find.

There's one technology dependency I couldn't avoid—the programming language I use for code examples. For that, I chose TypeScript. TypeScript is a superset of JavaScript that introduces a static type system. Because JavaScript is a multi-paradigm language that can run on both client and server, and because TypeScript enables but does not require static type safety, TypeScript is an ideal vehicle for comparing different approaches to programming. TypeScript also happens to be rapidly growing in popularity as of this writing—though it hasn't yet overtaken JavaScript, which has maintained its position as the most widely-used language (according to [polls of StackOverflow users](https://insights.stackoverflow.com/survey/2020#most-popular-technologies)) for the last decade.

## About the Author

I started programming 25 years ago. Since then, I've worked on many different projects in a variety of languages, including JavaScript, TypeScript, Go, Ruby, Java, C, Bash, and Visual Basic. I have more than a decade of industry experience, and have worked professionally on over a dozen teams, building everything from point-of-sale systems to social networks and ed-tech apps. I've also worked on many, many side projects, sometimes on my own, and sometimes with a friend. All told, I've spent about 30,000 hours programming, and just about every hour has taught me something new.

{{toc}}
