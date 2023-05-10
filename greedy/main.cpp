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
/* 1. In the activity scheduling example there is a 'start' and a 'finish time' for
every activity. Each activity is indexed by a number for reference. There are two 
activity categories.
  a. considered activity: is the Activity, which is the reference from which the 
  abilityto do more than one remaining activity is analyzed.
  b. remaining activity: activities at one or more indexes ahead of considered 
  activity.
*/

// the total duration gives the cost of performing the activity. That is 
/*(finish - start) gives us the durational as the cost of an activity.
 // You will learn that the greedy extent is the number of remaining activities 
 you can perform in the time of a considered activity.
*/

// Architecture of the Greedy Approach

/* step1: Scan the list of activity costs, starting with index 0 as the considered
index.*/

/*step2: When more activities can be finished by the time, the considered activity
finishes, start searching for one or more remaining activities.*/

/*step3: If there are no more remaining activities, the current remaining activity 
becomes the next considered activity. Repeat step 1 and step 2, with the new 
considered activity. If there are no remaining activities left, go to step 4.*/

/*step4: Return the union of considered indices. These are the activity indices 
that will be used to maximize throughput.*/


