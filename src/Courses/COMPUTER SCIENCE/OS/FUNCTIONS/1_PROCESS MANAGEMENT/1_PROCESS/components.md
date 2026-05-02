# 🔹 Components of a Process

A process consists of several key components in memory:

---

## 1. Text Section (Code)
- Contains the program instructions  
- Typically **read-only**

👉 **Example:**
```c
printf("Hello World");
```
This line resides in the text section.

---

## 2. Data Section
- Stores **global and static variables**

👉 **Example:**
```c
int x = 10;   // global variable
static int y = 5;
```
Both `x` and `y` are stored in the data section.

---

## 3. Heap
- Used for **dynamic memory allocation**
- Managed manually by the programmer

👉 **Example:**
```c
int *arr = (int*)malloc(5 * sizeof(int));
```
Memory for `arr` is allocated in the heap.

---

## 4. Stack
- Stores:
  - Function calls  
  - Local variables  
  - Return addresses  
- Automatically managed by the system

👉 **Example:**
```c
void func() {
    int a = 20;  // local variable
}
```
Variable `a` is stored in the stack.

---

## 5. CPU State
- Keeps track of execution:
  - **Program Counter (PC)** → next instruction  
  - **Registers** → temporary data storage  

👉 **Example:**
While executing:
```c
a = b + c;
```
- `b` and `c` are loaded into registers  
- Result is temporarily stored before writing back  

---

# 🔹 Full Example (Putting It Together)

```c
#include <stdio.h>
#include <stdlib.h>

int x = 10;   // Data section

void func() {
    int y = 20;                    // Stack
    int *p = malloc(sizeof(int));  // Heap
    *p = x + y;                    // CPU registers used
    printf("%d", *p);              // Text section executes this
}

int main() {
    func();
    return 0;
}
```

---

# 🔹 Mapping This Example

| Component     | What Goes There                          |
|--------------|------------------------------------------|
| Text Section | main(), func(), printf() code            |
| Data Section | int x = 10                               |
| Stack        | y, function calls (main → func)          |
| Heap         | Memory allocated by malloc()             |
| CPU State    | Execution of x + y, function flow        |

---

# 🔹 Memory Layout (Conceptual View)

```
---------------------
|     Stack         |  ← function calls, locals
---------------------
|     Heap          |  ← dynamic memory
---------------------
|     Data          |  ← globals/static
---------------------
|     Text          |  ← program code
---------------------
```
