import cv2
import numpy as np

img = cv2.imread('image.jpg', 0)

r_min = np.min(img)
r_max = np.max(img)

stretched = ((img - r_min) / (r_max - r_min)) * 255
stretched = stretched.astype(np.uint8)

cv2.imshow("Original", img)
cv2.imshow("Contrast Stretched", stretched)
cv2.waitKey(0)