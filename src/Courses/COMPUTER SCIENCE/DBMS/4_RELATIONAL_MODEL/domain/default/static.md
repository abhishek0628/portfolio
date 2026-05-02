🔷 1. Static Default (in DBMS)

A Static Default value is a fixed constant value assigned to a column when no value is provided during insertion.

👉 “Static” means it does not change. Ever. Unless you change it yourself.

So the database is basically saying:

“You didn’t give me anything, so I’ll just use this preset value. Take it or leave it.”

🔷 Example
Create Table
CREATE TABLE Student (
    id INT,
    name VARCHAR(50),
    status VARCHAR(10) DEFAULT 'active',
    city VARCHAR(20) DEFAULT 'unknown'
);
🔷 Insert Without Default Columns
INSERT INTO Student (id, name)
VALUES (1, 'Alice');
🔷 Stored Result
id	name	status	city
1	Alice	active	unknown
🔷 What happened?
status was not provided → default 'active' used
city was not provided → default 'unknown' used

👉 These values are static defaults (fixed strings, not changing logic)

🔷 Another Example (numbers)
CREATE TABLE Employee (
    emp_id INT,
    salary INT DEFAULT 30000
);
Insert:
INSERT INTO Employee (emp_id)
VALUES (101);
Result:
emp_id	salary
101	30000
🔷 Key Characteristics of Static Default
Fixed value (constant)
Same for every missing entry
Defined at table creation
Easy fallback mechanism