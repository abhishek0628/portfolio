🧠 IGMP (Internet Group Management Protocol)

IGMP is a Network Layer protocol used for managing multicast group memberships in IPv4 networks.

In plain terms:

It tells routers which devices actually want to receive a multicast stream.

Because without IGMP, routers would just blast data everywhere like an overexcited intern emailing the entire company “just in case.”

📦 What problem does IGMP solve?

Suppose a server is streaming:

Live lecture
Football match
Stock updates

Instead of sending copies to every user (unicast), it uses multicast:

one sender → many selected receivers

But then:

Who actually wants the stream?
Who left?
Who joined?

IGMP handles exactly that.

🎯 Core idea of IGMP

IGMP manages membership in multicast groups.

A multicast group is identified by:

IP range: 224.0.0.0 – 239.255.255.255 (IPv4 multicast range)

Devices say:

“I want this group”
or
“I’m done, remove me”

🔄 How IGMP works (step-by-step)
1. Joining a multicast group

A host sends:

IGMP Membership Report

Meaning:

“Hey router, I want to receive traffic for group X”

2. Router tracking

Router maintains a list like:

Group A → Device 1, Device 3
Group B → Device 2

So it knows where to forward traffic.

3. Periodic queries

Router sends:

IGMP Query messages

Meaning:

“Anyone still interested in this group?”

Devices must respond or get removed.

4. Leaving a group

Host sends:

Leave Group message

Router updates its list:

“Fine, you’re out.”

🧾 IGMP message types
1. Membership Query
Sent by router
Checks active group members
2. Membership Report
Sent by hosts
“I want this multicast”
3. Leave Group
Host exits multicast group
⚙️ IGMP versions (because nothing stays simple)
IGMPv1
Basic join + query
No explicit leave (messy)
IGMPv2
Added Leave Group message
Improved efficiency
IGMPv3
Advanced filtering
Supports source-specific multicast (SSM)

Meaning:

“I want this group, but only from this source”

Very picky. Very modern.

🌐 Where IGMP is used

IGMP is everywhere you don’t notice:

IPTV (TV over internet)
Live sports streaming
Video conferencing systems
Online lectures (yes, your classes probably used it)
Stock market feeds
🚫 What IGMP is NOT
Not used for routing between networks (that’s OSPF/BGP)
Not used for TCP/UDP data transfer
Not responsible for reliability

It’s purely:

“Who wants to listen?”