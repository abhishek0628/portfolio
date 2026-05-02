🔹 Layer 4 (TCP Proxy Load Balancer)

Layer 4 load balancing is the “don’t overthink it, just forward packets” version of system design.

It works at the transport layer (TCP/UDP), meaning it doesn’t care about URLs, headers, or your app logic drama.

🧠 Core Idea

A Layer 4 load balancer:

Routes traffic based only on IP address and port.

Not content. Not requests. Just raw connection info.

⚙️ Basic Flow
Client → L4 Load Balancer → Server1 / Server2 / Server3

It decides:

which server gets the TCP connection
then blindly forwards bytes
📦 What it actually sees

Layer 4 only understands:

Source IP
Destination IP
Port numbers
TCP/UDP connection info

It does NOT see:

HTTP URL
Headers
Cookies
Payload meaning
🧠 How it works internally
Step-by-step:
Client starts TCP connection
Load balancer receives SYN packet
LB selects a backend server
LB forwards connection
Server talks directly to client via LB tunnel
⚡ Key Characteristics
🔹 1. Fast

No deep inspection → very low overhead

🔹 2. Transparent

Doesn’t modify request content

🔹 3. Connection-based routing

Works at TCP session level

⚖️ Load Balancing Strategies in L4

Even though it’s “dumb,” it still uses strategies:

Round Robin
Least connections
IP hash
🧩 Architecture
Client
  ↓
Layer 4 Load Balancer
  ↓
[Server A] [Server B] [Server C]
  ↓
Database / Cache
🚀 Real-world use cases

Layer 4 is used when:

You need high performance
You don’t need request-level intelligence
🔹 Examples:
Gaming servers
TCP-heavy systems
Database traffic routing
High-throughput APIs
🧠 Example systems

Used in infra behind platforms like Amazon Web Services (ELB network layer mode)

🔥 Pros
✔ Extremely fast

No parsing → minimal latency

✔ Scales well

Handles millions of connections

✔ Protocol agnostic

Works for:

HTTP
MySQL
SMTP
Anything TCP/UDP
❌ Cons
✖ No smart routing

Cannot route based on:

URL (/api vs /images)
user type
headers
✖ No caching / inspection

Blind forwarding only

✖ Debugging is harder

You don’t know request content at LB level

🧠 L4 vs L7 (critical comparison)
Feature	L4 LB	L7 LB
Layer	TCP/UDP	HTTP/HTTPS
Speed	Very fast	Slower
Awareness	No app data	Full request understanding
Routing	IP/port	URL/header/cookies
Flexibility	Low	High
💀 Common mistakes
Using L4 when you need API-aware routing
Expecting URL-based routing (impossible here)
Mixing L4 and L7 responsibilities incorrectly
Forgetting session persistence needs
🧠 Final intuition

Think of Layer 4 load balancer as:

A smart switchboard operator who only knows phone numbers, not conversations.

It connects calls efficiently—but has no idea what people are actually saying.

🧠 Final reality

Layer 4 is:

fast
simple
powerful

But also:

completely blind to application logic

It’s used when:

performance matters more than intelligence

Because sometimes, knowing less is exactly why it works better.