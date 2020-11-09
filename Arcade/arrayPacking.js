function arrayPacking(a) {

  a.forEach((num, index, array)=>{
    let bitNum = num.toString(2)
    let bitLength = bitNum.length
    for(i=0; i < 8 -  bitLength; i++){
      bitNum = "0" + bitNum
    }
    array[index] = bitNum

  })
  
  //00000000 01010101 00011000
  return parseInt(a.reverse().join(""), 2)


}


const a1 = [24, 85, 0] // 21784


console.log(arrayPacking(a1))