🔹 Rule 6: View Updating Rule (Codd’s Rules)

This rule says:

If a database supports a view (virtual table), then it should be possible to update the view, and the changes should correctly reflect in the underlying base tables—whenever logically possible.

In simple terms:
If you can see data through a view, you should ideally be able to edit it too, not just stare at it like it’s a museum exhibit.

🔷 What is a View?

A view is a virtual table created from one or more base tables.

It does NOT store data itself. It just shows a filtered or transformed version of real tables.

🔷 Example
Base Table: Employee
emp_id	name	dept	salary
1	Alice	CSE	50000
2	Bob	ECE	60000
View: CSE_Employees
CREATE VIEW CSE_Employees AS
SELECT emp_id, name, salary
FROM Employee
WHERE dept = 'CSE';

This view shows only CSE employees.

🔷 Now Rule 6 in action
✔️ Allowed update (simple case)
UPDATE CSE_Employees
SET salary = 55000
WHERE emp_id = 1;

👉 This should update the Employee table directly:

emp_id	name	dept	salary
1	Alice	CSE	55000

So yes, view update works here.

🔷 When updates become NOT allowed (important twist)

Some views cannot be safely updated.

❌ Example of problematic view
CREATE VIEW DeptSalary AS
SELECT dept, AVG(salary)
FROM Employee
GROUP BY dept;

Now ask yourself:

If you update AVG(salary), what exactly should DBMS change?
All employees? One employee? Random chaos?

👉 So this view is not updatable.

🔷 Summary of Rule 6

✔ Views should be updatable if logically possible
❌ Not all views are updatable (aggregations, joins, grouping break it)

🧠 One-line intuition

Rule 6 says:

“If a view looks like a table and behaves like a table, let users update it like a table—unless reality breaks the logic.”