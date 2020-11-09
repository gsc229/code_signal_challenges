/* function killKthBit(n, k) {
  let nString = n.toString(2).split("")
  nString[nString.length - k] = 0
  nString = nString.join("")
  nString = parseInt(nString, 2)
  return nString
  
} */

function killKthBit(n, k) {
  const bit = ((1 << k - 1) & n) ^ n
  return {bit: bit.toString(2), dec: bit}
}



const n1 = 37
const k1 = 3

console.log(killKthBit(n1, k1))