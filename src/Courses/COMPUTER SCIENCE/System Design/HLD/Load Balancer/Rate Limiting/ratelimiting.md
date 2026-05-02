🚦 What is Rate Limiting?

Rate limiting = controlling how many requests a client can make in a given time window.

Example:

100 requests per minute per user
1000 requests per second per IP
🧠 Where it fits in load balancing
Client → Load Balancer / Reverse Proxy → App Servers
                 ↓
           Rate Limiter

Rate limiting is usually enforced at:

Load balancer level (early filter)
API gateway / reverse proxy
Sometimes application level (fallback)
🎯 Why combine with Load Balancer?

Because load balancer alone only distributes traffic. It does NOT protect you from abuse.

Rate limiting adds:

Protection from overload
Fair usage
DDoS mitigation (basic layer)
⚙️ How it works (step-by-step)
Request arrives at load balancer
Rate limiter checks:
Who is user? (IP / API key / user ID)
Check request count in time window
Decision:
✅ Allow → forward to server
❌ Reject → return 429 Too Many Requests
🧠 Common Algorithms
🔹 1. Fixed Window
100 requests per minute
Simple counter reset every minute

❌ Problem: burst traffic at boundary

🔹 2. Sliding Window
Smooth tracking over time
More accurate than fixed window

✔ Better fairness
❌ More computation

🔹 3. Token Bucket

Imagine a bucket filling with tokens:

Each request consumes 1 token
Tokens refill over time
Token refill rate = 10/sec
✔ Allows bursts
✔ Flexible
🔹 4. Leaky Bucket
Requests processed at constant rate
Excess requests are dropped or queued

✔ Smooth traffic
❌ Adds delay

🧩 Rate Limiting at Load Balancer Level

When implemented in load balancer (e.g., HAProxy or Nginx):

It can:
Block abusive IPs early
Reduce backend load
Enforce API quotas
⚖️ Example in real system

In a system like Instagram:

User scroll feed → many API calls
Load balancer limits:
50 requests/sec per user
Excess requests → HTTP 429
🧠 Multi-layer rate limiting

Good systems don’t rely on just one place:

🔹 Edge (CDN / WAF)
Blocks bots and attacks early
🔹 Load balancer
Enforces global limits
🔹 API gateway
Per-user / per-service limits
🔹 Application layer
Business-specific limits
💀 What happens without it?
API gets spammed
Database overload
Cache misses explode
System slows → crashes
Everyone blames backend engineers (correctly)
🧠 Key challenges
🔸 Distributed systems problem

Multiple servers → shared rate limit needed

Solution:

centralized store (like Redis)
🔸 Accuracy vs performance
Precise tracking = expensive
Approximation = faster
🔸 Burst handling

Good systems allow short spikes without blocking users unfairly

🧠 Final mental model

Rate limiting in load balancing is:

“A gate at the entrance that decides how many visitors are allowed in before the building collapses.”

🧠 One-line summary

Rate limiting + load balancing = traffic distribution + abuse control

Without rate limiting:

your load balancer just distributes chaos evenly

With it:

your system survives actual internet behavior (which is not polite)