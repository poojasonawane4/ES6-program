//? MAP

// - it stores data in key value pair called entry
// - the keys must be unique
// - values can be duplicated

// //? Create an empty map
// const studList = new Map();
// console.log(studList);

// existing entries
// [key,values]

//? create a map of students
const studList = new Map([
  [1, "Aaaa"],
  [2, "Bbbb"],
  [3, "Cccc"],
  [3, "Dddd"],
]);
console.log(studList);

//? add & replace an entry
studList.set(4, "Dddd");
studList.set(5, "Eeee");
studList.set(2, "Ffff");
studList.set(6, "Ffff");
// console.log(studList);

//? get()
// console.log("name of 4", studList.get(4));
// console.log(studList);

//? has()
// console.log("is 5 avail", studList.has(5));
// console.log(studList);

//? delete()
// studList.delete(2);
// console.log(studList);

//? size
// console.log("Total:", studList.size);

//? get only keys
// for (const k of studList.keys()) console.log("Roll:", k);

//? get values seperate
// for (const v of studList.values()) console.log("Roll:", v);

//? get keys and values together
// a) first way:
// for (const entry of studList.entries()) console.log(entry[0] + "->" + entry[1]);

// a) second way:
// for (const [roll, name] of studList.entries())
//   console.log(roll + " -> " + name);

//? to get all entrie s
// const stu = studList.entries();
// console.log(stu);
