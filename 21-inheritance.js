//? INHERITANCE:
//  - Acquiring properties of super class into sub class is called
//    inheritance
//  - Code reusability is the purpose of inheritance

// syntax: class Subclass extends superclass{

// }

// ex: 1.
// class Person {
//   name;
//   mobile;
//   email;
//   city;
//   gender;
//   printProfiles() {
//     console.log(this.name);
//   }
// }

// class Student extends Person {
//   rollNo;
// }

// class Parent extends Person {}

// class Teacher extends Person {
//   empID;
//   salary;
// }

// const e1 = new Student();
// const e2 = new Teacher();

// console.log(e1);
// console.log(e2);

//? Constructor in Inheritance

// class A {
//   name;
//   city = "pune";
//   constructor(name) {
//     this.name = name;
//   }
// }

// class B extends A {
//   age;
//   constructor(name, age) {
//     super(name);
//     this.age = age;
//   }
// }

// const b = new B("aaaa", 10);
// console.log(b.name);
// console.log(b.city);
// console.log(b.age);

// **inheritance and polymorphism are object oriented** //

//todo constructor in class is mainly used to deal with methods.

//--------------------------------------------

// ex:
// class A {
//     name;
//     mobile;
//     city;
//     constructor(name, mobile, city) {
//       this.name = name;
//       this.mobile = mobile;
//       this.city = city;
//     }
//   }

//   class B extends A {
//     lane;
//     street;
//     constructor(name, mobile, city, lane, street) {
//       super(name, mobile, city);
//       this.lane = lane;
//       this.street = street;
//     }
//   }

//   const b1 = new B("topper", 123, "pune", "inside", "15");
//   console.log(b1);
