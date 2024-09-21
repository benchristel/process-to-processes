# View: Software Development Systems

So far, we've talked about what you can expect to find in this book ({{link Fundamentals/Views}}, {{link Techniques}}, and {{link Principles}}), and the basics of empirical software development ({{link Empiricism}}, {{link Judgment}}). In these next chapters, we'll look at several **views** of the context in which most software development takes place — software companies.

These views will help explain why this book spends so much time on the "soft," nontechnical aspects of software development. You'll learn to see software as situated within a larger whole, in which people create value *using* software.

In this view, a vast system of people, processes, computers, and code creates value for your employer. We can think of this system — people and computers together — almost as a living, growing being.

TODO: [quote Adam Savage "my shop is a machine"](https://youtu.be/QCcIdfIdfD0)

The system is driven by flows of money. It continues to work because the people who make it work continue to get paid. The system can afford to pay them because customers are willing to pay _it_ to keep doing what it does.

What does the system do that customers find so valuable? Assuming the system is a software company, it gets information to where the customers want it.

<details>
<summary>Examples</summary>

- Users of a notetaking app are willing to pay for it because the app keeps their notes safe, makes them searchable, and conveys them between devices. In short, it gets the information to where the users want it.
- Users of a web hosting platform pay the platform to put their apps on the internet. The platform makes it easy to get the app's code (a type of information) set up on a machine capable of running it.
- My favorite IDE makes contextual information about pieces of code readily available, via tooltips and autocomplete. I don't have to hunt around to find out where a particular function is defined, what methods exist on an object, or what the type of a value is — the IDE simply reveals that information wherever I am in the code. I'm willing to pay for the IDE because it puts the information I want where I want it.
- Advertisers on social media pay to have their ads placed in front of  people who might buy their product. The people looking at ads, meanwhile, put up with the ads because they want their information (posts) broadcast to the world, and they want to be able to see everyone else's posts.
- If you're ordering something from an e-commerce site, you are paying a small premium to communicate your desire to buy something, along with your payment information and shipping address, to the seller. (Okay, this one is a stretch, because what you really want is the thing you're buying. Remember when I said that {{link Views}} weren't true?)
</details>

People are willing to pay for information transfer because it is not easy. At every step, there's opportunity for delay, miscommunication, omissions, frustration. These are all forms of _resistance_. The system, like an electrical circuit, _resists_ information flow. Resistance inheres in the system's structure — in the arrangement of parts (people, departments, computers, and so on) and the information flows between those parts.

<details>
<summary>Examples</summary>

- Cruddy UX
- Slow apps
- Customer support that makes you wait for hours and get redirected in circles to get your problem resolved

</details>

Resistance can be overcome by money. We can pay people to sleuth, clarify, correct mistakes, and smooth ruffled feathers. We can pay them to do things manually and fill out forms in triplicate.

But resistance can also be _removed_, structurally, from the system. We can change the system to have lower resistance at a certain point, and then we don't have to spend as much money to push the information through.

<details>
<summary>Examples</summary>

- Fix the UX so it puts info where you want it
- Speed up the app
- Fix the product so customers don't have to call support as much 

</details>

Of course, removing resistance isn't free. Is the cost of removing resistance offset by the increased value of the information flow we removed it from? This is the fundamental question facing software engineers. There are no easy answers, but throughout this book we'll look at various ways to approach this question.

<!--

- Reporting a bug
- Learning a new skill
- Teaching that new skill to someone else
- Configuring your development environment to make your work easier
- Rethinking how your team prioritizes and assigns tasks
- Studying the business domain you're working in
- Talking to stakeholders to clarify feature priorities
- Setting up a recurring meeting
- Canceling a meeting that's no longer useful

These are all examples of changes to {{link StructureAndBehavior structure}} that affect the system's {{link StructureAndBehavior behavior}}.

If {{link /Software.html software}} is structure that has behavior, then your organization _is_ software, though it runs on people instead of silicon. Its code is the policies, {{link Incentive}}s, habits, and communication pathways that shape its employees' behavior. If no one engineers that system to work well, then—surprise surprise—it will work poorly.

Designing an organization's "software" is very different from creating software to run on a machine. Engineered systems of every kind must take into account the strengths and weaknesses of their materials, and humans and computers have very different strengths. So the success of an organizational design depends, crucially, on a recognition of the fact that people cannot be made to act like machines — {{link Humans.html HumansNotHumanoids}}.

Since the whole system, people and computers, is structure that has behavior, the economic points in {{link StructureAndBehavior}} apply. Structure is what we can control, but behavior is what generates value. Our ideal should be to create more valuable behavior with simpler and more economical structures. For example, consider the {{link CostOfMeetings}}.
-->