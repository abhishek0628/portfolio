## What is a PCB?

A Process Control Block (PCB) is a data structure maintained by the OS that stores all essential information about a process so it can pause, resume, schedule, and manage it later.

Without it, context switching would be impossible and your system would collapse into chaos almost immediately. So, basically, it’s holding reality together.
## Why PCB exists

The CPU can only run one thing per core at a time, but your system runs thousands of processes “at once.”

So the OS does this:

pauses a process
saves its state into PCB
loads another process
later restores the first one from PCB

This is called context switching.