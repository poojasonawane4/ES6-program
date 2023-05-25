//? Synchronous Vs Asynchronous
// Synchronous Execution:-
//  - Executing dependent tasks one by one is called Synchronous Execution
//  - it takes more time

// Asynchronous:-
//  - Executing independent tasks simulataneously is called Asynchronous Execution
//  - it improve the performance

//ex: 1.
//? synchronous
// function f1() {
//   console.log("f1");
// }
// function f2() {
//   console.log("f2");
// }
// function f3() {
//   console.log("f3");
// }
// function f4() {
//   console.log("f4");
// }

// f1();
// f2();
// f3();
// f4();

//? Asynchronous Execution
// a)
// function f1() {
//   setTimeout(() => {
//     console.log("f1");
//   }, 100);
// }
// function f2() {
//   console.log("f2");
// }
// function f3() {
//   console.log("f3");
// }
// function f4() {
//   console.log("f4");
// }

// f1();
// f2();
// f3();
// f4();

// b)
console.log("one");

setTimeout(() => {
  console.log("first");
}, 1000);

console.log("two");

setTimeout(() => {
  console.log("second");
}, 0);

console.log("three");

setTimeout(() => {
  console.log("third");
}, 100);
