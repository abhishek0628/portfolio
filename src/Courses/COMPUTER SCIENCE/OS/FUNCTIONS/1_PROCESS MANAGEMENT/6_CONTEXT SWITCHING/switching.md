🔹 Context Switching (In Depth)
🔸 What it actually is

A context switch is the process where the CPU stops executing one process (or thread) and starts executing another.

That “context” is basically the full snapshot of a running program:

Program Counter (where it was)
CPU registers (temporary data)
Stack pointer
Memory mapping info
Process state (ready, running, etc.)

So the OS literally freezes a process mid-thought, stores its brain in memory, and loads another one.

Yes, it’s as dramatic as it sounds.

🔸 Why it happens

Because the CPU is not your exclusive pet.

Context switching is triggered when:

Time slice expires (in Round Robin scheduling)
A higher-priority process arrives
A process requests I/O (disk, keyboard, network)
Interrupt occurs (hardware or software)
The OS preempts a process for fairness or efficiency
🔸 What the OS actually does (step-by-step)

When switching from Process A → Process B:

Save state of Process A
Registers → stored in PCB (Process Control Block)
Program counter saved
Stack pointer saved
Update Process A status
Running → Ready or Waiting
Choose next process
Scheduler picks Process B
Load Process B state
Restore registers
Restore program counter
Restore memory context (if needed)
Switch execution
CPU resumes Process B exactly where it left off

Nothing is “restarted.” Everything is resumed like nothing happened. Except time. Time definitely happened.

🔸 Process Control Block (PCB) role

Each process has a PCB stored in memory containing:

CPU registers
Process state
Memory info
Scheduling info

Think of it as:

“Save game file for every running program”

Without PCB, context switching would be just chaos with extra steps.

🔸 Types of context switching
1. Process Context Switch

Switch between two different processes

Expensive (different memory spaces)
Requires more work (page tables, address space switch)

Example: switching from Chrome to VS Code

2. Thread Context Switch

Switch between threads of same process

Cheaper (shared memory space)
Only CPU state changes

Example: browser tab handling rendering vs network thread

🔸 Cost of context switching

Here’s the annoying part: it does no productive work.

Overhead includes:

Saving/restoring registers
Cache invalidation
Pipeline flush in CPU
Memory management updates

Too many context switches = CPU busy doing paperwork instead of work.

🔸 Cache impact (this is the hidden pain)

Modern CPUs rely heavily on cache:

L1, L2, L3 cache store recent data

Context switching:

Wipes useful cache locality
Causes cache misses
Forces memory reload

So performance drops even if CPU usage looks “normal.”

🔸 Scheduler’s role

Schedulers try to balance:

Fairness (everyone gets CPU time)
Responsiveness (interactive tasks feel fast)
Efficiency (avoid excessive switching)

Example:

Round Robin → frequent switching (fair but costly)
SJF → fewer switches (efficient but tricky)
🔸 Real-world analogy

Imagine:

You’re cooking 5 dishes
Every 10 seconds someone forces you to switch recipes
You save exactly where you were in each recipe before switching

That’s context switching.

Now imagine someone calling it “efficient multitasking.” Cute.

🔸 Why it matters in real systems

Good systems:

Minimize unnecessary switching
Use threads wisely
Optimize scheduling

Bad systems:

Thrash CPU with constant switching
Feel fast in theory, slow in reality