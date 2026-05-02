### 🔹 What is the Short-Term Scheduler?

It is a component of the operating system that:

Selects a process from the Ready Queue
Allocates CPU to that process
Runs extremely frequently (milliseconds level)

It is the fastest and most frequently invoked scheduler in the system.

🔹 Where it fits in OS scheduling hierarchy
Long-Term Scheduler → admits processes into system
Medium-Term Scheduler → swaps processes in/out of memory
Short-Term Scheduler (CPU Scheduler) → picks who runs right now

So yes, this one actually matters for performance.

🔹 Main Role (in simple terms)

At any moment:

Many processes are in ready state
Only one (or a few, in multicore systems) can run
CPU scheduler chooses the “best next process”
🔹 When does CPU scheduling happen?

The CPU scheduler is triggered when:

A process switches from running → waiting
A process switches from running → ready
A process switches from waiting → ready
A process terminates
(In preemptive systems) a time quantum expires

Basically: it wakes up whenever anything mildly interesting happens.

🔹 Preemptive vs Non-Preemptive Scheduling
🔸 Non-Preemptive CPU Scheduling

Once a process gets CPU:

It runs until it blocks or finishes

CPU scheduler waits patiently.

Problems:

Poor responsiveness
One long process can delay everything
🔸 Preemptive CPU Scheduling

OS can forcibly take CPU away.

Timer interrupt triggers scheduler
A higher priority process can preempt current one

Used in modern systems because we’ve collectively decided fairness matters.

🔹 Responsibilities of CPU Scheduler
1. Process Selection

Chooses next process from Ready Queue based on algorithm:

FCFS
SJF
Round Robin
Priority scheduling
etc.
2. CPU Allocation

Gives CPU control to selected process:

Loads its state from PCB
Restores registers
Sets program counter
3. Context Switching Coordination

When switching:

Save current process state → PCB
Load next process state

This is overhead (no useful computation happens here).

4. Maintaining Scheduling Discipline

Ensures:

Fairness (as much as possible)
No starvation (or reduced starvation via aging)
Efficient CPU usage
🔹 Scheduling Decision Data Structures

The CPU scheduler relies on:

Ready Queue (main input)
Priority queues (optional)
PCBs (Process Control Blocks)

Each process in queue has metadata like:

PID
priority
burst time estimate
waiting time
🔹 Scheduling Algorithms Used by CPU Scheduler

The CPU scheduler is just the “decision engine” that executes these policies:

First Come First Serve (FCFS)
Shortest Job First (SJF)
Round Robin (RR)
Priority Scheduling
Multilevel Queue
Multilevel Feedback Queue (MLFQ)

In modern systems, it’s usually a hybrid approach.

Example:
Linux uses a Completely Fair Scheduler (CFS), which tries to distribute CPU time “fairly” using virtual runtime.

🔹 Performance Factors

CPU scheduler efficiency depends on:

Dispatch latency
→ Time taken to stop one process and start another
Context switching cost
→ Overhead of saving/loading process state
Scheduling overhead
→ Time spent just making decisions

Lower overhead = better system performance.

🔹 Real-Time Constraint

The CPU scheduler must be:

Extremely fast
Deterministic (especially in real-time systems)
Fair (at least in general-purpose OS)

If it delays, your system doesn’t “lag”… it suffers.