def howSum(targetSum, array, memo={}):
  #print(memo)
  if targetSum in memo:
    return memo[targetSum]

  if targetSum == 0:
    return []

  if targetSum < 0: 
    return None

  for num in array:
    remainder = targetSum - num
    result = howSum( remainder, array )

    if result is not None:
      memo[targetSum] = result
      return result + [num]

  memo[targetSum] = None
  return None
print("Answer: ", howSum(59, [14, 4, 6, 5, 2]))