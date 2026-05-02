⚖️ Weighted Round Robin (WRR) — in depth

Round Robin was fair. Weighted Round Robin is what happens when someone finally says:

“Not all servers are equal, stop pretending.”

🧠 Core Idea

Distribute requests in a round-robin order, but give more powerful servers more turns

So instead of equal sharing, we do proportional sharing.

⚙️ Basic Setup

Let’s say we have servers:

S1 (weight = 5)
S2 (weight = 3)
S3 (weight = 2)

Interpretation:

S1 should get 50% of traffic
S2 → 30%
S3 → 20%
🔄 Request Distribution

Total weight = 10

So distribution pattern:

S1 S1 S1 S1 S1  
S2 S2 S2  
S3 S3

Then it repeats.

🧠 Visual Intuition

Think of it like a queue:

[ S1 S1 S1 S1 S1 S2 S2 S2 S3 S3 ]

Requests are picked one by one from this cycle.

⚙️ How It Works Internally

Load balancer maintains:

list of servers
weights
a scheduling sequence (or pointer logic)

Two common implementations:

🔹 1. Static WRR (Simple version)

Pre-build the cycle list:

S1 S1 S1 S2 S2 S3

Then rotate.

✔ Easy
❌ Memory inefficient for large systems

🔹 2. Dynamic WRR (Efficient version)

At runtime:

compute next server based on weights
no full list stored

Used in real systems like Nginx

🧠 Real-world Example

Imagine backend servers for Uber:

S1 = high-performance server (big machines)
S2 = medium server
S3 = low-cost server

Weights:

S1 = 5  
S2 = 3  
S3 = 1

So traffic distribution:

S1 handles bulk heavy requests
S2 handles normal load
S3 handles light tasks
⚖️ Why Weighted Round Robin exists

Because real systems are not equal.

🔹 Problems in simple Round Robin:
weak servers overloaded
strong servers underused
🔹 WRR fixes:
aligns traffic with capacity
improves efficiency
reduces bottlenecks
📊 Comparison with Round Robin
Feature	Round Robin	Weighted RR
Fairness	Equal	Capacity-based
Awareness	None	Partial
Performance	Medium	Better
Complexity	Low	Medium
⚠️ Limitations
🔴 1. Static weights

Weights don’t change automatically

If server slows down → WRR still trusts old weights

🔴 2. No real-time load awareness

CPU at 100%? Still gets traffic if weight is high

🔴 3. Manual tuning required

Someone must decide weights (and they’re usually wrong)

🧠 Real Systems Usage

WRR is widely used in:

API gateways
reverse proxies
load balancers like HAProxy

Often combined with:

health checks
least connections fallback
dynamic reweighting
🔥 Advanced Variant: Smooth WRR

Instead of rigid cycles, it:

distributes smoothly over time
avoids bursty traffic patterns

Used in modern production systems.

🧠 Intuition

WRR is basically:

“Let’s be fair… but also acknowledge reality.”

It assumes:

servers have different strength
traffic should match capability
💀 Common mistakes
Assigning random weights (“feels right engineering”)
Not updating weights when servers change
Using WRR without monitoring
Ignoring latency differences
🧠 Final takeaway

Weighted Round Robin is:

Round Robin with realism injected

It improves fairness by replacing equality with proportionality.

But it still has a blind spot:

it doesn’t react to real-time load changes