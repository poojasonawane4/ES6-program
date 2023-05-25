//todo Call Back()
//  - callback is a  function which is passed as an argument to another function
//    to be executed in future after an asynchronous operation

// initiate data fetching
// data fetching
// display the data

// ex: asynchronous with wrong sequence
// function fetchServerData() {
//   setTimeout(() => {
//     console.log("received data");
//   }, 3000);
// }

// function display() {
//   console.log("displaying data");
// }
// fetchServerData();
// display();

//--------------------------------------------------

// ex: asynchronous with correct sequence
// function fetchServerData() {
//   setTimeout(() => {
//     console.log("received data");
//     display();
//   }, 3000);
// }

// function display() {
//   console.log("displaying data");
// }
// fetchServerData();

//--------------------------------------------------

// ex:
// function fetchServerData(fun) {
//   setTimeout(() => {
//     console.log("received data");
//     fun();
//   }, 3000);
// }

// function createPDF() {
//   console.log("creating PDF");
// }

// function display() {
//   console.log("displaying data");
// }

// fetchServerData(display);
// fetchServerData(createPDF);

//--------------------------------------------------

//? Higher Order function
// - The function which accepts another function as an argument is called higher
//   order function
// - Higher order function are used to perform common asynchronous operations

// ex:
// function handleClick() {
//   console.log("operation");
// }

// addEventListener("click", handleClick);

// addEventListener("click", function (e) {});

// addEventListener("click", (e) => {});

//---------------------------------------------------------

//? Call back hell
// - If you nest multiple callbacks then the source code become hard to
//   understand and this situation is called callback hell

// ex: call back hell
// function sendReportEmail() {
//   getServerData("url", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       const parsedData = JSON.parse(data);
//       createPDF("report.pdf", (err, file) => {
//         if (err) {
//           console.log(err);
//         } else {
//           sendEmail("to", "from", "subject", (err, status) => {
//             if (err) {
//               console.log(err);
//             } else {
//               console.log("Email Sent");
//             }
//           });
//         }
//       });
//     }
//   });
// }

//-----------------------------------------------------

// ex: hell simplified
// function handleEmail(err, status) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Email sent");
//   }
// }

// function handlePDF(err, file) {
//   if (err) {
//     console.log(err);
//   } else {
//     sendEmail("to", "from", "subject", handleEmail);
//   }
// }

// function sendReportEmail() {
//   getServerData("url", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       const parsedData = JSON.parse(data);
//       createPDF("report.pdf", handlePDF);
//     }
//   });
// }
