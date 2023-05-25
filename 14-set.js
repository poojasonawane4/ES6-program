//! SET

//  - It is used to store unique elements
//  - it is iterable object

//   Note: array can store duplicate elements

//? Create an empty set
// const idList = new Set();

//? create a set from array
const ids = [1, 2, 3, 4, 5, 61, 2, 3, 4, 5];
const idList = new Set(ids);
// console.log(idList);

//? add elements to set
idList.add(20);
idList.add(21);
idList.add(30);
idList.add(30);
idList.add(30);
// console.log(idList);

//? to check availability
// console.log("20", idList.has(20));
// console.log("40", idList.has(40));

//? remove elements
// console.log("21 delete?", idList.delete(21));
// console.log("21 delete?", idList.delete(22));

//? remove all elements
// idList.clear();
// console.log(idList);

//---------------------------

//? for iterations
// for (const ele of idList) console.log(ele);
//        --------- or ----------
// for (const ele of idList.values()) console.log(ele);
// both give same result
//------------------------------------------

//? to process each element
// idList.forEach((ele1) => {
//   console.log(ele1);
// });

//? to know length/size/nos
// console.log(idList.size);

//? spread operator
// console.log(...idList);

//--------------------------------------
//? remove duplicates from an array
// const arr = [10, 20, 10, 30, 50, 40, 60, 20, 10, 20, 10, 20];

// const set = new Set(arr);
// const arr2 = [...set];

// const arr3 = Array.from(set);

// console.log(arr2);
// console.log(arr3);
