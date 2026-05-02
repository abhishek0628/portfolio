⚡ What is Availability?

Availability =

The percentage of time a system is up and responding to requests

🧠 Simple idea

If your system works when users try it → available
If it doesn’t → congratulations, it’s “temporarily unavailable”

📊 Measured as uptime
Availability	Downtime/year
99%	~3.6 days
99.9%	~8.7 hours
99.99%	~52 minutes
99.999% (5 nines)	~5 minutes
🧠 Reality

Everyone says:

“We want 99.999% uptime”

Then deploys bugs on Friday evening. Bold strategy.

🔧 How to Achieve High Availability
🔹 1. Redundancy

Don’t rely on one component.

Server1 + Server2 + Server3

If one fails → others take over

🔹 2. Load Balancing

Distribute traffic across servers

Prevents:

overload
single point of failure
🔹 3. Replication

Multiple copies of data

If DB fails → replica serves data
🔹 4. Failover

Automatic switch when system fails

Primary → fails → Replica becomes Primary
🔹 5. Health Checks

System constantly checks:

Is server alive?
Responding correctly?
🔹 6. Multi-Region Deployment

Deploy across locations:

Region A + Region B + Region C

If one region fails → others serve users

⚖️ Availability vs Consistency

From CAP theorem:

High availability → system always responds
But response may be stale
🧠 Example

In apps like Instagram:

You may not see a new like instantly
But app still works

That’s availability > consistency

⚠️ Trade-offs

To increase availability, you often:

allow stale data
accept eventual consistency
💀 Common Threats to Availability
Single Point of Failure
Traffic spikes
Network failures
Poor scaling
Bad deployments (the classic)
🧠 How Systems Fail (real talk)
One service slows
Requests pile up
Threads exhaust
Entire system collapses

This is why “it worked locally” is not a strategy.

🧠 Final Reality

Availability is about:

keeping the system responsive, even when things go wrong