🔁 Simple Round Robin (in depth)

Simple Round Robin is the most basic load balancing algorithm. It does one job:

Send each request to the next server in order, repeatedly.

No intelligence. No monitoring. No “what if this server is dying?” thoughts. Just rotation.

🧠 Core Idea

If you have N servers:

First request → Server 1
Second request → Server 2
…
Last server → back to Server 1
⚙️ Basic Setup
Servers: S1, S2, S3
Requests: R1, R2, R3, R4, R5, R6
🔄 Flow
R1 → S1  
R2 → S2  
R3 → S3  
R4 → S1  
R5 → S2  
R6 → S3

It just loops forever like a very obedient robot.

🧠 How it Works Internally

A load balancer keeps:

A list of servers
A pointer/index
Algorithm:
Start at S1
Send request
Move pointer to next server
If end reached → go back to S1
Pseudocode
index = 0

for each request:
    server = servers[index]
    send(request, server)
    index = (index + 1) % number_of_servers

That’s it. That’s the whole personality.

🧩 Visual Example
        → S1 →
      ↑       ↓
     S3 ← ← ← S2

Requests circulate in a fixed cycle.

📦 Real-world Example

Imagine a backend for Instagram:

Servers:

S1 → Login service
S2 → Feed service
S3 → Media service

Requests:

R1 → S1 (login)
R2 → S2 (feed)
R3 → S3 (image load)
R4 → S1 (login again)

Even if S2 is overloaded, Round Robin doesn’t care. It keeps rotating like everything is fine.

⚙️ Where it is used

Simple Round Robin is used in:

basic load balancers
test environments
simple internal systems
as a fallback strategy inside tools like Nginx
✅ Advantages
1. Extremely simple
Easy to implement
Easy to debug
2. Fast decision making
O(1) per request
3. Fair distribution (on paper)
Every server gets equal turns
❌ Disadvantages
1. Ignores server capacity

A weak server = same load as strong one

2. Ignores real-time load

CPU at 100%? Still gets requests.

3. Ignores request complexity

Light request vs heavy request treated equally

4. Bad for uneven traffic

Some servers get overloaded unintentionally

⚠️ When it works well

Simple Round Robin is fine when:

All servers are identical
Requests are similar in cost
System is low to moderate traffic
💀 When it fails badly
Mixed hardware (strong + weak servers)
Heavy workloads (video processing, ML inference)
Real-time systems with burst traffic
🧠 Key Insight

Simple Round Robin assumes:

“All servers are equal and all requests cost the same”

Reality says:

“No they aren’t, and no they don’t”

🧠 Final intuition

Simple Round Robin is:

fair rotation without awareness

It’s like dividing work in a group project by saying:

“Everyone gets equal tasks,”
without checking who actually has time or skill.