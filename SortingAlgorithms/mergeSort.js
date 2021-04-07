const merge = (leftArr, rightArr) => {
  const output = []
  let leftIndex = 0
  let rightIndex = 0

  while(leftIndex < leftArr.length && rightIndex < rightArr.length){
    const leftEl = leftArr[leftIndex]
    const rightEl = rightArr[rightIndex]

    if(leftEl < rightEl){
      output.push(leftEl)
      leftIndex++
    } else{
      output.push(rightEl)
      rightIndex++
    }
  }
  console.log(`merge([${leftArr}], [${rightArr}]) --> [${[...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]}]`)
  return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
}

const mergeSort = (array) => {
  // Only change code below this line
  if(array.length <= 1){
    console.log("About to call merge..\n", {array})
  } else{
    console.log({array})
  }
  if(array.length <= 1) return array

  const middle = Math.floor(array.length/2)

  const left = array.slice(0, middle)
  const right = array.slice(middle, array.length)


  return merge(
    mergeSort(left),
    mergeSort(right)
  )
  
  // Only change code above this line
}

console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))


