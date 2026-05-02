characteristics:
1.Multiplexing(all flow concurrently, not sequentially)
2.Binary Framing Layer(easy to parse)

3. Streams, Frames, and Messages
HTTP/2 introduces a strict hierarchy:
🔹 Stream
A bidirectional flow of data (like “request for CSS”)
🔹 Frame
Small unit of communication inside a stream
🔹 Message
Complete request or response

4.Header Compression (HPACK)
5.Server Push
6.Works with TLS

Drawbacks:
TCP problem:
If one packet is lost:
TCP stalls delivery of all streams
This is called:
TCP Head-of-Line Blocking
So HTTP/2 improved things, but didn’t fully escape TCP’s limits.

