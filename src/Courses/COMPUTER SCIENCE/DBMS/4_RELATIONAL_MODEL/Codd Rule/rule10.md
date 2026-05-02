🔹 Rule 10: Integrity Independence (Codd’s Rule)

This rule says:
👉 Integrity constraints (rules that keep data correct) must be stored inside the database system itself, not inside application code.

In simpler terms:
The database should enforce its own rules, not depend on every random app developer remembering them (because that clearly went well in history 🙃).

🔷 What are integrity constraints?

They are rules like:

Primary key must be unique
Foreign key must match a valid record
Age must be > 0
Salary cannot be negative
🔷 Rule 10 in action (Idea)

Instead of writing rules in every program:

❌ Bad approach (Application-level validation):

if age > 0:
    insert_into_db(age)

You’re trusting every developer to behave perfectly. Bold strategy.

🔷 Correct approach (Database-level integrity)
Example: SQL constraint
CREATE TABLE Student (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT CHECK (age > 0)
);

Now the DBMS itself enforces:

No duplicate id
Age must be positive

Even if someone tries:

INSERT INTO Student VALUES (1, 'Alice', -5);

The database says:
👉 “Nope. Not happening.”

🔷 Foreign Key example
CREATE TABLE Student (
    id INT PRIMARY KEY,
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES Department(dept_id)
);

This ensures:

You cannot assign a student to a department that doesn’t exist
🔷 Why this rule matters
Prevents inconsistent data across different applications
Centralizes rules inside DBMS
Reduces dependency on application logic
Improves reliability and data safety
🧠 One-line summary

Rule 10 says: “Don’t trust applications with data correctness. Let the database enforce its own rules.”