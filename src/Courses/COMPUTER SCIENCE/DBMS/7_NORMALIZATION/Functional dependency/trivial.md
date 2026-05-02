🔷 1. Trivial Functional Dependency (FD)

A Trivial Functional Dependency happens when:

Y ⊆ X (right side is a subset of left side)

So the dependency is kind of… obvious. DBMS includes it anyway, just to stay formal and slightly annoying.

🔷 Definition

A functional dependency X → Y is called trivial if:

Every attribute in Y is already present in X
🔷 Example
Relation: Student(Roll_No, Name, Dept)

Now consider:

✔ Trivial FD
(Roll_No, Name) → Name

Why is this trivial?
Because:

Right side (Name) is already inside left side (Roll_No, Name)

So the dependency is basically saying:

“If you know Roll_No and Name, then you know Name.”

Yes. Groundbreaking insight.

🔷 More examples
(A, B) → A
(Student_ID, Course_ID) → Course_ID
(X, Y, Z) → Z

All of these are trivial because RHS is already part of LHS.

🔷 Key Point

Trivial FDs are:

Always true
Not useful for database design
Mostly used in theory (normalization proofs, etc.)
🧠 One-line intuition

Trivial FD =

“You already know the answer from the question itself.”