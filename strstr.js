function strstr(s, x) {
  if(s===x){
    return 0
}

const dictionary = {}
let lengthX = x.length


for(let i = 0; i < s.length; i++){
    
    const entry = s.slice(i, i + lengthX)
    
    if(entry.length < lengthX){
    break
    }

    if(!dictionary[entry]){
    dictionary[entry] = i
    }
}

return dictionary[x] ? dictionary[x] : -1
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