# 🔹 Process States (In Depth)

A process is not just “running” or “not running.” It moves through a state machine, managed by the OS scheduler.

---

## 1. 🆕 New State

This is where a process is born.

- OS allocates memory and creates the Process Control Block (PCB)
- Program is not yet ready to run

Think: “application installed, not launched yet.”

**Transition:**
New → Ready (after admission into system)

---

## 2. 🟡 Ready State

Process is ready to run but waiting for CPU time.

- All resources except CPU are assigned
- Sits in the Ready Queue

Think: students waiting for exam paper

**Transition:**
Ready → Running (CPU scheduler picks it)

---

## 3. 🔵 Running State

Process is executing on CPU.

- Instructions being executed
- Registers actively changing
- One process per CPU core (simplified model)

Think: student writing exam

**Transitions:**
- Running → Ready (preemption/time slice ends)
- Running → Waiting (needs I/O)
- Running → Terminated (finishes execution)

---

## 4. ⏳ Waiting / Blocked State

Process is waiting for an event.

- Usually I/O completion
- CPU is NOT used

Think: waiting for food delivery

**Transition:**
Waiting → Ready (event completes)

---

## 5. ❌ Terminated State

Process has finished execution.

- OS frees memory
- PCB cleaned up
- Exit status stored

Think: exam submitted, student gone

No outgoing transitions.

---

# 🔄 State Transition Diagram (Conceptual)

```
        admit
   New -------> Ready
                  |
                  | scheduler dispatch
                  v
               Running
              /   |    \
   I/O wait  /    |     \ exit
            v     |      v
        Waiting    |   Terminated
            |      |
            |      |
            +--> Ready (I/O complete)
```

---

# 🔹 Key Transitions

## ▶️ Dispatch
Ready → Running

## ⏸️ Preemption
Running → Ready

## ⛔ I/O Request
Running → Waiting

## ✅ I/O Completion
Waiting → Ready

## 🏁 Exit
Running → Terminated

---

# 🔹 Extended States (Suspension)

## 💤 Ready Suspended
- Ready but swapped to disk

## 💤 Blocked Suspended
- Waiting + swapped out

**Transitions:**
- Ready ↔ Ready Suspended
- Waiting ↔ Blocked Suspended
- Suspended → Ready

---

# 🔹 Why This Matters

Process states enable:

- Multiprogramming
- CPU efficiency
- Fair scheduling
- Overlapping I/O and computation

Without this, the CPU would just sit there awkwardly waiting like a forgotten intern.
