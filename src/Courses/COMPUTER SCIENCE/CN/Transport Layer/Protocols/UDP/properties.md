Key Features of UDP
1. Connectionless

No handshake. No setup. No relationship drama.

TCP: “Can we talk first?”
UDP: sends data already

No SYN, SYN-ACK, ACK nonsense.

2. Unreliable delivery (by design)

UDP does NOT guarantee:

Packet delivery
Order
Duplicate protection

Packets may:

arrive
arrive late
arrive in wrong order
disappear forever

And UDP will feel nothing about it.

3. No flow control

Sender doesn’t care if receiver is drowning in packets.

No sliding window.
No buffering negotiation.

Just raw sending speed.

4. No congestion control

If the network is jammed:

TCP slows down politely
UDP keeps sending like nothing happened

Yes, it can contribute to congestion collapse if abused.

5. Low overhead

UDP header is only 8 bytes.

That’s it:

source port
destination port
length
checksum

No sequence numbers. No ACK tracking. No emotional baggage.

UDP Datagram Structure

Each UDP packet (datagram) contains:

Source Port
Destination Port
Length
Checksum
Data

That’s the entire personality.

Why UDP is useful (despite sounding reckless)

Because sometimes:

speed > perfection

1. Real-time applications
Video calls (Zoom, WhatsApp calls)
Voice over IP (VoIP)

A missing packet is better than a delayed one:

delay = lag
loss = tiny glitch

Humans tolerate glitches
Humans do NOT tolerate frozen faces mid-sentence

2. Online gaming
fast updates
frequent position changes

If one packet is lost:

new packet replaces it instantly

No point retransmitting old position data.

3. DNS (Domain Name System)

When you type a website:

DNS query uses UDP (mostly)

Why?
Because it’s small, fast, and doesn’t need reliability overhead.

4. Streaming (often hybrid)
Some buffering + UDP-style transmission
tolerates small loss for smooth playback
UDP vs TCP (no mercy comparison)
Feature	UDP	TCP
Connection	No	Yes
Speed	Very fast	Slower
Reliability	No guarantee	Guaranteed
Ordering	No	Yes
Retransmission	No	Yes
Overhead	Low	High