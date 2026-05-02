.

🔹 Horizontal Scaling (Scale Out)
🧠 Definition

Horizontal scaling means:

Adding more machines (servers) instead of making one machine stronger

🧩 Basic Idea
Before:
   [ Server ]

After:
 [S1] [S2] [S3] [S4]

Instead of upgrading one server, you spread the workload.

⚙️ How it Works

You don’t just throw servers into the void and hope they cooperate.

You need a load balancer:

Client → Load Balancer → S1 / S2 / S3 / S4
Load balancer distributes requests
Each server handles part of the load
📈 Why Horizontal Scaling?
🔹 1. Handles High Traffic

More users → more servers
No single machine cries under pressure

🔹 2. Fault Tolerance

If one server dies:

others continue working
system survives (barely, but still)
🔹 3. Practically Unlimited Growth

You can keep adding servers
(until your budget or patience runs out)

⚖️ Horizontal vs Vertical (quick sanity check)
Feature	Horizontal	Vertical
Approach	More servers	Bigger server
Scalability	High	Limited
Cost	Flexible	Expensive
Complexity	High	Low