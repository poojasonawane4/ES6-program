//? Default function parameters

const x = 10;

const y = function () {
  return 5;
};

//---------------

// function add(a, b = 0) {
//   console.log(a + b);
// }

//----------------------

// function add(a, b = a / 2) {
//   console.log(a + b);
// }

//-------------------------

// function add(a, b = x) {
//   console.log(a + b);
// }

//------------------------

function add(a, b = y()) {
  console.log(a + b);
}

add(10);
add(10, 20);

// Assigning a value to a parameter this is called as
// default function parameter
