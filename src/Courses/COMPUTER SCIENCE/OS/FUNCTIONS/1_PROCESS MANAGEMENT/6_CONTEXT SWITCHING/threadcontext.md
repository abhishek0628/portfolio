🔹 Thread Context Switch (in depth)

A thread context switch is when the CPU stops executing one thread and resumes another thread within the same process.
Same “house” (process), different “people” (threads). Less drama than process switching, but still enough overhead to ruin your CPU’s mood.

🔸 What exactly is being switched?

A thread has its own execution state:

Program Counter (where execution is)
CPU registers
Stack pointer
Thread-specific state (TLS, scheduling info)

👉 Importantly: it shares with other threads in the same process:

Code section
Heap
Global variables
Open files

So the OS doesn’t need to swap memory maps. That’s the big win.

🔸 What stays the same vs what changes
✅ Stays the same (shared)
Process address space
Heap memory
Global variables
File descriptors
🔄 Changes (thread-specific)
CPU registers
Program counter
Stack pointer
Thread control block (TCB)
🔸 Step-by-step thread context switch

When switching Thread A → Thread B (same process):

Save Thread A state
Registers saved
Program counter saved
Stack pointer saved
Stored in Thread Control Block (TCB)
Mark Thread A state
Running → Ready/Blocked
Scheduler picks Thread B
Usually from ready queue
Load Thread B state
Restore registers
Restore program counter
Restore stack pointer
Resume execution
CPU continues exactly where Thread B left off

No memory remapping. No page table swap. Just execution state juggling.

🔸 Thread Control Block (TCB)

Like PCB, but lighter.

Contains:

Thread ID (TID)
CPU register state
Stack pointer
Scheduling priority
Thread state (ready/running/blocked)

👉 Think of PCB as the house record, TCB as the individual roommate record.

🔸 Why thread switching is faster than process switching

Because the OS avoids expensive operations:

❌ Process switch includes:
Switching address space
Updating page tables
Flushing TLB (translation lookaside buffer)
More cache disruption
✅ Thread switch avoids:
Memory map changes
Page table reloads

So thread switching is:

“Cheaper sibling of process switching”

Still not free. Just less painful.

🔸 Where thread switching happens
1. User-level threads
Managed by a library (not kernel)
Extremely fast switching
But kernel doesn’t know about them

Problem: one blocking syscall can freeze everything

2. Kernel-level threads (most modern OS)
Managed by OS kernel
Scheduled independently
More overhead than user threads, but safer

Used in:

Linux
Microsoft Windows
macOS
🔸 Context switch triggers (threads)

Thread switches happen when:

Time slice expires
Thread blocks on I/O
Higher priority thread becomes ready
Explicit yield (yield())
Synchronization events (mutex unlock, semaphore wait)
🔸 Performance impact

Even though lighter than process switching, it still costs:

Overheads:
CPU register save/restore
Cache disruption (L1/L2 still affected)
Scheduler decision time

Too many thread switches → thrashing

CPU spends more time switching than doing work