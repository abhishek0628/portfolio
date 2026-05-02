### Shortest Job First
Non-Preemptive Shortest Job First (SJF) is the OS version of picking the “quickest task” and then committing to it like it’s a life decision.

No interruptions. No regret switching. Once it starts, it finishes. Even if something shorter shows up mid-way, the CPU just stares at it and says, “cool story, wait your turn.”

🔹 Core Idea

Pick the process with the smallest CPU burst time among all available processes.

Then:

run it completely → no preemption → move to next shortest

🔹 Key Assumptions (important, unfortunately)
All burst times are known in advance (yes, unrealistic, OS designers were being optimistic)
All processes arrive at known times
CPU is free when scheduling decision is made
🔹 Example Set

Let’s take a clean example:

Process	Arrival Time	Burst Time
P1	0	6
P2	1	2
P3	2	8
P4	3	3
🔹 Step-by-Step Execution Logic
⏱ At time = 0

Only P1 has arrived
→ CPU has no choice
→ runs P1

So:

P1 runs fully (0 → 6)
⏱ At time = 6

Now available:

P2 (2)
P3 (8)
P4 (3)

Pick shortest → P2 (2)

P2 runs (6 → 8)
⏱ At time = 8

Remaining:

P3 (8)
P4 (3)

Pick shortest → P4 (3)

P4 runs (8 → 11)
⏱ At time = 11

Remaining:

P3 (8)
P3 runs (11 → 19)
🔹 Final Execution Order

P1 → P2 → P4 → P3

🔹 Textual Gantt Chart (clean version)
0        6    8    11        19
|   P1   | P2 | P4 |    P3    |
🔹 Timeline Explanation (human-readable version)
P1 starts first because nothing else exists
After P1 finishes, CPU gets a buffet of choices
It always picks the smallest job available:
P2 (2ms)
then P4 (3ms)
finally the heavy P3 (8ms)
🔹 Waiting Time Calculation

Formula:
Waiting Time=Start Time−Arrival Time

P1

Start = 0, Arrival = 0
WT = 0

P2

Start = 6, Arrival = 1
WT = 5

P4

Start = 8, Arrival = 3
WT = 5

P3

Start = 11, Arrival = 2
WT = 9

🔹 Average Waiting Time

Average WT=
4
0+5+5+9
	​

=4.75

🔹 Turnaround Time

Formula:
Turnaround Time=Completion Time−Arrival Time

Process	CT	AT	TAT
P1	6	0	6
P2	8	1	7
P4	11	3	8
P3	19	2	17

Average TAT:
Average TAT=
4
6+7+8+17
	​

=9.5

🔹 Why SJF is “Optimal” (in theory)

It gives minimum average waiting time because:

Short jobs finish early
Long jobs don’t block short ones unnecessarily

Mathematically elegant. Practically… suspicious.

🔹 Problems (where reality enters the chat)
1. Starvation

Long processes may keep waiting if short ones keep coming.

2. Prediction Problem

OS must “guess” burst time:

past behavior
statistical estimation
pure optimism
3. Not Preemptive

Once a job starts:

it owns the CPU like it pays rent there