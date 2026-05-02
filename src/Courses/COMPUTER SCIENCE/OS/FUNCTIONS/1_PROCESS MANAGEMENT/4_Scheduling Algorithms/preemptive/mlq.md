🔹 Multilevel Queue Scheduling (MLQ)
🔹 Core Idea

The ready queue is divided into multiple separate queues, and:

Each queue has its own scheduling algorithm
Processes are permanently assigned to a queue
No movement between queues (strict separation)

So once you’re placed, congratulations—you’re stuck in your category forever.

🔹 Why it exists

Because not all processes are equal:

System processes need fast response
Interactive processes need smooth execution
Batch processes can wait (a lot)
🔹 Typical Queue Structure (Textual Diagram)
                CPU Scheduler
                      |
        --------------------------------
        |              |               |
   Q0 (Highest)    Q1 (Medium)    Q2 (Lowest)
   System          Interactive     Batch
   Processes       Processes       Processes
🔹 Internal Structure of Each Queue

Each queue can use a different scheduling algorithm:

Q0: System processes → Priority Scheduling (Preemptive)
Q1: Interactive     → Round Robin (time-sharing)
Q2: Batch           → FCFS (First Come First Serve)

Yes, the OS mixes algorithms like a confused chef.

🔹 Scheduling Between Queues

There are two main ways to decide which queue gets CPU:

🔸 1. Fixed Priority Scheduling

Higher queue always runs first.

Priority Order:

Q0 → Q1 → Q2
Text Diagram:
CPU
 |
 |---> Q0 (run until empty)
 |---> Q1 (only if Q0 empty)
 |---> Q2 (only if Q0 & Q1 empty)
Problem:
Starvation of lower queues (Q2 may never run)
🔸 2. Time Slice Between Queues

CPU time is divided among queues.

Example:

Q0 → 50% CPU
Q1 → 30% CPU
Q2 → 20% CPU
Text Diagram:
CPU Time Division:

| Q0 Q0 Q0 Q0 Q0 | Q1 Q1 Q1 | Q2 Q2 |
Advantage:
More fairness
Lower queues still get CPU
🔹 How Processes Flow (Important Concept)
New Process
     |
     v
Assigned to a Queue (fixed forever)
     |
     v
Wait in that queue
     |
     v
Scheduled based on queue policy
     |
     v
Execution

No promotion. No demotion. No career growth. Harsh system.

🔹 Example Scenario

Assume:

Q0: P1 (system), P2 (system)
Q1: P3 (user interactive), P4 (user interactive)
Q2: P5 (batch), P6 (batch)
Execution order (Fixed Priority case):
P1 → P2 → P3 → P4 → P5 → P6

If Q0 keeps getting new processes:
👉 Q1 and Q2 may wait indefinitely.

🔹 Advantages
Simple to implement
Efficient separation of process types
Different policies per queue improve specialization
Good for OS-level prioritization
🔹 Disadvantages
❌ No flexibility (process cannot move queues)
❌ Starvation of lower queues
❌ Rigid classification (misclassified processes suffer)
❌ Poor adaptability to dynamic workloads