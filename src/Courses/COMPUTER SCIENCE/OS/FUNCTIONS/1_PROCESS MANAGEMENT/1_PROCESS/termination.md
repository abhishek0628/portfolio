🔻 Process Termination (In Depth)
🔹 1. What is Process Termination?

Process termination = the OS removing a process from execution and reclaiming all resources it was using.

Once terminated, the process:

stops executing
releases memory
loses CPU scheduling eligibility
gets removed from process tables

Basically: it stops existing in a meaningful OS sense.

🔹 2. Why do processes terminate?

A process ends for several reasons:

✔ Normal completion
Program finishes execution
Returns from main()

Example: You close a program properly (rare but impressive).

✔ Error or crash
Invalid memory access
Divide by zero
Illegal instruction

The process didn’t plan to die, but here we are.

✔ Killed by OS or user
kill command in Linux
Task Manager in Microsoft Windows

Used when the process misbehaves or eats too much CPU like a greedy background demon.

✔ Parent termination

If a parent dies:

child processes may be terminated
or become orphan processes (more on that below)
🔹 3. Types of Process Termination
🟢 Normal Exit

Process finishes cleanly:

calls exit()
returns status code

Example:

exit(0);

0 usually means success. Everything else means “something went wrong but I’m not explaining it well.”

🔴 Abnormal Exit

Triggered by:

segmentation fault
illegal operation
forced kill

The OS doesn’t ask permission. It just ends it.

🔹 4. Exit System Call

When a process terminates, it calls:

exit(status) in Unix-like systems

This:

notifies OS
returns exit code to parent
triggers cleanup

The OS then begins resource reclamation.

🔹 5. Resource Cleanup (The important part)

When a process dies, OS reclaims:

memory (heap, stack, data)
open files
I/O buffers
locks and semaphores
PCB entry

If this didn’t happen, your system would slowly rot like a forgotten fridge.

🔹 6. Zombie Processes ☠️

A zombie process is:

A process that has finished execution but still has an entry in the process table.

Why?

It already terminated
But parent hasn’t read its exit status

So OS keeps a “dead record” of it.

In Linux:

shown as Z state

Handled by:

wait() system call by parent
🔹 7. Orphan Processes 👶

An orphan process is:

A running process whose parent has died.

What happens?

It gets adopted by init or systemd

In Linux:

init becomes new parent

In Microsoft Windows:

system services manage orphaned processes differently, but conceptually similar cleanup happens
🔹 8. Forced Termination (Kill Flow)

When a process is killed:

OS sends signal (SIGKILL, TerminateProcess, etc.)
Process is stopped immediately (no cleanup by process itself)
OS reclaims resources
PCB removed

SIGKILL is basically:

“No arguments. You’re done.”

🔹 9. Process State Transition

Termination looks like this:

Running → Terminated
Ready → Terminated
Waiting → Terminated

No matter where it is, termination wins.

🔹 10. Why termination matters (system perspective)

Without proper termination:

memory leaks
zombie accumulation
system slowdown
eventual OS collapse

So yes, killing processes is not cruelty. It’s hygiene.