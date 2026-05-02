🔄 Load Balancing Proxy (what it actually is)

A load balancing proxy is a system that acts as both:

Reverse proxy → receives client requests
Load balancer → distributes them across backend servers

So instead of separating roles, one component does both jobs.

🧠 Core idea
Client → Proxy (LB) → Server1 / Server2 / Server3

The proxy sits in the middle and:

accepts traffic
decides where it goes
forwards it
🧩 Why it’s called a “proxy”

Because it:

represents backend servers to the client

The client never talks directly to servers.

It always talks to the proxy.

⚙️ What it does internally

A load balancing proxy typically handles:

🔹 1. Request reception

Accepts HTTP/TCP requests from users

🔹 2. Routing decision

Chooses backend server using:

Round Robin
Least connections
IP hash
Weighted algorithms
🔹 3. Forwarding request

Sends request to selected server

🔹 4. Response handling

Returns response back to client

🧠 Example architecture

Used in systems like Instagram:

User
 ↓
Load Balancing Proxy
 ↓
App Server 1 / 2 / 3
 ↓
Database / Cache
🔧 Real-world tools

Common implementations:

Nginx (very common LB + proxy)
HAProxy (high performance LB)
Cloud LBs (AWS ELB, GCP Load Balancer)
⚖️ Why combine proxy + load balancer?

Because it simplifies architecture:

Instead of:
reverse proxy layer
load balancer layer

You get:

one intelligent entry point

🚀 Features you often get together

A load balancing proxy can also handle:

🔹 SSL termination

Decrypt HTTPS so backend servers don’t suffer

🔹 Caching

Serve static responses directly

🔹 Compression

Reduce response size

🔹 Security filtering

Block malicious requests

🔹 Rate limiting

Prevent abuse

🧠 Types of Load Balancing Proxy
🔹 Layer 4 (TCP proxy LB)
Works on IP + port
Fast
Dumb routing
🔹 Layer 7 (HTTP proxy LB)
Understands URLs, headers
Smart routing
Slightly slower
⚠️ Common confusion
❌ “Load balancer and proxy are different systems”

Not necessarily.

✅ Reality:
A reverse proxy can act as a load balancer
A load balancer is often implemented as a reverse proxy

They overlap heavily.

💀 Common mistakes
Thinking LB = separate hardware box (outdated thinking)
Ignoring health checks
Not handling session stickiness
Overloading single proxy instance
🧠 Final intuition

Think of it like this:

A load balancing proxy is the receptionist of your backend system.

It:

receives all traffic
decides who handles it
hides backend complexity
protects servers from chaos
🧠 Final reality

Without it:

clients talk to servers directly → chaos

With it:

everything flows through one controlled entry point

Which means:

your system finally stops behaving like a free-for-all arena and starts behaving like an actual system