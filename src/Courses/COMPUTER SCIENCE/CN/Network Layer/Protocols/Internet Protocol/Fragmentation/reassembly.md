Reassembly (IPv4)

Reassembly is what happens after IPv4 has finished its little “let’s tear this packet apart” routine.

It is the process of putting fragmented IP packets back together at the destination host to reconstruct the original data.

Because apparently networking wasn’t stressful enough already.

🔁 What is Reassembly?

Reassembly is the process of:

collecting all fragments of an IP packet and reconstructing the original packet at the receiver.

This happens only at the destination device, not at intermediate routers.

🧠 Where Reassembly Happens
❌ Routers: do NOT reassemble
✅ Destination host: does reassembly

Reason:

Routers are busy enough ruining your latency without also doing puzzles.

📦 How Reassembly Works (Step-by-step)

When fragments arrive at the destination:

1. Grouping fragments
All fragments with the same Identification (ID) are grouped together
2. Sorting order
Uses Fragment Offset
Offset tells where each fragment belongs in original packet

Think:

“Piece 1 goes here, piece 2 goes there…”

3. Detect last fragment
MF (More Fragments) flag
MF = 1 → more fragments expected
MF = 0 → last fragment

This tells receiver:

“Okay, this is the final piece, stop waiting.”

4. Reconstruct data
Fragments are placed in correct order using offsets
Data is merged into original payload
5. Deliver to Transport Layer

Once complete:
→ full packet is passed to TCP/UDP

⏳ Reassembly Timer (very important)

Receiver starts a timer when first fragment arrives.

If:

not all fragments arrive before timeout

Then:

entire packet is discarded

Why?

avoids wasting memory on incomplete data forever

💀 Critical Rule

If even ONE fragment is missing:

❌ entire packet is dropped
❌ no partial delivery

IPv4 logic:

“I don’t do half stories. I do nothing or everything.”

📊 Example

Suppose original packet is split into 3 fragments:

Fragment	Offset	MF
1	0	1
2	185	1
3	370	0

At receiver:

Use ID → group them
Use offset → order them
MF = 0 → know last fragment
Merge → original packet restored
⚠️ Problems in Reassembly

Reassembly has issues:

1. Memory overhead
Must store fragments until full packet arrives
2. Delay
Cannot deliver data until all fragments arrive
3. Packet loss sensitivity
One missing fragment = total failure
4. Attack vulnerability
Fragmentation-based attacks possible (fragment flooding, overlapping fragments)
🚫 Why IPv6 avoids this mess

IPv6:

Does NOT allow router fragmentation
Encourages sender-side sizing using Path MTU Discovery

So:

fewer fragments → less reassembly pain → fewer headaches