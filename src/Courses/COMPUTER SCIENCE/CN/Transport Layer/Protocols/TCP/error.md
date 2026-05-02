6. Error Control (in TCP / Transport Layer)

Error control is the part of TCP that basically says:

“No, you don’t get to just send broken data and hope nobody notices.”

It ensures that data arriving at the receiver is correct, complete, and usable.

What is Error Control?

Error control = detecting + correcting errors in data transmission

Errors can happen due to:

Noise in communication channels
Congestion
Packet loss
Bit corruption
Router meltdowns (they happen emotionally too, apparently)
Goals of Error Control

TCP tries to guarantee:

✔ No corrupted data is accepted
✔ Lost segments are retransmitted
✔ Duplicate segments are removed
✔ Data integrity is maintained
How TCP Handles Error Control

TCP uses a combination of:

1. Checksum (Error Detection)

Each TCP segment has a checksum field.

What it does:
Sender calculates checksum from header + data
Receiver recalculates it
If mismatch → segment is corrupted

Checksum
sender
	​

=Checksum
receiver
	​

⇒Data is valid

If they don’t match:

TCP discards the segment silently and acts like it never existed.

2. Acknowledgements (ACKs)

Receiver confirms receipt of data using ACK packets.

Types:
Positive ACK → data received correctly
Duplicate ACK → indicates missing segment

Example:

Sender sends segments 1, 2, 3
Receiver gets 1, 3 (2 is missing)
Receiver keeps sending ACK for 1 or last in-order packet

TCP notices:

“Hmm, something went missing.”

3. Retransmission

When TCP detects loss or corruption, it resends the data.

When retransmission happens:
Timeout occurs (no ACK received)
Duplicate ACKs indicate missing segment (Fast Retransmit)

So TCP:

“Didn’t hear back? Fine, I’ll send it again.”

4. Sequence Numbers (Tracking Data)

Every byte/segment gets a sequence number.

This helps TCP:

Detect missing segments
Reorder out-of-order segments
Identify duplicates

Example:

Sent: 1001, 1002, 1003
Received: 1001, 1003
TCP notices 1002 is missing → requests retransmission
5. Timers (Timeout Mechanism)

TCP sets a Retransmission Timer:

If ACK doesn’t arrive in time → resend segment

This prevents waiting forever for lost packets.

6. Duplicate Suppression

Sometimes the network sends duplicates.

TCP:

Uses sequence numbers
Drops repeated segments
Keeps only one valid copy

Because nobody needs data twice unless it's anxiety.

Flow of Error Control (Simplified)
Sender sends segment
Receiver checks checksum
If valid → send ACK
If missing/corrupt → ignore or signal loss
Sender waits
Timeout or duplicate ACK → retransmit