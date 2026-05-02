🔹 2. Huffman Coding

Huffman coding is a lossless compression technique that assigns:

Short binary codes to frequent symbols
Long binary codes to rare symbols

Goal:

Reduce total number of bits used to represent data.

🔹 Core Idea

Instead of fixed-length encoding (like ASCII), Huffman uses:

Variable-length prefix codes

So:

Common stuff → short codes
Rare stuff → long codes

Because repetition is your biggest ally in compression.

🔹 Important Property (Prefix-Free)

No code is a prefix of another.

So decoding is unambiguous.

Example (valid):

A → 0  
B → 10  
C → 110  
D → 111

You’ll never confuse 0 with 01, because Huffman is at least polite enough to avoid ambiguity.

🔹 Step-by-Step Construction

Let’s build Huffman coding for a simple example.

🔸 Step 1: Frequency table
Symbol	Frequency
A	5
B	9
C	12
D	13
E	16
F	45
🔸 Step 2: Build a tree (greedy merging)

Always merge two smallest frequencies:

A(5) + B(9) → 14
C(12) + D(13) → 25
14 + E(16) → 30
25 + 30 → 55
45 + 55 → 100 (root)
🔸 Step 3: Assign bits

Left = 0, Right = 1 (convention)

Final codes:

Symbol	Code
F	0
C	100
D	101
A	1100
B	1101
E	111
🔹 Why it works

Frequent symbol F gets:

shortest code: 0

Rare symbol A gets:

longer code: 1100

So total bits shrink dramatically.