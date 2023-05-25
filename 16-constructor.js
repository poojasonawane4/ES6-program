//? Constructor function
//   - The function which is used to initialize the object properties
//     at the time of creating an object.
//   - name of the constructor function starts with uppercase letter

function Person(name, mobile, city) {
  this.name = name;
  this.mobile = mobile;
  this.city = city;
}

const p1 = new Person("aaa", "1111", "pune");
console.log(p1);

const p2 = new Person("bbb", "2222", "mumbai");
console.log(p2);
