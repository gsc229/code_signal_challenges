let calls = 0

const canSum = (targetSum, numbers, memo={}) => {
  calls += 1
  if(targetSum in memo){
    console.log('RETURN FROM MEMO: ', memo)
    return memo[targetSum]
  }

  if(targetSum === 0) return true

  if(targetSum < 0) return false

  for(let num of numbers){

    const remainder = targetSum - num
    
    if(canSum(remainder, numbers, memo) === true){
      memo[targetSum] = true
      return true
    }
  

  }
  
  memo[targetSum] = false
  return false

}

console.log(canSum(7, [5, 3, 4, 7]), calls)
console.log(canSum(300, [7, 14]), calls)