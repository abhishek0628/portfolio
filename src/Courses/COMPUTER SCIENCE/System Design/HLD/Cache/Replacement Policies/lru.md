🔥 1️⃣ LRU (Least Recently Used)
🧠 Definition

LRU (Least Recently Used) means:

When cache is full, remove the item that hasn’t been used for the longest time.

🧩 Core Idea

Assumption:

If you haven’t used something recently, you probably won’t use it soon.

It’s basically memory with mild judgment.

📦 Example

Assume cache size = 3

Step-by-step
Access: A → B → C
Cache:  [A, B, C]

Now access A again:

A is now most recently used
Order becomes: B, C, A

Now add D:

Cache is full → remove LRU (B):

Evict: B
Cache: [C, A, D]
⚙️ How LRU is Implemented

You can’t just use an array. That would be slow. Obviously.

🔹 Optimal Implementation
Data Structures:
HashMap → O(1) lookup
Doubly Linked List → maintain order
🧠 Structure
[Most Recent] ⇄ A ⇄ C ⇄ D ⇄ [Least Recent]
🔹 Operations
1. Get(key)
If exists:
move node to front (most recent)
return value
2. Put(key, value)
If exists → update + move to front
If new:
if full → remove tail (LRU)
insert at front
⚡ Time Complexity
Operation	Complexity
Get	O(1)
Put	O(1)

That’s why everyone loves it.

🧠 Why LRU works

Real systems follow temporal locality:

Recently used data is likely to be used again soon.

Example:

social media feed
web pages
API responses

Used heavily in systems like Redis.

📌 Real-world analogy

Cache is like your desk:

Stuff you use often stays on top
Old junk gets pushed away
If desk is full → something gets thrown out

LRU just automates your messy desk behavior.

⚖️ Advantages
Simple logic
Works well in practice
Fast (O(1)) with proper implementation
❌ Disadvantages
Doesn’t consider frequency
Can evict useful long-term data
Can behave badly in cyclic access patterns
🧠 When to use LRU

Use when:

recent data matters
access patterns are temporal
general-purpose caching needed
💀 Common Mistakes
Using only array/list → becomes O(n) (slow)
Forgetting to update order on access
Mixing LRU with LFU logic randomly (chaos engineering, unintentionally)
🧠 Final Reality

LRU is popular because:

it’s simple, fast, and “good enough” for most systems

Not because it’s perfect.

In system design terms:

LRU = default safe choice
LFU = smarter but heavier
Random = “I give up” option

If caching policies were a personality:

LRU = responsible student
LFU = overthinking topper
Random = group project contributor who vanished mid-semester