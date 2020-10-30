function sudoku2(grid) {
  

  // horizontal
  const rows = {}
  // vertical
  const columns = {}
  // subgrid
  const subgrids = {}

  for(let i = 0; i < grid.length; i++){
    // rows
    rows[i] = grid[i]
    
  }
  
  let count = 0

  while(count < 9){

    const newColumn = []

    for(let i = 0; i < grid.length; i++){
      newColumn.push(grid[i][count])
    }
    columns[count] = newColumn
    count += 1
  }

  count = 0

  
  while(count < 9){
    
    let section = 'top' // or middle or bottom
    let row = 0
    let col = 0  

    let newSubGrid = []
    
    for(let i = 0; i < 9; i++){
      newSubGrid.push(rows[row][i])
      row+=1
      col+=1
      
    }
    subgrids[count]  = newSubGrid
    count +=1
  }


  

  return subgrids

}                      
/*                       // SUB GRID: 0
//          r:0 -->  0    1    2   r:1 -->  0    1    2  r:2 --> 0    1    2
              [     '.', '.', '.',         '.', '.', '6',       '.', '.', '.' ]

                        // SUB GRID: 1
//          r:0 -->  3    4    5   r:1 -->  3    4    5  r:2 --> 3    4    5
              [     '1', '4', '.',         '.', '.', '.',       '.', '.', '.' ]

                        // SUB GRID: 2
//          r:0 -->  6    7    8   r:1 -->  6    7    8  r:2 --> 6    7    8
              [     '.', '2', '.',         '.', '.', '.',       '.', '.', '.' ]

                        // SUB GRID: 3
//          r:3 -->  0    1    2    r:4 --> 0    1    2  r:5 --> 0    1    2
              [     '.', '.', '1',         '.', '.', '7',       '.', '.', '.' ] 

                        // SUB GRID: 4
//          r:3 -->  3    4    5    r:4 --> 3    4    5  r:5 --> 3    4    5
              [     '.', '.', '1',         '.', '.', '7',       '.', '.', '.' ] 
              

              */

            //  0    1    2    3    4    5    6    7    8
const grid1 =[['.', '.', '.', '1', '4', '.', '.', '2', '.'],// 0
              ['.', '.', '6', '.', '.', '.', '.', '.', '.'],// 1
              ['.', '.', '.', '.', '.', '.', '.', '.', '.'],// 2
              ['.', '.', '1', '.', '.', '.', '.', '.', '.'],// 3
              ['.', '6', '7', '.', '.', '.', '.', '.', '9'],// 4
              ['.', '.', '.', '.', '.', '.', '8', '1', '.'],// 5
              ['.', '3', '.', '.', '.', '.', '.', '.', '6'],// 6
              ['.', '.', '.', '.', '.', '7', '.', '.', '.'],// 7
              ['.', '.', '.', '5', '.', '.', '.', '7', '.']]// 8

const grid2 =[['.', '.', '.', '.', '2', '.', '.', '9', '.'], // false
              ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
              ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
              ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
              ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
              ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
              ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
              ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
              ['.', '2', '.', '.', '3', '.', '.', '.', '.']]


console.log(sudoku2(grid1))