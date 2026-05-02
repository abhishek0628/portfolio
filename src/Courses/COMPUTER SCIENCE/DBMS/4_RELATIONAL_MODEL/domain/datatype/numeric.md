🔹 1. Numeric Data Types (with examples)

These are used to store numbers. Not poetry, not vibes, just numbers.

🔸 1. Integer Types (Whole Numbers)

Used when you don’t need decimals.

📌 Types:
TINYINT → very small values
SMALLINT → small values
INT / INTEGER → standard integers
BIGINT → very large values
📌 Example:
CREATE TABLE Students (
    id INT,
    age INT,
    marks SMALLINT
);
📌 Sample Data:
id	age	marks
1	20	85
2	22	90

👉 No decimals allowed. Try inserting 20.5 and watch the database reject it like a strict teacher.

🔸 2. Exact Decimal Types (Precise Values)

Used when accuracy matters (like money).

📌 Types:
DECIMAL(p, s)
NUMERIC(p, s)

Where:

p = total digits
s = digits after decimal
📌 Example:
CREATE TABLE Accounts (
    balance DECIMAL(10,2)
);
📌 Sample Data:
balance
1050.75
99999.99

👉 Stores values exactly. No rounding drama.

🔸 3. Floating Point Types (Approximate Values)

Used when you can tolerate small precision errors.

📌 Types:
FLOAT
DOUBLE
📌 Example:
CREATE TABLE Measurements (
    temperature FLOAT,
    pressure DOUBLE
);
📌 Sample Data:
temperature	pressure
36.6	101.325
98.4	99.98

👉 Faster, but slightly imprecise.
So don’t use this for bank balances unless you enjoy lawsuits.

🔷 Quick Comparison
Type	Use Case	Precision
INT	Counts, IDs	Exact
DECIMAL	Money	Exact
FLOAT	Scientific values	Approx