Generally, an **ennead** is a group of nine things.

*The* ennead, for the purposes of this bliki, is a 9-cell grid (3x3 cells) that I use to categorize code. It helps me think about the [[Architecture]] of my programs.

|     | [[Procedure]] | [[Object]] | [[Function]] |
| --- | ----------- | ------- | ------------ |
| app and UX specific | [1](#appux-specific-procedures) |   |   |
| domain specific | [4](#domain-specific-procedures) |
| domain agnostic | [7](#domain-agnostic-procedures) |

In general, you want the bulk of your code toward the bottom right of this grid. Code that's closer to the bottom right is usually easier to maintain, understand, and test, while code that's closer to the top left is harder to deal with and less likely to be [[Stable]].

Note that I am _not_ saying "get rid of all procedures". There are tradeoffs to writing stable, well-tested code. If some part of your program is changing rapidly and its structure is in flux, it may be best to encode that part as procedures that are not thoroughly tested.

I am also _not_ saying "don't write objects". There are cases where the stateful way of solving a problem is easier to reason about than the stateless way. [[Coupling]] [[Object]] identities to [[State]], rather than letting [[Data]] run loose, can sometimes mean there are fewer things to go wrong and less you need to think about.

The rule of the ennead is: if you see a clean way to move your coded representation of a bit of knowledge toward the bottom right of the grid, do it. Your code will almost always get easier to understand and change as a result. _Clean_ here means high cohesion within modules and "layers" (rows of the ennead), and low coupling between modules and layers.

## The types of code

_Domain-agnostic_ code takes the form of "library" or "general-purpose" code that could be reused in many different applications from many different domains. Domain-agnostic code usually operates on abstract data types like strings, maps, and arrays, which aren't specific to any application domain. For example, a `reverse(array)` function is domain-agnostic. Domain-agnostic [[Procedure]]s may involve common infrastructural concepts like files and HTTP. A `readStringFromFile` procedure is domain-agnostic, as is `sendHttpRequest`.

You can think of domain-agnostic code as augmenting your programming language to make it more expressive.

While domain-agnostic code is portable between many different projects, it usually makes certain architectural assumptions that prevent it from being used in _every_ imaginable project. For example, a domain-agnostic functional programming library like Ramda assumes that at least part of your program will be structured around functional transformations of immutable data. In a program that violates that assumption—like an object-oriented simulation—Ramda would be of little use.

_Domain-specific_ code knows about concepts in your application domain. If you're writing an e-commerce application, it might know about products, orders, shopping carts, and payment methods. If you're writing a linguistics application, it might know about lexemes, affixes, and phrases. If you're writing a music production application, it might know about notes, tracks, instruments, time signatures, and samples.

Domain-specific code *doesn't* know about your application's user experience, or how your app is delivered to users. For example, the same domain-specific code could be reused in a web app, a mobile app, a REST API server, and a CLI tool.

*App and UX specific* code is everything else. It knows about the platform your app runs on, *and* it knows about the domain code. REST controllers, GraphQL resolvers, and other "entrypoint" code falls into this category. So does UI code like React components and HTML templates.

## Examples

### App/UX-specific procedures

Here is an app-specific procedure from `mdsite`, a command-line tool that creates a website from a directory of markdown files.

```ts
async function build(args: BuildArgs) {
  const inputs = [
    readFilesFromInputDirectory(args.inputDir),
    readTemplateFile(args.templateFile),
  ] as const;
  return Promise.all(inputs)
    .then(([content, template]) => buildProject(content, template))
    .then((output) => writeDeep(args.outputDir, output));
}
```

This function is very close to the application entry point—the only thing the program does before calling `build` is to parse the command-line arguments and figure out which subcommand it's supposed to run.

In order to do its job, `build` relies on a few other routines:

`readFilesFromInputDirectory` is an app-specific procedure. It is composed of a general-purpose procedure `listDeep` that reads an entire directory tree into memory, and some app-specific error handling.

`readTemplateFile` is another app-specific procedure, again composed of a general-purpose file-reading procedure and some app-specific error-handling.

`buildProject` is the entry point into the domain code. It is a domain-specific pure function that returns an in-memory representation of a directory tree.

`writeDeep` is a general-purpose procedure that writes an in-memory directory tree out to a directory on disk.

### Domain-specific procedures

Domain-specific procedures are rather rare. You probably shouldn't write any unless your domain is computer hardware. If you're creating an operating system, writing a library that implements a communication protocol (like HTTP), or programming a robot, you will need domain-specific procedures. Otherwise, steer clear of them. I don't write many of these, myself.

### Domain-agnostic procedures

E.g. `listDeep`, `writeDeep` in `mdsite`.

### App-specific objects

GUI widgets (e.g. React components, or Web Components) are commonly implemented as app-specific objects.

Here's another example: a decorator object that wraps a logger and limits the number of errors it prints (this might be useful in a compiler or typechecker).

```ts
type ErrorLimitingLog = Log & {printNumberOfHiddenErrors: () => void}

function ErrorLimitingLog(limit: number, underlyingLog: Log): ErrorLimitingLog {
  let errorsSeen = 0
  return {
    error,
    warn: underlyingLog.warn,
    log: underlyingLog.log,
    info: underlyingLog.info,
    debug: underlyingLog.debug,
    printNumberOfHiddenErrors,
  };

  function error(...args) {
    if (errorsSeen < limit) {
      underlyingLog.error(...args)
    }
    errorsSeen++
  }

  function printNumberOfHiddenErrors() {
    if (hiddenErrors() == 0) {
      return;
    }
    underlyingLog.log(`...and ${hiddenErrors()} more errors`)
  }

  function hiddenErrors(): number {
    return Math.max(errorsSeen - limit, 0)
  }
}
```

### Domain-specific objects

The [[TestDataBuilderPattern]] falls into this category.

Some people use mutable objects to represent domain entities. I think that's a mistake, personally (I prefer immutable data), but if you do choose to write such objects, they naturally fall into this category.

### Domain-agnostic objects

E.g. a JSON parser that operates on a stream. Suppose you want to parse a JSON log file that looks like the one below, and print all the entries with `{"type": "error"}`:

```json
{
  "logEntries": [
    {"type": "info",  "message": "Starting up...", "time": "2013-06-05T00:04:36.289Z"},
    {"type": "debug", "message": "Connecting to database", "time": "2013-06-05T00:04:36.290Z"},
    {"type": "error", "message": "Crashed", "time": "2013-06-05T00:04:36.301Z"}
  ]
}
```

The problem is that the file is very large—it may not even fit into memory all at once—so you can't read the whole thing and then parse the JSON. You have to read it in chunks, parsing as you go, and throwing away anything that's not of interest—in this case, anything that doesn't have `{"type": "error"}`.

Here's a sketch of how you might use a domain-agnostic object, instantiated from a `StreamJsonParser` class, to solve this problem:

```js
const parser = new StreamJsonParser({
  // This is a JSONPath expression meaning "elements of the logEntries array whose type is 'error'".
  jsonPathToMatch: `$.logEntries[?(@.type == "error")]`,
  onMatch: (error) => console.log(error),
})

let bytes
while (bytes = readFromStdin()) {
  parser.write(bytes)
}
```