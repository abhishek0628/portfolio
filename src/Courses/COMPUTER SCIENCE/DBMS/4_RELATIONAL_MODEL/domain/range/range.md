🔷 All Range Constraints in DBMS (RDBMS)

Range constraints are all about restricting allowed values of an attribute within limits. In relational databases, they are mainly implemented through CHECK constraints and comparison operators.

🔷 1. BETWEEN Constraint (Inclusive Range)

Used to define a closed range (both ends included).

age INT CHECK (age BETWEEN 18 AND 60)

✔ Allowed: 18, 25, 60
✘ Not allowed: 17, 61

👉 Most readable form of range constraint.

🔷 2. Comparison Operator Constraints

More flexible, used when you want open or partial ranges.

🔹 Greater than / Less than
salary INT CHECK (salary > 0)
age INT CHECK (age < 100)

👉 Useful for open intervals

🔹 Combined range (>=, <=)
marks INT CHECK (marks >= 0 AND marks <= 100)

👉 Equivalent to BETWEEN but more explicit and flexible.

🔷 3. Half-Open Range Constraints

One side included, one excluded:

price INT CHECK (price >= 1 AND price < 1000)

👉 Used in real systems like:

pricing tiers
indexing buckets
pagination logic (internally)
🔷 4. Strict Range Constraint (Excluding Both Ends)
temperature INT CHECK (temperature > -50 AND temperature < 50)

👉 Rare, but used in scientific or safety-critical systems.

🔷 5. Multi-Condition Range Constraints

When range depends on multiple rules:

age INT CHECK (age >= 18 AND age <= 60 AND age <> 25)

👉 “You can be anywhere in range… except that one guy.”

🔷 6. Implicit Range via Domain + CHECK

Sometimes range is part of a broader domain definition:

CHECK (grade BETWEEN 0 AND 10)

or:

CHECK (rating IN (1,2,3,4,5))

👉 Not always continuous range, but still value restriction.

🔷 7. Application-Level Range Constraints (bonus reality check)

Not strictly DBMS, but commonly used with DB rules:

UI sliders
API validation
backend business logic

👉 These should not replace DB constraints, just support them.

🔷 Summary Table
Type	Example	Range Type
BETWEEN	x BETWEEN a AND b	Inclusive
>= AND <=	x >= a AND x <= b	Inclusive explicit
> and <	x > a AND x < b	Open range
Mixed	x >= a AND x < b	Half-open
Complex	multiple conditions	Custom range