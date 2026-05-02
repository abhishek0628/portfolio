🔹 Least Connections (in depth, with example)

Least Connections is one of those algorithms that sounds intelligent because it is… until you realize it’s just counting who looks busiest.

🧠 Core Idea

Send the incoming request to the server with the fewest active connections

Because fewer connections ≠ less work always, but it’s a decent proxy.

⚙️ How it works

Each server maintains:

number of active connections

Load balancer checks and picks the minimum.

🧩 Formula (conceptually)
choose server S such that:
connections(S) = min(all servers)
📊 Example Scenario

Let’s say we have 3 servers:

S1 → 5 active connections  
S2 → 2 active connections  
S3 → 4 active connections  
🔹 Incoming request

Load balancer does:

Compare S1 = 5
Compare S2 = 2 ← smallest
Compare S3 = 4

👉 Request goes to S2

🧠 Step-by-step Flow
Step 1: Initial state
S1: 3 connections
S2: 1 connection
S3: 2 connections
Step 2: New request arrives
LB checks all servers
Picks S2
Step 3: Update state
S1: 3  
S2: 2 (new request added)  
S3: 2  
🧪 Real-world analogy

Imagine a pizza delivery system:

Each server = cook
Connections = pizzas currently being prepared

You assign new orders to the cook with the fewest pizzas in progress.

⚙️ Why it works well
🔹 1. Adapts to real-time load

Unlike Round Robin, it reacts to actual usage.

🔹 2. Balances long-lived requests

Good for:

web sessions
file uploads
streaming connections
🔹 3. Better resource utilization

No server stays idle while others are overloaded.

⚠️ Limitations (important)
🔸 1. Doesn’t measure actual CPU load

A server with 2 heavy ML requests may be worse than one with 5 light ones.

🔸 2. Tracking overhead

Load balancer must constantly track:

active connections per server
🔸 3. Connection ≠ workload

One request might:

be lightweight (API call)
or heavy (video processing)
🔸 4. Short-lived spikes confusion

A server might temporarily look “free” but be busy internally.

📈 Improved versions
🔹 Weighted Least Connections

Adds server capacity into decision:

score = connections / weight
🔹 Least Response Time (upgrade idea)

Combines:

connection count
response latency

Used in smarter systems.

🧠 Where it is used

Systems like:

Nginx
HAProxy

Used in:

web apps
APIs
microservices
📊 Comparison with Round Robin
Feature	Round Robin	Least Connections
Awareness	None	Real-time
Adaptability	Low	High
Complexity	Low	Medium
Efficiency	Average	Better
💡 Key intuition
Round Robin → fairness without intelligence
Least Connections → fairness with awareness
💀 Common mistakes
Assuming it always balances perfectly
Ignoring request weight differences
Not combining with health checks
Using it without monitoring real load metrics
🧠 Final Reality

Least Connections is:

a smart heuristic, not a perfect truth

It works well because:

it reacts to real system state
it’s simple enough to scale

But it still assumes:

“connection count = workload”