function centuryFromYear(year) {
  let stringYear = year.toString()
  let century
  if(stringYear[stringYear.length - 1] > 0){
      century = (Math.ceil(year/100) * 100) / 100
  } else{
      century = (Math.floor(year/100) * 100) / 100   
  }
  
  return century
}




console.log(centuryFromYear(101))