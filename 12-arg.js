// (function(obj,require,module,__filename,dirname))

// a)
// console.log(arguments);
// console.log(__dirname);
// console.log(__filename);
// console.log(module);
// console.log(require);

// b)
// named and anonymous fun has its own arguments obj
// function f1() {
//   console.log(arguments);
// }
// f1(10, 20, 30);

// c)
// arrow function does not have it own arguments obj
// it takes the arguments obj of its parent (here global is parent)

const f2 = () => {
  console.log(arguments);
};
f2(10, 20, 30);
