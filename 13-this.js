//? this in arrow function
// - this is used to access/refer the current running object/context

// named & anonymouse function:
// - in case of named and anonymouse functions context is depend on where the functions
//   are called and not on the where function is defined
// - in case of named and anonymouse functions the context is the object/context
//   under which the functions are called
// - in case of named and anonymouse functions context changes

// arrow function:
// - in case of arrow function context is depend on where the function is defined
//   and not on where the function is called
// - in case of arrow function the context will be the context/object under which
//   the function is defined
// - in case of arrow function context does not changes

// ex: 1.
// const person = {
//   name: "Topper Skills",
//   city: "Pune",
//   print() {
//     // console.log("this:", this);

//     return function () {
//       console.log("Ano: ", this);
//     };

// return () => {
//   console.log("Arrow: ", this);
// };
//   },
// };

// person.print(); //calling outer function

// console.log("this global:", this);

// const ano = person.print(); //calling nested function
// ano();

//--------------------------------------------------

// ex: 2.
class Student {
  name = "Topper skills";
  city = "pune";

  print() {
    console.log("print:", this);
  }

  print2 = function () {
    console.log("print2:", this);
  };

  print3 = () => {
    console.log("print3:", this);
  };
}

const stud = new Student();
console.log(stud);
// stud.print();
// stud.print2();
// stud.print3();

const print1 = stud.print;
const print2 = stud.print2;
const print3 = stud.print3;

// print1();
// print2();
// print3();
