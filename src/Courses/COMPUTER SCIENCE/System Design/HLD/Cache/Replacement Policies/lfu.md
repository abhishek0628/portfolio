2️⃣ LFU (Least Frequently Used)
LFU is the cache policy that assumes:

“If you don’t use it often, you probably don’t care about it.”

Which is… optimistic, considering humans forget passwords they typed 2 minutes ago.

🧠 Core Idea
LFU = Evict the item with the lowest access frequency
So instead of “recentness” (LRU), it tracks:

how many times something was used


📊 Example
Cache capacity = 3
Access sequence:
A, A, A, B, B, C, D
Step-by-step:
ItemFrequencyA3B2C1D1
Cache is full → need eviction.
Who gets kicked out?
👉 C or D (least frequency)

⚙️ How LFU Works Internally
To implement LFU efficiently, systems maintain:


A frequency counter for each item


A map of frequency → list of items


So when frequency changes:


item moves to a new bucket



🧩 Structure (simplified)
Key → Value + FrequencyFrequency → List of Keys

🔁 Operations
🔹 Get(key)


Increase frequency


Move item to higher frequency bucket



🔹 Put(key)


If cache full:


evict least frequency item




Insert new item with freq = 1



⚖️ Why LFU is useful
✅ Pros


Great for stable access patterns


Keeps “popular” data longer


Efficient for long-term workloads



❌ Cons (and they matter)
1. Cache pollution problem
Old data used a lot early → stays forever

2. Slow adaptation
If access patterns change:


LFU is slow to adapt


LRU reacts faster



3. Implementation complexity
Harder than LRU

🧠 LFU vs LRU (important comparison)
FeatureLFULRUTracksFrequencyRecencyBest forLong-term popularityRecent usageAdaptabilitySlowFastComplexityHighMedium

📦 Real-world usage
LFU-style logic appears in:


Redis (LFU eviction mode available)


CDNs for hot content caching


Recommendation systems



🧠 When LFU fails badly
Imagine:


Item A used 1000 times yesterday


Never used again today


LFU says:

“Still important, let’s keep it forever”

System says:

“Why is this garbage still here?”


🔥 Hybrid approaches (real systems)
Because LFU alone is too rigid:


LFU + aging (decay frequency over time)


LFU + LRU hybrid (ARC algorithms)



💀 Common mistakes


Using LFU without decay → stale cache hell


Ignoring implementation cost


Assuming frequency = importance (it’s not always true)



🧠 Final intuition
LFU is:

“memory with a long grudge”

It remembers what was popular, even when nobody cares anymore.

If LRU is “what you used recently,”
LFU is “what you used a lot in your past life and now cannot escape.”