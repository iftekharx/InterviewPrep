// // nested scopes
// let a = 10
// function outer() {
//   let b = 20
//   function inner() {
//     let c = 30
//     console.log(a, b, c)
//   }

//   inner()
// }

// outer()

// closures: the combination of the function and its scope chain is called
// closure
// function outer() {
//   let counter = 0

//   function inner() {
//     counter++
//     console.log(counter)
//   }
//   return inner
// }

// const fn = outer()
// fn()
// fn()

// Function Currying
function sum(a, b, c) {
  return a + b + c
}

console.log(sum(2, 3, 5))

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c)
      }
    }
  }
}
const carriedSum = curry(sum)
console.log(carriedSum(2)(3)(5))

const add2 = carriedSum(2)
const add3 = add2(3)
const add5 = add3(5)

console.log(add5)

function sayMyName(name) {
  console.log(`My name is ${name}`)
}

sayMyName('Walter White')
