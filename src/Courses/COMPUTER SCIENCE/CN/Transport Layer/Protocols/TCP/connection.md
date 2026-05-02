The setup phase is the part of TCP where two devices first “introduce themselves” and agree to communicate before any real data is sent.

In TCP, this is done using the 3-way handshake. Because of course it takes three steps just to say hello.

Purpose of Setup Phase

The setup phase ensures:

Both client and server are ready to communicate
Both sides agree on initial parameters
Sequence numbers are synchronized
A reliable connection state is created

Without this phase, TCP would be guessing—and networks hate guessing.

3-Way Handshake (Setup Phase)

SYN→SYN-ACK→ACK

Step 1: SYN (Client → Server)
Client sends a SYN (Synchronize) packet
It includes:
Initial sequence number (ISN)

Meaning:

“Hey, I want to start a connection.”

Step 2: SYN-ACK (Server → Client)
Server responds with:
SYN (server’s own sequence number)
ACK (acknowledging client’s SYN)

Meaning:

“I heard you. I’m ready too. Let’s synchronize.”

Step 3: ACK (Client → Server)
Client sends ACK
Acknowledges server’s SYN

Meaning:

“Got it. We are officially connected.”

After Setup Phase

Once this completes:

Connection state becomes ESTABLISHED
Data transfer can begin
Both sides now track sequence numbers and buffers
What is actually being “set up”?

During setup, TCP negotiates:

1. Sequence Numbers
Used to keep data in order
Prevent duplication
2. Window Size
Controls flow of data (how much can be sent at once)
3. Connection State
Both sides allocate memory/resources for connection tracking
Why 3 Steps (not 2)?

Because:

Client must confirm server is reachable
Server must confirm client received its response
Both must agree on initial sequence numbers