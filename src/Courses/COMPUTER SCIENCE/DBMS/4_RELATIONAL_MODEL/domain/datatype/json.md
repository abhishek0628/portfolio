# 🔹 JSON Data Type (Modern DBs)

The JSON (JavaScript Object Notation) data type lets you store semi-structured data inside a relational database. Yes, inside your nice clean tables, you can now sneak in flexible, messy data. Progress.

Used in systems like MySQL, PostgreSQL, etc.

---

## 🔷 What is JSON?

JSON is a key–value format, like this:

```json
{
  "name": "Alice",
  "age": 20,
  "skills": ["C", "Python"],
  "address": {
    "city": "Delhi",
    "pincode": 110001
  }
}
```

👉 Instead of rigid columns, data is stored as a structured document

---

## 🔷 How JSON fits in RDBMS

You store JSON inside a column:

```sql
CREATE TABLE Student (
    id INT,
    details JSON
);
```

### Example Insert:

```sql
INSERT INTO Student VALUES (
    1,
    '{"name":"Alice","age":20,"skills":["C","Python"]}'
);
```

---

## 🔷 Why JSON exists (aka why tables weren’t enough)

Because real-world data refuses to behave:

- Different users have different fields  
- APIs return nested data  
- Frequent schema changes are annoying  

👉 JSON gives:

- Flexibility  
- No strict schema inside the column  
- Ability to store nested structures  

---

## 🔷 Features of JSON Data Type

### 1. Schema-less inside column
You don’t need fixed columns for every field.

### 2. Nested Data Support
Objects inside objects, arrays inside arrays.  
Perfect for hierarchical data.

### 3. Query Support
You can still query JSON fields (yes, the database didn’t completely give up)

```sql
SELECT details->'$.name' FROM Student;
```

### 4. Indexing Support
Modern DBs allow indexing JSON fields for faster queries.

### 5. Validation
Only valid JSON format is allowed.  
So at least the chaos is well-formed.

---

## 🔷 When to Use JSON

- API responses  
- User preferences/settings  
- Logs  
- Dynamic attributes (changing structure)  

---

## 🔷 When NOT to Use JSON

- Highly structured data  
- Data requiring frequent joins  
- When relational integrity matters  

👉 If everything is JSON, congratulations, you reinvented a NoSQL database inside an RDBMS.

---

## 🔷 JSON vs Table (Reality Check)

| Feature        | Table       | JSON                |
|----------------|------------|---------------------|
| Structure      | Fixed      | Flexible            |
| Query Speed    | Fast       | Slower              |
| Relationships  | Strong     | Weak                |
| Complexity     | Low        | Can get messy fast  |
