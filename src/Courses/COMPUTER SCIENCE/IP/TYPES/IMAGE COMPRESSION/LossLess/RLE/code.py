def rle_2d(image):
    flat=[pixel for row in image for pixel in row]
    result=[]
    count=1
    for i in range(1,len(flat)):
        if flat[i-1]==flat[i]:
            count+=1
        else:
            result.append((flat[i-1],count))
            count=1

    result.append((flat[-1],count))
    return result
image=[
    [1,1,1,2,2],
    [1,1,1,2,2],
    [3,3,3,3,3],
    [4,4,5,5,5],
    [4,4,5,5,5]
]
result=rle_2d(image)
print(result)