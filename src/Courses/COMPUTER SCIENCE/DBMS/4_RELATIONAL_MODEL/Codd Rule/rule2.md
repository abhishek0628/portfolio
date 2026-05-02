# 🔹 Rule 2: Guaranteed Access Rule (Codd’s Rule)

This rule says:

Every single data item in an RDBMS must be accessible by using a combination of:

* Table name
* Primary Key (row identifier)
* Column name

No shortcuts, no guessing memory addresses, no “trust me bro, it’s somewhere in the file.”

---

## 🔷 Simple Meaning

If data exists in a table, you should be able to fetch it precisely and uniquely using:

👉 **table + row + column**

---

## 🔷 Example

### 👨‍🎓 Student Table

| student_id (PK) | name  | age | dept |
| --------------- | ----- | --- | ---- |
| 101             | Alice | 20  | CSE  |
| 102             | Bob   | 22  | ECE  |

---

## 🔷 Accessing a specific value

👉 Question: Get Alice’s age

You use:

* Table: Student
* Primary Key: `student_id = 101`
* Column: `age`

### SQL:

```sql
SELECT age
FROM Student
WHERE student_id = 101;
```

✔ Output: `20`

---

## 🔷 What Rule 2 guarantees

✔ You can always find:

* Any row (via primary key)
* Any column (by name)
* Any value without ambiguity

---

## 🔷 Why this rule matters

Without it:

* You’d be hunting data like it’s hidden treasure
* Systems might rely on internal storage tricks (bad idea)
* Portability would break

With it:

* Data is predictable
* Queries are standardized
* Systems stay portable and consistent

---

## 🧠 One-line intuition

> Rule 2 = “If data exists, SQL must be able to reach it directly and uniquely.”
