🔹 3. Date and Time Data Types (with examples)

These are the types you use when your database needs to remember when something happened instead of just pretending time isn’t real.

🔷 1. DATE

Stores only the date (no time).

📌 Format: YYYY-MM-DD

Example:

dob DATE

Insert:

INSERT INTO Student (dob) VALUES ('2003-05-21');

👉 Stores: 2003-05-21

🔷 2. TIME

Stores only time (no date).

📌 Format: HH:MM:SS

Example:

login_time TIME

Insert:

INSERT INTO Log (login_time) VALUES ('14:30:00');

👉 Stores: 14:30:00

🔷 3. DATETIME

Stores both date and time.

📌 Format: YYYY-MM-DD HH:MM:SS

Example:

created_at DATETIME

Insert:

INSERT INTO Orders (created_at) VALUES ('2026-04-29 10:15:00');

👉 Stores full timestamp manually

🔷 4. TIMESTAMP

Also stores date + time, but with extra behavior:

Can auto-update
Tracks system time

Example:

updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

👉 Automatically stores current time when a row is inserted or updated

🔷 5. YEAR

Stores only the year.

Example:

joining_year YEAR

Insert:

INSERT INTO Employee (joining_year) VALUES (2024);
🔷 Combined Example Table
CREATE TABLE Event (
    event_id INT,
    event_date DATE,
    event_time TIME,
    created_at DATETIME,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
🔷 Quick Comparison
Type	Stores
DATE	Only date
TIME	Only time
DATETIME	Date + time (manual)
TIMESTAMP	Date + time (auto)
YEAR	Only year