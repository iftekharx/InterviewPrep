// type assertion, type casting

type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific
let a: One = "hello";

let b = a as Two; // a has the type of Two now : less specific type
let c = a as Three; // more specific

// cannot do this in react
let d = <One>"world";
let e = <string>"world"; // alias

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

// assertion to string from number | string
let myVal: string = addOrConcat(2, 2, "concat") as string;

// a string is returned not number here, so becarefull
let nextVal: number = addOrConcat(2, 2, "concat") as number;

const img = document.querySelector("img") as HTMLImageElement;
// non null assertion !
const myImg = document.getElementById("#img")! as HTMLImageElement;
