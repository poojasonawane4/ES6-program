//todo async function
// - if you define a function with 'async' keyword then it is called async function
// - async returns Promise

// ex:
// function print() {
//   console.log("in print");
//   return 10;
// }

// console.log("starting");
// console.log(print());
// console.log("ending");

//------------------------------

// ex: asynchromous function

// async function print() {
//   console.log("in print");
//   return 10;
// }

// console.log("starting");
// console.log(print());
// console.log("ending");

// print().then((data) => {
//   console.log(data);
// }); //(since async returns promise therefore then() can be directly called on that function)

// print().then(console.log);

//-------------------------------------------------

//? await keyword
// - await can only be used inside async function
// - await pauses the execution of async function till promise settles
// - await returns a resolved value of the promise

// a)
// async function getData() {
//   const p = await new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, "server data");
//   });

//   console.log("received data", p);
//   return p;
// }

// getData()
//   .then((data) => {
//     console.log("1", data);
//   })
//   .catch((err) => {
//     log(err);
//   });

//--------------------------------------------

// b)
// async function getData() {
//   console.log("getData");
//   const p = await new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, "server data");
//   });

//   console.log("received data", p);
//   return p;
// }

// console.log("1");

// getData()
//   .then((data) => {
//     console.log("then", data);
//   })
//   .catch((err) => {
//     log(err);
//   });
// console.log("2");

//--------------------------------------------

// c)
async function getData() {
  console.log("getData start");

  const p = await new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "server data");
  });

  console.log("getData middle");

  const p2 = await new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, "server data 2");
  });

  console.log(p2);

  console.log("received data ", p);

  return p;
}

console.log("1");

getData()
  .then((data) => {
    console.log("then ", data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("2");
