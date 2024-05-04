# View: Code is for Humans

<div class="summary-block">

Why do programmers spend so much time talking about software design — {{link StructureAndBehavior structure}} — when what they're paid for is {{link StructureAndBehavior behavior}}?

</div>

At first glance, the task of programming appears to consist of writing code to make a computer do something useful for us.

That's certainly part of it, but it's not the whole story.

If it were, our code would look like this:

```js
var D=1,N=3,F={},j=[],R="http://www.w3.org/2000/svg",I=function(e){this.events[e.type](e)},k=e=>e==null?e:e.key,O=(e,n,l,o,d)=>{n==="key"||(n[0]==="o"&&n[1]==="n"
?((e.events||(e.events={}))[n=n.slice(2)]=o)?l||e.addEventListener(n,I):e.removeEventListener(n,I):!d&&n!=="list"&&n!=="form"&&n in e?e[n]=o??"":o==null||o===!1?e.
removeAttribute(n):e.setAttribute(n,o))},q=(e,n)=>{var l=e.props,o=e.type===N?document.createTextNode(e.tag):(n=n||e.tag==="svg")?document.createElementNS(R,e.tag,
{is:l.is}):document.createElement(e.tag,{is:l.is});for(var d in l)O(o,d,null,l[d],n);for(var v=0;v<e.children.length;v++)o.appendChild(q(e.children[v]=w(e.children
[v]),n));return e.node=o},p=(e,n,l,o,d)=>{if(l!==o)if(l!=null&&l.type===N&&o.type===N)l.tag!==o.tag&&(n.nodeValue=o.tag);else if(l==null||l.tag!==o.tag)n=e.
insertBefore(q(o=w(o),d),n),l!=null&&e.removeChild(l.node);else{var v,r,y,c,T=l.props,V=o.props,u=l.children,t=o.children,a=0,i=0,f=u.length-1,m=t.length-1;d=d||o.
tag==="svg";for(var s in{...T,...V})(s==="value"||s==="selected"||s==="checked"?n[s]:T[s])!==V[s]&&O(n,s,T[s],V[s],d);for(;i<=m&&a<=f&&!((y=k(u[a]))==null||y!==k(t
[i]));)p(n,u[a].node,u[a++],t[i]=w(t[i++]),d);for(;i<=m&&a<=f&&!((y=k(u[f]))==null||y!==k(t[m]));)p(n,u[f].node,u[f--],t[m]=w(t[m--]),d);if(a>f)for(;i<=m;)n.
insertBefore(q(t[i]=w(t[i++]),d),(r=u[a])&&r.node);else if(i>m)for(;a<=f;)n.removeChild(u[a++].node);else{for(var g={},L={},s=a;s<=f;s++)(y=u[s].key)!=null&&(g[y]=u
[s]);for(;i<=m;){if(y=k(r=u[a]),c=k(t[i]=w(t[i])),L[y]||c!=null&&c===k(u[a+1])){y==null&&n.removeChild(r.node),a++;continue}c==null||l.type===D?(y==null&&(p(n,r&&r.
node,r,t[i],d),i++),a++):(y===c?(p(n,r.node,r,t[i],d),L[c]=!0,a++):(v=g[c])!=null?(p(n,n.insertBefore(v.node,r&&r.node),v,t[i],d),L[c]=!0):p(n,r&&r.node,null,t[i],
d),i++)}for(;a<=f;)k(r=u[a++])==null&&n.removeChild(r.node);for(var s in g)L[s]==null&&n.removeChild(g[s].node)}}return o.node=n},w=e=>e!==!0&&e!==!1&&e?e:text(""),
Q=e=>e.nodeType===N?text(e.nodeValue,e):z(e.nodeName.toLowerCase(),F,j.map.call(e.childNodes,Q),D,e),z=(e,n,l,o,d)=>({tag:e,props:n,key:n.key,children:l,type:o,
node:d});export var text=(e,n)=>z(e,F,j,N,n),h=(e,n,l=j)=>z(e,n,Array.isArray(l)?l:[l]),patch=(e,n)=>((e=p(e.parentNode,e,e.vdom||Q(e),n)).vdom=n,e);
```

<cite>Source: [Superfine, by Jorge Bucaran](https://github.com/jorgebucaran/superfine). Minified by [esbuild](https://esbuild.github.io/).</cite>

Why waste time typing multiple-character variable names (to say
nothing of whitespace) when code like the above works just fine?

The answer, which I'm sure is obvious to every programmer
reading this, is that humans find it impossible to read or modify
such code. The miniscule amount of time we would save by forgoing
whitespace and long variable names would be dwarfed, by several orders of
magnitude, by the extreme difficulty of understanding the
most basic facts about what the code is doing and how its parts
relate to each other.

> All programming languages are first and foremost, in actuality, built to overcome human limitations.
>
> —[Magne](https://dev.to/redbar0n/features-of-a-dream-programming-language-2nd-draft-p7j)

When we read a program, we don't parse it character-by-character like
a machine does. Instead, we look for recognizable, coherent structures—{{link Center "centers"}}—that
guide our eye and mirror our understanding of the problem being solved.

Broadly speaking, there are two ways we can approach an understanding of an unfamiliar program:
we can go whole-to-parts or parts-to-whole. For us to be able to
make the journey in either direction, the {{link Center "centers"}} in
the program need to form a hierarchy of scales—{{link LevelsOfScale}}—which
allows us to view each part as an assembly of smaller, simpler parts.

The code example above has no {{link LevelsOfScale}}, and indeed hardly
any identifiable {{link Center "centers"}} at all, which is why it is
impossible to comprehend. Of course, most real, human-written code is
nowhere near this bad, but it's a matter of degree, and even the most
basic attributes of readable code shouldn't be taken for granted. Even
indentation was once, I'm told, seen as an affectation by the old guard of programmers,
who had cut their teeth on punchcards and couldn't abide the thought of all those wasted characters.

The point is that, by this _reductio ad absurdum_, we have proven that code
must serve the needs of a human audience.  It remains to discuss
exactly what those needs are and how much time we ought to spend
addressing them, but the basic point should be obvious.

In subsequent chapters, I will explore specific qualities of comprehensible
code in detail. Those qualities include:

- {{link LevelsOfScale}}
- {{link ShallowHierarchy}}
- {{link Cohesion}}
- {{link InwardLookingNames}}
- {{link StrongCenter}}
- {{link Boundaries}}
- {{link Symmetry}}
- {{link LongBranchRight}}
- {{link Contrast}}
- {{link Simplicity}}