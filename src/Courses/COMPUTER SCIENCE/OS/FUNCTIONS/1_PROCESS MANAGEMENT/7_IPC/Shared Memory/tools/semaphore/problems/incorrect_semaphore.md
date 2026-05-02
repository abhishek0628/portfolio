⚠️ 5. Incorrect Semaphore Usage (where good ideas go to suffer)

Semaphores are simple in theory. In practice, they’re like sharp tools: extremely useful, and equally good at ruining your day if you hold them wrong.

🔴 1. Wrong Order of wait() and signal()
❌ Bad pattern:
signal(mutex);
critical_section();
wait(mutex);
💥 What goes wrong:

You release the lock before entering the critical section.

So now:

multiple processes enter at once
shared data gets corrupted
chaos politely unfolds
✔️ Correct pattern:
wait(mutex);
critical_section();
signal(mutex);
🔴 2. Forgetting signal() (the “eternal wait” bug)
❌ Bad pattern:
wait(mutex);
critical_section();
// forgot signal(mutex)
💥 What happens:
semaphore never increments back
other processes stay blocked forever
system enters “why is nothing working” mode
Result:

Deadlock-like behavior caused by human optimism

🔴 3. Over-signaling (a.k.a. hallucinated resources)
❌ Bad pattern:
signal(mutex);
signal(mutex);
💥 What happens:
semaphore value becomes incorrect
system thinks resource is available when it isn’t
multiple processes enter critical section simultaneously
Result:

Race conditions return like they were never defeated

🔴 4. Using semaphore without initialization
❌ Bad:
not setting initial value
assuming default is safe
💥 What happens:
unpredictable behavior
random blocking or execution
debugging becomes archaeology
🔴 5. Mixing up multiple semaphores
❌ Example:
wait(S1)
wait(S2)

signal(S1)
signal(S2)

But another process does:

wait(S2)
wait(S1)
💥 What happens:
circular wait
deadlock
system freeze
🔴 6. Not protecting all shared access
❌ Mistake:

Only partially protecting critical section.

Example:

wait(mutex);
update_part1();
signal(mutex);

update_part2(); // unprotected
💥 Result:
partial race conditions
inconsistent state
“works on my machine” syndrome
🔴 7. Using semaphores for everything
❌ Anti-pattern:
using semaphores for logic control
using them instead of proper design
💥 Result:
overly complex code
hidden dependencies
unreadable synchronization spaghetti
🧠 Core idea (the thing everyone forgets)

A semaphore is not just a lock.

It is:

a shared counter + strict discipline + correct ordering + perfect human behavior

And if even one of those fails:

the system enters unpredictable suffering mode

🧩 Clean mental model

Think of semaphores like a restaurant system:

wait() → “I’m entering the kitchen”
signal() → “I’m leaving the kitchen”

Incorrect usage is:

people entering before queue
never leaving
or shouting “I’m done” without being inside
⚡ Final takeaway

Incorrect semaphore usage usually boils down to:

wrong ordering
missing release
extra release
inconsistent protection
or overconfidence (the most dangerous bug)