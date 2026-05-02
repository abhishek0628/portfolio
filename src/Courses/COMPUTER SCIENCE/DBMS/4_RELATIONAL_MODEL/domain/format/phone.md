🔷 2. Phone Number Format Constraint

A phone number format constraint ensures that a phone number stored in a database follows a valid structure (pattern)—not just “some digits thrown together in hope.”

Because yes, databases are picky like that. And honestly, they should be.

🔷 Basic Rule (General Idea)

A valid phone number usually:

Contains only digits
Has a fixed length (commonly 10 digits in India)
Does not include letters or symbols (unless country code rules apply)
🔷 Example Format (10-digit number)
SQL Constraint:
CHECK (phone REGEXP '^[0-9]{10}$')
🔷 What this means
^ → start of string
[0-9] → only digits allowed
{10} → exactly 10 digits
$ → end of string

👉 So the number must be exactly 10 digits, nothing else allowed

🔷 Valid Examples
9876543210
9123456780
🔷 Invalid Examples
98765 → too short
98765abc90 → contains letters
+91 9876543210 → includes symbols/spaces
12345678901 → too long
🔷 Extended Format (with Country Code)

Sometimes systems allow country codes:

Example:
CHECK (phone REGEXP '^\+?[0-9]{10,13}$')

Valid:

9876543210
+919876543210

Invalid:

+91-98765-43210
phone123
🔷 Why this constraint matters

Without it:

Wrong numbers get stored
SMS/OTP systems fail
Users get frustrated (and they will blame you, not themselves)

So the database quietly prevents chaos before it happens.