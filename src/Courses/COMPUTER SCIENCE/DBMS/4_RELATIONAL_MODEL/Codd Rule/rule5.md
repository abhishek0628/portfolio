🔹 Rule 5: Comprehensive Data Sublanguage Rule (Codd’s Rule)

This rule says an RDBMS must support a complete database language that can do everything related to the database, not just a part of it.

In simple terms:
👉 One language should handle all database operations, instead of needing separate tools like a confused toolbox.

🔷 What it must support

A proper relational DB language (like SQL) should include:

DDL (Data Definition Language) → create/alter tables
DML (Data Manipulation Language) → insert/update/delete data
DQL (Data Query Language) → retrieve data
TCL (Transaction Control Language) → commit/rollback
DCL (Data Control Language) → permissions/security

Yes, databases are dramatic enough to need five categories of commands.

🔷 Example using SQL (MySQL / RDBMS)
1. Create a table (DDL)
CREATE TABLE Student (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT
);
2. Insert data (DML)
INSERT INTO Student VALUES (1, 'Alice', 20);
3. Retrieve data (DQL)
SELECT * FROM Student;
4. Update data (DML)
UPDATE Student
SET age = 21
WHERE id = 1;
5. Delete data (DML)
DELETE FROM Student WHERE id = 1;
6. Transaction control (TCL)
COMMIT;

or

ROLLBACK;
7. Access control (DCL)
GRANT SELECT ON Student TO user1;
🧠 Key Idea

Rule 5 basically says:

A real RDBMS should not force you to use different languages or tools for different database tasks. One powerful language (like SQL) should do everything.

🔥 One-line summary

Rule 5 = “One complete language must handle all database operations (create, read, update, delete, control, and manage).”