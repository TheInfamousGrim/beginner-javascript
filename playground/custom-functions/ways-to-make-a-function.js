// Ways to make a function

// function declaration
// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// -------------------------------------------------------------------------------

// Anonymous function
// Function without a name
// function (firstName) {
//     return `Dr ${firstName}`;
// }

// -------------------------------------------------------------------------------

// Function expression
// Store a function as a value in a variable
// These functions are not hoisted!

// const doctorize = function (firstName) {
//   return `Dr. ${firstName}`;
// };

// -------------------------------------------------------------------------------

// Arrow functions
// Offer a concise syntax
// They don't have their own scope and refer to the this keyword
// Arrow functions are anonymous functions

const inchToCM = (inches) => inches * 2.54;

const add = (a, b = 3) => a + b;

// returning an object

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

const makeABaby = (first, last) => {
  const baby = {
    name: `${first} ${last}`,
    age: 0,
  };
  return baby;
};

// -------------------------------------------------------------------------------
// IIFE
// Immediately Invoked Function Expression
//

(function (age = 0) {
  return `You are cool and age ${age}`;
})();

// -------------------------------------------------------------------------------
// Methods!!!
// Methods are functions that live inside objects
const grim = {
  name: 'Grim Funk',
  // Method!
  sayHi() {
    console.log('Hey Grim');
    return 'Hey Grim';
  },
  // Short hand Method
  yellHi() {
    console.log('HEY GRIIIIMMM');
  },
  // Arrow function
  whisperHi: () => {
    console.log(`hii griiimm i'm a mouse`);
  },
};

// -------------------------------------------------------------------------------
// Callback Functions
// Click Callback
const button = document.querySelector('.click-me');

function handleClick() {
  console.log('Great Clicking!!!');
}

button.addEventListener('click', handleClick);

// Anonymous function passed in
button.addEventListener('click', () => {
  console.log('Nice Job!!!!');
});

// Timer Callback
setTimeout(() => {
  console.log('DONE! Time to eat!');
}, 1000);
