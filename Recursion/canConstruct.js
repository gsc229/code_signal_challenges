const canConstruct = (target, wordBank, memo={}) => {
  console.log({target})

  if(!memo[target]){
    memo[target] = 1
  } else{
    return
  }


  if(target === '') return true

  for(let partial of wordBank){
    
    if(target.indexOf(partial) === 0){
      const suffix = target.slice(partial.length)

      if(canConstruct(suffix, wordBank, memo) === true){
        return true
      }

    }
    
  }
  console.log({memo})
  return false

}






console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])) // true
//console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])) //false
//console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])) // true
//console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeef", ["e", "eee", "eeee", "eeeeeeeee", "eeeeeeee"])) // false 