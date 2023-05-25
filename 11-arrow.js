//? Arrow function
//   - it is a shorter way to define a function
//   - 'this' in arrow function always refers to the context under which the
//     function is defined.
//   - the arrow function does not have its own 'arguments' object

//   Syntax:
//     (parameters) => { body }

// const sq1 = function (num) {
//   return num * num;
// };

// const sq2 = (num) => {
//   return num * num;
// };

//Rules:-
//   - if there is single parameter then pair of parenthesis is optional
//   - if there is single statement/expression then 'return' statement and curly
//     braces is optional

const sq2 = (num) => num * num;

// console.log(sq1(10));
console.log(sq2(10));
