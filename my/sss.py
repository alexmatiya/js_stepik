
mylist = [1,1]

while len(mylist) < 10:
    res = mylist[-1]** 2 + mylist[-2] ** 2
    mylist.append(res)

print(mylist)