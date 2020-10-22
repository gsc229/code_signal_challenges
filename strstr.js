function strstr(s, x) {

let lengthX = x.length
const sReverse =  s.split("").reverse()
const xReverse = x.split("").reverse().join("")
for(let i = sReverse.length; i >= 0; i--){

  if(sReverse.join("").slice(-lengthX) === xReverse){
    return s.length - i
  }
  
  sReverse.pop()
  
  console.log({sReverse: sReverse.join("")})
}

return -1

}

const s1= "CodefightsIsAwesome"
const x1= "IA"

const s2 = "CodefightsIsAwesome"
const x2 = "IsA"

const s3 =  "CodefightsIsAwesome"
const x3 =  "IsA"

const s4 = "ATErUUeUkVFVNfxfUKtntOErKmZLUpWpHRASdxjUhzzxygmnNnKabPPgPqyvCLSCZObaNNGCXQssfEEDDJIPBwtkMmTniKapBlrd"
//                                                                     |                                   |
const x4 = "vCLSCZObaNNGCXQssfEEDDJIPBwtkMmTniKa"

console.log(strstr(s3, x3))

// optimize this code