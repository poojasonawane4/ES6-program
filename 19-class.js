//? constuctor function
// const Person2 = (() => {
//   function Person2(name) {
//     this.name = name;
//   }

//   Person2.prototype.printProfile = function () {
//     console.log(`Name: ${this.name}`);
//   };
//   return Person2;
// })();

//! class
//   - a class is model of an object
//   - class defines the state and behaviour of the objects
//   - In javascript classes are the functions

//? type of class
// class Person {}
// console.log(typeof Person);

//? type of function
// function Person2() {}
// console.log(typeof Person2);

//? constructor function (constructor function with methods...hard to handle)
// ex: 1.

// const Person2 = (() => {
//   function Person2(name) {
//     this.name = name;
//   }
//   Person2.prototype.printProfile = function () {
//     console.log(`Name: ${this.name}`);
//   };
//   return Person2;
// })();

// console.log(typeof Person2);

// const obj2 = new Person2("User2");
// console.log(obj2);
// obj2.printProfile();

//? class
// ex: 1.
class Person {
  constructor(name) {
    this.name = name;
  }
  printProfile() {
    console.log(`Name: ${this.name}`);
  }
}

console.log(typeof Person);

const obj1 = new Person("User1");
console.log(obj1);

obj1.printProfile();
