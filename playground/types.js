/* eslint-disable */
// strings
// const firstName = 'Grim';
// const middle = "topher";
// const last = `bos`;

// // Use backticks if you need ' or ""
// const sentence = `She's so cool`;

// // multi-line strings using `
// const song = `Ohhh
// Yas

// Queen

// SLAAAAAAY!`

// // best way to add interpolated strings is using a template string
// // it means you don't need to concatenate strings
// const hello = `hello my name is ${firstName}. Nice to meet you. I am ${1 + 100} years old.`

// const html = `
//     <div>
//         <h2>${firstName}</h2>
//         <p>${hello}
//     </div>`

// document.body.innerHTML = html
// console.log(html);

// -----------------------------------------------------------------------------
// Numbers
// const age = 100;
// const firstName = 'Grim';

// const a = 10;
// const b = 20;

// // don't add a string to a number, you will run into lots of bugs!
// // if you do any other math with strings it will convert them into numbers

// // math methods most important
// // Math.round() - general rounding (normal rules from mathematics)
// Math.round(20.5);
// // Math.floor() - lower end of rounding
// Math.floor(20.2);
// // Math.ceil() - upper end of rounding
// Math.ceil(20.99999999);
// // Math.random() - give a random number from zero and 1;

// // modulo operator is used to see if there's a remainder if there are prime factors greater than 1
// const smarties = 20;
// const kids = 3;
// const eachKidGets = Math.floor(smarties / kids);
// const smartiesLeft = smarties % kids;
// console.log(`Each kid gets ${eachKidGets} smarties. There are ${smartiesLeft} smarties left over.`)

// Quirks of floating numbers
// Don't store money as floating point numbers
// store them as either cents or pence

// infinity exists 

// NaN is a number type that happens when you try to do math with strings


// -----------------------------------------------------------------------------
// Objects

// const badPerson = {
//     first: 'Grim',
//     last: 'Funk',
//     age: 100,
// };

// console.log(badPerson);

// SNOBUSN
// string, number, object, boolean, undefined, symbol, null


// -----------------------------------------------------------------------------
// Undefined
// let dog;

// console.log(dog);

// // undefined is the value you get when you create a variable that hasn't been set with a value

// // Null is a value of nothing
// const somethingNull = null;

// const cher = {
//     first: 'cher'
// }

// const teller = {
//     first: 'Raymond',
//     last: 'Teller'
// }

// teller.first = 'Teller';
// teller.last = null;

// -----------------------------------------------------------------------------
// Boolean and Equality

// this is called a flag variable
// let isDrawing = false;

// let age = 18;
// let ageOf = age > 19;
// console.log(ageOf);

// age = 100;
// let age2 = 100;

// strict equivalence will check that value and type