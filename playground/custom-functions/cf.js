// Function definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // this is the function body
  console.log('Running Calculate Bill!');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

// // Function call or **Run**
const wesTotal = 500;
const wesTaxRate = 0.3;
// const myTotal = calculateBill(100, 0.13);
// const myTotal2 = calculateBill(wesTotal, wesTaxRate);

// console.log(myTotal);
// console.log(myTotal2);

// function definition
// function sayHiTo(firstName) {
//   return `Hello ${firstName}`;
// }

// const greeting = sayHiTo('poo');
// console.log(greeting);

function doctorized(name) {
  return `Dr. ${name}`;
}

function yell(name = 'Silly Goose') {
  return `HEY ${name.toUpperCase()}`;
}

// console.log(yell(doctorized('wes')));

// If you want the default parameter to be used you pass in undefined
const myBill4 = calculateBill(100, undefined, 0.2);
