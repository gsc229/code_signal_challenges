function areFollowingPatterns(strings, patterns) {
  let s2P = {}
  let p2S = {}
  for(let i = 0; i < strings.length; i++){
      if(!s2P[strings[i]] && !p2S[patterns[i]]){
          s2P[strings[i]] = patterns[i]
          p2S[patterns[i]] = strings[i]
      }
      
      if(s2P[strings[i]] !== patterns[i] || p2S[patterns[i] !== strings[i]]){
          return false
      }
  }
  console.log({s2P, p2S})
  return true
  
}