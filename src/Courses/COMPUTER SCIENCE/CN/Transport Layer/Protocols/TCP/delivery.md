2. Reliable Delivery (in TCP)

Reliable delivery is TCP’s whole identity crisis solution. It exists so your data doesn’t just vanish, duplicate itself, or arrive looking like it went through a blender.

In simple terms:

Reliable delivery means data sent from sender reaches receiver correctly, completely, and in order — or it gets resent.

What “Reliable” actually guarantees

TCP ensures:

✔ No packet loss (or it is recovered)
✔ No duplicate packets
✔ Correct order of data
✔ Error-free delivery (or detected + fixed via retransmission)

UDP, by contrast, just shrugs and moves on.

How TCP Achieves Reliable Delivery
1. Sequence Numbers (Ordering + Tracking)

Every byte/segment gets a sequence number.

This allows TCP to:

Track what was sent
Detect missing pieces
Reassemble data in correct order

Example:

Sent: Segment 1, 2, 3
Received: 3, 1, 2
TCP reconstructs: 1 → 2 → 3

So even if the network is messy, TCP behaves like a strict librarian.

2. Acknowledgments (ACKs)

Receiver confirms what it got.

ACK-based reliability: Sender waits for confirmation of received segments

Sender sends data
Receiver sends ACK for received data
If ACK is missing → sender assumes loss

Types:

ACK → “Got it”
Cumulative ACK → “Got everything up to here”
3. Retransmission (The “try again” system)

If something goes missing:

Sender waits for ACK
If timeout occurs → resend data

Also triggered by:

Duplicate ACKs (fast retransmission)

Basically:

TCP does not accept “lost in transit” as a valid excuse.

4. Checksum (Error detection)

Each TCP segment includes a checksum.

Receiver:

Recomputes checksum
Compares with received value

If mismatch:

Segment is discarded
Retransmission is requested

So corrupted data doesn’t sneak through pretending it’s fine.

5. Timers (Timeout mechanism)

TCP uses a Retransmission Timeout (RTO):

If ACK doesn’t arrive within time → resend segment

Too fast = unnecessary retransmits
Too slow = delays
So TCP constantly adjusts it based on network behavior.

6. Sliding Window (Reliability + Efficiency combo)

Instead of waiting for every ACK:

TCP sends multiple segments before waiting

Receiver tracks:

Which segments arrived
Which are missing

This improves:

Speed
Throughput
Still keeps reliability intact
7. Duplicate Detection

Sometimes packets get duplicated in networks.

TCP handles this using:

Sequence numbers
Tracking received ranges

If duplicate detected:

It is discarded silently

No drama, just cleanup.

Full Reliability Flow (Simple View)
Sender sends segment
Receiver checks checksum
If valid → sends ACK
If missing → sender retransmits after timeout
Receiver reorders segments using sequence numbers
Application gets clean, ordered data
Why Reliable Delivery is Needed

Without it:

Web pages load half-broken
Downloads corrupt randomly
Emails lose lines
Banking transactions would become… adventurous

So TCP exists to prevent chaos from becoming a lifestyle.