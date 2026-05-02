🔷 1. Simple View

A Simple View is a view that is created from only one table and does not use complex operations.

So basically:

One table + basic SELECT = Simple View

🔷 Definition

A simple view:

Uses a single base relation
Does not contain:
JOIN
GROUP BY
Aggregate functions (SUM, AVG, etc.)
DISTINCT
🔷 Example
Base Table: STUDENT
id	name	dept
1	Alice	CSE
2	Bob	ECE
Create Simple View
CREATE VIEW Student_Names AS
SELECT name FROM STUDENT;
View Output
name
Alice
Bob

👉 Congratulations, you now have a “table” that is actually just a filtered column pretending to be independent.

🔷 Key Characteristics
✔ Based on one table

No mixing multiple tables. Keep it simple, like your expectations from group projects.

✔ No complex operations

Only basic SELECT allowed.

✔ Usually Updatable

You can perform:

INSERT
UPDATE
DELETE

through the view (if constraints allow)

Example:

UPDATE Student_Names
SET name = 'Charlie'
WHERE name = 'Alice';

This updates the original STUDENT table, not some imaginary copy.

🔷 Why Use Simple Views
1. Restrict Access

Show only specific columns:

Hide sensitive data (like salary)
2. Simplify Queries

Users don’t need to remember full table structure

3. Logical Data Independence

Even if table structure changes, the view can stay the same

🔷 Limitation
Cannot handle complex data relationships
Limited functionality compared to complex views