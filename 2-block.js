//? block scope vs not block scope

// 1)
// var a = 10;
// var b = 20;

// if (true) {
//   var a = 100;
//   var b = 200;
//   console.log(a);
//   console.log(b);
// }
// console.log(a);
// console.log(b);

//=========================

// 2)
// var a = 10;
// var b = 20;

// if (true) {
//   var a = 100;
//   let b = 200;
//   console.log(a);
//   console.log(b);
// }
// console.log(a);
// console.log(b);

////////////////////////
function a() {
  return function c() {
    var b = 10;
  };
}
a();
console.log(b);
