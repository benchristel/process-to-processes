# View: Programming as Translation

"Okay," you might be saying, "clearly figuring stuff out is a big part of what software developers do, but just because you have something figured out in the abstract doesn't mean it's trivial to write the code that will actually make it real. Doesn't that imply coding is still a big part of the effort? And if someone else has already figured out what the software should do, what's there left for the programmers to do but translate it into code?"

I have the impression that nontechnical people tend to think of programming as a kind of translation process, in which one takes human-language requirements and translates them into code that can be understood by a machine. This perception is reinforced in people who have tried programming once or twice, and have found that it's devilishly difficult to get the computer to do anything but spit out a cryptic error message. If even one character is out of place, the program often won't even run.

To beginners, coding syntax seems like the hard part of programming. But it's actually the easy part. The real work begins only _after_ you have mastered syntax, and can reliably get your programs to run. Then you encounter hard questions like:

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