🗂️ 1️⃣ Document-Based Databases
🧠 What is it?

A document database stores data as documents (usually JSON/BSON) instead of rows and tables.

Each document = self-contained data unit.

🔹 Example

Instead of rigid tables:

Users(id, name, email)

You get:

{
  "id": 1,
  "name": "Abhi",
  "email": "abhi@mail.com",
  "skills": ["C", "ML"],
  "address": {
    "city": "Calicut",
    "pin": 673001
  }
}
🔧 Popular Systems
MongoDB
CouchDB
⚙️ Key Features
🔹 1. Flexible Schema

Each document can have different fields.

User1: { "name": "A", "age": 20 }
User2: { "name": "B", "skills": ["Java"] }

No schema migration headaches.
Also no consistency unless you enforce it.

🔹 2. Nested Data (Embedding)

You can store related data inside a document.

🧠 Example
{
  "user": "Abhi",
  "posts": [
    { "title": "Post1" },
    { "title": "Post2" }
  ]
}

✔ Faster reads
❌ Larger documents

🔹 3. Indexing

Like SQL, you can create indexes for faster queries.

🔹 4. Horizontal Scaling

Works well with sharding:

Data split across multiple machines
🧠 When to Use

Use document DB when:

Data is semi-structured
Schema changes frequently
Read-heavy workloads