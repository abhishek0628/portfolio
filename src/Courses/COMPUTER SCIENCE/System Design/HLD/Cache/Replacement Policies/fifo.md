🔹 3️⃣ FIFO (First In First Out)
🧠 Idea

The first item inserted into the cache is the first one removed

No memory of usage. No intelligence. Just chronological order.

📦 How it works

Think of a queue:

Front → A → B → C → D → Rear

When cache is full and a new item arrives:

Step:
Remove A (oldest)
Insert new item at rear
🔁 Example
Cache size = 3
Step 1:

Insert A, B, C

A B C
Step 2:

Insert D → cache full

Evict A:

B C D
Step 3:

Insert E

Evict B:

C D E
⚙️ Why FIFO exists

Because sometimes:

Simple > Smart

It is:

Easy to implement
Low overhead
Predictable
✅ Advantages
🔹 1. Very simple
Just a queue
No tracking usage frequency
🔹 2. Fast operations
O(1) insert
O(1) delete
🔹 3. Low memory overhead

No timestamps, no counters

❌ Disadvantages
🔹 1. Ignores usage completely

Even if item is:

heavily used
critical
trending

It still gets evicted if it’s old.

🔹 2. Poor performance in real systems

Access patterns are not purely chronological.

🔹 3. Cache pollution risk

Important data can be removed just because it arrived early.

🧠 When FIFO is used

FIFO is rarely used alone in modern systems, but shows up in:

Simple buffering systems
Basic scheduling queues
Some embedded systems
📊 FIFO vs LRU (important comparison)
Feature	FIFO	LRU
Logic	Oldest entry	Least recently used
Awareness	None	Usage-based
Performance	Basic	Better in real workloads
Intelligence	Low	Moderate
🧠 Real-world intuition

FIFO behaves like:

“I don’t care how important you are. You arrived first, so you leave first.”

LRU behaves like:

“If nobody used you recently, you’re probably useless.”

One is polite but dumb.
The other is slightly less dumb.

💀 Common mistake

People assume FIFO is “fair.”

It is not fair.
It is just chronological blindness dressed as fairness.

🧠 Final Reality

FIFO is:

simple ✔
fast ✔
predictable ✔
but not smart ❌

It survives in systems where:

complexity is more dangerous than inefficiency