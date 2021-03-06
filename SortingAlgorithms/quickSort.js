let call = 0

const quickSort = (array) => {
  call++
  if(array.length <= 2) return array
  
  let l = 0
  let h = array.length - 1

  let pivot = array[0]
  
  const left = []
  const right = []

  for(number of array.slice(1, array.length)){
    if(number <= pivot) left.push(number)
    if(number > pivot) right.push(number)
  }

  left.push(pivot)
  console.log({call, array,  pivot, left, right})
  
  const merged = [...quickSort(left), ...quickSort(right)]
  console.log( 'merged length', merged.length)
  return merged

}

const t1 = [345, 123, 43, 32, 5643, 1, 4, 2, 8, 63, 123, 43, 2, 55, 1, 234, 92]

console.log(quickSort(t1), 'orignial length: ', t1.length)