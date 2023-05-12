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
function outer() {
  let counter = 0

  function inner() {
    counter++
    console.log(counter)
  }
  return inner
}

const fn = outer()
fn()
fn()
