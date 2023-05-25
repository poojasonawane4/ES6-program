//? Template String

const customerName = "ABC";

//double Quote
const msg1 =
  "Dear " + customerName + ",\n\n\t\"Happy birthday\" \n\thave a 'great' day";

// single quote
const msg2 =
  "Dear" + customerName + ',\n\n\t"Happy Birthday" \n\thave a \'great day';

//  back tick
const msg3 = `Dear ${customerName},

"Happy Bithday"
have a 'great' day`;

console.log(msg1);
console.log(msg2);
console.log(msg3);
