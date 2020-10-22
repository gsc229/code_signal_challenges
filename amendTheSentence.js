function amendTheSentence(s) {
  
  let amended = ""

  for(let i = 0; i < s.length; i++){
    if(s[i] === s[i].toUpperCase() && i !== 0){
      amended = amended + " "
    }

    amended = amended + s[i]
  }

  return amended.toLowerCase()
  
}


const test1 = "CodesignalIsAwesome"


console.log(amendTheSentence(test1))