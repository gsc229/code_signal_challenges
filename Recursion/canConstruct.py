def canConstruct(target, wordBank, memo={}):

  if target not in memo:
    memo[target] = True
  else:
    return
  

  if target == '':
    return True

  for partial in wordBank:

    if target.find(partial) == 0:
      suffix = target[len(partial):]
      if canConstruct(suffix, wordBank) == True:
        return True
  
  return False







#print(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])) # true
#print(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])) #false
#print(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])) # true
print(canConstruct("eeeeeeeeeeeeeeeeeeeeef", ["e", "eee", "eeee", "eeeeeeeee", "eeeeeeee"])) # false 