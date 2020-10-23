function strstr(s, x) {
  if(s===x){
    return 0  
  }

  let temp = ""

  for(let i = 0; i < s.length; i++){
    if(s[i] === x[0]){
      const slice = s.slice(i, i + x.length)
      if(slice===x){
        return i
      } 
      /* for(let j = 0; j < x.length; j++){
        if(x[j] === s[i+j]){
            temp = temp + s[i+j]
            if(temp === x){
                return i
            }
        } else{
            temp = ""
            break
        }   
      } */
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