### 🔹 What is Process Scheduling?

Process scheduling is the OS mechanism that selects which ready process gets CPU time and for how long.

Because the CPU can run only one (or a few, in multi-core systems) processes at a time, the OS keeps switching between them fast enough that it looks simultaneous.

## 🔹 Why Scheduling Exists

Without scheduling:

One process hogs CPU forever
Others starve
System becomes unusable

With scheduling:

Fairness (attempted)
Better CPU utilization
Reduced waiting time
Higher throughput

In theory: balanced system
In practice: your browser still eats 3 GB RAM

## 🔹 Process Queue System

The OS maintains queues:

1. Job Queue

All processes entering the system.

2. Ready Queue

Processes ready to execute but waiting for CPU.

3. Device Queue

Processes waiting for I/O (disk, keyboard, etc.)

The CPU scheduler mostly deals with the ready queue, because it’s the only group that actually deserves attention right now.