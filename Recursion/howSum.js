let calls = 0

const howSum = (targetSum, numbers, memo={}) => {
  calls += 1
  if(targetSum in memo) return memo[targetSum]

  if(targetSum === 0) return []

  if(targetSum < 0) return null

  for(let num of numbers){

    const remainder = targetSum - num
    
    const result = howSum(remainder, numbers, memo)
    
    if(result !== null){
      memo[targetSum] = result

      return [...result, num]
    }

  }
  
  memo[targetSum] = null
  return null

}

console.log(howSum(7, [5, 3, 4, 7]), calls)
calls = 0
console.log(howSum(300, [7, 14]), calls)