# Good Code

We all want to do our best work. We all want our work to create joy and not create suffering. For those of us who are programmers, this starts with writing "good code".

Everyone has a slightly different idea of what "good code" is, and I encourage you to develop your own. By way of offering inspiration, though, here is my definition.

Good code is code that works for the users of today, and is easy to build on to meet the needs of tomorrow. Specifically, good code is:

- [Correct](correctness.html): it does what its programmers intended.
- [Clear](clarity.html): The programmers' intentions, and the fact that the code adheres to them, must be clear.
- Trustworthy: The code's labeling (e.g. function names) should be so straightforward that most programmers using the code never have to look at its internals. The label tells them all they need to know.
- Repairable: good code has "seams" where you can pull it apart, to repair, replace, or upgrade just one piece of it. Repairability goes hand in hand with reusability: a module that can be isolated from the rest of its program for repair can also, quite possibly, be used in other contexts—perhaps in entirely different programs.
- Performant: it is as efficient as it needs to be to satisfy its users.

All of the above qualities can be bought, and organizations sometimes pay huge amounts of money to obtain them. But that's neither practical nor necessary. The point of this book is to show you how to get these qualities in a way that is...

- Sustainable: the immediate marginal cost of good code is low, and the increase in quality quickly pays for itself by reducing the cost of further development. In my experience, it usually takes mere hours for the techniques in this book to pay for themselves.

> The price of reliability is the pursuit of the utmost simplicity. It is a price which the very rich find most hard to pay.
>
> —C. A. R. Hoare

Economic sustainability is not the only consideration, though; we also have to consider the _psychological_ sustainability of working on the code. Techniques that require a high level of discipline to be effective are not psychologically sustainable. Everyone has "off" days, and most of us can't call in sick whenever we're feeling scatterbrained. If working on the system demands constant vigilance, the code will slowly but surely degrade, until it becomes a quagmire.

The surest bulwark against psychological unsustainability is joy. Working on the code should make us feel confident, competent, and in control. Good code makes us feel more connected to our work and to each other.

> Making wholeness heals the maker.
>
> —Christopher Alexander

In the chapters that follow, I will discuss each of the qualities of good code in turn, and provide techniques for obtaining them.