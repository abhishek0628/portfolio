🔹 Rule 3: Systematic Treatment of NULLs (Codd’s Rule)

This rule says a proper RDBMS must handle NULL values consistently, not randomly like a confused program that “lost” your data.

🔷 What is NULL?

NULL = missing / unknown / not applicable value

It is NOT:

0 ❌
empty string "" ❌
false ❌

It literally means: “we don’t know this value” or “it doesn’t exist here.”

🔷 What Rule 3 demands

An RDBMS must:

Treat NULL consistently in all operations
Clearly distinguish NULL from actual values (like 0 or empty string)
Avoid misleading results due to NULL confusion
🔷 Example
Student Table
student_id	name	marks
1	Alice	85
2	Bob	NULL
3	Carol	0
🔷 Now observe the difference:
1. NULL vs 0
Bob → marks = NULL → marks not known / not entered
Carol → marks = 0 → marks known and is zero

👉 These are NOT the same thing.

🔷 2. Query behavior
Query:
SELECT COUNT(marks) FROM Student;
Result:
Only counts non-NULL values
Output = 2 (Alice and Carol)

👉 Bob is ignored because NULL means “no value,” not zero.

Query:
SELECT COUNT(*) FROM Student;
Result:
Output = 3 (all rows counted)

👉 Here NULL doesn’t matter because rows exist.

🔷 3. Comparison with NULL
SELECT * FROM Student WHERE marks = NULL;

❌ This does NOT work (in SQL logic)

Correct way:

SELECT * FROM Student WHERE marks IS NULL;

👉 Because NULL is not a value you can compare normally.

🔷 Why this rule matters

Without proper NULL handling:

Aggregations become wrong
Comparisons break silently
Queries return misleading results

Basically: your database starts guessing, and databases are terrible at guessing.

🧠 One-line summary

Rule 3 ensures that missing data is treated as “unknown,” not as a normal value like 0 or blank, and all operations handle it consistently.