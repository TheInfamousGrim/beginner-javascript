// Hoisting
// Hoisting will take all of your function declarations and move them to the top of your file.
// Because of hoisting you can technically run a function before it exists

sayHi();

function sayHi() {
  console.log('hey!');
  console.log(add(10, 15));
}

function add(a, b) {
  return a + b;
}

// Better to define the functions first or import them using modules first.

// The one argument for hoisting functions.
/* What does this file do? */

/* How does ths file do that */

// ------------------------------------------------------------------------------
// Variable Hoisting
// You can use var to hoist a variable
// Again DONT'T USE IT!!!! IT'S CONFUSING AND CAN LEAD TO ERRORS!!!!!!
