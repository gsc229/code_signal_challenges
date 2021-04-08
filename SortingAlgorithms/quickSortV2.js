const quickSortV2 = (array) => {
  console.log({array})
  if(array.length === 1) return array

  const pivot = array[array.length - 1]
  const leftArr = []
  const rightArr = []

  for(number of array.slice(0, array.length - 1)){
    if(number <= pivot) leftArr.push(number)
    if(number > pivot) rightArr.push(number)
  }

  if(leftArr.length > 0 && rightArr.length > 0) return [...quickSortV2(leftArr), pivot, ...quickSortV2(rightArr)]

  if(leftArr.length > 0) return [...quickSortV2(leftArr), pivot]

  return [pivot, ...quickSortV2(rightArr)]

}


const t1 = [345, 123, 43, 32, 5643, 1, 4, 2, 8, 63, 123, 43, 2, 55, 1, 234, 92]
const answer = quickSortV2(t1)

console.log({answer, length: answer.length, originalLength: t1.length})

