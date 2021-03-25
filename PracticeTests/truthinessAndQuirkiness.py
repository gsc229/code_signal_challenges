xs = [()]
res = [False] * 2

if xs:
  res[0] = True
if xs[0]:
  res[1] = True

print(res)


a = True
b = False

print(not (a == b))
print(not a == b)
print(a == (not b))
# print(a == not b) # breaks
print(-10/-3)
print(-10//-3)
print(17//13)
print(10//5)
print(15//-4)

