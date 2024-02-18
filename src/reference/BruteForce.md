Brute force is the problem-solving strategy epitomized by the _IT Crowd_ catchphrase "have you tried turning it off and on again?"

See also: [xkcd #1597](https://xkcd.com/1597/)

"If you get errors, save your work elsewhere, delete the project, and download a fresh copy."

Almost any problem can be solved by starting over from a clean slate. This even works for problems you don't understand, which is why the technique is so popular. Unfortunately, starting over usually destroys the evidence that might have allowed you to figure out why the problem was happening in the first place. Additionally, brute force almost never resolves the underlying conditions that cause a problem to manifest (which are usually [[PEBCAK]]), so the problem is likely to recur.

Repeated application of brute force thus leads to an ever-growing accretion of problems that you don't understand and that you can only fix via costly, cataclysmic intervention. Overall, not recommended.

The simple economic argument against brute force interventions is that they tend to be _expensive_. Understanding what is going on and fixing the actual problem can often save you a huge amount of time and effort by comparison.

> The cycle slowed down to twenty-five, then twenty. Then it started missing, coughing and popping and sputtering until, barely moving at five or six miles an hour, we found an old run-down filling station by some cutover timberland and pulled in.
>
> At the time, like John, I hadn't bothered to learn much about motorcycle maintenance. I remember holding my poncho over my head to keep the rain from the tank and rocking the cycle between my legs. Gas seemed to be sloshing around inside. I looked at the plugs, and looked at the points, and looked at the carburetor, and pumped the kick starter until I was exhausted.
>
> [...] Chris kept asking questions that started to anger me because he didn't see how serious it was. Finally I saw it was no use, gave it up, and my anger at him disappeared. I explained to him as carefully as I could that it was all over. We weren't going anywhere by cycle on this vacation. Chris suggested things to do like check the gas, which I had done, and find a mechanic. But there weren't any mechanics. Just cutover pine trees and brush and rain.
>
> [...] We hitchhiked back to our own city and rented a trailer and put it on our car and came up and got the cycle, and hauled it back to our own city and then started out all over again by car. But it wasn't the same. And we didn't really enjoy ourselves much.
>
> Two weeks after the vacation was over, one evening after work, I removed the carburetor to see what was wrong but still couldn't find anything. To clean off the grease before replacing it, I turned the stopcock on the tank for a little gas. Nothing came out. The tank was out of gas. I couldn't believe it. I can still hardly believe it.
>
> I have kicked myself mentally a hundred times for that stupidity and I don't think I'll ever really, finally get over it. Evidently what I saw sloshing around was gas in the reserve tank which I had never turned on. I didn't check it carefully because I assumed the rain had caused the engine failure.
>
> —_Zen and the Art of Motorcycle Maintenance_, pp. 29–30

## Scientific Applications

There are cases where brute force is a useful approach. Whenever you need to ensure that an experiment or a process is reproducible, it makes sense to start from a known state.

You still want to do this strategically, though. I.e. you don't want to restart your computer or even start a new OS process for each unit test you run, since the state of those things is unlikely to affect your tests. But you probably do want to create new objects from scratch for each unit test, since object state _is_ likely to affect test results and objects are cheap to create.