import cv2
import numpy as np

img = cv2.imread('image.jpg')

# normalize to 0-1
img_norm = img / 255.0

gamma = 0.5  # change this value
result = np.power(img_norm, gamma)

# convert back to 0-255
result = np.uint8(result * 255)

cv2.imshow("Gamma Corrected", result)
cv2.waitKey(0)