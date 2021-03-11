let calls = 0

const canSum = (targetSum, numbers) => {
  calls += 1
  if(targetSum === 0) return true
  if(targetSum < 0) return false

  for(let num of numbers){
    const remainder = targetSum - num
    
    if(canSum(remainder, numbers) === true) return true
  }
  
  return false

}

console.log(canSum(7, [5, 3, 4, 7]), calls)
calls = 0
console.log(canSum(7000, [5, 3, 4, 7]), calls)