function rangeBitCount(a, b) {
    
  let bitNums = []
  
  for(let i = a; i <= b; i++){
      bitNums.push(i.toString(2))
  }
  
  return bitNums.join("").split("").reduce((prev, curr, index, array) => {
    return parseInt(prev) + parseInt(curr)
  }, 0)
}

const a1 = 2
const b1 = 7


console.log(rangeBitCount(a1, b1))