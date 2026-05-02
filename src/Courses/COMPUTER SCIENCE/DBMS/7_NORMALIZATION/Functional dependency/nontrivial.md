🔷 Non-Trivial Functional Dependency (FD)

A non-trivial functional dependency is when:

Y is NOT a subset of X in X → Y

In plain terms (since DBMS loves confusion):

X determines Y
But Y is something new, not already inside X

So it actually tells you useful information, unlike trivial ones which are basically DBMS saying “water is wet.”

🔷 Definition

A functional dependency X → Y is non-trivial if:

Y ⊄ X
i.e., Y is not contained in X
🔷 Example
Student Table
Roll_No	Name	Dept
1	Alice	CSE
2	Bob	ECE
Functional Dependencies:
✔ Non-trivial FD:
Roll_No → Name
Roll_No → Dept

Why is this non-trivial?

Because Name and Dept are NOT part of Roll_No
Roll_No gives new information

So:

Knowing Roll_No tells you something you didn’t already know.

❌ Trivial FD (for comparison):
(Roll_No, Name) → Name

Why trivial?

Because Name is already inside the left side
No real “new information” is being discovered
🔷 Intuition
Trivial FD: “You know it already”
Non-trivial FD: “Oh, that actually tells me something useful”
🧠 One-line summary

A non-trivial FD is a dependency where the right-hand side provides new information not included in the left-hand side.