//? symbol
//   - The symbol is the primitive datatype which is used to create unique values
//   - Symbol values are guaranteed unique
//   - Symbol() is not a perfect constructor therefore you cannot use new keyword

// const s1 = new Symbol("id");
// const s1 = Symbol("id");
// const s4 = Symbol("id");
// const s2 = Symbol("User id");
// const s3 = s1;

// console.log(s1 == s2);
// console.log(s1 === s2);
// console.log(s1 === s3);
// console.log(s1 === s4);

// console.log(s2);

//? storing the symbols in global symbol registry

// const s5 = Symbol.for("id");
// const s6 = Symbol.for("id");
// const s7 = Symbol.for("name");

// console.log(s5 == s6);
// console.log(s5 == s7);

// console.log(Symbol.keyFor(s1));
// console.log(Symbol.keyFor(s5));

//--------------------------------------------

//? without symbol
// const obj = {
//   id: 1,
// };
// obj.id = 2;
// console.log(obj.id); // value can be changed
// console.log(obj.id); // id called

//? with symbol
const idS = Symbol.for("id");
const obj = {
  id: 1,
  [idS]: 1,
};

// obj.id = 2;
console.log(obj);
console.log(obj[idS]); // value not changed
