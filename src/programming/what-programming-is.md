# What Programming Is

_TODO: it seems like what I'm describing here would be better termed "software engineering". Retitle?_

Programming is the art of getting the [software development system](../intro/systems.html) to produce software that achieves given objectives, within constraints of budget, time, and resources.

Programming breaks down into two main activities:

- Figuring out what to do. (&gt; 98% of the work)
- Typing out the code that will go into production (&lt; 2% of the work)

The percentages given above may seem counterintuitive to some programmers and managers. Many people are used to thinking of programming as a fingers-on-the-keyboard activity. However, the percentages are borne out by measurement. They are derived from a number of studies on programmer productivity (TODO: cite Cat Swetel video on metrics) as well as my own experience on a project to rewrite 500,000 lines of Python code in Go. We might expect a rewrite project to have a higher-than-average percentage of time dedicated to typing, since the existing code provides a formal specification of what the rewritten software should do. Still, it seemed that we spent only 1–2% of the time typing.

## Figuring Things Out

Figuring out how to make the software development system do what you want is the bulk of the work of programming. Along the way, you will have to figure out several other things:

1. What the software should do
2. How to represent what the software should do in formal language (e.g. as a specification, test suite, or algorithm)
3. How to verify that the software is doing what you wanted
4. How to efficiently use the development tools available to you
5. How the existing code works
6. Why your code doesn't work
7. What magic words to say to get the release manager to answer your emails

That last item is somewhat facetious, but gets at an important point: office politics and interpersonal interactions are complex, and need to be figured out just like everything else in the system.

Everything we need to figure out adds difficulty to the programming process. The first three figure-outables on my list are inescapable: we _must_ figure out what the software will do, and how, and we _must_ be able to verify that it's working. Items 4 through 7 on my list, though, are not essential complexities of building software. Rather, they are complexities that we humans impose upon ourselves and each other. They're what Fred Brooks called _accidental complexity_ (TODO: cite Mythical Man Month and Out of the Tar Pit). Different software development systems impose these complexities in different amounts.

## Avoidable Complexity and Resistance

Avoidable complexity takes many forms:

- Crufty, complicated code
- Office politics
- Software bugs
- Hard-to-use development tools

Avoidable complexity creates [resistance](../intro/resistance.html), for a number of reasons:

- We feel that morally, we shouldn't have to deal with the complexity
- We suspect we might have options that are more pleasant than dealing with the complexity directly
- We want to finish dealing with the complexity as quickly as possible, so we can get back to the "real work" that we justifiably feel is more valuable
- Our ego is threatened by confronting the complexity (_I_ wrote a bug? Impossible!)

More generally, we feel resistance to avoiable complexity because our desire to get "out of the tar pit" conflicts with our desire to keep our jobs, be liked by other people, and see ourselves as virtuous.

Recall that when resistance occurs within our minds, we experience it as suffering. Resistance is, by definition, unpleasant. When we experience resistance, we are incentivized to get out of the situation that's causing it.

Because avoidable complexity causes resistance / suffering, it jeopardizes the health of the system. It causes people to act short-sightedly and selfishly in order to minimize their own suffering. These short-sighted actions often create even more avoidable complexity, creating a vicious cycle. Avoidable complexity snowballs.

The problems with avoidable complexity, and the methods for treating it, will be explored in detail in later chapters. For now, note that the way out involves deploying a variety of techniques that let us effectively and reliably reduce avoidable complexity. These techniques can even be fun to use! However, they will only become enjoyable once we realize an essential truth: dealing with the "avoidable" complexity that exists is an _unavoidable_ part of the job. The only question is how we will deal with it, and whether our solutions will be short-term and ineffective, or long-term and effective.

> The Master never reaches for the great;<br/>
> thus she achieves greatness.<br/>
> When she runs into a difficulty,<br/>
> she stops and gives herself to it.<br/>
> She doesn't cling to her own comfort;<br/>
> thus problems are no problem for her.<br/>
>
> —_Dao De Jing_

## Typing Out Code