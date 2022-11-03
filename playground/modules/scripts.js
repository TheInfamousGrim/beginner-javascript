// Two types of imports

// Named import - You must use the names of the variables and functions
import { returnHi as sayHi, last, middle } from './utils.js';
import { handleButtonClick } from './handlers.js';

// Default import - You can name it whatever you want
// import grim from './wes.js';
import * as everything from './wes.js';

// console.log(everything);

// console.log(grim);

// const first = 'Grim';
// console.log(sayHi(first));
// console.log(last, middle);

const button = document.querySelector('button');

button.addEventListener('click', handleButtonClick);
