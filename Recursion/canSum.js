let calls = 0

const canSum = (targetSum, numbers, memo={}) => {
  calls += 1
  console.log("MEMO: ", memo)
  if(targetSum in memo){
    //console.log('RETURN FROM MEMO: ', memo)
    return memo[targetSum]
  }

  if(targetSum === 0) return true

  if(targetSum < 0) return false

  for(let num of numbers){

    const remainder = targetSum - num
    
    if(canSum(remainder, numbers, memo) === true){
      memo[targetSum] = true
      console.log('TRUE MEMO: ', memo)
      return true
    }
  

  }
  
  memo[targetSum] = false
  return false

}

console.log(canSum(7, [5, 3, 4, 7]), calls)
calls = 0
//console.log(canSum(300, [7, 14]), calls)