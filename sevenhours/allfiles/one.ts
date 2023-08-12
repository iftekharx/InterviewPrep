let myName: string = "Dave"; // explicitly said its a string

// typescript does not like redeclaring variable with different types.

let meaningOfLife: number;

let isLoading: boolean;

let album: number | boolean; // union type

const sum2 = (a: number, b: number): number => {
  return a + b;
};

console.log(sum2(100, 200));

// meaningOfLife = 42;
// isLoading = true;
// album = 52;
// album = false; // allows any type redeclaration

// const sum = (a: number, b: number): number => {
//   return a + b;
// };

// let re: RegExp = /\w+/g; // regex expression

interface Car {
  name: string;
  enginePower: number;
  color: string;

  startEngine(): void;
}

class Ferrari implements Car {
  public enginePower = 100;
  n: string;
  color: string;

  constructor(n: string, color: string) {
    this.n = n;
    this.color = color;
  }

  get nameValue() {
    return this.n;
  }

  set nameValue(x) {
    this.n = x;
  }

  startEngine() {
    console.log("Engine started");
  }
}

let car1: Ferrari = new Ferrari((n = "Ferrarri"), (color = "Black"));
car1.startEngine();
