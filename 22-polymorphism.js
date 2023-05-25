//? POLYMORPHISM
// - same name different forms
// - the class methods can be polymorphic
// - The polymorphism can be achieved using method overloading or
//   method overriding
// Note:- Method overloading is not supported in javascript

//? Method overloading:-
// - If you declare multiple methods having same name with different
//   parameters in a class is called method overloading

//?  in Java
// byte, short, int, long, float, double,etc .

// ex:
// class Addition{
//   byte add(byte a, byte b){
//     return a+b
//   }
//   int add(int a, int b){
//     return a+b
//   }
//   double add(double a, double b){
//     return a+b
//   }
// }

// obj.add(10,20.90)

//? in javascript

// ex:
// class Addition {
//   add(a, b) {
//     return a + b;
//   }
//   add(a, b, c) {
//     return a + b + c;
//   }
//   add(a, b, c, d) {
//     console.log("a", "b", "c", "d");
//     return a + b + c + d;
//   }
// }

// const obj = new Addition();
// console.log(obj.add(10, 20));
// console.log(obj.add(10, 20, 30));
// console.log(obj.add(10, 20, 30, 40));

// In javascript methods cannot be differentiated based on their
// parameters but method overloading needs to differentiate
// the methods based on parameters, therefore method overloading
// does not work in javascript
