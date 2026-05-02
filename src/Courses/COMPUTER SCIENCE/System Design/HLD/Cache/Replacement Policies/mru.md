🔁 MRU (Most Recently Used) Cache Policy
🧠 Definition

MRU means:

Evict the item that was used most recently

Yes. The opposite of LRU. Because sometimes reality likes irony.

⚙️ How it works

When cache is full:

Cache: A (old), B, C (recent)

Most recently used = C
👉 Evict C

🧠 Intuition

MRU assumes:

If something was just used, it might NOT be needed again immediately

This sounds backwards… because it is, in general cases.

📊 Example scenario
Sequential scan workload

Imagine reading a huge file:

A → B → C → D → E → F ...

Each item is used once and never again.

Now:

LRU keeps old stuff (bad)
MRU drops recent stuff (good)

Because:

recent items are part of a linear scan → unlikely to be reused

⚡ When MRU works well
🔹 1. Sequential access patterns
File streaming
Large dataset scans
🔹 2. Repeated scans where reuse is unlikely
Analytical queries
Log processing
🔹 3. Certain database workloads

Where last accessed item is least likely to be reused soon

❌ When MRU is terrible
🔹 1. Normal web caching
Pages, images, API responses

MRU would delete:

“stuff you just used and are likely to use again”

Which is… not ideal unless you enjoy cache misses.

🔹 2. Temporal locality workloads

Where “recent = likely soon again” (most real systems)

⚖️ MRU vs LRU
Feature	LRU	MRU
Evicts	Oldest used	Most recent used
Assumption	recent = useful	recent = done
Best for	general workloads	sequential scans
Common?	very	rare
🧠 Why MRU exists at all

Because caching is not universal logic — it’s workload-dependent guessing.

MRU shines when:

“recently used = already consumed and unlikely to repeat”

LRU fails there.

🧩 Real-world intuition

Think of:

streaming through a video file
reading logs line-by-line

Once you pass a chunk:

you’ll probably never need it again

So MRU kicks it out early.

💀 Common misconception

People think:

“MRU is just LRU reversed, so it’s useless”

Not true.

It’s just:

niche instead of general-purpose

🧠 Final Reality

MRU is:

rare
counterintuitive
surprisingly effective in specific workloads

But in most system design cases:

LRU dominates because most systems behave like “reuse recent data”