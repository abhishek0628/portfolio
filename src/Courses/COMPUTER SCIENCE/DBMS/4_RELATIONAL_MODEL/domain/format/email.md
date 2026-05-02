🔷 Email Format (Format Constraint)

An email format constraint ensures that the value stored in an attribute follows the standard structure of an email address.

🔷 Standard Email Structure
local-part@domain

More precisely:

username@domain.extension
🔷 Rules of Email Format

A valid email must have:

One @ symbol
A local part (before @)
A domain name (after @)
At least one dot (.) in the domain
No spaces
🔷 Examples
✅ Valid Emails
alice@gmail.com
john.doe@nitc.ac.in
user_123@yahoo.com
❌ Invalid Emails
alicegmail.com → missing @
john@com → missing domain extension
@gmail.com → missing username
user@ gmail.com → contains space
user@gmail → missing .com/.in/etc
🔷 SQL Example (Format Constraint)
CREATE TABLE Student (
    id INT,
    email VARCHAR(100),
    CHECK (email LIKE '%_@__%.__%')
);

👉 This rule roughly ensures:

something before @
domain name after @
a dot in domain part