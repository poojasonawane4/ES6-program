// these are must
// iterable
// iterators
// generators
// generator function

// sync vs async
// event loop
// timers
// callbacks
// promises
// async await

//? ITERABLE
//   - object is by default non iterable
//   - The object which can be iterated is called iterable
//   - To make any object iterable it must follow iterable protocol.

//? Iterable protocol:-
//   - To make an object iterable it must have Symbol.iterator property having
//     a no parameter function which returns iterator

// ex 1)
//? a)  without symbol (obj is non iterable)
// const obj = { a: "aaa", b: "bbb" };
// for (const v of obj) console.log(v);

//? b)  with symbol   ( making obj iterable)
// const obj = { a: "aaa", b: "bbb" };
// obj[Symbol.iterator] = function* () {
//   yield this.a;
//   yield this.b;
// };
// for (const v of obj) console.log(v);

// ex: 2.
const nums = [10, 20, 30, 40, 50, 60];
// console.log(nums[Symbol.iterator]);
// console.log("abcd"[Symbol.iterator]);

// const obj = {};
// console.log(obj[Symbol.iterator]); //(since object is non-iterable for obj gives undefined coz internally symbol.iterator absent in obj )

// const iterator = nums[Symbol.iterator](); //(symbol.iterator is a function...when that function is called it returns an iterator  )
// console.log(iterator.next());

//? ITERATOR
// Iterator protocol :-
//   - An object having 'next' method
//   - this method returns an object having
//     'value' and 'done' properties.

//     Ex:
//     const iterator = {
//             next(){
//                 return {value:"",done:false}
//             }
//     }

// ex:
// const arr = [10, 20, 30, 40, 50];
// const itr = arr[Symbol.iterator]();
// console.log(itr);
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());

//? GENERATOR FUNCTION
//  - If the '*' is appended at the end of 'function' keyword while declaring
//    a function then that function is called generator function.
//    Ex:
//         function* f1(){

//         }

//   - Generator function returns generator object

// const generatorObj = f1()

//   - Generator function can execute parts by parts means it can be exited
//     and resumed

// ex:
//? generator object as iterator

// function* f2() {
//   console.log("first part");
//   yield 10;
//   console.log("second part");
//   yield 20;
//   console.log("third part");
// }
// const itr = f2();
// console.log(itr.next());
// console.log("one");
// console.log(itr.next());
// console.log("two");
// console.log(itr.next());

//? GENERATOR OBJECT
// ex:
// function* f2() {
//   console.log("first part");
//   yield 10;
//   console.log("second part");
//   yield 20;
//   console.log("third part");
// }

//? generator object as iterator
// const itr = f2();
// console.log(itr.next());
// console.log("one");
// console.log(itr.next());
// console.log("two");
// console.log(itr.next());

//? generator object as iterable
// const iterable = f2();

// console.log("**** for of ****");
// for (const v of iterable) console.log(v);
// console.log("***** next ****");

// const i = iterable[Symbol.iterator]();
// console.log(i.next());
// console.log(i.next());
// console.log(i.next());

//----------------------

// function* add(num) {
//   yield num + 1;
//   yield num + 2;
//   yield num + 3;
// }

// function* f1(i) {
//   yield i + 5;
//   yield* add(i);
//   yield i + 10;
// }

// const gen = f1(10);

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
