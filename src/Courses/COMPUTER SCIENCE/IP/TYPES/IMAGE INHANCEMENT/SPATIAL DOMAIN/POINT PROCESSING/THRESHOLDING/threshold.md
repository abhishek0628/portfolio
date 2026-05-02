🧠 1. Definition

Thresholding converts a grayscale image into a binary image.

g(x,y)={
255,
0,
	​

f(x,y)≥T
f(x,y)<T
	​


Where:

f(x,y) = original pixel
T = threshold value
g(x,y) = output pixel (0 or 255)

So every pixel answers one question:

“Are you above the threshold or not?”

⚙️ 2. How It Works
Choose a threshold T
Compare each pixel:
If ≥ T → white (255)
If < T → black (0)

That’s it. Brutally simple.