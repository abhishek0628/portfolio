🔹 1. What is Non-Preemptive Priority Scheduling?

Each process is assigned a priority value. The CPU always selects the highest priority process among those that have arrived.

Key rule:
Once a process starts execution → it runs till completion
No interruption in between (that’s the “non-preemptive” part)
🔹 2. Priority Rule

Typically:

Lower number = higher priority (common convention)
Priority 1 → highest
Priority 5 → lower

But always check the problem statement because OS textbooks enjoy chaos.

🔹 3. Working Idea (Step-by-step)

At every decision point:

Look at all processes that have arrived
Pick the one with highest priority
Run it completely
Repeat
🔹 4. Example Dataset

Let’s take a clean example:

Process	Arrival Time	Burst Time	Priority
P1	0	7	3
P2	2	4	1
P3	4	1	4
P4	5	4	2
🔹 5. Step-by-step Execution
⏱ Time = 0

Only P1 is available → run it

P1 runs from 0 → 7
⏱ Time = 7

Available: P2, P3, P4

Priorities:

P2 → 1 (highest)
P4 → 2
P3 → 4

So pick P2

P2 runs 7 → 11
⏱ Time = 11

Remaining: P3, P4

Priorities:

P4 → 2
P3 → 4

Pick P4

P4 runs 11 → 15
⏱ Time = 15

Only P3 left

P3 runs 15 → 16
🔹 6. Textual Gantt Chart (Important)

Here’s the execution timeline:

0        7        11        15       16
|   P1   |   P2   |   P4   |   P3   |

Or more visually:

|----P1----|--P2--|--P4--|-P3-|
0          7      11     15   16
🔹 7. Completion Table
Process	Completion Time
P1	7
P2	11
P4	15
P3	16
🔹 8. Turnaround Time

Turnaround Time=Completion Time−Arrival Time

Process	TAT
P1	7 - 0 = 7
P2	11 - 2 = 9
P3	16 - 4 = 12
P4	15 - 5 = 10
🔹 9. Waiting Time

Waiting Time=Turnaround Time−Burst Time

Process	WT
P1	7 - 7 = 0
P2	9 - 4 = 5
P3	12 - 1 = 11
P4	10 - 4 = 6
🔹 10. Key Observations
✔ Advantages
Simple to implement
Good for systems where priority matters (OS tasks, interrupts, etc.)
No context switching mid-process → low overhead
❌ Disadvantages
Starvation: low-priority processes may wait forever
No fairness guarantee
Long high-priority process can block everything after it arrives
🔹 11. Starvation Problem (Important Concept)

If high-priority processes keep arriving:

Low-priority ones might never execute
Fix:

👉 Aging
Gradually increase priority of waiting processes over time.