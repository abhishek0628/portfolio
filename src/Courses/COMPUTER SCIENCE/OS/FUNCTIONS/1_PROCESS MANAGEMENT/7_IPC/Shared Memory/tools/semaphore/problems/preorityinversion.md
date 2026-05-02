⚠️ 6. Priority Inversion (the “important process gets ignored” problem)

Priority inversion is what happens when the OS scheduling logic and reality stop agreeing with each other.

In simple terms:

A high-priority process gets stuck waiting for a low-priority process, while medium-priority processes keep running freely.

Yes, it’s as unfair as it sounds. And yes, it shows up in real systems.

🧠 The core idea

In a system with priorities:

High priority → should run first
Low priority → runs later

But with synchronization (like semaphores/mutexes), this breaks.

🔥 Step-by-step scenario

Let’s say we have 3 processes:

P1 (Low priority)
P2 (Medium priority)
P3 (High priority)

And a shared resource protected by a mutex/semaphore.

🧩 Step 1: Low-priority process enters critical section

P1 acquires the lock:

P1 → wait(mutex) → enters critical section
🧩 Step 2: High-priority process arrives

P3 tries to enter:

P3 → wait(mutex) → BLOCKED (because P1 holds it)

So far, normal.

🧩 Step 3: Medium-priority process shows up

P2 doesn’t need the lock, so it runs:

P2 → runs freely → preempts P1

Now the problem starts.

💥 What goes wrong
P1 (low priority) is not running, so it cannot release the mutex
P3 (high priority) is blocked, waiting for P1
P2 (medium priority) keeps running and preempts P1

So effectively:

High priority is waiting for low priority
Low priority can’t run because medium priority keeps stealing CPU time

🧠 Result: Priority Inversion

Even though P3 is highest priority:

It is indirectly blocked by P2 (medium priority)

So priority order becomes “inverted”:

Low + Medium together block High

⚠️ Why this is bad
High-priority tasks get delayed unpredictably
Real-time deadlines may be missed
System becomes unstable under load

In real-time systems (aircraft, robotics), this is not “annoying,” it’s “catastrophic.”

🛠️ Solution: Priority Inheritance

To fix this, OS uses priority inheritance protocol.

🔧 How it works:

If a high-priority process is waiting for a lock:

👉 The process holding the lock temporarily inherits the higher priority

So:

P1 (low priority) holding mutex
P3 (high priority) waiting
➡ P1 becomes high priority temporarily

Now:

P1 runs faster
Releases mutex quickly
P3 proceeds