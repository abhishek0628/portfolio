4. Flow Control (Transport Layer)

Flow control is TCP’s way of stopping one device from talking too fast and drowning the other device in data. Because yes, networks need babysitters.

What is Flow Control?

Flow control is a mechanism that regulates the rate of data transmission between sender and receiver so that the receiver’s buffer is not overwhelmed.

In plain terms:

“Don’t send more data than I can handle right now.”

Why Flow Control Exists

Without flow control:

Sender keeps blasting data
Receiver buffer fills up
Data gets dropped
Chaos ensues
Everyone pretends it was “network issue”

So TCP steps in like:

“Relax. Not everyone has infinite memory like your imagination.”

Core Idea

Every receiver has a buffer (temporary storage).

Flow control ensures:

Sender speed ≤ Receiver processing speed
How TCP Implements Flow Control

TCP uses the Sliding Window Protocol.

Key Concept: Window Size

The receiver tells the sender:

Window Size=Amount of data receiver can accept without ACK

This value is included in the TCP header as the Window field.

Sliding Window Mechanism
Step-by-step idea:
Sender sends a chunk of data (within window limit)
Receiver processes data
Receiver sends ACK + updated window size
Sender slides window forward
Repeat
Simple Example

Assume:

Window size = 4 segments

Sender can send:

[1] [2] [3] [4]

After ACK:

Window slides forward
Sender sends:
[5] [6] [7] [8]

So data flows smoothly instead of flooding.

Receiver-Controlled Flow

Flow control is receiver-driven, meaning:

Receiver decides how much data it can handle
Sender must obey

This is called:

Receiver Advertised Window (RWND)

Types of Flow Control in TCP
1. Stop-and-Wait (basic idea)
Send one packet
Wait for ACK
Repeat

Very safe
Very slow
Very “1990 internet energy”

2. Sliding Window (modern TCP)
Multiple packets sent before ACK
Window shifts as ACKs arrive

Efficient and widely used

Flow Control vs Congestion Control (important confusion trap)
Feature	Flow Control	Congestion Control
Concern	Receiver capacity	Network capacity
Controlled by	Receiver	Sender + network state
Problem	Buffer overflow	Network overload
Scope	End-to-end	Global network

Flow control = “Can YOU handle it?”
Congestion control = “Can the NETWORK handle it?”