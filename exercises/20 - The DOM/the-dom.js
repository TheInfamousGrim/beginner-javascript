// Selecting Elements
// const p = document.querySelector('p');
// const img = document.querySelector('.item img');
// const item2 = document.querySelector('.item2');
// const item2Image = item2.querySelector('img');
// const heading = document.querySelector('h2');
// console.log(p);
// console.log(item2Image);

// Node list is not an array
// Node list is a list but it doesn't have all the methods attatched to it.

// -------------------------------------------------------------------------------
// Element Properties and Methods

// const heading = document.querySelector('h2');
// Getters - Pull the data out of it that we need
// console.dir(heading.textContent);

// Setters - update the properties of the data
// Set the textContent property on that element
// Text content gets all of the elements including script and style elements
// textContent will show hidden elements
// console.log((heading.textContent = 'Grim is Cool'));

// innerText only shows human readable elements

// console.log(heading.textContent);
// console.log(heading.innerText);

// innerHTML and outerHTML
// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// const pizzList = document.querySelector('.pizza');
// console.log(pizzList.textContent);
// DON'T DO THIS!!!!!
// THIS CAUSES THE BROWSER TO RERENDER THE ENTIRE ELEMENT
// pizzList.textContent = `${pizzList.textContent} 🍕`;
// Use insertAdjacentText
// pizzList.insertAdjacentText('afterbegin', '🍕');
// pizzList.insertAdjacentText('beforeend', '🍕');

// Everything is a node in the dom
// Something is only an element if they're wrapped in an element tag in HTML

// -------------------------------------------------------------------------------
// Working with Classes

// class list gives a node list of the classes
const pic = document.querySelector('.nice');
pic.classList.add('open');
// pic.classList.remove('cool');
// pic.classList.add('round');
// pic.classList.toggle('round');

// console.log(pic.classList);

// function toggleRound() {
//   pic.classList.toggle('round');
// }

// pic.addEventListener('click', toggleRound);

// selector.classList.contains('class') will tell you whether the class is active or not on the node the class that you're specifying

// -------------------------------------------------------------------------------
// Built in and custom data attributes

pic.alt = 'Couple'; // setter
console.log(pic.alt); // getter
console.log(pic.naturalWidth); // getter

pic.addEventListener('load', () => {
  console.log(pic.naturalWidth); // getter
});

// pic.width = 200;

// getAttribute
// Set attribute will also work for things that are non-standard
// You shouldn't go willy nilly setting attributes as HTML might add data attributes in the future
pic.setAttribute('alt', 'REALLY CUTE PUP');
console.log(pic.getAttribute('alt'));

// If you do want your own custom attributes you use data attributes
const cool = document.querySelector('.cool');
console.log(cool.dataset);

cool.addEventListener('click', () => {
  alert(`Welcome ${cool.dataset.name} ${cool.dataset.last}`);
});
