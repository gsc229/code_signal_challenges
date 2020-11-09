function adjacentElementsProduct(inputArray) {
  let largestProduct = inputArray.reduce((currentLargest, currentValue, currentIndex)=>{
      let nextProduct = inputArray[currentIndex + 1] ? inputArray[currentIndex] * inputArray[currentIndex + 1] : currentLargest
      
      console.log({
          currentIndex, 
          currentLargest, 
          mult: `${inputArray[currentIndex]} X ${inputArray[currentIndex + 1]} = ${nextProduct}`, 
          nextProduct})
      return Math.max(nextProduct, currentLargest)
  }, inputArray[0] * inputArray[1])
  
  console.log({largestProduct})  
  return largestProduct  
}