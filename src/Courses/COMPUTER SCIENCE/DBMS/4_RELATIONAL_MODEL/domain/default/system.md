🔷 2. System-generated Default Values (in DBMS)

A system-generated default value is a value automatically filled by the database using its built-in functions, usually based on the system state (like current date/time or sequence generators).

👉 In simple terms:
The database doesn’t just fill something in… it computes it on the spot.

🔷 Common System-generated Defaults
1. Current Timestamp (most important one)
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
Example
INSERT INTO Orders (order_id, product)
VALUES (101, 'Laptop');
Stored result:
order_id	product	created_at
101	Laptop	2026-04-29 10:30:00

👉 The DB automatically inserts the exact time of insertion

🔷 2. Auto-increment / Identity Value

Used when IDs should be generated automatically.

Example (MySQL style)
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT,
    name VARCHAR(50)
);
Insert:
INSERT INTO Users (name) VALUES ('Alice');
Result:
user_id	name
1	Alice

👉 Next insert becomes 2, 3, 4… automatically.

🔷 3. Database-specific Functions

Some DBMS use system functions as defaults.

Example
last_login TIMESTAMP DEFAULT NOW()

or

created_date DATE DEFAULT CURRENT_DATE
🔷 Why System-generated Defaults matter
No manual input needed for timestamps/IDs
Ensures accuracy (no human “creative timestamps”)
Guarantees uniqueness for keys (like auto IDs)
Useful for tracking events (logs, orders, users)