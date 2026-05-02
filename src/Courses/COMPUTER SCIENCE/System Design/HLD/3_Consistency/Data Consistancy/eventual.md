🧠 2️⃣ Eventual Consistency
🔹 Definition

Eventual consistency means:

Data will become consistent after some time, not instantly

🧩 Basic Idea
Write → Primary DB
      ↓ (delay)
   Replica DB updated later

So for a short time:

different users may see different data
system is temporarily inconsistent
🧠 Real Example

On Instagram:

You like a post
You see the like count increase
Your friend still sees old count for a few seconds

Nothing is broken. Just delayed sync.

⚙️ Why Use Eventual Consistency?
🔹 1. High Performance

No waiting for all replicas → faster writes

🔹 2. Better Scalability

Works well with:

replication
distributed systems
🔹 3. High Availability

System keeps responding even if some nodes lag

⚠️ Trade-offs

Because of course there are.

❌ Temporary Inconsistency

Users may see:

stale data
different values
❌ Harder Debugging

“Why is data different here?”
Answer: “Give it a second.”

🧠 Timeline Example
t1: Write → value = 100 (Primary)
t2: Replica still = 90
t3: Replica updates → 100

Between t1 and t3:
→ inconsistency exists

🔁 Where It Happens
🔹 Replication Systems
Async replication → lag
🔹 Distributed Databases
Data spread across nodes
🔹 Caching Systems
Cache not updated instantly
🧠 Techniques to Manage It
🔹 Read-Your-Writes

User sees own updates immediately

🔹 Versioning

Track latest updates

🔹 Conflict Resolution

Handle multiple updates:

Last-write-wins
Merge logic
🔹 Retry Mechanisms

Re-fetch data if stale

🧠 When to Use

Use eventual consistency when:

System needs to scale massively
Small delays are acceptable
🧠 Good for:
Social media
Analytics
Feeds
🚫 Bad for:
Banking
Payments
Critical transactions
⚖️ Comparison
Feature	Strong Consistency	Eventual Consistency
Accuracy	Immediate	Delayed
Speed	Slower	Faster
Scalability	Limited	High