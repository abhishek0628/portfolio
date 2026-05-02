🔹 Process Context Switch (In Depth)
🔸 What it is

A process context switch happens when the CPU stops executing one process and starts executing a completely different process.

Example:

Stop Google Chrome tab rendering process
Start Visual Studio Code process

These two don’t share memory. They don’t share resources. They don’t even like each other.

🔸 Why it’s heavier than thread switching

Because processes are isolated.

Each process has:

Separate virtual address space
Separate page tables
Separate heap and stack
Separate resources (files, sockets, etc.)

So switching means:

“Forget everything about Process A and load Process B’s entire universe.”

🔸 Step-by-step process context switch
1. Interrupt or scheduling event occurs

Triggered by:

Time slice expiry
I/O request
Higher priority process
System call / kernel intervention
2. Save Process A state (VERY important)

The OS saves Process A’s CPU state into its PCB (Process Control Block):

Program Counter (PC)
CPU registers
Stack pointer
Status registers (flags)
Memory management info

So Process A is basically frozen mid-thought.

3. Update Process A status

Process A moves from:

Running → Ready / Waiting

It doesn’t die. It just gets shoved aside.

4. Scheduler selects Process B

The CPU scheduler picks the next process from the ready queue based on:

Priority scheduling
Round Robin
SJF (rare in real systems due to prediction issues)
5. Memory context switch (this is the expensive part)

This is where things get serious:

Load Process B’s page table
Switch virtual memory mapping
Possibly flush TLB (Translation Lookaside Buffer)

This step is why process switching is slower than thread switching.

6. Restore Process B state

From Process B’s PCB:

Program Counter restored
Registers restored
Stack pointer restored
Execution context rebuilt
7. Resume execution

CPU starts executing Process B exactly where it left off.

No restart. No confusion. Just continuation.

🔸 What gets affected internally
💾 CPU registers

Tiny, fast storage inside CPU
Must be saved/restored every switch

🧠 Cache (big performance hit)
L1/L2/L3 cache becomes less useful
New process = new memory pattern
Cache miss rate increases
🗺️ Memory management unit (MMU)
Page tables are switched
Address translation changes
TLB often gets flushed
🔸 Why process switching is expensive

Because it involves:

Saving/restoring full CPU state
Changing memory address space
Losing cache locality
Kernel mode transitions

So the CPU spends time not computing, just preparing to compute.

Classic bureaucracy behavior.

🔸 Process vs Thread context switch
Feature	Process Switch	Thread Switch
Memory space	Changed	Same
Page table switch	Yes	No
Cache impact	High	Medium
Cost	Expensive	Cheaper
Isolation	Strong	Weak