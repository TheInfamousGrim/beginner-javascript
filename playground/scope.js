// Global Variable
// Anything that is in the global scope is the window
// const and let variables are globally scoped but not attached to the window
// You don't want global variables really

// -----------------------------------------------------------------------------

// Function Scope
// Scope lookup is where if a variable is not found within the local scope then the function will look for a variable in a scope higher, until it either finds a matching variable or pumps out a reference error.
// If the variable is found within the function scope but there is another variable in a higher scope then it will use the variable in the local scope.
// These are called shadow variables, don't use these! You've limited yourself to accessing the local variable and can no longer access the variable in the upper scope.

// const age = 100;

// function go() {
//   const myAge = 200;
//   const hair = 'blonde';
//   console.log(age);
//   console.log(hair);
// }

// console.log(age);

// -----------------------------------------------------------------------------
// Block Scope
// A block is created whenever you see curly braces. Think of them like gates
// You cannot access variables outside of the block

// function isCool(name) {
//   let cool;
//   if (name === 'grim') {
//     cool = true;
//   }
//   console.log(cool);
//   return cool;
// }

// -----------------------------------------------------------------------------
// Scope Lookup
// Lexical scoping or Static scoping
// variable lookup happens where the functions are defined not where they are run

const dog = 'snickers';

function logDog() {
  console.log(dog);
}

function go() {
  const dog = 'sunny';
  logDog();
}

go();

// -----------------------------------------------------------------------------
// Best Practices
// 1. DON'T CREATE GLOBAL VARIABLES
// They can cause many bugs!

// -----------------------------------------------------------------------------
// Function Scoping
// Just like variables functions are scoped to the parent function
// Starting to open a closure

function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase());
  }
  yell();
}
