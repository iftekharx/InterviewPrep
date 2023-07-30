let stringArr = ["one", "hey", "Dave"];

let guitars = ["strat", "Les Paul", 5150];

let mixedData = ["Evh", 1984, true];

// stringArr[0] = 42 // different type ts does not like it

guitars[0] = 1984;
guitars.unshift("something"); // right shift
console.log(guitars);

let myTuple: [string, number, boolean] = ["Dave", 42, true];
let mixed = ["John", 1, false];
// myTuple = mixed gives error

let myObj: object;
myObj = []; // arrays are obj in javascript
console.log(typeof myObj);
// {} also objects

const exampleObj = {
  prop1: "Dave",
  prop2: true,
};

type Guitarist = {
  name: string;
  active?: boolean; // optional using ?
  albums: (string | number)[];
};

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 52343, "ou1982"],
};

let jp: Guitarist = {
  name: "Jum",
  albums: ["I", "II"],
};

evh = jp;
console.log(evh);

// type mathFunction = (a: number, b: number) => number;

// let multiply: mathFunction = function (c, d) {
//   return c * d;
// };

// for interface
interface mathFunction {
  (a: number, b: number): number;
}

let multiply: mathFunction = function (c, d) {
  return c * d;
};

console.log(multiply(2, 3));

// default value is 2
const addAll = (a: number = 2, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  } else {
    return a + b;
  }
};

console.log(addAll(2, 3));

// rest parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

console.log(total(1, 2, 3, 4, 5));

const createError = (errMsg: string) => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break; // for this it is void from never
  }
};

const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

// use of the never type
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("this should never happen!"); // typescript happy because we are throwing error for other types
};
