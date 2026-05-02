🧠 What is a Histogram?

A histogram is just a frequency table of pixel intensities.

For a grayscale image:

X-axis → intensity values (0 to 255)
Y-axis → number of pixels having that intensity

So it answers:

“How many pixels are this dark or that bright?”

📌 Why Histogram Processing?

Real images often have:

low contrast (everything clustered in dark or bright region)
poor visibility
underexposure or overexposure

Histogram processing fixes that by:

redistributing intensities
improving contrast
making details visible
🔥 Main Techniques in Histogram Processing
🔸 A. Histogram Equalization (MOST IMPORTANT)
🧩 Idea:

Spread intensity values so the histogram becomes more uniform.

👉 Result:

better contrast
improved visual clarity
🧠 Steps (IMPORTANT EXAM FLOW)

Let image have L intensity levels (0 to L−1)

Step 1: Compute Histogram

Count frequency of each intensity r
k
	​


Step 2: Normalize Histogram (Probability)
p(r
k
	​

)=
N
n
k
	​

	​


Where:

n
k
	​

 = number of pixels at intensity r
k
	​

N = total pixels
Step 3: Compute CDF (Cumulative Distribution Function)

c(r
k
	​

)=∑
j=0
k
	​

p(r
j
	​

)

👉 This tells:
“How much of the image lies below this intensity?”

Step 4: Mapping Function

s
k
	​

=(L−1)⋅c(r
k
	​

)

👉 This gives new intensity values.

🧪 Full Example (Step-by-step)
Given image intensities:
[0, 0, 1, 1, 2]

Total pixels N=5, levels L=3

🔹 Step 1: Histogram
Intensity	Count
0	2
1	2
2	1
🔹 Step 2: Probability
p(0) = 2/5 = 0.4
p(1) = 2/5 = 0.4
p(2) = 1/5 = 0.2
🔹 Step 3: CDF
c(0) = 0.4
c(1) = 0.8
c(2) = 1.0
🔹 Step 4: Mapping (L = 3 → 0,1,2)
s(0) = 2 × 0.4 = 0.8 ≈ 1
s(1) = 2 × 0.8 = 1.6 ≈ 2
s(2) = 2 × 1 = 2
🔹 Output image:
[1, 1, 2, 2, 2]

👉 Notice how values are pushed toward higher range → better contrast