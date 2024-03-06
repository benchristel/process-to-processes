[[ChristopherAlexander]]'s idea of a _center_ is kind of hard to grasp.

The best example I can come up with is a whirlpool.

![whirlpool](https://user-images.githubusercontent.com/693920/160255140-c63c8d0d-69f1-4879-8569-044f142548ae.png)

What is a whirlpool? It's not a set of water molecules. The physical material that makes up the whirlpool is rapidly and constantly changing. It's also not an exact shape; the particular ripples in the water are constantly changing.

The best definition I can come up with (paraphrased from the many pages of _The Nature of Order_ where Alexander expounds on the concept) is that a center is any cohesive organized structure that appears in spacetime. It is a partial description of how matter is organized in a particular region of space.

A center has an identity; we can point to a center and say "that one", and we can [count how many there are](https://khanacademy.org/math/cc-kindergarten-math/cc-kindergarten-counting/kindergarten-count-object-topic/v/counting-in-scenes). But a center is not always an isolated _object_. We can count the waves in a pond, the growth rings in a log, or the stitches in a knitted scarf, but while those structures are centers, they are not objects.

> [[Life]] is a pattern of immense complexity. And what you call “yourself,” as a living organism—say, I am my whole body, at the very least—now what is that body? That body is recognizable, and I recognize my friends when I meet them again (with luck), and you recognize me. Although the last time any of you saw me, I was absolutely something entirely different from what I am now. Just as the flame of a candle is never a constant. A flame of a candle is a stream of hot gas. Only, you say “the flame of the candle” as if it were a constant. Well, it is a recognizably constant pattern: the spear-shaped outline of the flame and its coloration is a constant pattern. But in exactly the same way, we are all constant patterns, and that’s all we are; the only thing constant about us at all is the doing rather than the being. It’s the way we behave, the way we dance. Only there’s no “we” that dances, there’s just the dancing. Just as the flame is the streaming of hot gas, just as a whirlpool in a river is a whirling of streaming water. There is no thing that whirlpools, there is the whirlpool.
>
> —[Alan Watts](https://alanwatts.org/transcripts/the-myopic-view-of-the-world-we-as-organism/)

## Geometry of Centers

A center's boundary is fuzzy. It defines a [[Field]] in space, that we can imagine as assigning every point a real-numbered value (between 0 and 1, let's say) indicating its degree of membership in the center.

This definition neatly gets around all the usual misunderstandings people have about centers. E.g. it's easy to misunderstand the concept of a center as something that has a precise location, or something that's perfectly bounded; a "thing". But that is not what Alexander describes.

A dot of black ink on a piece of paper is a center, not because it has a precise location or boundary (it doesn't; if you zoom in far enough you will see that it occupies an area and its edges are fuzzy) but because it is the visible result of a particular local principle of organization, that describes a convex region of a certain size, in which points closer to the middle are darker. If we ask "what parts is the center made of" we cannot answer except in terms of other centers—other local principles of organization (e.g. the edge of the dot can itself be considered a center, and if it is roughly circular there is another center at its middle).

This gets at another property of centers: they impose structure on the space around them, by making certain lines, points, or regions that we could draw non-arbitrary.

![a sheet of paper with a dot on it](https://user-images.githubusercontent.com/693920/192112310-a8534f2d-12d1-409c-b0af-046e28f5f916.png)

For example, consider a rectangular field with one tree somewhere in it. The placement of this tree creates structure in the whole field, that wouldn't exist if the tree were not there. For example, people can gather "near" the tree; the region around the tree is a recognizable center even though we can't precisely define what "near" and "around" mean in this context. We can draw a line through the tree parallel to one of the edges of the field and speak about the region of the field that is "past" the tree. For example, if a group of people were playing "capture the flag" in the field, one team's objective might be to carry their opponents' flag "past the tree".

The image below shows the "latent centers" or implied structure induced by the presence of a dot on a rectangular sheet of paper... or of a tree in a field.

![centers induced by a point in a rectangular region](https://user-images.githubusercontent.com/693920/192112364-660c5867-c35d-49f3-87cf-e3666284bb34.png)

Another example: consider a large circular room, like the rotunda of the U.S. Capitol or the Pantheon in Rome. In the absence of other structure, the point at the center of the circle is special. Even if there is no physical thing marking the center, it is a distinguished point just because of the geometry of a circle. Because it is distinguished, people will tend to put important things there: a statue, a fountain, or a tomb.

## In computing

Alexander's centers are all spatial in nature, because his concern is architecture and art. But in computing, we often deal with non-spatial things—processes, for instance. Is a [[Process]] a center? Based on my definition above, I think it is.

A [[Unix]] [[Process]] has no mass, no energy, and no precise location in physical space. It isn't a physical _thing_ at all. It's an _arrangement_, a particular organization that appears in the substrate (e.g. RAM) it inhabits. It also isn't static; the whole point of a process is that it changes over time. It may change its "shape" radically as it evolves. But there's usually a consistency, a [[Wholeness]], to the changes, and that wholeness is what makes the process's behavior comprehensible, and therefore useful.

> A computational process is indeed much like a sorcerer's idea of a spirit.
>
> —[[StructureAndInterpretationOfComputerPrograms]], p. 2

Centers appear in [[Code]] and other "[[Static]]" structures at many [[LevelsOfScale]]. From smallest to largest:

- Characters
- Tokens
- Expressions
- Statements
- Paragraphs
- Blocks
- Routines
- Objects
- Interfaces
- Modules
- Architectural Layers
- Services
- APIs
- Applications
- Ecosystems

Why use the terminology of centers to talk about code? Why not just refer to "functions", "classes", and so on?

Two reasons:

- There is no other term that covers all the levels of scale. It's often useful to generalize across _all_ these levels of scale, e.g. when talking about dependency, effects, or information flow.
- Many of the centers that appear in software are _latent_ or _weak_: they don't have names or explicit representations in code. Examples: 
  - "paragraphs" (chunks of code separated by whitespace)
  - implicit contracts and interfaces (especially in dynamically-typed languages)
  - sets of modules that work together but aren't collocated in the file system.

  Yet these latent centers still exert a force: they "try" to organize material around themselves. So it's useful to be able to talk about them.

## Indentation as a Center

The rectangle of space between the opening and closing delimiters of a block is a center that guides our eye
and helps us see where each block begins and ends:

```js
export function formatStructure(prefix, innards, delim, suffix) {
  if (innards.length < 2) {
    return prefix + innards.join("") + suffix
  } else {
    return prefix + "\n"
      + indent(2, innards.join(delim + "\n"))
      + "\n" + suffix
  }
}
```

<cite>Source: [Taste](https://github.com/benchristel/taste), by Ben Christel.</cite>

Text editors often add vertical lines to strengthen these rectangular centers and enhance the eye-guiding effect.

However, the rectangles of indentation cannot help us effectively if they are too tall and narrow:

```
<Layout
  screen={
    <div className={infoPaneOpen ? "info-pane-open" : ""}>
      <div className="player-assembly">
        <div id="player-container" />
        {hideVideo && (
          <div className="black-screen">
            <PlayerStateView code={playerState} channel={channel} />
          </div>
        )}
        {!userRequestedPlayback && (
          <PlayButtonOverlay onClick={setUserRequestedPlayback} />
        )}
      </div>
      <VideoInfo
        isOpen={infoPaneOpen}
        player={playerStatus}
        broadcast={broadcast}
        channels={channels}
        onClose={closeInfoPane}
      />
      <div
        className="info-pane-close-overlay"
        aria-hidden={true}
        onClick={closeInfoPane}
      />
    </div>
  }
  // ...
/>
```

<cite>Source: [Culture Machine](https://github.com/benchristel/tv), by Ben Christel.</cite>

Christopher Alexander observed that most centers with an aspect ratio greater than about 4:1 are very weak.
Based on that, we can predict that with two-space indents, and characters that are twice as tall as they are wide, indentation
will lose its effectiveness if an indented block continues for more than 4 lines. This matches my experience. I find it
takes a noticeable effort to match the opening and closing delimiters in the longer example above, even with the guidelines
added by my text editor.

However, Alexander's theory predicts that deeper indentation—four or eight spaces—will allow longer blocks to be more readable.
This also is confirmed by experience. See what a difference doubling the indentation makes:

```
<Layout
    screen={
        <div className={infoPaneOpen ? "info-pane-open" : ""}>
            <div className="player-assembly">
                <div id="player-container" />
                {hideVideo && (
                    <div className="black-screen">
                        <PlayerStateView code={playerState} channel={channel} />
                    </div>
                )}
                {!userRequestedPlayback && (
                    <PlayButtonOverlay onClick={setUserRequestedPlayback} />
                )}
            </div>
            <VideoInfo
                isOpen={infoPaneOpen}
                player={playerStatus}
                broadcast={broadcast}
                channels={channels}
                onClose={closeInfoPane}
            />
            <div
                className="info-pane-close-overlay"
                aria-hidden={true}
                onClick={closeInfoPane}
            />
        </div>
    }
    // ...
/>
```

## Latent Centers

[[NikosSalingaros]] distinguishes explicitly between latent centers and the other kind (TODO: find the quote and the terms he uses; it's in one of his lecture videos)