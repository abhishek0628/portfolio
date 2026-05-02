🧠 3️⃣ Read-Your-Writes Consistency
🔹 Definition

After you write data, you will always see that updated data in future reads

Even if the rest of the system is still catching up.

🧩 Basic Idea
User writes data → User reads → gets latest value

Simple promise:

“If you did it, you’ll see it.”

Not a high bar, yet surprisingly hard in distributed systems.

🧠 Example

You post something on Instagram:

You see your post immediately
Your friend might not see it yet
🔹 Why this happens
Your request goes to primary DB (latest data)
Other users may read from replicas (slightly outdated)
⚙️ How It Works Internally

To guarantee this, systems do things like:

🔸 1. Sticky Routing
User → always routed to same server / primary

So you always hit the latest data source.

🔸 2. Session-based Reads

System remembers:

where your last write happened
routes your reads accordingly
🔸 3. Read from Primary (temporarily)

After write:

force reads from primary DB
avoid stale replicas
⚖️ Trade-offs
✅ Pros
Better user experience

No confusion like:

“Did my post even go through??”

❌ Cons
Reduces scalability (more load on primary)
More complex routing logic
🧠 Where It’s Used
Social media posts
Profile updates
Comments

Basically anywhere users expect:

immediate feedback on their own actions

⚠️ Without It

You get:

User uploads post
Refreshes
Post disappears

Now user:

retries
duplicates data
loses trust

System:

cries internally
🧠 Comparison
Model	Guarantee
Strong Consistency	Everyone sees latest
Eventual Consistency	Eventually correct
Read-Your-Writes	You see your own updates