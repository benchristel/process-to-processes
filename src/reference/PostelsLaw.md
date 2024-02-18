**Postel's Law** is about communication protocols. It states "be lenient in what you accept, and strict in what you emit".

## Misinterpretation

Postel's Law is frequently misinterpreted to mean that servers of a protocol should accept input that is invalid according to the protocol's specification. That's not what the law means, and as [[JoeArmstrong]] points out [here](https://www.youtube.com/watch?v=cNICGEwmXLU&t=41m38s) it's a bad idea to accept invalid input. Rather, Postel's Law means that the _specification_ of the protocol should tolerate variability or triviality in the input. E.g. extra whitespace between fields should be allowed; an empty list of commands to execute should simply result in nothing being executed, etc. This makes the protocol more human-readable/writable. It can also save code in both the client and server, because there are fewer [[CornerCase]]s to deal with.

The misinterpretation of Postel's Law is called out explicitly in [[TheArtOfUnixProgramming]] (TODO: find quote).