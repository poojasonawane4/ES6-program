// setTimeout;
// clearTimeout;

// setInterval;
// clearInterval;

// setImmeduate;  // non standard
// clearImmediate;  // non standard

// console.log(window)  // window is not defined...not a part of js
// alert("hii")  // alert is not defined... not a part of js

//? Timer API
//   - timer api is not a part of javascript

//? setTimeout()
//   - it is used to invoke/call a function after some delay only once

// Syntax:
// setTimeout(function, delay, args1, argsN);

// function setTimeout(fun, delay, ...args){
//   fun(...args)
// }

// ex:
// a)
// function print(name, city) {
//   console.log(`Name: ${name}, City: ${city}`);
// }

// setTimeout(print, 3000, "Topper Skills", "Pune");
// or
// const timerId = setTimeout(print, 3000, "Topper Skills", "Pune");
// clearTimeout(timerId);

// b)
// function add(a,b) {
//   console.log(a+b);
// }

// setTimeout(add,3000,10,20);

//? setInterval()
//  - it calls the function after the specified time interval

// ex:
// a)
// function time() {
//   console.log(new Date().getSeconds());
// }
// setInterval(time, 1000);

// b)
// let count = 1;
// const timer = setInterval(() => {
//   console.log("interval  ", count++);
// }, 500);

// setTimeout(() => {
//   clearInterval(timer);
// }, 5100);

//---------------------------------------------------------

//? setImmediate:
// const timer = setImmediate(() => {
//   console.log("immediate");
// });
// clearImmediate(timer);

//---------------------------

// function f1() {
//   console.log("f1");
// }
// f1();

//-------------------------------------------------------

//? Function Recursion
//  - If a function calls itself then it is called function recursion

// ex: 1.
// let count = 1;
// function f1() {
//   console.log("f1", count++);
//   f1();
// }
// f1();

// ex: 2.  print 1-100
// function print(num) {
//   console.log(num);
//   if (num <= 99) print(num + 1);
// }
// print(1);
