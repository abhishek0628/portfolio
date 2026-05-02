🔹 Rule 7: High-Level Insert, Update, Delete (Codd’s Rule)

This rule says:

A true RDBMS must allow users to perform INSERT, UPDATE, and DELETE operations on entire relations (tables) using a high-level language like SQL, not low-level record-by-record manipulation.

In simple terms:
👉 You should tell the database what to do, not how to physically do it.
Because yes, computers love overthinking everything if you let them.

🔷 What it guarantees
You can insert multiple rows at once
You can update data using conditions
You can delete data using conditions
No need for manual navigation of storage or pointers
🔷 Example
🧾 Student Table
student_id	name	dept
1	Alice	CSE
2	Bob	ECE
3	John	CSE
🔹 INSERT (High-level)
INSERT INTO Student (student_id, name, dept)
VALUES (4, 'Emma', 'MECH');

👉 Adds a new row without worrying about where it is stored.

🔹 UPDATE (High-level)
UPDATE Student
SET dept = 'CSE'
WHERE student_id = 2;

👉 Changes Bob’s department without manually locating records.

🔹 DELETE (High-level)
DELETE FROM Student
WHERE dept = 'ECE';

👉 Deletes all ECE students in one go.

🔷 Why this matters (Codd’s point)

Before RDBMS:

You had to manipulate data at a low level (record pointers, file positions)
Very error-prone and system-dependent

With RDBMS:

You just write SQL
The DBMS figures out the internal storage operations
🧠 One-line summary

Rule 7 ensures: All insert, update, delete operations must work on whole tables using SQL, not low-level record handling.