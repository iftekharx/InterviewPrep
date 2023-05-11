class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

/* binary tree
     a
    /  \
   b   c
 |  \   \
 d  e   f
depth first value:
a, b, d, e, c, f
uses stack:
O(n) time complexity

*/

const depthFirstValues = (root) => {
  if (root === null) return []
  const result = []

  const stack = [root]

  while (stack.length > 0) {
    const current = stack.pop()
    result.push(current.val)

    if (current.right) stack.push(current.right)
    if (current.left) stack.push(current.left)
  }

  return result
}

const depthFirstRecursive = (root) => {
  if (root === null) return []
  const leftValues = depthFirstRecursive(root.left) // b d e
  const rightValues = depthFirstRecursive(root.right) // c f
  return [root.val, ...leftValues, ...rightValues]
}

console.log(depthFirstRecursive(a))

// breadth first search
/*
     a
    /  \
   b   c
 |  \   \
 d  e   f
 
 BFS: a b c d e f (uses queue data structure)
 DFS: a, b, d, e, c, f
 O(n) time complex.
 space: O(n)
*/

const breadthFirstValues = (root) => {
  if (root === null) return []

  const values = []

  const queue = [root]
  while (queue.length > 0) {
    const current = queue.shift() // left shift takes the first element and pops it
    //console.log(current)
    values.push(current.val)

    if (current.left !== null) queue.push(current.left)
    if (current.right !== null) queue.push(current.right)
  }

  return values
}

console.log(breadthFirstValues(a))
