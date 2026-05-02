Termination Phase (TCP Connection Closing)

The termination phase in TCP is the process of cleanly closing an established connection after data transfer is complete.

Because apparently even machines need closure instead of just disappearing mid-conversation.

Why Termination is Needed

TCP doesn’t just “stop talking” suddenly because that would cause:

Lost data in transit
Half-open connections
Resource leaks in memory buffers

So it performs a controlled shutdown where both sides agree:

“We’re done here.”

TCP Connection Termination = 4-Way Handshake

Unlike setup (3-way handshake), closing needs 4 steps.

FIN→ACK→FIN→ACK

Step-by-Step Process
1. First FIN (Client → Server)
Client says: “I have finished sending data.”
This is a FIN (Finish) segment

But client can still receive data after this.

2. ACK (Server → Client)
Server acknowledges:
“Okay, I received your finish request.”
Connection is now half-closed

At this point:

Client → Server (sending stopped)
Server → Client (still open)
3. Second FIN (Server → Client)
Server now says:
“I am also done sending data.”

This happens after server finishes processing remaining data.

4. Final ACK (Client → Server)
Client confirms:
“Alright, connection closed.”

Now both sides release resources.

Why It’s a 4-Step Process (not 2 or 3)

Because TCP is full-duplex:

Data flows independently in both directions

So:

One side closing ≠ both sides done

Each direction must be closed separately.

TIME_WAIT State (important exam favorite)

After final ACK, client enters TIME_WAIT state.

Why?

To ensure last ACK is received
To handle delayed packets still in network

Duration:

Usually ~2 × Maximum Segment Lifetime (MSL)

Translation:

TCP waits to make sure the internet didn’t forget something.

Visual Flow
Client                      Server
  | --- FIN ---------------> |
  | <---- ACK -------------- |
  | <---- FIN -------------- |
  | --- ACK ---------------> |
Connection Closed
Key Points to Remember
Termination uses 4-way handshake
Each direction is closed independently
Ensures no data loss
TIME_WAIT prevents late packet confusion
TCP is annoyingly careful (but reliable)