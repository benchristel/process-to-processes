# About This Book

Working on well-made software is both a fascinating intellectual puzzle and a joyful, social activity. Working on poorly-made software feels bewildering, frustrating, and alienating. Good software makes its users and programmers feel confident and competent. Bad software gaslights the people who interact with it, making them feel like they're stupid or losing their minds.

What makes some software good and other software bad? This book seeks to explore that question. Along the way, we'll distill some practical principles that you can use to make any software project better—no matter its current state.

## The Life of Software development Systems

Software development occurs within a complex system of many interacting sub-structures. These sub-structures include companies, office buildings, departments, teams, computers, people, business processes, services, code modules, and many other types of structure.
The software development system has a kind of life of its own: it comes into being, grows, persists for a time, and eventually "dies" or disappears. While the system lives, it can be "healthy" or "unhealthy". Most of us have worked in unhealthy software development systems at some point in our careers. We know how these systems feel from the inside: there is disorder, miscommunication, blame, panic, firefighting. People distrust and micromanage each other. Projects get roadblocked; some teams are overloaded with work while others are stuck waiting for them with nothing to do. The code is usually an unintelligible, buggy nightmare.

A lucky few, though, have worked in healthy systems and have seen firsthand the excellent work that these systems can produce. My thesis, which I explore in detail in this book, is that **only a healthy system is capable of producing good software. If we want to make good software, we first need to create a healthy system.**

In my own career, I have been lucky to work in some of the healthiest systems in the software industry. I've seen firsthand what software development looks like when it is working well. I've also had my share of failures, and have learned at least as much from those as I did from the successes.

## The Role of Individuals

If the quality of our software depends to such a great extent on the health of the whole development system, can individual programmers do anything to improve it? I think they can.

In a healthy system, programmers have a certain degree of autonomy. Managers set a direction and a budget, listen to the programmers' feedback about what will fit within the budget, and then let the programmers loose and trust them to do their best work. The key word there is "trust". Programmers and managers have to trust each other. In order for trust to be genuine, it must be earned. The way that programmers earn trust is by reliably delivering high-quality work within a budget. Doing that, and balancing all the human and technical factors in play, takes a great deal of skill and expertise.<!--A system where trust is given but not earned will be weakened, as managers learn to accept sub-par quality and programmers never get feedback about which skills they could improve.-->

So, the health of the system rests on trust, and trust rests on programmers' expertise. In order for the system to be truly healthy, we, the programmers, must be experts. We have to continuously improve our skills and practices. That's where this book comes in.

Some other resources on software engineering seem to assume that buggy software, poor-quality code, etc. are due to programmers' moral failings: their immaturity, laziness, or resistance to change. This idea I wholeheartedly reject. I believe that most people want to do their best work and to do the right thing—though the rightest thing they know how to do may still be ineffective.

<!--
One of my own experiences may be instructive here. In 2015, the consultancy I was working for took on a project for a Fortune Global 50 company based in Germany. The project had many challenges, both social and technical, but the thing that ultimately killed it was the quality of our code. After working on the product (a phone app) for almost a year, we handed it off to the client. Unfortunately, the programmers at the client company found they couldn't understand or improve our code, and they ended up throwing all of it away and rewriting it.

I had the opportunity to work briefly with a few of the client's programmers during the handoff, and I learned two relevant facts about them:

- They were paid about a quarter of what I was. They said that a typical salary for a programmer in Germany at that time was 30,000 euros per year.
- They were much better at programming than I was. Their code had a straightforward lucidity that I've only encountered a few times in my career.

I should clarify that the consultancy I worked for prided itself on its presumed ability to produce high-quality code that our clients would be able to carry forward. We saw ourselves as the cutting edge of software development. Individually, we all cared deeply about our craft and tried to continuously improve it through practices like pair programming and retrospectives. To suddenly encounter _actually_ good code, in the work of these German engineers who were paid like menial laborers, was a humbling wake-up call. I knew I had to up my game.

Unfortunately, the wake-up call came too late. Our contract with the German client ended on (understandably) lukewarm terms. We failed to close the next and only lead in our pipeline, and a few months later our office was disbanded. (Amazingly—and I don't know if this was charity or business savviness—no one got laid off. We all had the opportunity to move to other, internal projects within the parent company.)
-->

I am an optimist. I believe that we all, deep down, want to do our best work. We all want our work to create joy and not create suffering. The problems in our industry are due to lack of skill, not lack of will—which I think is an optimistic take, because skills can be learned.


## Software Development Skills

Computer science and software engineering are both vast fields of study. In order to build our skills effectively, we need to prioritize, and learn the most important things first. While I think every technique and every bit of knowledge can be valuable in the right context, techniques vary in the amount of value they provide and the variety of contexts in which they're appropriate. Though the scope of this book is ambitious, it is not an encyclopedia. It focuses on the techniques and ideas that I believe have the highest value and broadest applicability.

The high-level ideas this book covers are (in no particular order):

- Test-driven development
- Incremental development
- Evolutionary design
- Functional Programming
- Object-Oriented Programming
- Refactoring
- The Unix Philosophy
- Type-driven design
- User interface design / visual design
- User experience design
- Systems Thinking

In general, these extremely broad topics are woven throughout the book. For example, "The Unix Philosophy" is not isolated to a single chapter. Instead, I mostly teach these topics by example: After showing specific techniques and code snippets, I tie them back to the larger ideas.

### Only the good parts

My perspective on most of the above topics differs from that of the industry at large. If you've learned about some of these topics from another source and convinced yourself that they're not worth your time, I'd urge you to give this book a chance anyway.

In particular, test-driven development, object-oriented programming, functional programming, and static type checking are likely to be sore points for many programmers. Believe me, I've felt the pain that comes from the misapplication of these techniques, and I don't want you to have to repeat my mistakes. Accordingly, my approach is cautious and pragmatic, and I am not religious about any of the ideas I present. <!--My guiding principle (lifted from Pivotal Software) is "do what works".--> My goal is not to tie you down with "rules" about how to write code, but to give you a curated, versatile set of tools that you can adapt to your own context.

<!--
Indeed, I see the primary role of this book as being to curate what has come before. Few of the ideas in this book originate with me. Most of them are venerable ideas from the annals of software engineering, filtered through my own experience working on real codebases totaling millions of lines.
-->

## Contents

This prelude is followed by a collection of "prolegomena", or "first things to read". These contain important meta-information about how to interpret the rest of the book.

The rest of the book is divided into four parts:

- _**Part I: Programming**_ is about, well, programming—which in my book includes software design, testing, architecture, documentation—everything required to write bug-free, maintainable code on a budget. _Programming_ is the first part of the book because it's the foundation of everything we do. Our job, ultimately, boils down to getting computers to do what we want in a way that doesn't cost a fortune. Although software design is, [as Kent Beck points out](https://tidyfirst.substack.com/p/coming-soon), an exercise in human relationships, relationships are founded on trust. Programmers earn trust by reliably delivering working software.
- _**Part II: Working With Others**_ explores how to maintain and build human relationships around software once the initial level of trust is earned. It describes communication patterns and team dynamics that are good for the whole system—people _and_ code, employees _and_ customers.
- _**Part III: User Interfaces**_ discusses the principles behind user interface design. There is a shortage of UI and UX designers in the software industry of 2023, and programmers are often called upon to make design decisions. This part of the book tries to ensure that the designs we produce will be comfortable and straightforward to use for the people who have to use them.
- _**Part IV: The Tao of Software Development**_ goes back to the original software consultant's manual, the _Dào Dé Jīng_, or "Book of the Way and Virtue", written 2500 years ago in China by an unknown author. While the details of software have changed much in the last two millennia, people have stayed approximately the same, so there is plenty of applicable wisdom in this venerable text. In this part of the book, we'll see that even the humblest aspects of programming contain profound insights into the nature of our universe and ourselves. The practical and the mystical will be fused, as if by lightning.

## Note on Technologies

With few exceptions, I avoid discussing specific technologies in this book. There are a couple reasons for that. One is that over-reliance on any specific technology (say, React, or Jest, or Ruby on Rails) would limit the audience for this book, which would be a shame because the book contains many concepts that apply across technologies. A second reason is that technologies evolve and get replaced, so books about them tend to go stale quickly. In writing, as in programming, I prefer to avoid dependencies on specific technologies, when I can.

The more fundamental reason is that learning any one technology just isn't that important for your overall career. A generalist programmer—someone who's familiar with the various shapes that tools can take—can become productive with a new library or framework in a matter of weeks.  Furthermore, your coworkers can almost certainly teach you the tech your company uses—and the specific _ways_ they use that technology—with much higher fidelity than a book ever could.

The exception is "foundational" technologies, like Unix, `bash`, `git`, SQL databases, and (probably) your programming language of choice. It's worth spending the time to master these. They change slowly, so your knowledge will pay dividends for a long time, and they're so ubiquitous that it's hard to avoid depending on them. Additionally, the abstractions presented by these technologies tend to be "leaky"—details of the implementation rear their head from time to time—so having deep knowledge of how they work can help you avoid and escape their pitfalls. Finally, the widespread use of foundational technologies tends to make them rock-solid stable. Maintaining this stability demands a level of engineering rigor that is worth studying for its own sake. I point out many of these foundational technologies in the book, but I don't dive deep. Their documentation is easy enough to find.

There's no hard line between "foundational" and "non-foundational" technologies, though—it's a spectrum. Use your own judgement about what to spend time learning.

There's one technology dependency I couldn't avoid—the programming language I use for code examples. In this book, I use both JavaScript and TypeScript. TypeScript is a superset of JavaScript that introduces a static type system. Because JavaScript is a multi-paradigm language that can run on both client and server, and because TypeScript enables but does not require static type safety, these languages are an ideal vehicle for comparing different approaches to programming. TypeScript also happens to be rapidly growing in popularity as of this writing—though it hasn't yet overtaken JavaScript, which has maintained its position as the most widely-used language (according to [polls of StackOverflow users](https://insights.stackoverflow.com/survey/2020#most-popular-technologies)) for the last decade.

## About the Author

I started programming in 1998. Since then, I've worked on many different projects in a variety of languages, including JavaScript, TypeScript, Go, Ruby, Java, Scala, C, Bash, and Visual Basic. I have more than a decade of industry experience, and have worked professionally on over a dozen teams, building everything from point-of-sale systems to social networks and ed-tech apps. I've also worked on many, many side projects, sometimes on my own, and sometimes with a friend. All told, I've spent about 30,000 hours programming, and just about every hour has taught me something new.
