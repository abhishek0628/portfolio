import cv2

img = cv2.imread('image.jpg', 0)

# simple threshold
_, thresh = cv2.threshold(img, 128, 255, cv2.THRESH_BINARY)

cv2.imshow("Binary Image", thresh)
cv2.waitKey(0)