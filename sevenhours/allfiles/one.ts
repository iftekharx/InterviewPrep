let myName: string = 'Dave'; // explicitly said its a string

// typescript does not like redeclaring variable with different types.

let meaningOfLife: number;

let isLoading: boolean;

let album: number | boolean; // union type

meaningOfLife = 42;
isLoading = true;
album = 52;
album = false; // allows any type redeclaration

const sum = (a: number, b: number): number => {
  return a + b;
};

let re: RegExp = /\w+/g; // regex expression
