import cv2
import matplotlib.pyplot as plt

# Read image in grayscale
img = cv2.imread('image.jpg', 0)

# Apply Histogram Equalization
equ = cv2.equalizeHist(img)

# Show images
plt.figure(figsize=(10,4))

plt.subplot(1,2,1)
plt.title("Original")
plt.imshow(img, cmap='gray')
plt.axis('off')

plt.subplot(1,2,2)
plt.title("Equalized")
plt.imshow(equ, cmap='gray')
plt.axis('off')

plt.show()