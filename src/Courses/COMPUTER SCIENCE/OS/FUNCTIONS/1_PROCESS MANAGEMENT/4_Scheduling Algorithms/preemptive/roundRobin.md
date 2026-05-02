🔹 Round Robin (RR) — Core Idea

Each process gets a fixed time quantum (q).

If it finishes within q → great, it leaves
If not → it goes to the back of the queue
CPU keeps rotating like a fan stuck on repeat mode

It is preemptive scheduling.

🔹 Key Term: Time Quantum

Let:

q = fixed time slice (e.g., 2ms, 4ms)

If q is too:

Small → too many context switches (slow system)
Large → behaves like FCFS (defeats purpose)
🔹 Example Setup

Assume:

Process	Arrival Time	Burst Time
P1	0	5
P2	0	4
P3	0	3

Time Quantum: q = 2

🔹 Step-by-step Execution (Textual Diagram)

We track CPU time slices.

🔹 Time 0 → 2

P1 runs (needs 5, uses 2)

0   2
| P1 |
Remaining P1 = 3
Queue: P2, P3, P1
🔹 Time 2 → 4

P2 runs

2   4
| P2 |
Remaining P2 = 2
Queue: P3, P1, P2
🔹 Time 4 → 6

P3 runs (needs 3, uses 2)

4   6
| P3 |
Remaining P3 = 1
Queue: P1, P2, P3
🔹 Time 6 → 8

P1 runs again

6   8
| P1 |
Remaining P1 = 1
Queue: P2, P3, P1
🔹 Time 8 → 10

P2 runs again (finishes)

8   10
| P2 |
Remaining P2 = 0 (DONE)
Queue: P3, P1
🔹 Time 10 → 11

P3 runs (finishes)

10  11
| P3 |
Remaining P3 = 0 (DONE)
Queue: P1
🔹 Time 11 → 12

P1 runs (finishes)

11  12
| P1 |
Remaining P1 = 0 (DONE)
Queue: empty
🔹 Final Gantt Chart (Clean View)
0   2   4   6   8   10  11  12
| P1 | P2 | P3 | P1 | P2 | P3 | P1 |
🔹 What’s Happening Conceptually

The CPU behaves like:

“Everyone gets 2ms. No negotiations. Next.”

Even if:

P1 is almost done
P3 just arrived
P2 is just chilling

It doesn’t care. That’s RR.

🔹 Performance Insights
✔ Advantages
Fair to all processes
Good response time (important for interactive systems)
No starvation (everyone eventually gets CPU)
✖ Disadvantages
Too many context switches if q is small
Higher overhead
Can increase average waiting time
🔹 Context Switching Reality

Every switch:

Save PCB of current process
Load PCB of next process

So RR is secretly:

“Let’s waste CPU time managing CPU time.”

🔹 When RR is Used

RR is ideal for:

Time-sharing systems
Interactive systems
Multi-user environments

Used in systems like:

Linux (scheduler variants)
Unix