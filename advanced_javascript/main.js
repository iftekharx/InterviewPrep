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
// function sum(a, b, c) {
//   return a + b + c
// }

// console.log(sum(2, 3, 5))

// function curry(fn) {
//   return function (a) {
//     return function (b) {
//       return function (c) {
//         return fn(a, b, c)
//       }
//     }
//   }
// }
// const carriedSum = curry(sum)
// console.log(carriedSum(2)(3)(5))

// const add2 = carriedSum(2)
// const add3 = add2(3)
// const add5 = add3(5)

// console.log(add5)

// const person = {
//   name: 'iftekhar',
//   sayMyName: function () {
//     console.log(`My name is ${this.name}`)
//   },
// }

// globalThis.name = 'Antman'

// function sayMyName() {
//   console.log(`My name is ${this.name}`)
// }

// sayMyName.call(person)

// function Person(name) {
//   // this = {}
//   this.name = name
// }

// const p1 = new Person('Batman')
// const p2 = new Person('Spiderman')
// console.log(p1.name, p2.name)

// sayMyName()

function Person(fName, lName) {
  this.firstName = fName
  this.lastName = lName
}
Person.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName
}

function SuperHero(fName, lName) {
  Person.call(this, fName, lName)
  this.isSuperHero = true
}

SuperHero.prototype = Object.create(Person.prototype)

const hero = new SuperHero('Bruce', 'Wayne')
SuperHero.prototype.constructor = SuperHero

console.log(hero.getFullName())

const person1 = new Person('Bruce', 'Wayne')
const person2 = new Person('Cal', 'wziniak')

console.log(person2.getFullName())

class Person2 {
  constructor(fName, lName) {
    this.firstName = fName
    this.lastName = lName
  }

  sayMyName() {
    return this.firstName + ' ' + this.lastName
  }
}

const classP1 = new Person2('Spida', 'Lcisn')

console.log(classP1.sayMyName())

class SuperHero2 extends Person2 {
  constructor(fName, lName) {
    super(fName, lName)
    this.isSuperHero = true
  }

  fightCrime() {
    console.log('Fight Fight Fight!')
  }
}

const batman2 = new SuperHero2('Bruce', 'Wayne')

console.log(batman2.sayMyName())
