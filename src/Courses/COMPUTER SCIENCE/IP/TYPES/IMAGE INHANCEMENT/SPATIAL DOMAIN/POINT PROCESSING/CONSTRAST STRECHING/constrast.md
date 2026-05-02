🧠 1. Idea

If an image only uses a narrow range like:

[50,120]

Instead of the full:

[0,255]

…it looks dull and washed out. Contrast stretching fixes that by expanding the range.

⚙️ 2. Transformation Function

The standard formula:

g(x,y)=(f(x,y) - rmin)/(rmax-rmin) x (L - 1)


Where:

f(x,y) = input pixel
g(x,y) = output pixel
rmin, rmax = min & max intensity in input image
L = number of intensity levels (256 for 8-bit image)
📌 What this actually does
Small values → pushed toward 0
Large values → pushed toward 255
Everything in between → spread evenly

So instead of a cramped histogram, you get a full, healthy spread.