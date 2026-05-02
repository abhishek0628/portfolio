# 🔷 Process Control Block (PCB) — Structure in Depth

A PCB is a structured record maintained in kernel memory that stores everything needed to manage and resume a process.

---

## 🔷 PCB Overview

```
+--------------------------------------------------+
|           PROCESS CONTROL BLOCK (PCB)            |
+--------------------------------------------------+
| Process ID (PID)                                 |
| Process State                                    |
| Program Counter (PC)                             |
| CPU Registers                                    |
| CPU Scheduling Information                       |
| Memory Management Information                   |
| I/O Status Information                          |
| Accounting Information                          |
| Process Relationship Info (Parent/Child)       |
+--------------------------------------------------+
```

---

## 🔷 1. Process ID (PID)

PID = 1234

### What it is:
A unique integer identifier assigned to every process.

### Why it exists:
So OS can uniquely identify processes among many.

### Key idea:
No PID → process becomes anonymous chaos.

---

## 🔷 2. Process State

State = RUNNING / READY / WAITING / TERMINATED

### State transitions:

```
        +-------+
        | NEW   |
        +-------+
             |
             v
        +-------+        I/O wait
        | READY | -----------------> WAITING
        +-------+                      |
             |                        |
             v                        |
        +--------+                   |
        | RUNNING|--------------------
        +--------+
             |
             v
        +-----------+
        | TERMINATED|
        +-----------+
```

### Key idea:
Tells OS what to do next with the process.

---

## 🔷 3. Program Counter (PC)

PC = 0x00452AF0

### What it stores:
Address of next instruction.

### Why it matters:
Ensures process resumes exactly where it stopped.

---

## 🔷 4. CPU Registers

Example:
```
R1 = 10
R2 = 45
SP = 0x7ff...
FLAGS = 0x202
```

### What it stores:
CPU execution snapshot:
- General-purpose registers  
- Stack pointer  
- Base pointer  
- Flags  

---

## 🔷 5. CPU Scheduling Information

Example:
```
Priority = 5
Queue position = 3
Time quantum = 4ms
```

### Purpose:
Helps OS decide scheduling order.

---

## 🔷 6. Memory Management Information

Example:
```
Base Register = 0x100000
Limit Register = 0x200000
Page Table → [...]
```

### Purpose:
Manages process memory mapping and isolation.

---

## 🔷 7. I/O Status Information

Example:
- file1.txt  
- socket connection  
- pending disk requests  

### Purpose:
Tracks all I/O resources used by process.

---

## 🔷 8. Accounting Information

Example:
```
CPU Time = 12.5 sec
Memory = 45 MB
Start Time = 10:15 AM
User ID = 1001
```

### Purpose:
Resource tracking and usage statistics.

---

## 🔷 9. Process Relationships

Example:
```
Parent PID = 1000
Child PIDs = [1005, 1006]
```

### Purpose:
Maintains process hierarchy.

---

## 🔷 Final PCB View

```
+--------------------------------------------------------+
|               PROCESS CONTROL BLOCK (PCB)             |
+--------------------------------------------------------+
| PID: 1234                                             |
|--------------------------------------------------------|
| PROCESS STATE: READY / RUNNING / WAITING              |
|--------------------------------------------------------|
| PROGRAM COUNTER: 0x00452AF0                           |
|--------------------------------------------------------|
| CPU REGISTERS:                                        |
|   R1 = ...                                            |
|   R2 = ...                                            |
|   SP = ...                                            |
|   FLAGS = ...                                         |
|--------------------------------------------------------|
| SCHEDULING INFO:                                      |
|   Priority = ...                                      |
|   Queue Position = ...                                |
|   Time Quantum = ...                                  |
|--------------------------------------------------------|
| MEMORY INFO:                                          |
|   Base/Limit OR Page Table / Segment Table            |
|--------------------------------------------------------|
| I/O INFO:                                             |
|   Open files, devices, pending requests               |
|--------------------------------------------------------|
| ACCOUNTING INFO:                                      |
|   CPU time, memory usage, timestamps                  |
|--------------------------------------------------------|
| PROCESS RELATIONSHIPS:                                |
|   Parent PID, Child PIDs                              |
+--------------------------------------------------------+
```
