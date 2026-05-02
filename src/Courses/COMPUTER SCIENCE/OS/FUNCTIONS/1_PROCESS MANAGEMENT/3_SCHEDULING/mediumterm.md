🔹 What is the Medium-Term Scheduler?

The medium-term scheduler controls the degree of multiprogramming by:

Temporarily removing processes from main memory (RAM)
Bringing them back when conditions improve

This process is called swapping.

So instead of killing a process, the OS just… puts it in storage exile for a while.

🔹 Why it exists

Because RAM is:

Limited
Always overbooked
Constantly under pressure from Chrome tabs

So when memory gets tight, the OS must:

Free up space
Keep system responsive
Avoid total collapse

That’s where medium-term scheduling steps in.

🔹 What it actually does (core functions)
1. Swapping Out (Suspension)

Moves a process from RAM → disk (swap space)

The process state is saved, but it is not eligible for CPU execution.

Types:

Ready → Suspended Ready
Blocked → Suspended Blocked
2. Swapping In (Resumption)

Moves a process back from disk → RAM when:

Memory is available
Process is needed again

Then it goes back to:

Ready state
3. Controls Degree of Multiprogramming

Decides how many processes should be in memory at once.

Too many → memory overload
Too few → CPU underutilized

So it balances:

“Don’t overload RAM, but also don’t waste CPU.”

4. Memory Management Support

Works closely with memory manager to:

Free RAM pages
Reduce fragmentation pressure
Maintain system stability
🔹 Process State Transitions (important concept)

Medium-term scheduler introduces suspended states:

Ready → Suspended Ready
Blocked → Suspended Blocked

And back:

Suspended Ready → Ready
Suspended Blocked → Suspended Ready (after I/O completes)
🔹 Swapping Diagram (mental model)
```
RAM:
  Ready Queue  → CPU

If memory full:
  Ready Process → Disk (Suspended Ready)

Later:
  Disk → RAM → Ready Queue → CPU
```

Basically:

“You’re not gone. You’re just on hold.”

🔹 When is it triggered?

The medium-term scheduler activates when:

RAM is full or nearly full
Too many processes are competing for memory
System load is high
Thrashing is detected
🔹 What is Thrashing (important side effect)

When the system spends more time:

swapping processes in/out
than actually executing them

Symptoms:

CPU usage low
Disk usage high
System feels “stuck but busy”

The medium-term scheduler tries to reduce this by swapping processes out strategically.

🔹 Medium-Term Scheduler vs Other Schedulers
```
Scheduler	Role	Speed	Memory Impact
Long-term	Admits processes	Slow	Controls system load
Medium-term	Swaps processes	Moderate	Frees RAM
Short-term	CPU selection	Fast	No direct memory role
```
🔹 Real OS Example

In systems like Linux:

Swapping is handled by kernel memory management
Paging is more common than full process swapping
But the concept still exists logically

Modern systems prefer:

Paging
Virtual memory
instead of heavy swapping, because disk I/O is painfully slow compared to RAM.
🔹 Why it matters

Without medium-term scheduling:

RAM fills up quickly
System crashes or freezes
CPU becomes useless waiting for memory

With it:

System stays stable under load
More processes can coexist
Performance degrades gracefully instead of catastrophically