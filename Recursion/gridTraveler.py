def gridTraveler(n, m, memo={}):

  key = f"{n},{m}"

  if key in memo:
    return memo[key]
  
  
  if n == 0 or m == 0:
    return 0
  
  if n == 1 and m == 1:
    return 1

  memo[key] = gridTraveler( n - 1, m ) + gridTraveler( n,  m - 1 )
  print(memo)
  return memo[key]


print(gridTraveler(20, 37))
