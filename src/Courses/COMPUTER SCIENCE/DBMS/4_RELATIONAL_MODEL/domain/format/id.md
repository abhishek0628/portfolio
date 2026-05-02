🔷 5. ID Format (Custom Patterns)

An ID Format constraint defines a specific structured pattern for identifiers (like student IDs, employee IDs, order IDs, etc.) so every value follows a predictable rule instead of random human creativity.

Yes, databases don’t trust humans to name things consistently. And honestly, they’re not wrong.

🔷 Why ID Formats are used

They help to:

Uniquely identify records
Encode useful info inside IDs (department, year, sequence, etc.)
Prevent duplicate or messy identifiers
Make searching and sorting easier
🔷 Structure of a Custom ID Pattern

A custom ID is usually a combination of:

Fixed prefix (like department or type)
Year / batch info
Sequence number

Example pattern:

CS2026_001
🔷 Example 1: Student ID
Format rule:
DEPT + YEAR + SEQUENCE
Pattern:
^CS[0-9]{4}_[0-9]{3}$
Valid IDs:
CS2026_001
CS2026_145
Invalid IDs:
CS26_1 (wrong format)
ECE2026-001 (wrong department or separator)
🔷 Example 2: Employee ID
Pattern:
^EMP-[0-9]{5}$
Valid:
EMP-00001
EMP-45231
Invalid:
EMP123
EMP-12A45
🔷 Example 3: Order ID (E-commerce)
Pattern:
ORD + DATE + SEQUENCE
^ORD20260429[0-9]{4}$
Valid:
ORD202604290001
ORD202604290128
🔷 Example 4: Product ID
Pattern:
PRD + category code + number
^PRD-[A-Z]{2}-[0-9]{3}$
Valid:
PRD-EL-101
PRD-FN-205
🔷 SQL Implementation Example

You can enforce this using CHECK:

CREATE TABLE Student (
    student_id VARCHAR(20),
    name VARCHAR(50),
    CHECK (student_id REGEXP '^CS[0-9]{4}_[0-9]{3}$')
);
🔷 Key Idea

Custom ID formats are basically:

“You will follow this pattern, or you will not enter this database.”