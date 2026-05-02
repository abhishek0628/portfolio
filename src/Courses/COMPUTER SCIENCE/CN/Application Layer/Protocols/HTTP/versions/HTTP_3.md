HTTP/3 is the latest version of the HyperText Transfer Protocol.
It replaces TCP with QUIC, which runs over UDP.
HTTP/3 → QUIC → UDP → IP → Internet

Core Idea: QUIC Protocol
HTTP/3 is basically HTTP riding on QUIC (Quick UDP Internet Connections).
QUIC handles:
Connection setup
Encryption
Multiplexing
Congestion control

Features:
1. Built on UDP (via QUIC(Quick UDP Internet Connections))
2. No Head-of-Line Blocking
3. Faster Connection Setup(1-RTT (or 0-RTT if cached))
4. Built-in Encryption
5. Connection Migration
6. Stream Multiplexing
