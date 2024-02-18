Code is an asset. Technology is a liability.

By "code", I mean _precise descriptions of how to solve problems computationally_. By "technology", I mean _everything required to make the code actually run on a computer_.

It's important to keep these two concepts distinct if you want to understand how cost and value interact in software development. [[ProgrammingIsLearning]], and code, as I've defined it above, is a record of what we've learned. It's clear to me that code is an asset to a software company. It is not only the thing that they use to produce the product or service they sell, but it can often be repurposed to create new products/services too. Consider, also, that if code _weren't_ an asset, no one would be concerned about protecting their software IP. When it comes to IP, it's not the literal bytes that have to be protected, but the ideas and knowledge that those bytes represent.

Technology, on the other hand, is a liability. Technology includes your programming language, build tools, IDE, test framework, deployment infrastructure, libraries, operating system, and cloud provider—and probably other things. Technology is a liability because it is mortal. Someday, it will be obsolete. Your choice to adopt it is implicitly a promise to deal with the aftermath when that day comes. You promise to pay the cost of upgrading to the latest version, maintaining the tech yourself, or rewriting your code to not depend on it. If you don't pay, you no longer have a sellable product.

Not all technology is equally costly. You might choose a stable programming language that makes upgrading to new versions very cheap, or you might choose one that breaks compatibility and forces you to rewrite all your code in a different language (looking at you, Python 2).

Adopting costly technologies can be worth it if they let you create valuable code. Perhaps you've worked for companies that have bet on an unusual technology and were able to do incredible things with it. On the other hand, adopting costly technologies and _not_ making the most of them is what's often referred to as [[OverEngineering]]. You still have to pay the cost, but you aren't getting commensurate value.

## Implications

In general, write code to depend on as few technologies as possible. Depending on a programming language is inevitable. Depending on a cloud provider is almost always avoidable.

## See Also

[[InformationIsAnAsset]]