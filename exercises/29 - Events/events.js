const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

// addEventListener() will take two arguments
// 1st is the type of event
// 2nd is the callback function that will take place on that event
// the most common way is to make an anonymous callback function
// You can also pass in a named function as well
// Best practice for event listeners is to call them a handleFunction

// Benefits of having a named function
// You can call it multiple times in many different events, it's dry
// You can also remove the event listener easily as well

function handleClick() {
  console.log(`🐛I've been clicked!`);
}

const handleHooray = () => console.log('HOORAY');

// This is where you binding a function to an element
butts.addEventListener('click', handleHooray);
coolButton.addEventListener('click', handleClick);

// This is called unbinding a function to an element
// You must use a named function if you wish to remove handleFunction from an event listener
butts.removeEventListener('click', handleClick);

// Listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');
// console.log(buyButtons);

// function handleBuyItem() {
//   console.log('BUYING ITEM');
// }

// The parameter can be called anything you want!!
// buyButtons.forEach((buyButton) => {
//   buyButton.addEventListener('click', handleBuyItem);
// });

// -------------------------------------------------------------------------------
// Event Object - Targets, Bubbling, Propagation and Capture
function handleBuyButtonClick(event) {
  console.log('You clicked a button');
  const targetButton = event.target;
  //   console.log(targetButton.textContent);
  //   console.log('You are buying it!');
  //   console.log(parseFloat(event.target.dataset.price));
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  // Stop this event from bubbling up
  //   event.stopPropagation();
}

buyButtons.forEach((buyButton) => {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

// What is the event object
// Pass the a parameter into the handleFunction and console.log(parameter) to see the event object in the console.

// -------------------------------------------------------------------------------
// event.Target and event.currentTarget
// add console.log(event.target) to see what you are targeting
// You can access whatever data is present in that object

// Difference between event.Target and event.currentTarget
// The difference occurs when you have elements nested inside the current element you are listening to
// Most cases you want to reach for event.currentTarget

window.addEventListener(
  'click',
  (event) => {
    console.log('YOU CLICKED THE WINDOW!');
    console.log(event.target);
    console.log(event.type);
    console.log(event.bubbles);
    // event.stopPropagation();
  },
  { capture: true }
);

// -------------------------------------------------------------------------------
// Propagation is where you click on multiple eventListeners at the same time
// The event will keep bubbling up all the way up to the OS
// You can stop this propagation by using event.stopPropagation();

// You can do the opposite and stop it from capturing data whilst it's bubbling down the document
// target.addEventListener(type, listener, {capture: true})
// This will reverse the order from bubbling up to capture down
// You can add stop propagation once you've set the process to capture down and stop elements from further down the dom from being listened to

// -------------------------------------------------------------------------------

const photoEl = document.querySelector('.photo');

// This keyword will surface the actual element
// This keyword will always focus to whatever is left of the dot when you use a method
// This doesn't work in ARROW FUNCTIONS!!!!!! This keyword is no longer scoped to that element and you need to use a normal function. This is then globally scoped.
// Don't use this in event listener handleFunctions, use e.currentTarget!
photoEl.addEventListener('mouseenter', function (e) {
  console.log(e.currentTarget);
  console.log(this);
});
