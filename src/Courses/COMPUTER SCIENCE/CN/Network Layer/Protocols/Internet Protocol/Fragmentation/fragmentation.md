📦 What is Fragmentation?

Fragmentation is the process of breaking a large IP packet into smaller pieces called fragments, so they can pass through networks with a smaller MTU (Maximum Transmission Unit).

MTU = max size a network link can carry (e.g., Ethernet = 1500 bytes)
If packet size > MTU → fragmentation happens
✂️ Why Fragmentation is Needed

Different networks have different limits:

Ethernet: 1500 bytes
Some older links: even smaller
Packet from source: maybe 4000 bytes

So routers or sender must:

cut packet into smaller chunks that fit every link along the path

🧠 When Fragmentation Happens

In IPv4, fragmentation can occur:

At the sender (host)
At an intermediate router

If a router sees:

packet size > next network MTU
→ it fragments it (unless “Don’t Fragment” bit is set)

📊 How Fragmentation Works

A large packet is broken into smaller fragments, each with its own IP header.

Each fragment contains:

1. Identification (ID)
Same for all fragments of original packet
Used to group fragments at destination
2. Fragment Offset
Shows position of fragment in original packet
Measured in units of 8 bytes
3. Flags
DF (Don’t Fragment) → if set, packet is dropped instead of splitting
MF (More Fragments):
1 → more fragments coming
0 → last fragment
✂️ Example

Suppose:

Packet size = 4000 bytes
MTU = 1500 bytes
Header = 20 bytes
→ usable data per fragment ≈ 1480 bytes
Fragmentation result:
Fragment	Data Size	Offset	MF
1	1480	0	1
2	1480	185	1
3	1040	370	0