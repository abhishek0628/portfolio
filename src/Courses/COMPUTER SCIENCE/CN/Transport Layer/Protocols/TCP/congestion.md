5. Congestion Control (TCP)

Congestion control is TCP’s way of preventing the internet from collapsing under its own enthusiasm. Because if every device just sent data at full speed, the network would behave like a crowded highway where everyone decided lanes are optional.

What is Congestion?

Congestion happens when:

Too many packets enter the network
Routers get overloaded
Queues fill up
Packets get delayed or dropped

Result:

High delay
Packet loss
Reduced throughput

So TCP steps in like an overworked traffic cop.

Goal of Congestion Control

TCP tries to:

Avoid overwhelming the network
Maximize throughput
Keep delay low
Maintain fairness among users
Key Idea

TCP does not know network capacity directly.
So it learns it indirectly by:

Sending packets
Observing ACKs, delays, and losses
Adjusting sending rate
Congestion Window (cwnd)

TCP maintains a variable called:

\text{cwnd} = \text{Congestion Window (amount of data TCP can send without ACK)}}

cwnd increases when network is fine
cwnd decreases when congestion is detected

This controls sending speed.

Core Phases of TCP Congestion Control
1. Slow Start

Despite the name, it’s not actually slow. It just starts carefully.

Behavior:
cwnd starts small (usually 1 MSS)
Every ACK doubles cwnd (exponential growth)

So:

1 → 2 → 4 → 8 → 16 ...

Until a threshold is reached.

Purpose:

Quickly probe available network capacity.

2. Congestion Avoidance

After reaching a threshold (ssthresh), TCP slows growth.

Behavior:
cwnd increases linearly (not exponential)

So:

10 → 11 → 12 → 13 ...
Purpose:

Avoid sudden congestion collapse.

3. Fast Retransmit

If TCP sees 3 duplicate ACKs, it assumes:

a packet is lost

So it:

Retransmits the missing packet immediately
Doesn’t wait for timeout

Because waiting is inefficient and emotionally draining.

4. Fast Recovery

After fast retransmit:

TCP reduces cwnd (but not to zero)
Then continues in congestion avoidance mode

This avoids restarting from scratch.

What Happens on Packet Loss?

When congestion is detected (loss/timeout):

TCP reacts by:

Reducing cwnd
Reducing ssthresh
Adjusting sending rate

Typical rule:

Severe loss → cwnd drops sharply
Mild loss → cwnd reduces moderately
Congestion Control Strategies (summary flow)
Start with Slow Start
Reach threshold (ssthresh)
Switch to Congestion Avoidance
If loss occurs:
Fast Retransmit (if duplicate ACKs)
Fast Recovery
Or timeout → restart Slow Start
Visualization (conceptual)
cwnd
↑
|        /\/\/\/\/  (linear growth)
|       /
|      /
|     /
|    /  (slow start exponential)
|___/
|
+--------------------→ time
Why Congestion Control Exists

Without it:

Routers overflow
Packets drop massively
Network becomes unusable

With it:

Fair sharing of bandwidth
Stable communication
Efficient utilization