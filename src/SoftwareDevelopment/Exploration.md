# View: Exploration, Not Production

<div class="summary-block">

- Why is programmer productivity so hard to measure?
- Why do software projects always seem to take longer than predicted?
- Why are programmers so bad at estimating tasks?

</div>

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

This code is about as terse as it can be while still fulfilling its purpose. Other things equal, code with fewer characters should be faster to type and faster for the machine to load and parse. In that since, this code is "optimal".

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

<!--
Of course, this rather silly example merely illustrates what every programmer
already knows—that maintaining an intellectual grasp of the program is the programmer's
overwhelming concern, to which the correct behavior of the program is secondary. Still, it seems to me that although this is something that "everyone knows", we often find it difficult to articulate.
-->