# 🔹 5. Binary Data Types (with Example)

## 🔷 What are Binary Data Types?

Binary data types store data in raw byte format (0s and 1s) instead of human-readable text.

👉 Used for:

- Images  
- Videos  
- Audio files  
- PDFs  
- Any file that your database probably shouldn’t be babysitting, but here we are  

---

## 🔷 Types of Binary Data

### 📌 1. BINARY(n)
- Fixed-length binary data  
- Always stores exactly n bytes  

### 📌 2. VARBINARY(n)
- Variable-length binary data  
- Stores up to n bytes  

### 📌 3. BLOB (Binary Large Object)
- Stores large binary data  
- Perfect for files like images, videos, etc.  

#### Types of BLOB (in systems like MySQL):

- TINYBLOB  
- BLOB  
- MEDIUMBLOB  
- LONGBLOB  

---

## 🔷 Example

### 🎯 Table storing images

```sql
CREATE TABLE Student (
    student_id INT,
    name VARCHAR(50),
    profile_pic BLOB
);
```

👉 Here:  
`profile_pic` stores the image file as binary data  

---

### 🎯 Inserting binary data (simplified)

```sql
INSERT INTO Student (student_id, name, profile_pic)
VALUES (1, 'Alice', LOAD_FILE('/path/image.jpg'));
```

👉 The image is stored as raw bytes, not as a filename or text.

---

## 🔷 Important Notes (people mess this up a lot)

- Binary ≠ text  
- You can’t read it directly (it looks like nonsense)  
- Large BLOBs can slow down your database  
- In real systems, files are often stored outside DB, and only paths are stored  

---

## 🔷 When to Use Binary Types

### Use them when:
- You must store files inside the DB  
- You need tight control/security over file data  

### Avoid them when:
- Files are large (use file storage + path instead)  
