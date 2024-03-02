# View: Code is for Humans

<div class="summary-block">

- Why do programmers spend so much time talking about software design—{{link Structure}}—when what they're paid for is {{link Behavior}}?

</div>

At first glance, task of programming appears to consist of writing code to make a computer perform some desired function.

That's certainly part of it, but it's not the whole story.

If it were, our code would look like this:

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

When we read a program, we don't parse it characater-by-character like
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