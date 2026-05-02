### 🔹 First Come First Serve (FCFS)
🔸 Core Idea

Processes are executed in the order they arrive in the ready queue.

First come → first served
No interruption
No priorities
No negotiation

The CPU behaves like it’s allergic to decision-making.

🔹 Key Property
Non-preemptive
Once a process starts execution, it runs until completion.

No “wait, something more important came” interruptions.

🔹 Data Structure
Uses a FIFO queue
Insert at rear, execute from front
🔹 Example

Assume 3 processes:

Process	Arrival Time	Burst Time
P1	0	5
P2	1	3
P3	2	2
🔹 Execution Order (FCFS logic)

They run exactly in arrival order:

P1 → P2 → P3

Even if P3 is tiny and could finish quickly. Nope. Rules are rules.

🔹 Textual Gantt Chart (Execution Timeline)
```
Time → 

0        5        8        10
|--------|--------|---------|
|   P1   |   P2   |   P3    |
|--------|--------|---------|
```
🔹 Waiting Time Calculation
Waiting Time Formula

WT=Start Time−Arrival Time

Step-by-step:
🔹 P1
Arrives at 0
Starts at 0
WT = 0
🔹 P2
Arrives at 1
Starts at 5
WT = 5 - 1 = 4
🔹 P3
Arrives at 2
Starts at 8
WT = 8 - 2 = 6
🔹 Turnaround Time
Formula

TAT=Completion Time−Arrival Time

P1:

TAT = 5 - 0 = 5

P2:

TAT = 8 - 1 = 7

P3:

TAT = 10 - 2 = 8

🔹 Average Times
Average Waiting Time:

(0 + 4 + 6) / 3 = 3.33

Average Turnaround Time:

(5 + 7 + 8) / 3 = 6.67

🔹 Strengths of FCFS
Extremely simple
Easy to implement
No starvation (everyone eventually runs)
🔹 Weaknesses (this is where it hurts)
1. Convoy Effect

If a long process arrives first:

P1 (very long) → blocks everything behind it

Even tiny tasks get stuck behind a giant process like they’re in traffic behind a truck carrying existential regret.

2. Poor Average Waiting Time

Small processes suffer badly.

3. No Responsiveness

Interactive systems feel sluggish.

🔹 Real-Life Analogy

Imagine:

You go to a clinic
First patient has a full health checkup, life story, and family history
Everyone else just waits… silently reconsidering life choices

That’s FCFS.

🔹 When FCFS is Actually Used

Not often alone, but:

Batch systems
Simple background job queues
As a baseline comparison for other algorithms