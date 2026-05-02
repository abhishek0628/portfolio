🔹 Example: Huffman Coding

Take this string:

A B A C A D B A E E E E E
🔹 Step 1: Count frequencies
Symbol	Frequency
A	4
B	2
C	1
D	1
E	5

Total = 13 symbols

🔹 Step 2: Build Huffman Tree (merge smallest first)

We repeatedly merge the two smallest frequencies:

🔸 Merge steps:
C(1) + D(1) → 2
B(2) + CD(2) → 4
A(4) + (B/CD)(4) → 8
E(5) + rest(8) → 13 (root)
🔹 Step 3: Assign binary codes

Assume:

Left = 0
Right = 1

Now assign:

Symbol	Code
E	0
A	10
B	110
C	1110
D	1111
🔹 Step 4: Encode the string

Original:

A B A C A D B A E E E E E

Replace each symbol:

A → 10
B → 110
C → 1110
D → 1111
E → 0
🔹 Final encoded bitstream:
10 110 10 1110 10 1111 110 10 0 0 0 0 0

            (13)
           /    \
        E(5)    (8)
                /   \
             A(4)   (4)
                    /   \
                 B(2)   (2)
                        /   \
                     C(1)   D(1)



🔹 Now extract codes (walk from root)
🔸 E
Left from root → 0
🔸 A
Right → Left → 10
🔸 B
Right → Right → Left → 110
🔸 C
Right → Right → Right → Left → 1110
🔸 D
Right → Right → Right → Right → 1111