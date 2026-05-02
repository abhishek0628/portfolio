🔹 Process Creation (In Depth)
🔸 1. What is Process Creation?

Process creation = the OS building a new process and assigning it everything needed to execute:

memory
execution context
resources
identity (PID)

A process doesn’t just “appear.” The OS constructs it step-by-step like a very impatient assembly line.

🔸 2. Why do processes get created?

A process is created when:

User starts a program (clicking Chrome, for example)
A running process spawns another process
System initialization (boot-time services)
Batch jobs or scheduled tasks

In short: everything that moves eventually becomes a process.

🔸 3. Parent–Child Relationship

Every process (except the first one) is born from another process.

Parent process → creates
Child process → created entity

This forms a process tree.

Example:

Shell (parent)
gcc (child)
vim (child)
python script (child)

In Linux, everything ultimately traces back to init or systemd.

In Microsoft Windows, processes often originate via system services or user sessions.

🔸 4. Steps in Process Creation (OS viewpoint)
Step 1: Assign a PID

The OS gives a unique Process ID.

Because humans name things emotionally. OS prefers numbers. Less attachment.

Step 2: Allocate PCB (Process Control Block)

A PCB is created containing:

PID
state (New → Ready)
registers
scheduling info
memory pointers

Without PCB, the OS would immediately forget what it just created. Honestly relatable.

Step 3: Allocate Memory

Memory is allocated for:

code segment
stack
heap
data segment

This may involve virtual memory mapping (not physical RAM yet in modern systems).

Step 4: Load Program into Memory

The executable file is loaded:

instructions copied into memory
initialization of static data

This is where the “program becomes alive.”

Step 5: Initialize Execution Context

CPU registers are set:

Program Counter (PC) → first instruction
Stack Pointer (SP) → stack setup

Basically telling CPU:

“Start here, don’t mess it up.”

Step 6: Scheduling

The process is placed into the Ready Queue.

It does NOT run immediately. It waits its turn like everyone else in the CPU drama club.

🔸 5. Process Creation System Calls
In Linux/Unix:
fork() → creates a duplicate process
exec() → replaces process memory with new program

Typical pattern:

pid = fork();
if (pid == 0) {
    exec("program");
}

So:

fork() = clone yourself
exec() = become someone else entirely

Very identity crisis-friendly API design.

In Windows:
CreateProcess()

Everything in one function:

create process
load program
start execution

No philosophical split personality like Unix. Just straight execution.

🔸 6. Copy-on-Write (COW)

Modern systems don’t instantly duplicate memory during fork().

Instead:

Parent and child share memory initially
When one writes → memory is copied

Efficient. Lazy. Beautiful.

🔸 7. Execution Modes After Creation

After creation:

Parent may wait (wait())
Parent may continue (concurrent execution)
Child runs independently

Two common outcomes:

Independent execution
Synchronized execution
🔸 8. Process Tree Example
init/systemd
   ├── shell
   │     ├── vim
   │     └── gcc
   └── chrome
         ├── tab process 1
         ├── tab process 2
         └── renderer processes

Yes, your browser spawns more processes than some small operating systems.