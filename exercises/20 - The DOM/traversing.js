// Traversing and Removing Nodes

const wes = document.querySelector('.wes');

// elements - will ignore plain text
console.log(wes.children);
console.log(wes.firstElementChild);
console.log(wes.lastElementChild);
console.log(wes.previousElementSibling);
console.log(wes.nextElementSibling);
console.log(wes.parentElement);

console.log(wes.childNodes);

// nodes - will grab text
console.log(wes.childNodes);
console.log(wes.firstChild);
console.log(wes.lastChild);
console.log(wes.previousSibling);
console.log(wes.nextSibling);
console.log(wes.parentNode);

// Remove elements
// These removed elements remain in the memory as they're only removed from the dom and still exist within your script

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();
