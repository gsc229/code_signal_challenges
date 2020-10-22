function strstr(s, x) {
  if(s===x){
    return 0  
  }

const tryLimit = 1000000

for(let i = 1; i < tryLimit; i++){
    
    const randomIndex = Math.floor(Math.random() * s.length)
    const randomStr = s.slice(randomIndex, randomIndex + x.length)
    console.log({randomIndex, randomStr})
    if(x === randomStr){
        return randomIndex
    }
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
const x4 = "vCLSCZObaNNGCXQssfEEDDJIPBwtkMmTniKa"

console.log(strstr(s4, x4))

// optimize this code