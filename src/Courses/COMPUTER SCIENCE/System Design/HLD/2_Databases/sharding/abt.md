🔪 What is Sharding?

Sharding =

Splitting a large database into smaller pieces (shards) across multiple machines

Each shard holds a subset of data.

🧠 Basic Idea
Before:
[ Single DB ]

After:
[Shard 1] [Shard 2] [Shard 3]
⚙️ How it Works

Instead of storing all users in one DB:

Shard 1 → Users A–M  
Shard 2 → Users N–Z  

Each shard:

has its own storage
handles its own queries
🧠 Why Sharding?
🔹 1. Handle Massive Data

One DB can’t scale forever

🔹 2. Improve Performance

Smaller dataset → faster queries

🔹 3. Horizontal Scaling

Add more shards → more capacity

🧩 Sharding Strategies
🔹 1. Range-Based Sharding

Split by value ranges:

1–1000 → Shard 1  
1001–2000 → Shard 2  
❌ Problem

Hotspot:

One shard gets too much traffic
🔹 2. Hash-Based Sharding
hash(user_id) % N

Even distribution across shards

❌ Problem

Adding/removing shards → data reshuffle nightmare

🔹 3. Directory-Based Sharding

Use a lookup table:

User → Shard Mapping Table
✅ Pros

Flexible

❌ Cons

Extra lookup overhead

🔹 4. Geo-Based Sharding
India users → Shard 1  
US users → Shard 2  

Used in global systems

⚠️ Challenges (the fun part)
🔸 1. Rebalancing

Add new shard → move data

Painful and slow

🔸 2. Uneven Load

Some shards become “hot”

🔸 3. Cross-Shard Queries

Query across shards:

SELECT * FROM users WHERE age > 25;

Now you query ALL shards. Enjoy the latency.

🔸 4. Complexity

Routing logic:

Which shard to hit?

Now your app needs brains.

🔁 Sharding vs Replication
Feature	Sharding	Replication
Goal	Scale data	High availability
Data	Split	Copied
Reads	Distributed	Distributed
Writes	Distributed	Usually centralized
🧠 Real-world Example

Apps like Instagram:

Billions of users
Massive data

They shard:

user data
posts
interactions

Because one database handling all that is just fantasy.

🧠 Sharding + Replication (best combo)
Shard 1 → Replica A  
Shard 2 → Replica B  
Shard 3 → Replica C  

Now you get:

scalability (sharding)
availability (replication)