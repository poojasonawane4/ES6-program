//? Object Destructuring

const person = {
  name: "Topper Skills",
  age: 5,
  mobile: "35545344",
  city: "pune",
};

// normal way
// const name = person.name;
// const phone = person.mobile;
// const city = person.city;
// console.log(name, phone, city);

// destructure
const { city, mobile: phone, name } = person;
console.log(name, phone, city);
