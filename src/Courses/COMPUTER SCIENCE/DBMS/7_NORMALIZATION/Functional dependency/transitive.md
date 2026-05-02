🔷 Transitive Dependency (DBMS)

A transitive dependency happens when one non-key attribute depends on another non-key attribute, instead of depending directly on the primary key.

In simple terms:

If A → B and B → C, then A → C is a transitive dependency.

Yes, DBMS loves indirect relationships almost as much as humans love unnecessary complexity.

🔷 Formal Definition

If:

A → B
B → C

Then:

A → C is a transitive dependency (when A is a key and B, C are non-key attributes)
🔷 Example
Student Table
Roll_No	Dept_ID	Dept_Name
1	101	CSE
2	102	ECE
3	101	CSE
🔷 Step-by-step dependency
1. Primary dependency:
Roll_No → Dept_ID
2. Secondary dependency:
Dept_ID → Dept_Name
3. So indirectly:
Roll_No → Dept_Name ❌ (this is transitive dependency)
🔷 Why this is a problem

This causes data redundancy:

Dept_Name repeats for every student in same department
If Dept_Name changes, you must update multiple rows (painful and error-prone)
🔷 How to fix it (Normalization idea)

Split into two tables:

Student Table
Roll_No	Dept_ID
1	101
2	102
Department Table
Dept_ID	Dept_Name
101	CSE
102	ECE

Now:

No redundant Dept_Name
No transitive dependency
🧠 One-line intuition

Transitive dependency =

“A depends on B, and B depends on C… so A indirectly depends on C (and your database starts suffering).”