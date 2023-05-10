// what is greedy algorithm
/* In greedy algorithm a set of resources are recursively divided based
on the maximum, immediate availability of that resoruce at any given 
stage of execution */

// two stages:
/*1. Scanning the list of items
  2. Optimization
  */

 // requirements
 // 1. reqcursion
 // 2. context switching

 // Conditions
 /* 1. Each stepwise solution must structure a problem towards
 its best accepted solution.
 2. It is sufficient if the structuring of the problem can halt
 in a finite number of greedy steps.*/

 // Characteristics of the Greedy Algorithm
/*
 * 1. There is an ordered list of resources, with costs or value attributes.
  These quantify constraints on a system.
  2. You will take maximum quantity of resources in the time a constraint 
  applies.
  3. For example, in an activity scheduling problem, the resource costs are in hours,
  and the activities need to be performed in serial order.
*/

// Why use Greedy approach?
/* 1. The greedy approach has a few tradeoffs, which may make it suitable for 
optimization
2. Most feasible solution immediatly achived. In the activity selection problem
if more activities can be done before finishing the current activity, these
activities can be performed within the same time.
3. Another reason is to divide a problem recursively based on a condition, with
no need to combine all the solutions.
4. In the activity selection problem, the 'recursive division' step is achieved
by scanning a list of items only once and considering certain activities.
*/

// How to solve the actibity selection problem
// Activity       Start(hours)              Finish (hours)
//   1              1                           5
//   2              6                           9
//   3              8                           9
//   4              4                           8
/* 1. */