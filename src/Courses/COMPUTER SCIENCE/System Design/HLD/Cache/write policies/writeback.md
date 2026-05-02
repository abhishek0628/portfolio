🔹 Write-Back Cache (Write-Behind) — with example

Write-back is the caching policy where:

You write to cache first, and the database is updated later asynchronously

So yes, the system is fast… and slightly on the edge of chaos.

🧠 Core Idea
Client → Cache (immediate write) → DB (later async sync)

The database is not updated instantly. It is updated in the background.

⚙️ Step-by-step Flow

Let’s say a user updates their profile.

1️⃣ User request
Update name = "Abhishek"
2️⃣ Write happens to cache
Cache: { user_id: 1, name: "Abhishek" }

Fast. Instant response possible.

3️⃣ System returns success

User thinks:

“Done 👍”

Reality:

DB hasn’t been updated yet

4️⃣ Background sync

After a delay:

Cache → Database update

Now DB is finally consistent.

🧩 Real-world Example

In a system like Instagram:

Scenario: User likes a post ❤️

Instead of immediately hitting the database:

Like count updated in cache
DB updated later in batch

Why?

Millions of likes per second
DB cannot survive that pressure
⚡ Why Write-Back is used
🔹 1. High Performance
Writes are extremely fast
No DB bottleneck
🔹 2. Reduced Database Load
DB updated in batches
Efficient resource usage
🔹 3. Better throughput
Ideal for high-write systems
💀 Risks (this is where reality bites)
🔸 1. Data Loss

If cache crashes before syncing:

data is gone forever

🔸 2. Temporary inconsistency

Cache and DB may differ:

Cache: 100 likes  
DB:    95 likes
🔸 3. Complex recovery logic

Need background workers:

retry sync
handle failures
ensure durability
🧠 Where Write-Back is safe

Good for:

Analytics systems
Logging systems
Social media counters
Non-critical updates
❌ Where NOT to use it
Banking transactions
Payments
Inventory systems

Because “oops we lost money” is not a bug report you want.

🔄 Comparison Snapshot
Feature	Write-Back
Speed	Very fast
Consistency	Delayed
Risk	Data loss possible
DB load	Low
🧠 Final Mental Model

Think of write-back like:

“Write it on a sticky note (cache), and later someone enters it into the official ledger (database).”

Fast, efficient… but if the sticky note disappears, reality forgets it ever happened.