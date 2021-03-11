const pattern_match = (samples, seq) => {
  const keyMap = {}
  const pattern = []
  for(let i = 0; i < seq.length; i++){
    if(!keyMap[seq[i]]){
      keyMap[seq[i]] = i
      pattern.push(i)
    } else{
      pattern.push(keyMap[seq[i]])
    }
  }
  console.log({keyMap, pattern})


}

pattern_match( ["abc","deq","mee","aqq","dkd","ccc"], "abb")