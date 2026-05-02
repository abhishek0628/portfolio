Originally, IPv4 addresses were divided into classes to manage:

Different network sizes
Efficient allocation (which… didn’t age well)

Each class decides:

How many networks
How many hosts per network
📊 IPv4 Classes Overview
Class	   Range	               Default Mask	Network Bits	Host Bits	Usage
A	     1.0.0.0 – 126.0.0.0	        /8	      8             	24	   Very large networks
B	     128.0.0.0 – 191.255.0.0	    /16	      16	            16	   Medium networks
C	     192.0.0.0 – 223.255.255.0	    /24	      24	            8	   Small networks
D	     224.0.0.0 – 239.255.255.255	—	—	—	                       Multicast
E	     240.0.0.0 – 255.255.255.255	—	—	—	                       Experimental
🔍 Class A
First bit: 0
Range: 1.x.x.x – 126.x.x.x
Default mask: 255.0.0.0 (/8)
Features:
Few networks
Massive number of hosts (~16 million per network)

Used by:

Large organizations (back when dinosaurs roamed the internet)

🔍 Class B
First bits: 10
Range: 128.x.x.x – 191.x.x.x
Default mask: 255.255.0.0 (/16)
Features:
Balanced networks and hosts (~65,000 hosts)

🔍 Class C
First bits: 110
Range: 192.x.x.x – 223.x.x.x
Default mask: 255.255.255.0 (/24)
Features:
Many networks
Few hosts (~254 hosts per network)

Most common in:

Small organizations
Home networks
🔍 Class D (Multicast)
First bits: 1110
Range: 224.x.x.x – 239.x.x.x

Used for:

One-to-many communication (multicast)

Example:

Live streaming
Online classes
🔍 Class E (Experimental)
First bits: 1111
Range: 240.x.x.x – 255.x.x.x

Used for:

Research
Experimental purposes

Translation:

Not your problem.

⚠️ Special Cases You Must Remember
0.x.x.x → reserved
127.x.x.x → loopback (localhost)
255.255.255.255 → broadcast

These love appearing in exams just to ruin your day.

🧠 How to Identify Class Quickly

Just look at the first octet:

First Octet	Class
1 – 126	A
128 – 191	B
192 – 223	C
224 – 239	D
240 – 255	E