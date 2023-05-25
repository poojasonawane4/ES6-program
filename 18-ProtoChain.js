//? Prototype Chaining

//? Accessing prototype
// There are two ways to access the prototype
// 1. By using dunder proto
//    __proto__

// 2. By using
//  Object.getPrototypeOf()

// ex:
function Person(id, name, mobile) {
  this.id = id;
  this.name = name;
  this.mobile = mobile;
}

Person.prototype.country = "India";
Object.prototype.country = "US";

const p1 = new Person(1, "aaa", "1111");
const p2 = new Person(2, "bbb", "2222");
p1.country = "Nepal";
 
console.log(p1.country);

console.log(p1.__proto__.country);
console.log(Object.getPrototypeOf(p1).country);

console.log(p1.__proto__.__proto__.country);
console.log(Object.getPrototypeOf(Object.getPrototypeOf(p1)).country);

console.log(p1.__proto__.__proto__.__proto__); //null
console.log(
  Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(p1)))
);
console.log(p2.country);
