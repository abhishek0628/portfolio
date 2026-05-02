# 🔹 Rule 4: Dynamic Online Catalog (a.k.a. “the database should be able to describe itself without panicking”)

## 🔷 Meaning

Codd’s Rule 4 says:

> The database must store its metadata (schema information) as relational tables, and this catalog must be accessible using the same query language (SQL) as normal data.

In simpler terms:

* The DB should know its own structure
* And you should be able to query that structure like normal data
* No secret hidden “black box” metadata

Because apparently even databases need self-awareness.

---

## 🔷 What is “Catalog” here?

The catalog = metadata, such as:

* Table names
* Column names
* Data types
* Constraints
* Indexes

---

## 🔷 Example (MySQL)

In MySQL, this is done using `INFORMATION_SCHEMA`.

### 👉 List all tables in a database

```sql
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'college_db';
```

### 👉 Get columns of a table

```sql
SELECT column_name, data_type
FROM information_schema.columns
WHERE table_name = 'student';
```

So instead of asking a DBA or reading documentation like it’s ancient scripture, you just query the database itself.

---

## 🔷 Example (PostgreSQL)

```sql
SELECT column_name, data_type
FROM information_schema.columns
WHERE table_name = 'student';
```

PostgreSQL basically agrees:

> “Yes, I will gossip about my own structure if you ask nicely.”

---

## 🔷 Example (Oracle)

```sql
SELECT table_name
FROM user_tables;
```

Oracle also provides views like:

* USER_TAB_COLUMNS
* ALL_TABLES

Same idea: metadata is just another set of tables.

---

## 🔷 Why Rule 4 matters

Without it:

* You’d need separate tools just to inspect schema
* Metadata would be hidden in internal files
* Automation (ORMs, query builders) would be painful

With it:

* You can build tools that introspect databases
* SQL can query both data AND structure
* The system becomes self-describing

---

## 🧠 One-line intuition

Rule 4 = “The database should be able to explain itself using SQL, not vibes and guesswork.”
