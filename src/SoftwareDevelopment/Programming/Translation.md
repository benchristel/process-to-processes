# View: Programming as Translation

The *translation view* uses natural language translation (e.g. translating Chinese to English) as a metaphor for programming. Programmers are like translators who take program "requirements" in one language (the human language of their clients) and translate them into another language (the language of the computer).

The translation view is often used to teach programming to beginners, who can understand the step-by-step instructions for an algorithm in English but don't yet know how to phrase them in code. The translation view breaks down, however, when we are working on systems larger than a single, simple algorithm.

I have the impression that nontechnical people tend to think of all programming as being the same kind of translation process taught in introductory programing courses. To them, translating feature requests into the machine's language seems like it must be the hard part of programming—the thing programmers are paid so much to do. This perception is reinforced in people who have tried programming once or twice, and have found that it's devilishly difficult to get the computer to do anything but spit out a cryptic error message. If even one character is out of place, the program often won't even run.

Although, to beginners, coding syntax seems like the hard part of programming, it's actually the easy part. The real work begins only _after_ you have mastered syntax, and can reliably get your programs to run. Then you encounter hard questions like:

- What do I actually want this program to do?
- How can I tell if this program will do what I want in all circumstances?
- How can I change my program without breaking it for its current users?
- How can I communicate my mental model of the program to the people who have to use, extend, and repair it?
- How can I make the program fast, yet reliable?

Finding answers to these questions is not a simple matter of translation. It requires insight, creativity, empathy, good taste, and deductive reasoning. It's fundamentally a process of discovery, in which art and science become one.

_If_ you could somehow separate the work of figuring stuff out from the work of writing code, the latter would be a low-paid, menial task. Indeed, software teams of old used to try to make this separation, by dividing projects into "design" and "coding" phases. All the figuring out was supposed to happen in the design phase.

However, the tasks of design and coding _cannot_ be separated, because, as I stated earlier, the most efficient design process we know of involves a tight feedback loop between the designer and the machine, and code is part of that loop. The specific technologies used also impose constraints on the evolution of the software which are hard to predict in advance. Therefore, the engineers—the people who figure stuff out—must be coders, and the coders must be engineers.


<!--
Of course, this rather silly example merely illustrates what every programmer
already knows—that maintaining an intellectual grasp of the program is the programmer's
overwhelming concern, to which the correct behavior of the program is secondary. Still, it seems to me that although this is something that "everyone knows", we often find it difficult to articulate.
-->
