🧠 1. Definition

Log transformation is a point processing technique:

g(x,y)=c⋅log(1+f(x,y))

Where:

f(x,y): input pixel
g(x,y): output pixel
c: constant (scaling factor)

The “+1” is there so log(0) doesn’t ruin your day.

⚙️ 2. Key Idea
Expands low intensity (dark) values
Compresses high intensity (bright) values

So:

Dark regions → become more visible
Bright regions → get slightly suppressed

👉 Translation: stop the bright pixels from hogging all the attention.

📊 3. Behavior
Without log:

Pixel values increase linearly.

With log:
Small values increase rapidly
Large values increase slowly

So the curve looks like:

steep at start
flat later