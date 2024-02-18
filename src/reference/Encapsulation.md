A theory of encapsulation, inspired by Brian Will's "Object-Oriented Programming is Bad" video.

> As soon as you share state, encapsulation flies out the window

When I heard this, I wondered if it's possible to do OOP without sharing [[State]], and thus preserve encapsulation.
I think it is, but we need to define what "sharing" means.

Consider the following pseudocode, which implements the visitor pattern:

```
class Tree<T> {
  rightChild Tree
  leftChild Tree
  data T
  construct(data, leftChild, rightChild) {
    <assign to fields>
  }

  accept(visitor Visitor<T>) {
    visitor.visit(data)
    leftChild.accept(visitor) unless leftChild is null
    rightChild.accept(visitor) unless rightChild is null
  }
}

class SummingVisitor implements Visitor<number> {
  total number = 0
  visit(n number) {
    total += n
  }

  total() {
    return total
  }
}

t = Tree(1, Tree(2, null, null), Tree(3, null, null))
visitor = SummingVisitor()
t.accept(visitor)
print(visitor.total())
// => 6
```

This code uses the Visitor Pattern to iterate over the nodes of a tree of numbers and print their sum.

At first glance, it seems like we're sharing state, and therefore Brian Will's guideline would deem this code bad.
That is, we have several Tree objects that all get passed a reference to the same visitor. They call methods on that
visitor, and each call mutates state. This code is incomprehensible! Or is it?

I don't think any harmful state-sharing has happened here. To see why, consider things from the perspective
of the Tree's accept method:

```
  accept(visitor Visitor<T>) {
    visitor.visit(data)
    leftChild.accept(visitor) unless leftChild is null
    rightChild.accept(visitor) unless rightChild is null
  }
```

If we're reading this method and trying to reason about what it does, the first thing we need to understand is what
names are in scope. We have:

- leftChild
- rightChild
- data
- visitor

All of these names may refer to objects with mutable state. Our tree node can be thought of as owning, or encapsulating,
the objects referred to by `leftChild`, `rightChild`, and `data`, but it clearly does not own `visitor`, since other tree nodes
also interact with and mutate the state of that object.

However, note this key point: _calling a method on `visitor` can't affect the other objects_. The Visitor's state is independent of
everything else that's in scope.

While this is true in our example, it is not true of all visitors. Consider this one:

```
class MutatingVisitor<T> {
  visit(b Box<T>) {
    b.replaceContents(null)
  }
}
```

When used to traverse a `Tree<Box<T>>`, this visitor nulls out the data at each tree node! This is bad; now the tree can no longer be said
to "own" its data, since the visitor is mutating it out from under it. And crucially, if we're just reading the Tree class, there is no way to know which kind of Visitor (mutating or non-mutating) will be passed at runtime!

All is not lost, however. As the author of Tree, we can assume our caller will not play such tricks on us. We can make it the _caller's_ responsibility to pass only well-behaved collaborators to Tree.

So now we have to consider things from the caller's perspective. As a caller of Tree, how can we ensure the objects we pass to its methods are "well-behaved"? And how do we even define what "well-behaved" is?

A method parameter is well-behaved if it doesn't share state with any other object that's accessible by that method.

Therefore, the caller must ensure:
- if any object passed to the callee writes to any state (whether variables, files, or whatever), no other object passed to the callee may read from or write to the same state. Note that in general, the caller can only guarantee that this is true of objects it instantiates. However, the caller may assume that any objects passed to _it_ are well-behaved and will not interact.
