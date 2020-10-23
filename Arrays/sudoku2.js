function sudoku2(grid) {
    

  for(i = 0; i < grid.length; i++){

       // test horizontal
       for(j=0; j < grid[i].length; j++){
           if(grid[i][j] !== "."){
               let filtered = grid[i].filter(num=>{
                   return num == grid[i][j]
               })
               if(filtered.length > 1){
                   console.log(`false horizontal: ${filtered}`)
                   return false
               }

           }

           // test vertical
           if(i == 0){
               let vertical = []
               console.log(`i is ${i}`)
               vertical.push(grid[i][j], grid[i+1][j],grid[i+2][j],grid[i+3][j],grid[i+4][j],grid[i+5][j],grid[i+6][j],
                   grid[i+7][j], grid[i+8][j]
                   )
               
               for(k=0; k<vertical.length; k++){
                   if((vertical.indexOf(vertical[k]) !== vertical.lastIndexOf(vertical[k]) && vertical[k] !== "." )){
                       console.log(`false vertical: ${vertical}`)
                       return false
                   }
               }
               
           }
           //test subgrid
           if((i==1 && j==1) || (i==1 && j==4) || (i==1 && j==7) || (i==4 && j==1 )||(i==4 && j==4) || (i==4 && j==7) || (i==7 && j==1) || (i==7 && j==4) || (i==7 && j==7)){
               let subgrid = [ grid[i-1][j-1],  grid[i-1][j], grid[i-1][j+1],         
                               grid[i][j-1],    grid[i][j],   grid[i][j+1],  
                               grid[i+1][j-1],  grid[i+1][j], grid[i+1][j+1],
                               ]
               console.log(subgrid)
               for(s=0; s<subgrid.length; s++){
                   if((subgrid.indexOf(subgrid[s]) !== subgrid.lastIndexOf(subgrid[s])) && subgrid[s] !== "."){
                       console.log(`false subgrid, i:${i} j: ${j} : ${subgrid}`)
                       return false 
                    }
               }             
           }

           
       }  
       
   }
   
   return true

}
