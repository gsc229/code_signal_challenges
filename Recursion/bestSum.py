def bestSum(targetSum, array, memo={}):
  
  if targetSum in memo:
    return memo[targetSum]

  if targetSum == 0:
    return []

  if targetSum < 0: 
    return None

  bestCombo = None

  for num in array:
    remainder = targetSum - num
    result = bestSum( remainder, array )

    if result is not None:
      newestCombo = result + [num]
      if bestCombo is None or len(newestCombo) < len(bestCombo):
        bestCombo = newestCombo

  memo[targetSum] = bestCombo
  return bestCombo

print(bestSum(70, [5, 3, 4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,30]))