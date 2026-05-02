🔷 PIN / ZIP Code Format Constraint

This is a format constraint used to ensure that postal codes (PIN or ZIP codes) follow a fixed structure of digits (and sometimes letters) depending on the country.

Basically, the database makes sure your location data isn’t written like a random password you forgot.

🔷 1. PIN Code (India)

In India, a PIN (Postal Index Number) has:

📌 Format:
Exactly 6 digits
Only numbers allowed (0–9)
No spaces, letters, or symbols
✔️ Valid examples:
560001
110045
673121
❌ Invalid examples:
56001 (too short)
5600011 (too long)
56A001 (contains letter)
🔷 SQL Format Constraint Example (PIN)
CHECK (pincode REGEXP '^[0-9]{6}$')
What it means:
^ → start of string
[0-9]{6} → exactly 6 digits
$ → end of string

So the database is basically saying:

“Give me 6 digits or don’t bother.”

🔷 2. ZIP Code (USA)

In the US, ZIP codes come in two formats:

📌 Standard ZIP:
5 digits
Example: 10001
📌 ZIP+4 format:
5 digits + hyphen + 4 digits
Example: 10001-1234
🔷 SQL Format Constraint (ZIP Code)
5-digit ZIP:
CHECK (zip REGEXP '^[0-9]{5}$')
ZIP+4:
CHECK (zip REGEXP '^[0-9]{5}(-[0-9]{4})?$')
🔷 Why this constraint matters

Without it:

“ABCDE” becomes a ZIP code
“123” somehow becomes a city location
Your delivery system gives up on life

With it:

Data stays consistent
Queries work properly
Logistics doesn’t collapse