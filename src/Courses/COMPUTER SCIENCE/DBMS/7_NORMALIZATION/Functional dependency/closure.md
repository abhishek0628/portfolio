🔷 Closure of Attributes (X⁺)
🔹 Definition

The closure of an attribute set X (written as X⁺) is the set of all attributes that can be functionally determined from X using a given set of Functional Dependencies (FDs).

In simple words:

X⁺ = everything you can “figure out” starting from X.

🔷 Why it matters

Attribute closure is used to:

Find candidate keys
Check if a dependency is valid
Normalize relations (3NF, BCNF)
Prove functional dependencies
🔷 Example
Given Relation:

R(A, B, C, D, E)

Functional Dependencies:
A → B
B → C
C → D
AD → E
🔷 Find closure of A → A⁺

We start with:

Step 0:

A⁺ = {A}

Step 1:

A → B
So add B:
A⁺ = {A, B}

Step 2:

B → C
So add C:
A⁺ = {A, B, C}

Step 3:

C → D
So add D:
A⁺ = {A, B, C, D}

Step 4:

Now we have A and D, so AD → E
We already have A and D, so add E:
A⁺ = {A, B, C, D, E}

🔷 Final Answer:
A⁺ = {A, B, C, D, E}

So A is basically a super key here. Congrats A, you carry the whole database.

🔷 Key Idea (mental shortcut)

To compute closure:

Start with the attribute
Keep applying FDs
Add new attributes
Stop when nothing new can be added
🔷 Mini intuition

Think of it like:

You know A
A tells you B
B tells you C
C tells you D
A + D tells you E
So A slowly becomes omniscient