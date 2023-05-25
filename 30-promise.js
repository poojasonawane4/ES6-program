//? Promise:
// - The promise is an object created using Promise() constructor which is
//   used to handle asynchronous operations.

// ex: 1.
//  create an object
// const p = new Promise((resolve, reject) => {

//   //async operation
//   //call resolve() if opertaion is successful
//   //call reject() if opertaion is unsuccessful

//   setTimeout(() => {
//     resolve("data");
//     // reject("err");
//   }, 2000);
// });

// p.then((data) => {
//   console.log("executes if promise resolves");
// });

// p.catch((err) => {
//   console.log("executes if promise rejected");
// });

//--------------------------------------------------

// ex. 2  without creating an object also it can be done
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("data");
//     reject("err");
//   }, 2000);
// })

//   .then((data) => {
//     console.log("executes if promise resolves");
//   })

//   .catch((err) => {
//     console.log("executes if promise rejected");
//   });

//--------------------------------------

// ex:3.
// new Promise((resolve, reject) => {
//   let data = "server data";

//   if (data) resolve(data);
//   else reject("no data available");
// })
//   .then((data) => {
//     console.log("then start");
//     console.log(data);
//     console.log("then end");
//   })
//   .catch((err) => {
//     console.log("Catch Err: ", err);
//   });

//----------------------------------------------

//? sometimes error may get raised in then() instead of promise(),
//? in that case also call goes to catch

// ex:
// new Promise((resolve, reject) => {
//   let data;

//   if (data) resolve(data);
//   else reject("no data available");
// })
//   .then((data) => {
//     console.log("then start");
//     console.log(data);
//     throw new Error("something");
//     console.log("then end");
//   })
//   .catch((err) => {
//     console.log("Catch Err: ", err);
//   });

//-----------------------------------------------------------

// Q. Can u handle promise errors without catch ?
// Ans - Yes, by passing second callback to then(), but this will not handle
//       the errors if raised in the first callback of then() (this method is not used too much as it does not handle errors from then())

//     - if error is handled in then(), then catch() does not get called
//     - in case of catch()...it handles errors raised in both promise() aswell
//       as then()

// ex:
// new Promise((resolve, reject) => {
//   let data ;

//   if (data) resolve(data);
//   else reject("no data available");
// })
//   .then(
//     (data) => {
//       console.log("then start");
//       console.log(data);
//       throw new Error("something");
//       console.log("then end");
//     },

//     (err) => {
//       console.log("then err: ", err);
//     }
//   )
//   .catch((err) => {
//     console.log("Catch", err);
//   });

//--------------------------------------------

//? then() chaining
// - If you call multiple then() on one another is called then() chaining
// - The then() returns a promise

// new Promise((resolve, reject) => {
//   let data = JSON.stringify([
//     { id: 1, name: "aaaa" },
//     { id: 2, name: "bbbb" },
//     { id: 3, name: "cccc" },
//   ]);
//   if (data) resolve(data);
//   else reject("no data available");
// })
//   .then((data) => {
//     //parse the data
//     const pData = JSON.parse(data);
//     return pData;
//   })
//   .then((data) => {
//     //sort by id in ascending order
//     const sData = data.sort((a, b) => a.id - b.id);
//     return sData;
//   })
//   .then((data) => {
//     //print the names
//     data.forEach((user) => {
//       console.log(user.name);
//     });
//   })

//   .catch((err) => {
//     console.log("Catch:", err);
//   });

//? multiple promises
//  - Perform an operation if multiple promises resolves

//? Promise.all
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("p1");
//     reject("error");
//   }, 2000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("p2");
//   }, 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("p3");
//   }, 3000);
// });

// Promise.all([p1, p2, p3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//? Promise.race
// - depends upon the output of first promise
//   i.e if first promise is resolved then resolved and if first promise is
//   rejected then rejected

// ex:
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("p1");
//     reject("error");
//   }, 2000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("p2");
//   }, 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("p3");
//   }, 3000);
// });

// Promise.race([p1, p2, p3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//----------------------------------------------

//? Promise.resolve
// ex:
// console.log("start");

// Promise.resolve().then((data) => {
//   console.log("then");
// });

// Promise.reject("something is wrong")
//   .then(() => {
//     console.log("then");
//   })

//   .catch((err) => {
//     console.log("catch", err);
//   });

// console.log("end");

//-------------------------------------

// - if in case we want a specific output as resolve() then resolve can be
//   directly called

// ex:
// console.log("start");

// Promise.resolve().then((data) => {
//   console.log("then");
// });

// console.log("end");

//------------------------------

// - if in case we want a specific output as reject() then reject can be
//   directly called

// ex:
// console.log("start");

// Promise.reject("something is wrong")
//   .then(() => {
//     console.log("then");
//   })

//   .catch((err) => {
//     console.log("catch: ", err);
//   });

// console.log("end");

//---------------------------------

//? finally in promise
// - finally executes in both resolve and reject cases..it is new addition

// ex:
// console.log("start");

// Promise.resolve()
//   .then((data) => {
//     console.log("then");
//   })

// Promise.reject("something is wrong")
//   .catch((err) => {
//     console.log("catch: ", err);
//   })

//   .finally((msg) => {
//     console.log("finally", msg);
//   });

// console.log("end");
