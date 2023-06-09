// async course
// topics:
// timeouts and intervals, callbacks,
// promises, async await, event loop

// javascript is single threaded
function greet(name) {
  console.log(`hello ${name}`)
}

// const timer = setTimeout(greet, 2000)
// clearTimeout(timer) // cancels timer

// const intervalId = setInterval(greet, 2000) // every 2 seconds it runs
// clearInterval(intervalId)

// recursive setTimeout
// setTimeout(function run() {
//   console.log('hello')
//   setTimeout(run, 100)
// }, 100)

function greetBob(greetFn) {
  const name = 'bob'
  greetFn(name)
}
/*
 Callbacks
*/
greetBob(greet)

// Promises
const onFullfillment = (result) => {
  console.log(result)
  console.log('set up the table to eat tacos')
}

const onRejection = (error) => {
  console.log(error)
  console.log('Start cooking pasta')
}

const promise = new Promise((resolve, reject) => {
  resolve()
})

promise.then(onFullfillment).catch(onRejection) // pending to fulfilled

const promise1 = Promise.resolve(3)
const promise2 = 42
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo')
})

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values)
}) // if one promise promise.all will reject with that message

//Promise.allSettled - Waits for all input promises to complete
//regardless of whether or not one of them is rejected

//Promise.race() - returns a promise that fulfills or rejects as soon as one of the input promises
//fullfills or rejects, with the value or reason from that promise
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one')
})
const promise5 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two')
})

Promise.race([promise4, promise5]).then((value) => {
  console.log(value)
})

// async await
async function greetA() {
  let promise6 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello'), 1000)
  })
  let result = await promise6
  console.log(result)
}

// greetA()

function resolveHello() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve('Hello')
    }, 2000)
  })
}

function resolveWorld() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve('World')
    }, 1000)
  })
}

async function sequentialStart() {
  const hello = await resolveHello()
  const world = await resolveWorld()
  console.log(world)
}

async function concurrentStart() {
  const hello = resolveHello()
  const world = resolveWorld()

  console.log(await hello)
  console.log(await world) // immediately logged to console
}

// concurrentStart() // Hello, World, sequential

// parallel exec

function parallel() {
  Promise.all([
    (async () => console.log(await resolveHello()))(),
    (async () => console.log(await resolveWorld()))(),
  ])
}

parallel() // World, Hello

// Event loop
const pr = fetch('www.udemy.com/vishwas')
pr.then((value) => {
  console.log('promise value is ', value)
})

console.log('second')
