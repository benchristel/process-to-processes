Mechanisms are, IMO, the key to doing [[ObjectOrientedProgramming]] well.

In the terms of this wiki circa 2018, a mechanism is a container for [[Method]]s—units of code that share variables with each other but cannot affect any scope larger than the mechanism.

In more standard terms: a mechanism is an object that doesn't have process-external [[Effect]]s (like I/O): it just encapsulates [[State]] and is the sole guardian of that state. The only way to read or modify the state is by sending a [[Message]] to the mechanism.

Pure [[Function]]s can use mechanisms internally, since the state of a mechanism is a pure function of the messages it has received.