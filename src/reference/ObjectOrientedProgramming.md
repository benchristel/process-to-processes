Object-oriented programming (OOP) is a technique named and popularized by [[AlanKay]], though it actually predates him by quite a bit. [Alan Kay defined OOP in an email to Stefan Ram in 2003](https://softwareengineering.stackexchange.com/a/58732):

> OOP to me means only messaging, local retention and protection and hiding of state-process, and extreme late-binding of all things. It can be done in Smalltalk and in LISP. There are possibly other systems in which this is possible, but I'm not aware of them.
>
> —Alan Kay

In the language of this wiki, an object-oriented system is one where almost all of the code is contained in [[Method]]s.

This definition of OOP is not the traditional one, but it is precise. The precision is made possible by my peculiar definition of "[[Method]]".

It follows from this definition that just because [[Object]]s and [[Class]]es are present doesn't mean the system is object-oriented. In order to be an OO system, objects must have [[State]], and the [[Method]]s of each [[Object]] must [[Access]] its [[State]]. Very often, I see people writing "object-oriented" systems in which there are classes and objects, but the objects are not stateful. This is simply [[ProceduralProgramming]] dressed up in an object-oriented costume.



## Criticism

Object-oriented programming is a useful paradigm for solving many types of problems. However, it is sometimes claimed to be the [[OneTrueWay]] of programming, equally applicable to _all_ problems—and that is where trouble starts.

### Criticism of OOP as practiced

Since people do not generally agree on what OOP is, defenses of OOP are prone to the [[NoTrueScotsman]] fallacy — criticism of OOP is always criticism of _someone else's_ mistaken definition. For the purposes of this section, I don't care about definitions; I'll critique the actual practices and patterns that I see people use when they say they're doing OOP.

Historically, industrial OOP has focused on using objects to model entities. This history, combined with OOP's insistence on encapsulation of data and behavior, has probably set the industry back 20 or 30 years. In 2022, we are only just beginning to recover.

The use of objects to model entities is not an anomalous antipattern invented by novices. It's claimed as _the_ strength of OOP, and touted by experts. [In 2002, Guy Steele wrote this](https://dreamsongs.com/ObjectsHaveNotFailedNarr.html):

> The main strengths of object-oriented programming are that it encourages the abstraction and encapsulation of state, and that objects are a good model for most entities in the real world.

> Another weakness of procedural and functional programming is that their viewpoint assumes a process by which "inputs" are transformed into "outputs"; there is equal concern for correctness and for termination (and proofs thereof). But as we have connected millions of computers to form the Internet and the World Wide Web, as we have caused large independent sets of state to interact–I am speaking of databases, automated sensors, mobile devices, and (most of all) people–in this highly interactive, distributed setting, the procedural and functional models have failed, another reason why objects have become the dominant model. Ongoing behavior, not completion, is now of primary interest. Indeed, object-oriented programming had its origins in efforts to simulate the ongoing behavior of interacting real-world entities–thus the programming language SIMULA was born.

If we assume that by "entity", Steele means "[[Entity]] in a [[DomainModel]]", this is almost exactly backwards. The distributed and asynchronous nature of 21st-century computing means that bare, serialized data is now ubiquitous—it's the only language by which processes can communicate across time and space. The fact that systems are long-living and must run continuously as they evolve means that code has to be replaceable without affecting the underlying data. Objects that model entities fail to address both of these challenges. Data encapsulated in an object cannot be transmitted over a network without breaking encapsulation. If we try to finesse this by serializing objects' code along with their data, we lose the ability to upgrade the system's behavior in a way that maintains backward-compatibility with old data.

However, if we assume that "entity" means an architectural [[Component]]—one of the "databases, automated sensors, mobile devices, and (most of all) people" to which Steele refers, then his argument makes perfect sense. These components do encapsulate their state, and they communicate by passing messages. Objects are an extremely useful model of such systems—but we have to assume that when Steele says "model" he's talking about a [[MentalModel]], not a software-simulation model. Indeed, in the distributed systems Steele is talking about, we could write the code for individual services/devices in a completely procedural or functional (i.e. not OO) way, but because of the way the components communicate, the most useful way to view the _whole system_ is as a network of objects.