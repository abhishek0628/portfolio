# Rule 0: Foundation Rule (Codd’s Relational Model)

## 📌 Statement

A database system can only be called a Relational DBMS (RDBMS) if it fully supports the relational model—not partially, not “kind of”, and not just because it uses tables.

In short:

> If it does not behave like a proper relational system, it does not qualify as an RDBMS.

---

## 🧠 Meaning in Simple Terms

Just storing data in table format is not enough. A true RDBMS must support:

* Proper relational structure (well-defined tables)
* Relational operations (SELECT, JOIN, PROJECT, etc.)
* Integrity constraints and consistency rules

If these are not supported, the system is not truly relational.

---

## 🔷 Example

### ❌ Not an RDBMS (Fails Rule 0)

Consider a system that:

* Stores data in table-like structures
* Does not properly support JOIN operations
* Ignores integrity constraints
* Uses SQL only as a basic interface over file storage

Even though it looks like a relational system, internally it behaves more like a simple storage engine rather than a true RDBMS.

---

### ✅ Proper RDBMS (Passes Rule 0)

Examples: PostgreSQL, MySQL

Such systems:

* Store data in properly structured relational tables
* Support relational operations such as JOIN, SELECT, and PROJECT
* Enforce keys and integrity constraints
* Maintain consistency across relationships

### Example Query:

```sql
SELECT Student.name, Department.dept_name
FROM Student
JOIN Department
ON Student.dept_id = Department.dept_id;
```

In this case:

* Data is stored relationally
* Tables are meaningfully connected
* Relationships are understood and enforced by the system

---

## 🧾 One-line Intuition

Rule 0: A system is only an RDBMS if it fully implements the relational model. Labels alone are not enough.
