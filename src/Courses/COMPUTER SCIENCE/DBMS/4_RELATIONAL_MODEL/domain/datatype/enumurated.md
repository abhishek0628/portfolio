🔹 6. Enumerated Types (ENUM)

An ENUM (Enumerated Type) is a data type where a column can store only one value from a predefined list.

👉 Basically:
“Pick from this menu or leave.”

🔷 Syntax
column_name ENUM('value1', 'value2', 'value3', ...)
🔷 Example 1: Gender Column
CREATE TABLE Student (
    name VARCHAR(50),
    gender ENUM('Male', 'Female', 'Other')
);

👉 Allowed values:

'Male'
'Female'
'Other'

❌ Not allowed:

'Unknown'
'Helicopter'
123

The database will reject anything outside the list. Ruthless. Efficient.

🔷 Example 2: Order Status
CREATE TABLE Orders (
    order_id INT,
    status ENUM('Pending', 'Shipped', 'Delivered', 'Cancelled')
);

👉 Now:

You can’t randomly insert "Almost delivered"
Or "idk bro"

The system forces consistency whether you like it or not.

🔷 Example Insert
INSERT INTO Orders VALUES (1, 'Shipped');   -- ✅ valid
INSERT INTO Orders VALUES (2, 'Lost');      -- ❌ error
🔷 Why ENUM is Useful
Prevents invalid data
Keeps values consistent
Saves storage (internally stored as numbers)
Makes queries cleaner
🔷 Drawbacks (because nothing is perfect)
Hard to modify later (adding new values = schema change)
Not very flexible
Different DBMS support varies
🔷 ENUM vs VARCHAR
Feature	ENUM	VARCHAR
Values	Fixed list only	Anything allowed
Safety	High	Low
Flexibility	Low	High

🔷 SET Data Type (in depth)

A SET is a string object that can store zero, one, or multiple values from a predefined list.

👉 Think of it as:
“Pick any combination from this list”

🔷 Syntax
column_name SET('value1', 'value2', 'value3', ...)
🔷 Example
CREATE TABLE Student (
    name VARCHAR(50),
    skills SET('C', 'Java', 'Python', 'SQL')
);
Valid Inserts:
INSERT INTO Student VALUES ('Abhi', 'C');
INSERT INTO Student VALUES ('Abhi', 'C,Python');
INSERT INTO Student VALUES ('Abhi', 'Java,SQL');

👉 One value OR multiple values allowed.

🔷 How it Works Internally
Stored as bitmask values (basically binary flags)
Each option = a bit position
Efficient, but also slightly cursed if you overthink it
🔷 Key Characteristics
✅ Multiple Selection

Unlike ENUM, which allows only one value, SET allows many.

✅ Order doesn’t matter

'C,Python' = 'Python,C'

✅ Removes duplicates automatically

'C,C,Python' → becomes 'C,Python'

❌ Restricted to predefined values

You can’t insert something outside the list:

INSERT INTO Student VALUES ('Abhi', 'Go'); -- ❌ ERROR
🔷 SET vs ENUM (classic confusion)
Feature	SET	ENUM
Values allowed	Multiple	Only one
Storage	Bitmask	Index
Example	'C,Python'	'C'
🔷 When to Use SET

Use it when:

You have a fixed list
Multiple selections are allowed
Values won’t change often

Examples:

Skills
Hobbies
Permissions
🔷 When NOT to Use SET

Avoid it when:

Values change frequently
You need scalability
You care about normalization (you should)

👉 In real-world design, people often prefer:

Separate tables (because sanity matters)