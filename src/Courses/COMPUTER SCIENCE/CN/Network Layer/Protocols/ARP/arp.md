3. ARP (Address Resolution Protocol)

ARP is the protocol that quietly saves your network from chaos by answering one annoying question:

“I know the IP address… but who the hell has it?”

Because computers are dramatic like that.

🧠 What ARP Does

ARP maps:

IP address (logical address) ➜ MAC address (physical address)

Why?

IP = “where the device is”
MAC = “which exact network interface it is”

So ARP is basically:

the translator between “internet language” and “hardware reality”

📦 Why ARP is Needed

When your computer wants to send data inside a local network:

IP layer says: “Send to 192.168.1.5”
But Ethernet (Data Link layer) says:
“Cool story, but I only understand MAC addresses”

So ARP steps in:

“Relax, I’ll find the MAC for you.”

🔁 ARP Working (Step-by-step)

Let’s say:

Your PC: 192.168.1.2
Target: 192.168.1.5
Step 1: Check ARP cache

Your device first checks:

“Have I seen this IP before?”

If yes → uses stored MAC
If no → continues

Step 2: ARP Request (Broadcast)

Your device sends:

“Who has 192.168.1.5? Tell 192.168.1.2”

This is sent to:

Broadcast MAC: FF:FF:FF:FF:FF:FF

Meaning:

“EVERYONE listen, I’m asking a question”

Step 3: ARP Reply (Unicast)

The device with that IP responds:

“I do. My MAC is AA:BB:CC:DD:EE:FF”

Sent only to requester.

Step 4: Cache Update

Your device stores:

192.168.1.5 → AA:BB:CC:DD:EE:FF

So next time:

no drama, no broadcast, just direct delivery

🧾 ARP Packet Structure (important for exams)

ARP message includes:

Sender MAC address
Sender IP address
Target MAC address (unknown initially)
Target IP address
Operation type (Request / Reply)
⚡ ARP Cache (Speed Optimization)

Devices maintain a table called ARP cache:

Stores recent IP → MAC mappings
Avoids repeated broadcasts

But it expires after a while because networks love forgetting things.

🚨 Types of ARP
1. Normal ARP
IP → MAC resolution
What we described above
2. Gratuitous ARP

A device announces:

“Hey, this IP is mine”

Used for:

Detecting IP conflicts
Updating caches
Failover systems
3. Proxy ARP

A router replies:

“I’ll answer on behalf of another device”

Used when:

Devices are on different subnets but behave like same network
🧨 ARP Limitations

Because ARP was designed in a simpler era:

No authentication
Trusts everyone blindly
Easily spoofed

So attackers can do:

ARP spoofing (MITM attacks)

🕵️ ARP Spoofing (security issue)

Attacker sends fake ARP replies like:

“I am your gateway router”

Result:

Traffic gets redirected through attacker
Data can be intercepted or modified

Yes, ARP basically says:

“If you say you are that IP, I believe you.”

Very trusting. Too trusting.

📊 Where ARP Works

Only inside:

Local Area Network (LAN)

Not used across:

Internet (routers don’t forward ARP)

Because:

broadcasting the whole internet would be… ambitious and stupid