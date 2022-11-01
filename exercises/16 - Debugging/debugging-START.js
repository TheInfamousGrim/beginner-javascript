const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  console.log(person.name);
});

console.table(people);

// -------------------------------------------------------------------------------
// Console Methods
// console.log()

// console.info() useless

// console.error() throws out an error styled console message

// console.warn() throws out a warning styled console message

// console.table() shows an object as a table of data

// console.count() shows how often a function is running

// console.group() can be used to group up data
// console.groupCollapsed() especially useful

// -------------------------------------------------------------------------------

// Callstack
// the callstack is the stack data structure that stores information about the active subroutines of a computer program.
// in your error messages it will show you the order that data is called or functions are called
// You can add breakpoints in your browser as well

// -------------------------------------------------------------------------------

// Grabbing Elements
// grab elements using jquery $()

// -------------------------------------------------------------------------------

// Breakpoints
// Add debugger
// activates a breakpoint
// useful if you're console.log() too much

// -------------------------------------------------------------------------------

// Scope
// Scope allows to pear into where variables are whether they are in local scope or block scope

// -------------------------------------------------------------------------------

// Network Requests
// Open up dev tools and click on network

// -------------------------------------------------------------------------------

// Break On Attribute
// right click an html element that you want to find is being affected by javascript and select break on so that you can find which javascript file it's located on

// -------------------------------------------------------------------------------

// Add an Event Listener
// Go to the debugger menu and you can add event listener break points

// Some Setup Code

function doALotOfStuff() {
  console.group('Doing some stuff');
  console.log(`Hey I'm one`);
  console.warn('Watch Out!');
  console.error('Hey!!!!');
  console.groupEnd('Doing some stuff');
}

function doctorize(name) {
  console.count('running doctorize');
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist(); // Cause an error
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

function bootstrap() {
  console.log('Starting the app!');
  go();
}

// bootstrap();

const button = document.querySelector('.bigger');
button.addEventListener('click', (e) => {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
