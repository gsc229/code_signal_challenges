let calls = 0

const bestSum = (target, numbers, memo={}) => {
  calls += 1
  if(target in memo) return memo[target]


  if( target === 0 ) return []

  if( target < 0 ) return null

  let bestCombo = null

  for(let num of numbers){

    const remainder = target - num
    
    const result = bestSum(remainder, numbers, memo)

    if(result){
      const newCombo = [...result, num]
      if(!bestCombo || newCombo.length < bestCombo.length){
        bestCombo = newCombo
      }
    }

  }

  memo[target] = bestCombo
  return bestCombo

}


console.log(bestSum(16, [1, 1, 1, 5, 8]), {calls})