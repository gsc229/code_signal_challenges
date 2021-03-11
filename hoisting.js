/* 


const  greg = () => {
  console.log('hello world')
}

console.log(b)
var b = 'something'

greg() */
/* 
let obj = () => {
  let i = 0

  return{
    setI(k){
      i = k
    },
    getI(){
      return i
    }
  }
}

const x = obj()
console.log({x})
x.setI(5)
console.log(x.getI())


function outer(){
  var num = 1
  function inner(){
    num ++ 
    var num = 3
    console.log({num})
  }

  inner()
}

outer() */

var hero = {
  _name: 'John Doe',
  getSecIdent: function (){
    return this._name
  }
}

var stolenSecretIdentity = hero.getSecIdent.bind(hero)

console.log(stolenSecretIdentity())
console.log(hero.getSecIdent())