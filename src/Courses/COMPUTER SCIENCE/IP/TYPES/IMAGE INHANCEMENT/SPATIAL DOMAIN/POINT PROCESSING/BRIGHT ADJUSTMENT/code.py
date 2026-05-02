import cv2
import numpy as np

img = cv2.imread('image.jpg')

b = 50  # brightness value
bright = cv2.add(img, b)  # handles clipping automatically

cv2.imshow("Original", img)
cv2.imshow("Brightened", bright)
cv2.waitKey(0)