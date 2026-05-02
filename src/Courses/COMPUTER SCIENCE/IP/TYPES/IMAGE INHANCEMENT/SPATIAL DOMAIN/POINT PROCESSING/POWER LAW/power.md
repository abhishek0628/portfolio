🧠 1. Definition

Power-law transformation is given by:

g(x,y)=c⋅[f(x,y)]γ

Where:

f(x,y) = input pixel (usually normalized to 0–1)
c = constant (often 1)
γ = gamma value (the star of the show)
g(x,y) = output pixel
⚙️ 2. Core Idea

Instead of linearly increasing pixel values, you bend them using an exponent.

Because apparently straight lines were too boring.

🔥 3. Effect of Gamma (γ)
📌 Case 1: γ < 1 (e.g., 0.5)

👉 Brightens the image

Expands dark regions
Compresses bright regions
Example:

Pixel = 0.25

g=(0.25)
0.5
=0.5

So dark pixel becomes brighter.

📌 Case 2: γ > 1 (e.g., 2)

👉 Darkens the image

Compresses dark regions
Expands bright regions
Example:

Pixel = 0.5

g=(0.5)
2
=0.25

So mid-tone becomes darker.

📌 Case 3: γ = 1

👉 No change (congratulations, you did nothing)

📊 4. Graph Intuition
γ < 1 → curve bends upward
γ > 1 → curve bends downward

This curve decides how intensity values shift.