//? prototype (Inheritance)
//   - The prototype is an object which is used to declare the
//     properties and methods to be reused by other objects.

//? 1. obj is ready and set prototype
// const emp1 = {
//   id: 1,
//   name: "aaa",
//   mobile: "1111",
// };

// const emp2 = {
//   id: 2,
//   name: "bbb",
//   mobile: "2222",
// };

// const empProto = {
//   company: "TATA",
//   printProfile() {
//     console.log(`Name: ${this.name} Mobile: ${this.mobile}`);
//   },
// };

// console.log("E1 Comp: ", emp1.company); //undefined
// console.log("E1 Comp: ", emp2.company); //undefined

// Object.setPrototypeOf(emp1, empProto);
// Object.setPrototypeOf(emp2, empProto);

// console.log("E1 Comp: ", emp1.company);
// console.log("E1 Comp: ", emp2.company);
// emp1.printProfile();
// emp2.printProfile();

//? 2. prototype is ready and create object (object.create method)

// const empProto = {
//   company: "TATA",
//   printProfile() {
//     console.log(`Name: ${this.name} Mobile: ${this.mobile}`);
//   },
// };

// const emp1 = Object.create(empProto);
// emp1.id = 1;
// emp1.name = "aaa";
// emp1.mobile = "1111";

// const emp2 = Object.create(empProto);
// emp2.id = 2;
// emp2.name = "bbb";
// emp2.mobile = "2222";

// console.log("E1 Comp: ", emp1.company);
// console.log("E1 Comp: ", emp2.company);
// emp1.printProfile();
// emp2.printProfile();

//? 3. prototype in Constructor Function

function Person(id, name, mobile) {
  this.id = id;
  this.name = name;
  this.mobile = mobile;
  //   this.country = "India";
}

Person.prototype.country = "India";

const p1 = new Person(1, "aaa", "1111");
const p2 = new Person(2, "bbb", "2222");

console.log(p1.country);
console.log(p2.country);
console.log(Person.prototype.constructor);

//? shadowing or overriding
//  - when a property is already available in object then object uses that
//    property and value, object does not go to the prototype for inheriting
//    it property. so the property of object overshadows the the prototypes
//    property

//todo diff b/n constructor and prototype
// constructor is a function that is used to create an object and initialize its
// properties, while prototype is an an object that contains properties and
// methods that are inherited by objects created from constructor function
//   (see diagram along with this defination)
