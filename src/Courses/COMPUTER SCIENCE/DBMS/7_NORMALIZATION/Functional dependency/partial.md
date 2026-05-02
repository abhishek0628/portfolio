🔷 Partial Dependency (in DBMS)

A partial dependency happens when a non-key attribute depends on only a part of a composite primary key, instead of depending on the whole key.

In simpler terms:

You created a multi-column key, but some attribute is lazily depending on just one of those columns. DBMS hates that.

🔷 Formal Definition

If:

Primary key = (A, B)
And a non-key attribute C depends only on A (not the full key)

Then:
👉 C is partially dependent on the primary key

🔷 Example
Student_Course Table
Student_ID	Course_ID	Student_Name	Course_Name
1	C101	Alice	DBMS
1	C102	Alice	OS
2	C101	Bob	DBMS
🔑 Composite Primary Key:
(Student_ID, Course_ID)
🔷 Now observe dependencies:
✔ Partial Dependencies:
Student_ID → Student_Name
Course_ID → Course_Name
🔴 Why this is a problem

Because:

Student_Name repeats for every course
Course_Name repeats for every student

So the table is basically doing useless repetition like a broken copier.

🔷 Correct Design (Normalization idea)

Split into separate tables:

Student Table
Student_ID	Student_Name
1	Alice
2	Bob
Course Table
Course_ID	Course_Name
C101	DBMS
C102	OS
Enrollment Table
Student_ID	Course_ID
1	C101
1	C102
2	C101
🔷 Key Insight

Partial dependency is the reason we move from 1NF → 2NF in normalization.

🧠 One-line intuition

Partial dependency = “a column depends on only part of a composite key, causing redundancy and design flaws.”