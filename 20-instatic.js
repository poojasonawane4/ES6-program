//todo static vs instance

// ex:
// class ClassName{
//   members
//     - object/instance level members
//     - class level members

// }

//? Instance Members:-
// Instance properties:-
//    - The properties which are used to maintain object specific
//      values are called instance properties
//    - The instance properties are stored inside the objects
//    - The instance properties can be accessed on the object.
//    - The instance properties can be accessed from instance methods
//      using 'this' keyword

// Instance Methods:-
//    - The methods which are defined to perform object specific operations
//      are called instance methods
//    - The instance methods are invoked on objects

//? static keyword:-
// The static keyword is used to declare class level members

// static properties:-
//   - The properties declared with 'static' keyword are called
//     static properties
//   - static properties are used to store the value which is
//     common/same for all the objects of the class.
//   - static properties gets created at the time class loading
//   - static properties gets one time memory allocation this
//     reduces memory usage.
//   - The static properties are accessed on class name.

// Static methods:-
//   - a method declared with 'static' is called static method
//   - static methods are used to perform object independent operations
//   - static methods can be executed without creating an object
//   - static methods can be accessed using className.

//----------------------------

// a) instance
// class Encryption {
//   encrypt(text) {
//     return text + "abc";
//   }
// }

// const en = new Encryption();
// console.log(en.encrypt("xyz"));

// b) static
// class Encryption {
//   static encrypt(text) {
//     return text + "abc"; // we had to create object
//   }
// }

// console.log(Encryption.encrypt("xyz")); // no need to create object

//-----------------------------------------

// ex: 1. instance
// class Employee {
//   id;
//   name;
//   company;
//   constructor(id, name, company) {
//     this.id = id;
//     this.name = name;
//     this.company = company;
//   }
// }

// const e1 = new Employee(10, "aaaa", "tata");
// const e2 = new Employee(11, "bbbb", "tata");
// const e3 = new Employee(12, "cccc", "tata");
// console.log(e1);
// console.log(e2);
// console.log(e3);

//-------------------------------------------------

// ex: 2. static
// class Employee {
//   id;
//   name;
//   static company = "tata";
//   constructor(id, name, company) {
//     this.id = id;
//     this.name = name;
//     // this.company = company;
//   }
// }

// const e1 = new Employee(10, "aaaa", "tata");
// const e2 = new Employee(11, "bbbb", "tata");
// const e3 = new Employee(12, "cccc", "tata");
// console.log(e1);
// console.log(e2);
// console.log(e3);
// console.log(Employee.company); //even if object is not created this property is available (try it by deleting objects)

//-------------------------------------------------------

// ex: 3.
class Employee {
  id;
  name;
  static company = "Tata";
  constructor(id, name, company) {
    this.id = id;
    this.name = name;
    // this.company = company;
  }

  //in instance method the static property cannot be accessed with 'this' keyword..to do that use class name instead of this
  printProfile() {
    console.log(`ID: ${this.id} Company: ${Employee.company}`);
  }

  //in static method static property can be accessed with 'this' keyword but instance property cannot be accessed with this keyword
  static getCompany() {
    console.log(`ID: ${this.id}  Company: ${this.company}`);
  }
}

const e1 = new Employee(10, "aaaa", "tata");
const e2 = new Employee(11, "bbbb", "tata");
const e3 = new Employee(12, "cccc", "tata");
// console.log(e1);
// console.log(e2);
// console.log(e3);
// console.log(Employee.company);
// e1.printProfile();

// e1.getCompany();
Employee.getCompany();

//-----------------------------------------------------
