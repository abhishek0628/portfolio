import cv2 
img=cv2.imread("image.jpg")
negative=255-img
cv2.imshow("original",img)
cv2.imshow("negative",negative)
cv2.waitKey(0)