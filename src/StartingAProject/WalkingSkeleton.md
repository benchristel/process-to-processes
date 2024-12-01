# Technique: Start with a Walking Skeleton ✥

<!--

- version control
- production deployment or installer
- package manager
- dev build / server
- test runner
- typechecker
- linter
- formatter
- git hooks
- developer documentation
- editor configuration
- frontend/backend interaction
- database

-->

> When I told Tillie that six steps seemed a lot to have to do before you begin, she said, “You must think of those six steps not as preparation for the beginning but as the beginning itself.”
>
> —E.L. Konigsburg, _The View from Saturday_

It’s Day One, you’re the first engineer on the project, and you don’t have any code yet. What do you do?

Much of your time is probably going to be taken up learning about the business, the product, and the vision for the user experience. You might be interviewing prospective coworkers. You might be working with the product manager to assemble a backlog of user stories.

But when it comes to writing the first line of code, where do you start?

I like to start with a **walking skeleton.**

## What

A walking skeleton is…

-   a **deployable codebase**
-   that implements a single, **trivial behavior** (e.g. displaying “hello world”)
-   but nevertheless integrates together all the **major architectural components** that you foresee in your real application (client, server, database, etc.)

The term “Walking Skeleton” was coined by Alistair Cockburn in the ‘90s, and [written up on his website in 2008](http://web.archive.org/web/20170214035145/http://alistair.cockburn.us/Walking+skeleton). Here’s how he defines the concept:

> A Walking Skeleton is a tiny implementation of the system that performs a small end-to-end function. It need not use the final architecture, but it should link together the main architectural components. The architecture and the functionality can then evolve in parallel.

To this definition, I’d add a couple criteria:

-   A walking skeleton should be **built simply and quickly**. Cockburn says it generally takes 20 minutes to 2 weeks. That sounds about right to me. You can do it even quicker with off-the-shelf project templates, but I prefer not to use those, for reasons I’ll explain in a bit.
-   It should also have a full complement of **tools**: package manager, test suite, static analyzer, formatter, build system, etc.

## Why

There are a few different reasons you might want a walking skeleton.

First, it **boosts morale** and **sets the standard** for the rest of the project. Imagine you’re starting on a new team. Would you rather find a codebase that’s tidy and well-appointed? Or a haphazard free-for-all of random hacks and one-off scripts, where everything kinda-sorta-not-really works? A walking skeleton ensures from the start that you will be on the happy path, where the code works and your tools are ready to hand.

Second, a walking skeleton **minimizes the number of detours developers will have to take** as they start to write features. If a developer feels inclined to write a unit test, you don’t want any obstacles in their way. The absence of a test framework is a pretty major obstacle. Having a test framework right from the get-go maximizes the chance that tests will get written.

Third, a walking skeleton guarantees that **you will be able to ship software**. This sounds like a trivial thing, but it’s amazing how many projects never produce working software at all: the developers write a bunch of code, but it can’t be integrated or packaged into anything that will run on anyone else’s computer. The way to prevent that failure mode is to deploy your software on day one, and keep it deployable as it grows.

## What goes into a walking skeleton?

Now I’m going to venture outside the agile software canon and talk about how _I personally_ like to build walking skeletons.

### Developer documentation

My first step is generally to write a README file that tells developers how to obtain a copy of the source code, start working on it, and verify their changes.

(I’m realizing now that I’ve skipped over a technique that’s arguably more foundational than Walking Skeleton: **readme-driven development**. I guess that will be the next post.)

Since a readme is often addressed to users as well as developers, I usually make a separate “Development” section at the end. Sometimes I even hide it, as I did in [the README for my RSS feed generator, marss](https://github.com/benchristel/marss?tab=readme-ov-file#development). Open source projects often have a separate CONTRIBUTING file. You could follow that pattern, too, though IMO it makes the instructions slightly harder to find.

The most important part of the developer readme is a list of the shell commands that all devs will need to run as they work. These commands should be **simple**: one or two words. They should not require arguments or other customization. This simplicity ensures that everyone working on the software is actually using the same set of tools, not partially-overlapping sets of similar tools. **Consistent tools make consistent results.**

To run your tools, you can use `make`, or simple shell scripts (e.g. `./test`) or a language-specific task runner like `pnpm` or `rake`. Just be consistent.

When tools are simple, documentation can be simple. Here’s an example of the docs I like to write and read:

> ```sh
> yarn         # install dependencies; run one-time setup
> yarn ts      # typecheck in watch mode
> yarn serve   # start dev server
> yarn test    # run unit tests (fast)
> yarn sys     # run system tests (slow)
> yarn lint    # find defects
> yarn fix     # fix formatting
> yarn verify  # run all checks (do this before you git push)
> yarn release # compile, verify, and release a new version
> ```

In the spirit of readme-driven development, I usually write the dev docs before I even install anything. The documentation functions as a to-do list of the tools I need to set up. Of course I’ll amend and augment the list later, if I need to.

### Tools

After you write the readme, the next natural step might be to start building the tools you just documented. But you’ll quickly find that you need some material to test your tools on: e.g. a unit test that asserts true == true, or some compilable production code. What I generally do is build the “hello world” app and its tools together: a bit of app code, a bit of tooling code, in alternating steps.

As you set up the tools, any configuration files you create should be committed to the source code repository. You might even want to commit editor configuration, though that can get contentious.

### Deployable “hello world” program

What exactly does the walking skeleton of a program do? It depends on what it wants to be when it grows up.

If it’s going to be a game: you can pop up a window and paint it black.

If a library:

```js
export function hello() {
  return "Hello, world!"
}
```

If a client-only web app: display “Hello, world!” on the page using your UI framework of choice.

If a command-line tool: `console.log(“Hello, world!”)`

If a full-stack app, you’ll need a client, a server, a database, and some dummy data (perhaps inserted via a migration) that the client fetches from the server and displays. Consider the [twelve factors](https://12factor.net/). (Yeah, this one is an order of magnitude more work than the others. There’s a reason people like [Rails](https://rubyonrails.org/) and [Phoenix](https://www.phoenixframework.org/).)

### Putting it all together

The overall goal is to end up in a situation where:

-   All the tools are built and documented.
-   All your verification checks pass.
-   You have deployed a “hello world” app to a production-like environment, using the deployment process you documented.
-   Your tooling can remain unchanged as source code is added to the project (see: [O(1) Build File](https://matklad.github.io/2023/12/31/O(1)-build-file.html)).

## But Ben, this is so much work. Why not just use an off-the-shelf project generator?

So far I’ve been describing this process like you’re going to write every line of code in your walking skeleton from scratch. But there are plenty of project generators (e.g. [create-react-app](https://www.npmjs.com/package/create-react-app)) that will set everything up for you with a single command. Why not just use those?

Well, maybe you should. If you’re on the clock, and you’re using a programming language in which you’ve never built a walking skeleton from scratch, don’t start now. Look for an existing project template and use that. You’ll find out where the rough edges are soon enough. Maybe you’ll improve on it for your next project.

The problem with off-the-shelf templates is that they’re never going to be exactly suited to your needs. They tend to include a lot of _stuff_, some of which you will use, some of which you won’t, and some of which you will tolerate while wishing it were configured differently. Interactions between tools mean that **every tool in the codebase increases the difficulty of adding more**. Extra tools are thus a burden you will have to carry for the lifetime of the project. You could try to remove the tools you aren’t using, but **it’s harder to rip out stuff you don’t want than to add stuff you do**.

So I strongly recommend working your way up to building walking skeletons by hand, professionally. [Start with your own personal projects](https://benchristel.github.io/process-to-processes/SoftwareDevelopment/PersonalProjects.html). It’s good practice, and will deepen your familiarity with the programming language and its tooling. **Do it six times** (another technique I need to write about) and you’ll be an expert. Then you can safely try it at work.

You might well ask, “what’s the point? The off-the-shelf templates are good enough.” But there’s a huge amount of confidence to be gained from knowing the purpose of every single line of code in your project’s infrastructure. Or to put it another way, there’s a huge amount of confidence to be _lost_ when on day one of your project, you’re already responsible for maintaining code you didn’t write and don’t fully understand.

Try both options. I bet you’ll feel the difference.

## Further Reading

-   [Alex Kladov’s “Basic Things”](https://matklad.github.io/2024/03/22/basic-things.html)
-   Examples of walking skeletons I’ve built recently:
    -   [Example 1](https://github.com/benchristel/1001/commit/419efb0016dd69897bd1565c5431a3f0a8fa075d)
    -   [Example 2](https://github.com/benchristel/marss/compare/fdc8dacc0ab754d975fe3a3c4a788c0bd8e00149...18564db5030b583d1ded3e7da9f9c24a8b2c1525)
