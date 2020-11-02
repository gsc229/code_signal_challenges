function centuryFromYear(year) {
  return year % 100 === 0 ? year/100 : (Math.ceil(year / 100))
}




console.log(centuryFromYear(50))