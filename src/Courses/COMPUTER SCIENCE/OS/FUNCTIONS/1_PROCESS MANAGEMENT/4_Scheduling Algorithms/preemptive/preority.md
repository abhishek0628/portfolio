🔹 Preemptive Priority Scheduling (Core Idea)

Each process has a priority value.

Higher priority process gets CPU first
If a higher priority process arrives → it preempts the running one immediately

👉 Preemptive = CPU can be forcibly taken away.

🔹 Priority Rule

Assume:

Lower number = higher priority (common convention)

Example:

Priority 1 → highest
Priority 5 → lowest
🔹 Key Property

At any time:

CPU is always assigned to the highest priority READY process

🔹 Process Set (Example)

Let’s take a clean example:

Process	Arrival Time	Burst Time	Priority
P1	0	8	3
P2	1	4	1
P3	2	9	4
P4	3	5	2
🔹 Step-by-Step Execution (Core Logic)
⏱ Time = 0

Only P1 exists → runs

P1 starts executing
⏱ Time = 1

P2 arrives (priority 1 = highest)

👉 P2 preempts P1 immediately

P1 (paused at 1ms)
P2 starts running
⏱ Time = 1 to 5

P2 runs fully (burst = 4)

P2 completes at time 5
⏱ Time = 5

Ready queue:

P1 (remaining 7ms, priority 3)
P3 (priority 4)
P4 (priority 2)

👉 Highest priority = P4

So P4 runs

⏱ Time = 5 to 10

P4 runs completely

⏱ Time = 10

Remaining:

P1 (priority 3)
P3 (priority 4)

👉 P1 runs

⏱ Time = 10 to 17

P1 continues and finishes

⏱ Time = 17 to 26

Finally P3 runs (lowest priority)

🔹 Final Execution Order (Important Insight)

Not linear at all:

P1 → P2 → P4 → P1 → P3

But broken into intervals.

🔹 Textual Gantt Diagram (Core Answer)

Here is the real schedule:

Time:  0   1   5   10   17   26
       |---|---|----|----|----|
       | P1| P2| P4 | P1 | P3 |
       |___|___|____|____|____|
        0-1 1-5 5-10 10-17 17-26

Or more visual:

P1   |----|
P2        |----|
P4             |-----|
P1                    |-------|
P3                            |---------|
0     1     5     10     17     26
🔹 What Actually Happened (Interpretation)
P1 got interrupted twice (unlucky)
P2 dominated early because it had highest priority
P4 jumped ahead even though it arrived later
P3 suffered last execution (classic low-priority suffering)
🔹 Important Observations
1. Preemption happens instantly

Even if P1 is halfway done, it gets paused.

2. Starvation risk

Low priority processes like P3 can wait a long time.

👉 Fix: Aging

Increase priority over time to prevent starvation
3. Context Switching Cost

Every preemption = save state + restore state
So too many priority jumps = overhead

4. Real OS Usage

Used in:

Real-time systems
Embedded systems
Task schedulers where urgency matters

Example:
Linux uses priority-based scheduling policies in kernel scheduling classes.