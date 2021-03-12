import json

calls = 0

def canSum(target, numbers, memo={}):

  print(json.dumps(memo, indent=2))

  global calls

  calls += 1

  if target in memo:
    return memo[target]

  if target == 0:
    return True

  if target < 0:
    return False

  for number in numbers:

    remainder = target - number

    if canSum(remainder, numbers, memo):
      memo[target] = True
      return True
  
  memo[target] = False
  return False



print(canSum(7, [5, 3, 4, 7]), calls)
calls = 0

print(canSum(100, [7, 14]), calls)