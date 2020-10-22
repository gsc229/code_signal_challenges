function strstr(s, x) {

  const dictionary = {}
    
  for(let i = 0; i < s.length; i++){
      dictionary[s.slice(i, x.length)] = i
  }
  console.log(dictionary)
  return dictionary[x] ? dictionary[x] : -1

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