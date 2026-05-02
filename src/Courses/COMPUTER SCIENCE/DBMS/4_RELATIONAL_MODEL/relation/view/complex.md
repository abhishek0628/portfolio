🔷 Complex View

A complex view is a view created using:

Multiple tables
Joins
Aggregate functions (SUM, AVG, COUNT…)
GROUP BY, DISTINCT, etc.

Basically, anything that makes the query even slightly interesting.

🔷 Definition (exam-ready)

A complex view is a virtual table derived from one or more base tables using advanced SQL operations such as joins, grouping, and aggregation.

🔷 Example 1: View using JOIN
Tables

STUDENT

id	name	dept_id
1	Alice	101
2	Bob	102

DEPARTMENT

dept_id	dept_name
101	CSE
102	ECE
Create Complex View
CREATE VIEW StudentDept AS
SELECT s.name, d.dept_name
FROM STUDENT s
JOIN DEPARTMENT d
ON s.dept_id = d.dept_id;
View Output
name	dept_name
Alice	CSE
Bob	ECE

👉 Data is coming from two tables → already complex enough to earn the name.

🔷 Example 2: View using Aggregate Function
CREATE VIEW DeptCount AS
SELECT dept_id, COUNT(*) AS total_students
FROM STUDENT
GROUP BY dept_id;
Output
dept_id	total_students
101	1
102	1

👉 Now the database is doing calculations, not just copying rows.

🔷 Characteristics of Complex Views
Derived from multiple tables or advanced queries
Often used for reporting and analysis
May include:
JOIN
GROUP BY
HAVING
Aggregate functions
🔷 Updatability (the annoying part)

Most complex views are NOT updatable.

Why?
Because when you try to update:

The DBMS has no idea which table you actually want to change.

Example:

You update dept_name in a joined view
DBMS: “Cool… which table should I touch?”
You: “uh…”
DBMS: “Exactly.”
🔷 Difference from Simple View
Feature	Simple View	Complex View
Tables used	One	One or more
Aggregation	No	Yes
Joins	No	Yes
Updatable	Usually yes	Usually no