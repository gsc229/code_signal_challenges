function containsCloseNums(nums, k) {
  let numIndexes = {}
  
  for(let i = 0; i < nums.length; i++){
      if(numIndexes[nums[i]] && (i - numIndexes[nums[i]][0]) >= k){
          return false
      }
      
      if(!numIndexes[nums[i]]){
          numIndexes[nums[i]] = []
      }
      numIndexes[nums[i]] = [...numIndexes[nums[i]], i] 
  }
  
  
  console.log(numIndexes)
  
}

const nums1 = [0, 1, 2, 3, 5, 2]
const k1 = 3

console.log(containsCloseNums(nums1, k1))