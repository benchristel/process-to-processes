A device is a piece of computing hardware. It may translate physical or analog inputs into digital outputs, or vice versa.

A set of devices can interact, forming a [[SoftwareSystem]].

## Examples:

- Laptops
- Phones
- Keyboards
- Mice
- Speakers
- Printers
- Cameras

## One device or many?

Is a typical smartphone one device or several? After all, it has a camera, microphone, speaker, display, USB port, SSD, and probably other parts that talk to the CPU.

How you choose to model the phone depends on the needs of your [[System]] model. If you're designing the high-level architecture of a web application where the phone is a client, you probably don't need to model all its peripheral devices—you can just consider the phone as a unit. However, if you are designing the in-process architecture of a phone app, you probably want to consider the core logic of your app as a separate [[Component]] from the display, camera, persistent storage, etc.