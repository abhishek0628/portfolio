Disadvantages of TCP

TCP is reliable, structured, and obsessive about correctness. Which sounds great until you realize that all that “care” comes with a price: speed, simplicity, and sanity.

1. High Overhead

TCP carries a lot of extra baggage:

Sequence numbers
Acknowledgments
Flags
Connection management (handshakes)

So instead of just sending data, it sends data + bureaucracy.

Result:

More bandwidth used just to manage the connection itself.

2. Slower than UDP

Because TCP:

Establishes a connection first (3-way handshake)
Waits for acknowledgments
Retransmits lost packets
Orders everything properly

This makes it slower, especially for real-time applications.

So yes, correctness costs time.

3. Latency due to Reliability Mechanisms

TCP waits for:

ACKs before moving forward (in many cases)
Retransmissions on loss
Congestion control adjustments

This adds delay (latency).

In real-time systems:

That delay feels like betrayal.

4. Head-of-Line Blocking

If one packet is lost:

TCP waits for it to be retransmitted
Even if later packets already arrived

So everything gets stuck behind one missing piece.

Like a queue where one person is arguing with the cashier and nobody else is allowed to move.

5. Connection Setup Delay

Before any actual data transfer:

3-way handshake is required

That’s extra time before communication even starts.

For small or quick exchanges:

the setup cost can be bigger than the actual data.

6. Higher Resource Consumption

TCP maintains:

Connection state
Buffers for ordering
Retransmission queues

So it uses more:

CPU
Memory

Servers handling thousands of connections feel this heavily.

7. Not Ideal for Real-Time Applications

Because TCP prioritizes:

Accuracy over speed

It performs poorly in:

Online gaming
Live video streaming
Voice calls

These apps prefer “fast and slightly wrong” over “perfect but late.”