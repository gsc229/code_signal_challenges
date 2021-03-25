function meanAndChessboard(matrix, queries) {
    
  let whiteRankings = []
  let blackRankings = []
  
  for(let y = 0; y < matrix.length; y++){
      for(let x=0; x<matrix[y].length; x++){
          const isWhite = (y%2 === 0 && x%2 === 0) || (y%2 !== 0 && x%2 !== 0)
          
          if(isWhite){
              whiteRankings.push({value: matrix[y][x], x, y})
          } else{
              blackRankings.push({value: matrix[y][x], x, y})
          }
          
      }
  }
  
  whiteRankings = whiteRankings.sort((a, b) => a.y - b.y).sort((a, b) => a.value - b.value)
  blackRankings = blackRankings.sort((a, b) => a.y - b.y).sort((a, b) => a.value - b.value)
  
  console.log({whiteRankings, blackRankings})
  
  queries.forEach(query => {
      const black = blackRankings[query[0]]
      const white = whiteRankings[query[1]]
      const average = blackRankings
      
  })
}

const matrix = [
                [1, 2, 4, 6], 
                [5, 6, 3, 1], 
                [3, 4, 7, 9], 
                [2, 5, 6, 7], 
                [9, 3, 4, 5]
                ]
const queries = [[1, 1], [3, 4]]


console.log(meanAndChessboard(matrix, queries))