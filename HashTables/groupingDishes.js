const {test7data} = require('./grouping-dishes-test-7')

function groupingDishes(dishes) {
  let flattened = []
  let ingredientDishes = {}
  let answerArr = []
  
  for(dish of dishes){
      flattened.push('dish', ...dish)
  }
  
  let lastDishIndex
  
  for(let i =0; i < flattened.length; i++){
      if(flattened[i] === 'dish'){
          lastDishIndex = i + 1
      }
      
      if(flattened[i] !== 'dish' && i !== lastDishIndex){
          if(!ingredientDishes[flattened[i]]){
            ingredientDishes[flattened[i]] = []
          }
          
          ingredientDishes[flattened[i]].push(flattened[lastDishIndex])
      }
      
  }
  
  for(ingredient in ingredientDishes){
      if(ingredientDishes[ingredient].length >= 2){
          ingredientDishes[ingredient].sort()
          ingredientDishes[ingredient].unshift(ingredient)
          answerArr.push(ingredientDishes[ingredient])
      }
  }
  
  return answerArr.sort((a, b) => a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0)
  
}


const reslut = groupingDishes(test7data.input.dishes)
const output = test7data.output
let errors = {}
let outputString = output.toString()
let noShows = 0

console.log({ipLength: test7data.input.dishes.length, opLength: output.length, resLength: reslut.length})

for(let i = 0; i < reslut.length; i++){




  for(let j = 0; j < reslut[i].length; j++){
    if(reslut[i][j] !== output[i][j]){
      errors[`err i: ${i} J: ${j}`] = {resultI: reslut[i], outputI: output[i],restultIJ: reslut[i][j], outputIJ: output[i][j]}
    }
  }
}

errors = {} ? errors = 'no errors' : errors

console.log({errors})