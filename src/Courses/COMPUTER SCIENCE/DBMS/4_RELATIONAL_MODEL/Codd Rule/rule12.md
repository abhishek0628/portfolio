🔹 Rule 12: Non-Subversion Rule (Codd’s Rules)

This rule basically says:

A DBMS must not allow users to bypass its relational rules using low-level or “shortcut” interfaces.

In human terms:
You can’t cheat the system just because a backdoor exists.

🔷 What it means

Even if the database provides:

file-level access
low-level APIs
direct memory/storage access

👉 You should NOT be able to break constraints like:

primary key uniqueness
foreign key rules
integrity constraints
SQL-based validations

Because otherwise, the whole “relational database” idea collapses into chaos.

🔷 Example (simple and real-world)

Imagine a student database:

student_id (PK)	name	dept_id (FK)
1	Alice	101
✅ Normal (allowed) way using SQL:
INSERT INTO Student VALUES (2, 'Bob', 101);

DBMS checks:

Is student_id unique? ✔
Does dept_id exist? ✔

So it allows insertion.

❌ Subversion attempt (Rule 12 violation idea)

Suppose someone tries to bypass SQL and directly edits storage files:

raw_file_write: INSERT (2, 'Bob', 999)

Now:

dept_id = 999 does NOT exist
but the system still allows it because you bypassed DBMS rules

👉 This breaks relational integrity.

🔷 What Rule 12 demands

Even if low-level access exists:

DBMS must still enforce constraints
No bypassing primary/foreign key rules
No “I edited the file directly so validation doesn’t matter”
🧠 Intuition

Rule 12 is basically Codd saying:

“If users can sneak around your database rules, then congratulations—you built a very expensive spreadsheet, not an RDBMS.”