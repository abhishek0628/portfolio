# 🔹 Rule 2: Guaranteed Access Rule (Codd’s Rule)

This rule says:

Every single data item in an RDBMS must be logically accessible by using:

* Table name
* Primary key (row identifier)
* Column name

No hidden memory addresses. No “trust me bro, it’s somewhere in storage.”

Basically: if you can’t reach it directly, it’s not relational—it’s just vibes pretending to be a database.

---

## 🔷 Example

### Student table

| student_id (PK) | name  | dept |
| --------------- | ----- | ---- |
| 101             | Alice | CSE  |
| 102             | Bob   | ECE  |

---

## 🔹 Accessing data (SQL way)

### 1. Get a specific value:

```sql
SELECT name
FROM Student
WHERE student_id = 101;
```

👉 This follows Rule 2:

* Table = Student
* Primary key = student_id
* Column = name

**Result:** Alice

---

### 2. Another access example:

```sql
SELECT dept
FROM Student
WHERE student_id = 102;
```

**Result:** ECE

---

## 🔷 What Rule 2 is really preventing

Without this rule, a database could:

* Store data internally in weird memory locations
* Force apps to “guess” where data is
* Break if storage layout changes

Which is basically how bugs are born and left unsupervised.

---

## 🧠 One-line intuition

Rule 2 ensures: you always reach data through structured logic, not physical storage tricks.
