🔹 Write-Around Cache (with example)

Write-around is the caching strategy that basically says:

“I’m not wasting cache space on your write. I’ll deal with it later if someone actually cares.”

🧠 Core Idea

When you write data:

It goes only to the database
Cache is not updated
Cache is filled only on read (cache miss)
⚙️ Flow
WRITE:
Client → Database (Cache ignored)

READ:
Client → Cache ❌ miss → Database → Cache updated → Client
📌 Step-by-step Example

Let’s use a real scenario: a user profile system in an app like Instagram.

🧑 Scenario: User updates profile
🔹 Step 1: Write operation

User changes bio:

"Bio: I love system design"

With write-around:

Cache is NOT updated
DB is updated directly
Client → DB (update bio)
Cache → untouched
🔹 Step 2: First read after update

Another user opens profile:

App checks cache → ❌ miss
Goes to DB → gets updated bio
Stores result in cache
Returns response
Client → Cache ❌ → DB → Cache → Client
🔹 Step 3: Subsequent reads

Now cache has data:

Fast response from cache
No DB hit
Client → Cache → Response
🧠 Why use Write-Around?
✅ Advantages
1. Avoids cache pollution

Rarely used writes don’t clutter cache

2. Efficient for write-heavy systems

If writes are frequent but reads are rare, cache stays clean

3. Saves memory

Only useful data gets cached (on demand)

❌ Disadvantages
1. First read is slow

Always a cache miss after write

2. Temporary inconsistency

Cache may hold old data until next read refreshes it

📊 When to use Write-Around?

Good fit for:

Large datasets
Write-heavy workloads
Rarely re-read updated data
🧠 Example use cases
Logging systems
Analytics pipelines
Temporary event data
Bulk data ingestion systems
⚖️ Quick intuition

Think of cache like a fridge:

Write-through → you immediately put food in fridge
Write-back → you store food in fridge first, tell kitchen later
Write-around → you throw food in kitchen, and only put it in fridge if someone asks for it later
💀 Common mistake

Using write-around for:

hot frequently accessed data

Result:

constant cache misses → DB overload → system sadness

🧠 Final takeaway

Write-around is:

“Don’t cache writes unless someone actually reads them.”

It sacrifices immediate speed for:

simplicity
memory efficiency
cleaner cache behavior