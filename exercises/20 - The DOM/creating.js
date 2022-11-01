// Creating HTML

// const { listenerCount } = require('process');

// Create Elemetn
console.log('it works');

const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImg = document.createElement('img');
myImg.src = 'https://source.unsplash.com/random/300x300';
myImg.alt = 'Nice photo';
console.log(myImg);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

// Best to add nodes in reverse order as you're modifying the dom as something called reflow happens
// If you do this three times then you are making three subsequent re-renderings (reflows) of the DOM

// Don't do it in this order
// document.body.appendChild(myDiv);
// myDiv.appendChild(myParagraph);
// myDiv.appendChild(myImg);

// Do this instead!!! Reverse order will only cause one reflow
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImg);

document.body.appendChild(myDiv);

// -------------------------------------------------------------------------------
// ParentNode.Append() inserts a set of Node objects or DOMString objects after the last child of the ParentNode. DOMString objects are inserted as equivalent Text nodes.

// -------------------------------------------------------------------------------
// targetElement.insertAdjacentElement('position', element);
// say if you need to add something to the top of an element like a heading.

const heading = document.createElement('h2');
heading.textContent = 'Cool Things';

myDiv.insertAdjacentElement('afterbegin', heading);

// Create five list items
const coolList = document.createElement('ul');
const coolListData = ['Grim', 'Funk', 'Is', 'Really', 'Shit'];

coolListData.forEach((item) => {
  const li = document.createElement('li');
  li.textContent = item;
  coolList.appendChild(li);
});

document.body.appendChild(coolList);
