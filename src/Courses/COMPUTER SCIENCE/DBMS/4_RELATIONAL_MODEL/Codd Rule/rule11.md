🔹 Rule 11: Distribution Independence (Codd’s Rule)

Rule 11 says:

The user of a database should not know (or care) whether the data is stored on a single machine or spread across multiple machines.

In simpler terms:
You should query data the same way whether it’s sitting in one laptop or scattered across ten servers pretending to be one system.

Yes, the system is doing gymnastics behind your back. You just don’t get to see it.

🔷 What it really means

A proper RDBMS should:

Hide data distribution details
Allow the same SQL queries regardless of location
Handle network, replication, and fragmentation internally
🔷 Example
🏫 Scenario: University Database

The university has:

Student data stored in Campus Server A (Kerala)
Exam records stored in Campus Server B (Bangalore)
Fee records stored in Campus Server C (Delhi)

But the user (admin) just runs:

SELECT name, marks, fees
FROM Student;
🔷 What should happen internally

Even though data is distributed:

Server A → gives name
Server B → gives marks
Server C → gives fees

The DBMS:

Collects all data
Merges it
Returns a single unified result
🔷 Key Idea

From the user's perspective:

“It’s one database.”

From the system’s perspective:

“I am holding together 3 machines, 7 tables, 42 network calls, and my sanity is questionable.”

🔷 Real-world example systems

Modern distributed databases like:

Google Spanner
CockroachDB

They aim to achieve this rule by hiding distribution completely from the user.

🧠 One-line summary

Rule 11 = You query one database, even if it is secretly many machines pretending to be one.