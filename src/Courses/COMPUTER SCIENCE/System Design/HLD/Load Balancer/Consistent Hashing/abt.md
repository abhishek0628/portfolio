🔄 Consistent Hashing in Load Balancing

Consistent hashing is what you use when you’re tired of your system exploding every time you add or remove a server. Which, in real life, is often.

🧠 The Problem (why we need it)

Normal hashing looks like this:

server = hash(key) % N

Now imagine:

You have 3 servers
You add a 4th server

Everything changes.

💥 Result:
Most keys get reassigned
Cache becomes useless
System chaos ensues
🧩 Goal of Consistent Hashing

Minimize re-distribution of keys when servers change

Only a small fraction of keys move, not everything.

🔁 Core Idea

Instead of mapping servers in an array, we place them on a ring (circle).

🧠 Hash Ring Concept
        [S1]
     /        \
  [S4]        [S2]
     \        /
        [S3]

Both:

servers
keys

are placed on the same circular hash space.

⚙️ How It Works
🔹 Step 1: Hash everything onto a ring
Servers get positions
Keys get positions
🔹 Step 2: Assign key to nearest server clockwise
Key → move clockwise → first server you hit = owner
📦 Example

Let’s say:

Servers:

S1 = 10
S2 = 40
S3 = 80

Keys:

K1 = 12
K2 = 50
K3 = 90
🧠 Mapping:
K1 (12) → S2 (40)
K2 (50) → S3 (80)
K3 (90) → S1 (wrap around)
➕ What happens when a server is added?

Let’s add S4 = 30

Only keys in that small region shift:

Before: K1 → S2
After: K1 → S4

👉 Only nearby keys move, not everything.

🎯 Why it’s powerful
🔹 1. Minimal key movement

Only affected region changes

🔹 2. Scales smoothly

Add/remove servers easily

🔹 3. Great for distributed systems

Used in:

caching systems
databases
CDNs
⚠️ Real-world problem: uneven distribution

If servers are randomly placed:

some get more keys
some get less
🔧 Solution: Virtual Nodes

Each server appears multiple times on ring:

S1 → S1a, S1b, S1c
S2 → S2a, S2b, S2c

✔ Balances load
✔ Smooth distribution

🧠 Where it is used
🔹 Distributed caching
Redis clusters
Memcached systems
🔹 Databases
Partition routing
Sharded systems
🔹 CDNs
Edge server selection
🔹 Real systems
Apache Cassandra
Amazon DynamoDB
⚖️ Normal Hashing vs Consistent Hashing
Feature	Normal Hashing	Consistent Hashing
Rebalancing	Massive	Minimal
Scalability	Poor	Excellent
Stability	Low	High
💀 Common mistakes
Not using virtual nodes → imbalance
Ignoring hot spots
Poor hash function → uneven ring
Thinking it solves all scaling problems (it doesn’t, sadly)
🧠 Final intuition

Think of it like a clock:

Servers = hours on clock
Keys = points on clock
Each key goes to next server clockwise

When you add a new hour:

only nearby assignments shift
rest of the system stays stable
🧠 Final reality

Consistent hashing is:

a trick to stop scaling changes from destroying your system

It doesn’t make scaling easy.
It just makes scaling less catastrophic.

Which, in distributed systems, is basically a victory.