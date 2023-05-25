//? rest operator
//  - The rest operator is used to store/hold rest of the elements/arguments/properties
//  - The rest operator can be an array or object based on its use
//  - The rest operator must be last

// Syntax :
// ...variableName

// ex: for function
// function add(a, b, ...args) {
//   console.log(a, b, args);
// }

// add();
// add(10);
// add(10, 20);
// add(10, 20, 30, 40, 50, 60);

//------------------------------------------------

// ex: for array

// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// const [a, b, c, ...elements] = arr;
// console.log(a, b, c, elements);

//---------------------------------------------------

// ex: for object

const obj = {
  a: "aa",
  b: "bb",
  c: "cc",
  d: "dd",
  e: "ee",
};
const { a, e, d, ...props } = obj;
console.log(a, e, d, props);
