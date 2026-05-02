🧠 1. Definition

Brightness adjustment modifies pixel intensity by adding (or subtracting) a constant:

g(x,y)=f(x,y)+b

Where:

f(x,y): original pixel
b: brightness factor
g(x,y): output pixel
⚙️ 2. How It Works
b>0 → image becomes brighter
b<0 → image becomes darker

Every pixel gets the same treatment. No favoritism.

🧪 3. Example

Original pixel values:

[50, 100, 150, 200]
Case 1: Increase brightness (b = +40)
[90, 140, 190, 240]
Case 2: Decrease brightness (b = -30)
[20, 70, 120, 170]
⚠️ 4. Clipping Problem

Images don’t allow values outside range:

0 (black)
255 (white)

So:

If f(x,y)+b>255 → becomes 255
If f(x,y)+b<0 → becomes 0
Example:
Pixel = 230, b = +50 → 280 → clipped to 255

Translation: you lose detail in very bright regions.