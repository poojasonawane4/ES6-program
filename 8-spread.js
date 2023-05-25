//? spread operator
//  - Spread operator is used to spread/extract elements from the iterable objects

// Syntax:
//   ...IterableObject

// array:
// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// console.log(arr);
// console.log(...arr);

// console.log(Math.min(...arr));
// console.log(Math.max(...arr));

// string:
// const str = "Topper Skills";
// console.log(...str);

//---------------------------------------------------

// - object is non iterable
// const obj = {
//   a: "aa",
//   b: "bb",
//   c: "cc",
// };
// console.log(...obj);

// to make obj iterable
const obj = {
  a: "aa",
  b: "bb",
  c: "cc",
};
obj[Symbol.iterator] = function* () {
  yield this.a;
  yield this.b;
  yield this.c;
};
console.log(...obj);

//array, set, map are built-in iterables
