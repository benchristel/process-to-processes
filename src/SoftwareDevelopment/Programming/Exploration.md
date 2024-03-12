# View: Programming as Exploration

<div class="summary-block">

- Why is programmer productivity so hard to measure?
- Why do software projects always seem to take longer than predicted?
- Why are programmers so bad at estimating tasks?

</div>

- making software is figuring stuff out, not typing code
- making maps
- you can't map the territory until you've gone there
- managers often want detailed plans, but whatever plans they force their teams to produce will be lies.
- "by the time we're done planning, the software will already be finished!"
- dead ends are not mistakes, they're part of the exploration

At first glance, the job of a programmer appears to be to write code that makes a computer perform some desired function. Programming appears to be the task of producing code. I'll call this the **production** view of programming.

Typing code is certainly one aspect of programming, but it isn't the whole story. As long as the production view of programming is our only view, much of what programmers do will remain inexplicable.

For example: if programming is just producing code to control a computer, then why does our code not look like this?

```js
var z=1,D=3,F={},X=[],W="http://www.w3.org/2000/svg",I=
function(r){this.events[r.type](r)},L=r=>r==null?r:r.key,Q=(r,
t,f,u,c)=>{t==="key"||(t[0]==="o"&&t[1]==="n"?((r.events||(r.
events={}))[t=t.slice(2)]=u)?f||r.addEventListener(t,I):r.
removeEventListener(t,I):!c&&t!=="list"&&t!=="form"&&t in r?r[
t]=u??"":u==null||u===!1?r.removeAttribute(t):r.setAttribute(t
,u))},j=(r,t)=>{var f=r.props,u=r.type===D?document.
createTextNode(r.tag):(t=t||r.tag==="svg")?document.
createElementNS(W,r.tag,{is:f.is}):document.createElement(r.
tag,{is:f.is});for(var c in f)Q(u,c,null,f[c],t);for(var b=0;b
<r.children.length;b++)u.appendChild(j(r.children[b]=R(r.
children[b]),t));return r.node=u},O=(r,t,f,u,c)=>{if(f!==u)if(
f!=null&&f.type===D&&u.type===D)f.tag!==u.tag&&(t.nodeValue=u.
tag);else if(f==null||f.tag!==u.tag)t=r.insertBefore(j(u=R(u),
c),t),f!=null&&r.removeChild(f.node);else{var b,C,A,m,G=f.
props,J=u.props,x=f.children,g=u.children,v=0,p=0,_=x.length-1
,B=g.length-1;c=c||u.tag==="svg";for(var E in{...G,...J})(E===
"value"||E==="selected"||E==="checked"?t[E]:G[E])!==J[E]&&Q(t,
E,G[E],J[E],c);for(;p<=B&&v<=_&&!((A=L(x[v]))==null||A!==L(g[p
]));)O(t,x[v].node,x[v++],g[p]=R(g[p++]),c);for(;p<=B&&v<=_&&!
((A=L(x[_]))==null||A!==L(g[B]));)O(t,x[_].node,x[_--],g[B]=R(
g[B--]),c);if(v>_)for(;p<=B;)t.insertBefore(j(g[p]=R(g[p++]),c
),(C=x[v])&&C.node);else if(p>B)for(;v<=_;)t.removeChild(x[v++
].node);else{for(var M={},Y={},E=v;E<=_;E++)(A=x[E].key)!=null
&&(M[A]=x[E]);for(;p<=B;){if(A=L(C=x[v]),m=L(g[p]=R(g[p])),Y[A
]||m!=null&&m===L(x[v+1])){A==null&&t.removeChild(C.node),v++;
continue}m==null||f.type===z?(A==null&&(O(t,C&&C.node,C,g[p],c
),p++),v++):(A===m?(O(t,C.node,C,g[p],c),Y[m]=!0,v++):(b=M[m])
!=null?(O(t,t.insertBefore(b.node,C&&C.node),b,g[p],c),Y[m]=!0
):O(t,C&&C.node,null,g[p],c),p++)}for(;v<=_;)L(C=x[v++])==null
&&t.removeChild(C.node);for(var E in M)Y[E]==null&&t.
removeChild(M[E].node)}}return u.node=t},R=r=>r!==!0&&r!==!1&&
r?r:text(""),U=r=>r.nodeType===D?text(r.nodeValue,r):q(r.
nodeName.toLowerCase(),F,X.map.call(r.childNodes,U),z,r),q=(r,
t,f,u,c)=>({tag:r,props:t,key:t.key,children:f,type:u,node:c})
;export var text=(r,t)=>q(r,F,X,D,t),h=(r,t,f=X)=>q(r,t,Array.
isArray(f)?f:[f]),patch=(r,t)=>((r=O(r.parentNode,r,r.vdom||U
(r),t)).vdom=t,r);
```

<cite>Source: [Superfine, by Jorge Bucaran](https://github.com/jorgebucaran/superfine)</cite>

This code is about as terse as it can be while still fulfilling its purpose. Other things equal, code with fewer characters should be faster to type and faster for the machine to load and parse. In that sense, this code is "optimal".

The fact that our code *doesn't* look like this "optimal" example implies that programming is *not* typing,
and we *don't* write code primarily for the machine. Of course, every programmer already knows this, but
it seems to me that we often find it a difficult fact to articulate.

## Exploration

Another, more nuanced view of programming is to see it as the exploration and mapping of a solution space.

In this view, the desired behavior of the program is like a distant landmark. We're trying to find our way there, but the path leads through uncharted territory. The process of getting to the solution involves exploring different potential
routes, possibly running into obstacles and backtracking, and making maps to record what we've learned along the way.

In this analogy, a software project plan is like a map of the territory we have to pass through.
Though we might like to have a map before we start exploring, we can't make an accurate map until we've finished. Plans have their uses (e.g. if we treat them as falsifiable {{link Hypothesis hypotheses}} about what we will discover, they make a good starting point for {{link DeriskUnknowns de-risking}} and experimentation) but it's important to understand that a plan is, at best, wishful thinking.

## Figuring Things Out

Yet another view is that the main task of programming is figuring things out. That is, collecting information, making inferences and deductions, forming hypotheses, testing them, and summarizing the results in a way that someone else can understand.

> Software development is an exercise in learning.
>
> —[[DaveFarley]] (https://www.youtube.com/watch?v=v21jg8wb1eU&t=949s)

> If we set things up to maximize learning instead of production, the value produced goes way way up.
>
> —[[KentBeck]] (https://www.youtube.com/watch?v=guycIP56YeY&t=14m15s)

> Software is what we learned along the way.
>
> —[Jim Nielsen](https://blog.jim-nielsen.com/2023/software-is-what-we-learned-along-the-way/)

> Software is the insights of the development team made manifest.
>
> —Baldur Bjarnason

Software development is not just (or even mainly) writing code. If it were, it would go many times faster than it does. You can demonstrate this to yourself with a thought experiment. First, estimate how many person-hours of work have gone into the codebase you work on. Then count the lines of code (with something like `find src -type f | xargs wc -l`) and calculate how long it would take you to type that much text (15 lines per minute is a conservative estimate). I predict the ratio will be above 50:1. In other words, less than 2% of a team's time is spent typing the code that goes into production.

> As developers, we're not paid for what we do. We're paid for what we _know how_ to do. Our limitation is how much we can know. You can tell, because we don't sit there typing all day, and most of what we type, we delete.
>
> —[[JessicaKerr]] (https://www.youtube.com/watch?v=10Foa_lulK4&t=1213s)

The other 98% is not idle time. It's where the real work happens. That 98% consists of:

- Figuring out how the software currently works
- Figuring out what it should do differently
- Figuring out how to make it do that
- Communicating what you've figured out to other people

All that _figuring out_ is what software developers are paid to do. The stuff that developers figure out constitutes their employer's software <abbr title="intellectual property">IP</abbr>. Their collective body of knowledge is a large part of what makes one software company more valuable than another. It's imperative, therefore, that developers pass on what they learn to others ({{link PairProgramming}}), so their knowledge isn't lost when they switch teams or companies.

_Figuring out_ doesn't happen entirely in your head. It's usually a dialogue between you and the machine. You read some code. You have an idea. You write some code. It doesn't work the way you thought it would. You figure out why it doesn't work, and you learn something. You try again and again until you get the results you expect.

This process might look inefficient, but inefficiency is relative. It's only inefficient if something else would be _more_ efficient. In general, typing is cheap, computers are fast, our brains are slow and limited (see: {{link SoftwareDevelopment/Humans}}), and coding mistakes are easy to undo as long as we catch them quickly. For all of these reasons, performing experiments in the codebase is often the fastest way to learn what will and won't work.

### Is programming translation?

<!-- TODO: retitle to "Is design separable from coding?" -->

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