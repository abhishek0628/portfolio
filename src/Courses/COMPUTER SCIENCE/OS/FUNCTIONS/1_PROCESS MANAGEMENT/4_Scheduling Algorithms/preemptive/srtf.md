### 🔹 What is SRTF?

SRTF is a preemptive scheduling algorithm where:

The CPU is always assigned to the process with the smallest remaining burst time.

So if a shorter job arrives while a longer job is running…
the CPU immediately abandons the current process.

Yes. Rudely.

🔹 Key Idea

At every time unit:

Look at all available processes
Pick the one with minimum remaining time
Preempt current process if needed
🔹 Assumptions
CPU burst time is known (unrealistic but fine for exams)
Preemptive switching is allowed
Context switching has overhead (often ignored in theory problems)
🔹 Example Dataset

Let’s take 4 processes:

Process	Arrival Time	Burst Time
P1	0	8
P2	1	4
P3	2	9
P4	3	5
🔹 Step-by-step Execution (Textual Timeline)

We simulate time carefully.

⏱ Time 0

Only P1 has arrived.

Running: P1 (remaining 8)
Time 0:
P1 starts
⏱ Time 1

P2 arrives (burst = 4)

Compare:

P1 remaining = 7
P2 = 4 → smaller → preempt P1
0   1
| P1 |
    ↓ preempt
| P2 |
⏱ Time 2

P3 arrives (9)

Compare:

P2 remaining = 3
P3 = 9
P1 = 7

Continue P2

1   2
| P2 |
⏱ Time 3

P4 arrives (5)

Compare:

P2 remaining = 2
P4 = 5
P1 = 7
P3 = 9

Continue P2

⏱ Time 5

P2 finishes

Now remaining:

P1 = 7
P3 = 9
P4 = 5

Pick P4 (5)

⏱ Time 5 → 10

P4 runs completely

⏱ Time 10

Remaining:

P1 = 7
P3 = 9

Pick P1

⏱ Time 10 → 17

P1 runs fully

⏱ Time 17 → 26

P3 runs fully

🔹 Final Gantt Chart (Clean View)
0    1    5    10    17    26
| P1 | P2 | P4 | P1  | P3  |

But expanded properly:

| P1 | P2 | P2 | P2 | P2 | P4 | P4 | P4 | P4 | P4 | P1 | P1 | P1 | P1 | P1 | P1 | P1 | P3 | P3 | ... |

(Yes, SRTF lives in micro-decisions, not neat blocks.)

🔹 Completion Times
Process	CT
P1	17
P2	5
P3	26
P4	10
🔹 Turnaround Time

TAT=CT−AT

Process	TAT
P1	17
P2	4
P3	24
P4	7
🔹 Waiting Time

WT=TAT−BT

Process	WT
P1	9
P2	0
P3	15
P4	2
🔹 Why SRTF is “Optimal” (but annoying)
Pros:
Minimizes average waiting time (theoretical best)
Great for short jobs
Responsive for interactive systems
Cons:
Too many context switches
Starvation of long processes (P3 suffers here)
Requires knowing burst time in advance (lol, good luck)
Expensive overhead in real systems