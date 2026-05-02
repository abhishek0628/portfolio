📦 IPv4 Packet Structure (Header Fields)

An IPv4 packet has two parts:

Header (20–60 bytes) → control info
Data (payload) → actual message

The header is the “important paperwork” part.

🧠 IPv4 Header Layout (conceptual view)
0                   15 16                  31
+---------------------+---------------------+
| Version | IHL | TOS | Total Length       |
+---------------------+---------------------+
| Identification      | Flags | Fragment Off|
+---------------------+---------------------+
| TTL | Protocol | Header Checksum         |
+---------------------+---------------------+
| Source IP Address                        |
+------------------------------------------+
| Destination IP Address                   |
+------------------------------------------+
| Options (if any) + Padding              |
+------------------------------------------+
🔍 Field-by-Field Explanation
1. Version (4 bits)

Tells IP version:

4 → IPv4
6 → IPv6 (different header entirely)

Yes, even packets need identity documents.

2. IHL (Internet Header Length)
Tells how long the header is
Minimum: 5 (means 20 bytes)
Maximum: 15 (means 60 bytes)

Because nothing in networking is allowed to be simple.

3. Type of Service (TOS) / DSCP

Used for:

Priority handling
QoS (Quality of Service)

Example:

Video call packets > meme packets (sadly)
4. Total Length
Entire packet size (header + data)
Max: 65,535 bytes
5. Identification
Used for fragmentation
Helps reassemble fragments at destination

Think:

“All these pieces belong to the same original packet.”

6. Flags (3 bits)

Controls fragmentation behavior:

DF (Don’t Fragment) → “don’t break me”
MF (More Fragments) → more pieces coming
7. Fragment Offset
Position of fragment in original packet
Helps reassembly order

Because apparently packets need choreography.

8. TTL (Time To Live)
Limits packet lifespan
Decreases at every router

If it hits 0:

packet gets deleted from existence

9. Protocol

Tells what’s inside payload:

6 → TCP
17 → UDP
1 → ICMP

So IP knows who gets the contents next.

10. Header Checksum
Error detection for header only
If mismatch → packet dropped

Yes, only the header gets protection. Payload is on its own.

11. Source IP Address

Sender’s IP.

12. Destination IP Address

Receiver’s IP.

The whole reason the packet exists.

13. Options (optional, rare)

Used for:

Debugging
Security
Special routing

Mostly avoided because routers hate extra work.

🧩 Key Insight (important, not decorative)

IPv4 header is:

Fixed minimum size: 20 bytes
Variable max size: 60 bytes
Designed for fast router processing

Routers read only what they need:

destination IP + TTL + routing decision

Everything else is basically paperwork.