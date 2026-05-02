⚡ What is Redis?

Redis (Remote Dictionary Server) is:

An in-memory data store used for caching, messaging, and fast data access.

🧠 Core idea

Instead of reading from slow disk-based DB:

App → Database (slow)

You do:

App → Redis (RAM, fast)

RAM ≈ nanoseconds
Disk ≈ milliseconds

Yes, that gap matters a lot.

🧠 Why Redis is fast
Stored in memory (RAM)
Simple data structures
No disk seeks for every request

So it behaves like:

“database on caffeine”

🧩 What Redis can store

It’s not just key-value (people often stop thinking there).

🔹 Data types
Strings
Hashes
Lists
Sets
Sorted Sets
🧠 Example
SET user:1 "Abhishek"
GET user:1
⚙️ Where Redis is used
🔹 1. Caching (MOST COMMON)
Request → Check Redis → (hit) return fast
                  ↓
               (miss)
                  ↓
              DB query

Used heavily in systems like Instagram

🔹 2. Session Storage
Store login sessions
Fast authentication checks
🔹 3. Rate Limiting

Track request counts per user/IP

🔹 4. Leaderboards

Sorted Sets make this easy

Example:

gaming scores
rankings
🔹 5. Message Queues (lightweight)

Redis can act as a simple queue system

⚡ Redis Architecture (simplified)
App → Redis Server (RAM) → Optional Disk Persistence
💾 Persistence Options

Redis is memory-based but can persist data:

🔹 RDB (Snapshotting)
Saves periodic snapshots
🔹 AOF (Append Only File)
Logs every write
⚠️ Trade-offs
🔹 Pros
Extremely fast
Flexible data structures
Easy caching layer
🔹 Cons
Limited memory
Data loss risk (if not persisted)
Expensive at scale
🧠 Redis vs Database
Feature	Redis	SQL/NoSQL DB
Speed	Very fast	Slower
Storage	RAM	Disk
Purpose	Cache	Source of truth

👉 Important rule:

Redis is NOT your primary database (unless you like living dangerously)

🔥 Real-world Flow

Example in Instagram:

User request feed:
1. Check Redis cache
2. If hit → return posts instantly
3. If miss → query DB
4. Store result in Redis
5. Return response
🚦 Expiration (TTL)

You can set expiry:

SET session:user1 "data" EX 3600
Auto deletes after time
Prevents stale data buildup
🧠 Eviction Policies

When memory is full:

LRU (Least Recently Used)
LFU (Least Frequently Used)
Random

Redis decides what to throw away. Politely. Or not.

⚠️ Common Mistakes
Using Redis as primary DB
No TTL → memory explosion
Storing huge objects
No eviction policy
Caching everything blindly
🧠 Where Redis fits in system design
Client → Load Balancer → App Server → Redis → DB

Redis sits between app and database as a speed layer

🧠 Final Reality

Redis is:

a performance accelerator, not a storage replacement

It exists to:

reduce DB load
reduce latency
handle hot data

Without Redis:

DB gets overloaded

With Redis:

system becomes fast
until cache invalidation reminds you life has consequences