TCP Segment Structure

A TCP segment is the basic unit of data transfer in TCP.
It’s basically a structured packet with a header full of control information + the actual data.

And yes, it’s more organized than most human group projects.

Overall TCP Segment Format

A TCP segment has two parts:

Header (20–60 bytes)
Data (payload)
TCP Header Structure

Here’s the standard layout:

| Source Port | Destination Port |
| Sequence Number                |
| Acknowledgment Number          |
| Data Offset | Reserved | Flags |
| Window Size                    |
| Checksum   | Urgent Pointer    |
| Options (if any)               |
| Data (Payload)                 |

Now let’s break it down like a sane system.

1. Source Port (16 bits)
Identifies sending application
Example: browser, FTP client, etc.
2. Destination Port (16 bits)
Identifies receiving application
Example:
80 → HTTP
443 → HTTPS

So the network knows:

“Which app should get this?”

3. Sequence Number (32 bits)

Tracks order of bytes.

Used for reordering packets
Helps detect missing data

Example:

Segment 1: Seq = 1000
Segment 2: Seq = 1500

So TCP knows what comes next.

4. Acknowledgment Number (32 bits)

Used to confirm received data.

It says:

“I received everything up to X, send me X+1 next.”

5. Data Offset (4 bits)
Size of TCP header
Tells where actual data starts

Because apparently even headers need a map to themselves.

6. Reserved (3–6 bits)
Reserved for future use
Always set to 0 (for now)

Basically:

“Do not touch. Future problems.”

7. Flags (Control Bits)

These are the important ones.

Flag	Meaning
SYN	Start connection
ACK	Acknowledge data
FIN	End connection
RST	Reset connection
PSH	Push data immediately
URG	Urgent data

These decide TCP behavior like a mood switchboard.

8. Window Size (16 bits)

Used for flow control.

Tells how much data receiver can accept
Helps implement sliding window

If small:

“Slow down”

If large:

“Send more”

9. Checksum (16 bits)
Used for error detection
Ensures data is not corrupted during transmission

If checksum fails:

packet is discarded and resent

10. Urgent Pointer (16 bits)
Points to urgent data inside segment
Only used if URG flag is set

Rare, but exists for dramatic emergencies.

11. Options (0–40 bytes)

Optional enhancements like:

Maximum Segment Size (MSS)
Window scaling
Timestamps
SACK (Selective Acknowledgment)

This is where TCP gets “modernized.”

12. Data (Payload)
Actual application data
HTTP request, file data, etc.

Everything above exists just to safely deliver this part.

TCP Segment in One Line

A TCP segment = control information (header) + application data, designed to ensure reliable, ordered delivery across a network.

Why this structure matters

Each field enables a core TCP function:

Ports → process identification
Sequence/Ack → ordering + reliability
Flags → connection control
Window → flow control
Checksum → error detection