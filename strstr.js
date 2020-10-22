function strstr(s, x) {

  const xLength = x.length

  for(let i = 0; i < s.length; i++){
    const window = s.slice(i, i + xLength)
    console.log(window)
    if(window === x){
      return i
    }
  }

  return -1
}

const s1= "CodefightsIsAwesome"
const x1= "IA"

const s2 = "CodefightsIsAwesome"
const x2 = "IsA"

console.log(strstr(s2, x2))