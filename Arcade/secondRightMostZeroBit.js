function secondRightmostZeroBit(n) {
  console.log(~n)
  console.log(~(n | n + 1) & -~(n | n + 1))
  return 2 ** n.toString(2).split("").reverse().join("").replace("0", "1").indexOf("0")
}


const a1 = 37


console.log(secondRightmostZeroBit(a1))