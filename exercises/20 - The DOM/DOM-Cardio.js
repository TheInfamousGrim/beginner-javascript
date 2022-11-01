// Make a div
const myDiv = document.createElement('div');
console.log(myDiv);

// add a class of wrapper to it
myDiv.classList.add('wrapper');
console.log(myDiv);

// put it into the body
document.body.appendChild(myDiv);

// make an unordered list

const listDiv = document.createElement('div');
listDiv.classList.add('list-div');
const myDivSelector = document.querySelector('.wrapper');
const mylist = `
<div class="list-div">
    <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
    </ul>
</div>
`;
myDivSelector.innerHTML = mylist;

// add three list items with the words "one, two, three" in them
// put that list into the above wrapper

// create an image

const img = document.createElement('img');

// set the source to an image

img.src =
  'https://media.istockphoto.com/photos/fog-in-black-smoke-and-mist-on-wooden-table-halloween-backdrop-picture-id1341515382?k=20&m=1341515382&s=612x612&w=0&h=bDVy91iNDAQoENWYW8C41bsYarjrYyUWIHT3dOcVpn8=';

// set the width to 250

img.width = 250;
img.height = 250;

// add a class of cute

img.classList.add('cute');

// add an alt of Cute Puppy

img.alt = 'Cute Smoke';

// Append that image to the wrapper

myDivSelector.append(img);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above

const loremDiv = `
<div class="wrapper lorem-ipsum">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Aliquam sem et tortor consequat. Lorem ipsum dolor sit amet consectetur adipiscing. Enim diam vulputate ut pharetra sit amet. Tempor id eu nisl nunc. Cursus sit amet dictum sit. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Viverra justo nec ultrices dui sapien eget mi proin. Mauris cursus mattis molestie a iaculis at erat. Vel fringilla est ullamcorper eget nulla facilisi etiam. Orci ac auctor augue mauris augue neque gravida. Vel turpis nunc eget lorem dolor sed. Pharetra massa massa ultricies mi quis hendrerit dolor magna.</p>
</div>
`;
myDivSelector.insertAdjacentHTML('beforebegin', loremDiv);

// add a class to the second paragraph called warning
// remove the first paragraph

const p2 = document.querySelector('.lorem-ipsum').lastElementChild;
p2.classList.add('warning');

const p1 = document.querySelector('.lorem-ipsum').firstElementChild;
p1.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
  const generalPlayer = `
<div class="playerCard wrapper" id="${name}ID">
    <h2>${name} - ${age}</h2>
    <p>They are ${height} and ${age} years old. In dog years this person would be ${Math.round(
    age / 7
  )}. That would be a tall dog!</p>
<button type="button" class="deleteCardButton" >&times; Delete</button>
</div>
    `;
  return generalPlayer;
}

//   return myDivSelector.insertAdjacentHTML('afterend', generalPlayer);

// make a new div with a class of cards

const cardDiv = `
<div class="cards wrapper"></div>
`;
myDivSelector.insertAdjacentHTML('beforebegin', cardDiv);

// selector for cards container
const cardDivSelector = document.querySelector('.cards');
cardDivSelector.setAttribute('id', 'cardsID');
console.log(cardDivSelector);

const sarahPlayer = generatePlayerCard('Sarah', 40, '5 foot 4');
const afifPlayer = generatePlayerCard('Afif', 23, '5 foot 7');
const funkPlayer = generatePlayerCard('Funk', 35, '6 foot 4');
const grimPlayer = generatePlayerCard('Grim', 55, '6 feet');

cardDivSelector.innerHTML = `
${grimPlayer}
${afifPlayer}
${funkPlayer}
${sarahPlayer}
`;

// const cardDiv = document.createElement('div');
// cardDiv.classList.add('cards', 'wrapper');

// document.body.appendChild(cardDiv);

// make 4 player cards using generatePlayerCard
// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// selector for all the cards
const allPlayerCards = document.querySelectorAll('.playerCard');

// allPlayerCards.forEach((element) => {
//   element.setAttribute('id', 'playerCardsID');
//   cardDivSelector.appendChild(document.getElementById('playerCardsID'));
// });

// select all the buttons!
const deleteSelector = document.querySelectorAll('.deleteCardButton');
// make out delete function
function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  buttonThatGotClicked.parentElement.remove();
}
// loop over them and attach a listener

deleteSelector.forEach((button) => {
  button.addEventListener('click', deleteCard);
});
