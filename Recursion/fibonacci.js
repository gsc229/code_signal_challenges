
let functionCalls = 0

function fibonacci(n, memo){
  functionCalls += 1

  
  memo = memo || {}
  console.log({n, "n-1": n-2, "n-2": n-1, memo})
  
  if(memo[n]) return memo[n]

  if(n===0){
    return 0
  }

  if(n <= 1){
    return 1
  }

  return memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo)
}

const n1 = 8

// 8                                                          (7)                                              +                                                 (6) 
//                                        (6)                  +                       (5)                                                 (5)                    +                      (4)
//                            (5)          +         (4)              (4)               +           (3)                          (4)        +          (3)                         (3)    +    (2) 
//                      (4)    +     (3)       (3)   +  (2)        (3) +   (2)                (2)   +   (1)**              (3)    +    (2)        (2)   +   (1)**                 (2)+(1)**  (1)**+(0)*
//                
//               (3)    +    (2)   (2)+(1)**  (2)+(1)** (1)**+(0)*  (2)+(1)** (1)**+(0)*        (1)**+(0)*                     (2)+(1)**   (1)**+(0)*   (1)**+(0)*                       (1)**+(0)*
//
//           (2)+(1)**   (1)**+(0)* (1)**+(0)* (1)**+(0)*        (1)**+(0)*                                               (1)**+(0)*
//       
//        (1)**+(0)*
//

console.log({result: fibonacci(8), functionCalls})