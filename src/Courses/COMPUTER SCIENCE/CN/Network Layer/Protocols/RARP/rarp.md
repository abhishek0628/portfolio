🧾 RARP (Reverse Address Resolution Protocol)
What it was supposed to do

RARP is used to:

Convert a MAC address → IP address

So instead of:

IP → MAC (ARP)

You get:

MAC → IP (RARP)
🧠 Why it existed (the original problem)

Back in the old days, some machines:

had no disk
couldn’t store configuration
didn’t know their IP address at boot

So they knew only:

their MAC address

They needed a way to ask:

“Hi network, what is my IP?”

Enter RARP.

🔄 How RARP works (simple flow)
Device broadcasts RARP request:
“I am MAC XX:XX:XX:XX. What is my IP?”
RARP server replies:
“Your IP is 192.168.1.10”
Device configures itself and continues booting
🧩 Key limitation (why it died)

RARP is painfully limited:

Only returns IP address
Requires a RARP server on each network
No support for:
subnet masks
gateways
DNS
modern configuration needs

So basically:

It solved 1/10th of a problem and expected applause.

⚰️ Why RARP is obsolete

It got replaced by BOOTP and then DHCP.

DHCP (the actual modern hero)

DHCP gives everything RARP could dream of:

IP address
subnet mask
default gateway
DNS servers
lease time
and more

So instead of:

“Here’s your IP. Good luck.”

DHCP says:

“Here’s your entire network setup. Try not to break anything.”

🔁 Evolution timeline
ARP → IP to MAC
RARP → MAC to IP (limited)
BOOTP → improved boot configuration
DHCP → full automatic network configuration (current standard)
🧠 Quick comparison
Feature	RARP	DHCP
Purpose	MAC → IP	Full configuration
Info provided	Only IP	IP + DNS + gateway + more
Flexibility	Low	High
Usage today	Obsolete	Standard