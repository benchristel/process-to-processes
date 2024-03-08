# Preface

This book is for software developers who want to make better things in better ways.

If you are interested in making software that is kinder, sturdier, more deeply felt, and better fit to your hand, eye, and mind, this book is for you. 

If you don't care that much about software _per se_, but just want to feel less stressed at work, I think you'll also find something of value here.

This book will give you:

- Better **views**: more realistic, useful, and humane ways of seeing the systems we inhabit.
- Better **techniques**: ways of working that provide ease, efficiency, and control.
- Generative **principles** that help you invent new techniques to fit your situation.

...all in service of providing **mutually beneficial goods** to you, your clients, your teammates, and the users of your software:

- Software that does what you meant it to do
- ...that is satisfying to work on
- ...and can be improved at a steady, predictable pace.

## Audience

This book is addressed to professional software developers with at least a year or two of experience in application development.

The code examples are mostly in JavaScript and TypeScript. However, the programming ideas in the book apply across languages. Specifically, they apply to the extent that your language supports:

- An interpreter or fast, incremental compiler
- Higher-order first-class functions
- Some degree of late-binding (e.g. dynamic dispatch, function pointers, mutability)
- Algebraic types
- A sane package manager for installing dependencies
- Coroutines or generator functions
- Exceptions

## Goals

- Good: **Meeting Expectations**
  - we all want systems that are predictable and controllable—we can understand them well enough to make them do what we want (or understand why what we want isn't possible).
  - this applies at all levels of scale
- Good: **Kindness**
  - be nice, keep it real, feel connection, feel good
  - trust and transparency
  - essential for functional, productive teams
- Good: **Sustainability**
  - we want to be able to keep doing this indefinitely

These goals are supported by sub-goals and instrumental goods which are scattered throughout the text.

## How to Use This Book

Real talk: there's no way you're going to become an expert programmer just by reading a book.

Much of what I know of **technique** is muscle memory—habit built through repetition. It takes time and practice to learn that, and reading a book is not going to make it happen.

Likewise, the mental models of software I've built from various **views** are unserializable, untransmittable. I can't dump them out of my brain and load them into yours.

What I *can* do is offer you a navigational toolkit: a map and a compass to help you find your way. I can give you the basic instructions for techniques. I can tell you where to stand to see a particular view of your system.

But *you* have to do the work of learning. You have to practice. You have to write code (lots of it). You have to reflect on what you write. You have to seek feedback from other people. And you have to read other people's code, make sense of it, and evaluate what's good and bad about it.

Ultimately, you have to assess whether the views and techniques in this book are applicable to you and your situation or not.

Refer to this book as you would to a map. A map can't tell you everything about the terrain you're going to travel through, nor can it prepare you for everything you might encounter on the journey. But it can help you orient yourself—that is, figure out where you are and where you might go next.

## I Have No Grand Unified Theory

As you read through the chapters in this book—especially the {{link 36Views Views}} in first section, on {{link SoftwareDevelopment/index.html SoftwareDevelopment}}—you will probably have trouble piecing them together. It may be hard to see what I'm driving at. "What's the big picture?" you'll wonder. "What is his grand unified theory?"

I have no grand theory. I don't believe there can be one. All I have are enough different ways to look at software systems that I can build ad-hoc mental models of the *actual systems that are in front of me*, and that is enough. My goal is not to "solve" software development, but simply to create good software. I don't need a grand unified theory for that.

Therefore, as you read the chapters, don't worry too much about fitting them together. Instead, try to relate each one to your own experience. The sooner you can get a feel for how my views and techniques play out in the real world, the sooner you will be able to apply them effectively.

## Why "Process to Processes?"

The title of this book refers to the two kinds of process that bookend software development. On one end, we have the _development process_ that people go through as they learn about the system, make changes, and observe the results. On the other end, we have the _computational processes_ that run on computers—the things that are listed by the `ps` command on Unix systems.

This book will give you a complete picture of what happens during software development. It maps paths that lead all the way from one "process" to the other—and back again.