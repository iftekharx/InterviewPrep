// async course
// topics:
// timeouts and intervals, callbacks,
// promises, async await, event loop

// javascript is single threaded
function greet() {
  console.log('hello')
}

// const timer = setTimeout(greet, 2000)
// clearTimeout(timer) // cancels timer

// const intervalId = setInterval(greet, 2000) // every 2 seconds it runs
// clearInterval(intervalId)

// recursive setTimeout
setTimeout(function run() {
  console.log('hello')
  setTimeout(run, 100)
}, 100)
