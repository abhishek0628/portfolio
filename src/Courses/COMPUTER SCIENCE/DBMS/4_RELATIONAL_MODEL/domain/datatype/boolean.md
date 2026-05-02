🔷 4. Boolean Data Type

The Boolean data type stores only two possible values:

TRUE
FALSE

👉 That’s it. No drama, no middle ground. Unlike most human decisions.

🔷 How it works in RDBMS

In many systems like MySQL:

TRUE is stored as 1
FALSE is stored as 0

So even when it looks logical, underneath it’s just numbers pretending to have opinions.

🔷 Example Table
CREATE TABLE Student (
    student_id INT,
    name VARCHAR(50),
    is_active BOOLEAN
);
🔷 Inserting Values
INSERT INTO Student VALUES (1, 'Alice', TRUE);
INSERT INTO Student VALUES (2, 'Bob', FALSE);

👉 Meaning:

Alice is active
Bob is not

No ambiguity, no “maybe later.”

🔷 Query Example
SELECT name FROM Student WHERE is_active = TRUE;

👉 This returns only active students.

🔷 Real-world Use Cases
is_active → user status
is_paid → payment done or not
is_admin → admin privileges
is_deleted → soft delete flag

Basically, any yes/no decision your system has to make.

🔷 Important Notes
Some DBMS don’t have a “true” Boolean type → they use TINYINT(1)
You can also insert:
1 instead of TRUE
0 instead of FALSE