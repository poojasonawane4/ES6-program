//? Safe Navigation/Chaining Operator
// - whenever we try to access the property of an obj, that property should
//   get accessed only when that obj is a valid obj

// ex:
const obj = {
  name: "Topper  Skills",
  address: {
    city: "pune",
  },
  print() {
    console.log(`name:${this.name}, city:${this?.address?.city}`);
  },
};

// let obj;

// using AND &&:
// console.log(obj && obj.name);
// obj && obj.print();

// using ternary operator:
// console.log(obj ? obj.name : "");
// obj ? obj.print() : "";

// using safe navigation/chaining operator:
console.log(obj?.name);
obj?.print();
