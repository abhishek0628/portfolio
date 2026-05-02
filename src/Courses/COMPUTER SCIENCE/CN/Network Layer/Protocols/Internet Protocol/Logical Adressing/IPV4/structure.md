🧠 Basic Structure

An IPv4 address is:

32 bits total
Divided into 4 parts (octets)
Each octet = 8 bits

So:

IPv4 = 32 bits = 4 × 8 bits

Written as:

192.168.1.1
🔢 Binary Representation

Each octet is actually binary.

Example:

192      .168      .1        .1
11000000 .10101000 .00000001 .00000001

So the full address is just:

a 32-bit binary number pretending to be human-friendly

🧩 Two Main Parts of IPv4 Address

Every IPv4 address has:

1. Network Part
Identifies the network
Same for all devices in that network
2. Host Part
Identifies a specific device within that network
🎯 How Do We Know Which Part Is Which?

Using Subnet Mask or CIDR notation

Example:
192.168.1.10/24
/24 → first 24 bits = network
Remaining 8 bits = host

So:

Network → 192.168.1
Host → 10
🧪 Bit-Level View

Let’s break it:

IP Address: 192.168.1.10
Binary:     11000000.10101000.00000001.00001010

Subnet:     /24 → 11111111.11111111.11111111.00000000

Split becomes:

[ Network Part (24 bits) ][ Host Part (8 bits) ]
📦 IPv4 Address Format Summary
Component	     Description
32 bits	         Total size
4 octets	     Each 8 bits
Network ID	     Identifies network
Host ID	         Identifies device
Subnet Mask	     Defines boundary

🔥 Special Bit Patterns (Important)
Network Address
Host bits = all 0
Example: 192.168.1.0
Broadcast Address
Host bits = all 1
Example: 192.168.1.255
Valid Hosts
Anything in between