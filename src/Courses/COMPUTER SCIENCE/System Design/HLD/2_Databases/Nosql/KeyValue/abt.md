🔑 2️⃣ Key-Value Stores
🧠 What is it?

A key-value store is the most basic form of database:

Data is stored as:
Key → Value

That’s it. No joins, no relationships, no drama.

🧩 Basic Example
"user:101" → "Abhishek"
"session:xyz" → {user_id: 101, expiry: 12345}
Key = unique identifier
Value = anything (string, JSON, binary)
⚙️ How it Works
You ask using the key
Database returns the value instantly
GET "user:101" → "Abhishek"

No searching. No scanning. Just direct lookup.

🚀 Popular Key-Value Stores
Redis
Memcached
⚡ Why Use Key-Value Stores?
🔹 1. Extremely Fast
O(1) lookup (constant time)
Often stored in RAM
🔹 2. Simple Design
No schema
No complex queries
🔹 3. Scalable
Easy to distribute across servers
🧠 Common Use Cases
🔸 1. Caching

Store frequently accessed data

Example:

"homepage_data" → cached response
🔸 2. Session Storage
"session:abc123" → user info
🔸 3. Rate Limiting
"user:101:requests" → 57
🔸 4. Real-time Data
Leaderboards
Counters
⚠️ Limitations
🔸 1. No Complex Queries

You can’t do:

JOIN
FILTER
GROUP BY

It’s not that kind of database.

🔸 2. No Relationships

Everything is independent

You handle relationships manually
(which is as fun as it sounds)

🔸 3. Memory Cost

If stored in RAM:

Fast ✔
Expensive ✔✔✔
⚖️ When to Use

Use Key-Value stores when:

You know the key
You need fast access
Data is simple
❌ When NOT to Use

Avoid if:

Complex queries needed
Relational data
Analytics-heavy workloads