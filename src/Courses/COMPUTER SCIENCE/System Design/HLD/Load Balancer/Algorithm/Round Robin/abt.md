🔁 Round Robin Load Balancing (in depth)

Round Robin is the “fair but slightly clueless” algorithm of load balancing.

It doesn’t care about server load, CPU usage, or your suffering. It just rotates requests like a clock that refuses to learn.

🧠 Core Idea

Distribute requests one by one in a circular order across servers.

⚙️ Basic Setup
Servers: S1, S2, S3
Requests: R1, R2, R3, R4, R5, R6
🔄 Request Flow
R1 → S1  
R2 → S2  
R3 → S3  
R4 → S1  
R5 → S2  
R6 → S3

It loops endlessly.

🧩 Visual Model
      → S1 →
    ↑        ↓
   S3 ← ← ← S2

Requests just keep rotating around.

⚙️ How it Works Internally

A load balancer maintains:

List of servers
Pointer/index to last used server
Algorithm:
Pick next server in list
Send request
Move pointer forward
Loop back if end reached
🧠 Example (Real System)

Let’s say a backend for Instagram:

Servers:

S1 = User service
S2 = Feed service
S3 = Media service

Requests:

R1 → S1 (login)
R2 → S2 (feed)
R3 → S3 (image load)
R4 → S1 (new login)

Even if S1 is overloaded, Round Robin doesn’t care. It continues its rotation like it’s emotionally detached.

⚡ Types of Round Robin
1️⃣ Simple Round Robin
Equal distribution
No intelligence
2️⃣ Weighted Round Robin

Some servers are stronger:

S1 (weight 3)
S2 (weight 2)
S3 (weight 1)

Distribution becomes:

S1 S1 S1 S2 S2 S3
📊 When Round Robin Works Well

✔ Servers are identical
✔ Requests are similar in cost
✔ No session dependency
✔ Traffic is evenly distributed

❌ When it fails (very important)
🔴 1. Unequal server capacity
Fast server gets same load as weak server
🔴 2. Unequal request cost

Example:

R1 = simple API call
R2 = heavy video processing

Still treated equally → imbalance

🔴 3. No awareness of real load

CPU at 100%? Doesn’t matter.

🔴 4. Long-lived connections

One request holding server hostage breaks fairness

⚠️ Hidden Problem: “Apparent Fairness”

Round Robin looks fair, but:

fairness in distribution ≠ fairness in load

That’s where systems quietly suffer.

🧠 Real-world Usage

Used in simple or controlled environments:

Basic HTTP routing
Internal microservices
Entry-level load balancers like Nginx

But in production systems, it’s often combined with:

health checks
weights
fallback logic
🔥 Upgrade in real systems

Modern systems rarely use pure Round Robin. They use:

Weighted Round Robin
Least Connections fallback
Health-aware routing

Because pure RR is… optimistic.

🧠 Complexity
Time: O(1) per request
Space: O(n servers)

Very efficient. Very blind.

💀 Common mistakes
Using RR in heterogeneous systems
Ignoring server health
Assuming equal request cost
Not combining with monitoring
🧠 Final intuition

Round Robin is:

“Everyone gets a turn, whether they can handle it or not.”

It’s simple, fast, and fair in theory.
In practice, it’s the algorithm equivalent of dividing work equally in a group project without checking who actually knows how to code.