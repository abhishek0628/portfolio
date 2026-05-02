🔁 What is Data Replication?

Data replication =

Copying the same data across multiple databases/servers

So instead of:

[ Single DB ]  ← bad day → everything breaks

You get:

[Primary DB] → [Replica 1] → [Replica 2]

Multiple copies. Less panic when something fails.

🧠 Why Replication?
🔹 1. High Availability

If one DB crashes:

others take over
system keeps running
🔹 2. Read Scalability
Writes → primary
Reads → replicas

More users? Add more replicas instead of crying.

🔹 3. Fault Tolerance

Hardware fails. Networks fail. Humans definitely fail.

Replication makes system resilient.

⚙️ Types of Replication
🔹 1. Primary–Replica (Master–Slave)

Most common setup.

Write → Primary DB
        ↓
     Replicas (read)
✅ Pros
Simple
Scales reads
❌ Cons
Replication lag
Primary is still a bottleneck
🔹 2. Multi-Primary (Multi-Master)

Multiple DBs can write.

DB1 ↔ DB2 ↔ DB3
✅ Pros
High availability
No single write bottleneck
❌ Cons
Conflict resolution (nightmare fuel)
🔹 3. Synchronous Replication
Data written to all replicas before success

✔ Strong consistency
❌ Slow

🔹 4. Asynchronous Replication
Write happens first
Replicas updated later

✔ Fast
❌ Data may be stale

⚠️ Replication Lag

This is where reality ruins your clean design.

🧠 What happens?
Write happens on primary
Replica updates after delay

So:

User A sees new data
User B sees old data

Congratulations, you now have eventual consistency.

🧩 Real-world Example

Apps like Instagram:

Millions of reads
Fewer writes

So:

Writes → primary
Reads → many replicas
🔄 Failover

When primary dies:

Replica promoted to primary
Traffic redirected
🧠 Types
Automatic failover
Manual failover (a human panic button)
🧠 Replication vs Backup (don’t confuse)
Feature	Replication	Backup
Purpose	Availability	Recovery
Real-time	Yes	No
Use case	Scaling	Disaster recovery