// Creating with strings and XSS
const item4 = document.querySelector('.item4');
console.log(item4);

const width = 50;
const src = `https://picsum.photos/${width}`;
const desc = `Cute Pup`;

const myHTML = `
<div class="wrapper">
    <h2>Cute ${desc}</h2>
    <img src="${src}" alt="${desc}"/>
</div>
`;

// Downside
// These are not HTML elements
// They only become an element after they've been put into the DOM

item4.innerHTML = myHTML;

const itemImage = document.querySelector('.wrapper img');

itemImage.classList.add('round');

// Turn a string into a DOM element
// Range of elements that we can work with and add event listeners etc.
const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.append(myFragment);

// -------------------------------------------------------------------------------
// Security and Sanitization
// The user can jack the html and put in any html they want and screw up the layout
// XSS stands for cross site scripting
// You could put in a script tag and do anything you want!
