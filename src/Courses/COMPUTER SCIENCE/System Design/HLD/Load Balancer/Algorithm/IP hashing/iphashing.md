5️⃣ IP Hashing (Load Balancing Algorithm)

IP Hashing is the “same user, same server” strategy. It sounds simple, and that’s usually where systems quietly start building hidden complexity.

🧠 Core Idea

Use the client’s IP address to decide which server handles the request.

⚙️ Basic Formula
server = hash(client_IP) % N

Where:

client_IP → user’s IP address
N → number of servers
hash() → deterministic function
🔄 Flow
Client (IP: 192.168.1.10)
        ↓
   Hash Function
        ↓
  Server 2 selected
        ↓
All requests from this IP → Server 2
🧠 Why it works

Because:

same input (IP) → same output (server)

So a user is “sticky” to one server without extra session storage.

✅ Advantages
🔹 1. Session Affinity (Sticky behavior)

User always hits same server

Useful when:

session stored in memory
no external session store
🔹 2. Simple to implement

No tracking tables
No complex state management

🔹 3. Fast decision making

Just hash + modulo

❌ Disadvantages
🔸 1. Uneven load distribution

Some IP ranges may dominate a server

🔸 2. IP changes break consistency

Users switching:

mobile networks
VPNs
Wi-Fi

→ get different servers

🔸 3. Hotspot problem

If many users share IP (NAT):

one server overloaded
🔸 4. Not truly user-aware

IP ≠ user identity (important limitation)

🧠 Real-world Example

In systems like Nginx:

IP hashing may be used for:

session stickiness
legacy session-based applications

But modern systems often avoid it in favor of:

cookies
distributed session stores (like Redis)
⚖️ IP Hashing vs Other Algorithms
Feature	IP Hashing	Round Robin	Least Connections
Session stickiness	✅	❌	❌
Load awareness	❌	❌	✅
Simplicity	High	High	Medium
Fair distribution	Poor	Medium	High
🧩 When to use IP Hashing

Use it when:

sessions are stored in server memory
you want quick sticky sessions
system is small/medium scale

Avoid when:

high-scale distributed systems
users frequently change networks
load balancing fairness matters
💀 Common mistakes
Assuming IP = user
Using it without load awareness
Ignoring NAT / shared IPs
Relying on it instead of proper session management
🧠 Final Reality

IP Hashing is:

“cheap session stickiness”

It solves one problem:

keeping user on same server

But creates others:

imbalance
inflexibility
hidden scaling issues

In modern architectures, it’s often replaced with:

cookies + session stores
or stateless auth (JWT)

Because the industry collectively decided:

IP is a terrible identity system, but we tried anyway.