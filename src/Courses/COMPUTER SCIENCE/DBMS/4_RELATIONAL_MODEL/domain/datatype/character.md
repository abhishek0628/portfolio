.

🔹 2. Character (String) Data Types

These are used to store text values like names, addresses, emails, etc.
Basically, anything that isn’t pretending to be a number.

🔷 1. CHAR(n) → Fixed Length
Stores exactly n characters
If data is shorter, it gets padded with spaces
Faster for fixed-size data
📌 Example
CREATE TABLE Student (
    grade CHAR(2)
);

Insert:

INSERT INTO Student VALUES ('A');

👉 Stored as: 'A ' (extra space added)

🔷 2. VARCHAR(n) → Variable Length
Stores up to n characters
No unnecessary padding
Most commonly used type (because flexibility exists for a reason)
📌 Example
CREATE TABLE Student (
    name VARCHAR(50)
);

Insert:

INSERT INTO Student VALUES ('Abhishek');

👉 Stored exactly as: 'Abhishek'

🔷 3. TEXT → Large Text Storage
Used for long content
No strict length like VARCHAR
Slightly slower, but handles big data
📌 Example
CREATE TABLE Blog (
    content TEXT
);

Insert:

INSERT INTO Blog VALUES ('This is a very long article...');
🔷 Difference (the part examiners love)
Feature	CHAR(n)	VARCHAR(n)	TEXT
Length	Fixed	Variable	Very large
Storage	Padded spaces	Exact size	Dynamic
Speed	Faster	Moderate	Slower
Use case	Codes, IDs	Names, emails	Articles, notes
🔷 When to use what
Use CHAR → when length is fixed
(e.g., country code: IN, US)
Use VARCHAR → for most real-world text
(names, emails, addresses)
Use TEXT → for large content
(blogs, descriptions)