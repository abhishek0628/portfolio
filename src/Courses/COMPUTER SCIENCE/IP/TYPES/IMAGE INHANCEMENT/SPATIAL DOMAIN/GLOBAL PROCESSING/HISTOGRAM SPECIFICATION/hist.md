🧠 Definition

Histogram Specification (or Matching) transforms an image so that its histogram matches a desired (target) histogram.

Formally:

g(x,y)=T[f(x,y)]

…but now T is designed so the output histogram looks like something you chose in advance.

🔥 Key Idea

Instead of:

“spread intensities evenly” (equalization)

We do:

“reshape intensities to match THIS exact distribution”

So yes, we’re forcing pixels into a pre-approved lifestyle.

📌 Why use it?
Standardizing medical images (so different scans look comparable)
Matching lighting conditions across datasets
Improving visual consistency in satellite images
Basically when “natural looking” matters more than “maximum contrast”
⚙️ Steps (Core Algorithm)

This is where things stop being friendly.

Step 1: Compute histogram of input image

Get:

PDF: p
r
	​

(r)
CDF:
s=T(r)=∑p
r
	​

(r)
Step 2: Compute histogram of target image

Get:

PDF: p
z
	​

(z)
CDF:
v=G(z)=∑p
z
	​

(z)
Step 3: Mapping

We want:

T(r)=G(z)

So:

z=G
−1
(T(r))

👉 Translation:

Map input pixel → its CDF value
Then find corresponding intensity in target CDF
🧪 Small Example (Conceptual)
Input Image:
[1, 2, 3]
Target Distribution:

Let’s say we want more high intensities.

Step 1: Input CDF
r	CDF
1	0.33
2	0.66
3	1.0
Step 2: Target CDF (example)
z	CDF
1	0.1
2	0.3
3	0.7
4	1.0
Step 3: Mapping

Match closest CDF values:

0.33 → closest to 0.3 → map to 2
0.66 → closest to 0.7 → map to 3
1.0 → 1.0 → map to 4
Result:
[1, 2, 3] → [2, 3, 4]

Now the image behaves like the target histogram.