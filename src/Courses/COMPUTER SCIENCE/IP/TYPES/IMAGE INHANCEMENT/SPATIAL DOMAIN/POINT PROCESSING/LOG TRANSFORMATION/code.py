import cv2
import numpy as np

img = cv2.imread('image.jpg', 0)

# apply log transformation
c = 255 / np.log(1 + np.max(img))
log_img = c * np.log(1 + img)

log_img = np.array(log_img, dtype=np.uint8)

cv2.imshow("Log Transformed", log_img)
cv2.waitKey(0)