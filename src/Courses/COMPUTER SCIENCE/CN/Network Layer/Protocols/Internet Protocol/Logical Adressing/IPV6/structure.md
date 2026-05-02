Structure of IPv6 Address

IPv6 addressing is basically what happens when engineers get tired of IPv4’s chaos and decide to rebuild it with more discipline and more digits.

An IPv6 address is 128 bits long and is divided into a structured format to make routing scalable.

📌 Overall Format

An IPv6 address is written as:

8 groups (hextets)
Each group = 16 bits
Each group written in hexadecimal
Separated by :
Example:
2001:0db8:85a3:0000:0000:8a2e:0370:7334
🧩 Internal Structure (Hierarchy)

IPv6 is not random. It is designed as a hierarchy:

1. Global Routing Prefix
Identifies the ISP / global network
Assigned by regional authorities
Used for routing across the internet

👉 Think: “Which big network am I in?”

2. Subnet ID
Identifies the specific subnet inside the organization
Used to divide networks internally

👉 Think: “Which local network inside the organization?”

3. Interface Identifier (Interface ID)
Identifies the device (host)
Usually last 64 bits
Can be derived from MAC address or randomly generated

👉 Think: “Which exact device?”

📊 Typical IPv6 Layout

Most IPv6 addresses follow this structure:

| Global Routing Prefix | Subnet ID | Interface ID |
|        48 bits        | 16 bits   |   64 bits    |

So:

First 64 bits → network side
Last 64 bits → host side

Yes, IPv6 loves symmetry.

🔥 Example Breakdown

IPv6 address:

2001:db8:1234:5678:abcd:ef12:3456:789a

Split:

Part	Meaning
2001:db8:1234	Global routing prefix
5678	Subnet ID
abcd:ef12:3456:789a	Interface ID