/* -------------------------------------------------------------------------- */
/*                         Selectors for shopping list                        */
/* -------------------------------------------------------------------------- */
const shoppingForm = document.querySelector('.shopping');
const shoppingList = document.querySelector('.list');

/* ----------------------- An array to hold our state ----------------------- */
let items = [];

/* -------------------------------------------------------------------------- */
/*                            handle shopping form                            */
/* -------------------------------------------------------------------------- */

function handleSubmit(e) {
  e.preventDefault();

  // Get the name
  const name = e.currentTarget.item.value;

  // Make sure there is an item in the input field
  if (!name) return;

  // Create an item object
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };

  // Push the items into our state
  items.push(item);

  // Clear the form of input value
  e.target.reset();

  // Fire off a custom event that will tell anyone else who cares that the items have been updated
  shoppingList.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  console.log(items);
  const html = items
    .map(
      (item) => `<li class="shopping-item">
      <input 
        value="${item.id}" 
        type="checkbox"
        ${item.complete ? 'checked' : ''}
      >
      <span class="itemName">${item.name}</span>
      <button 
        aria-label="Remove ${item.name}"
        value="${item.id}"
      >&times;</button>
  </li>`
    )
    .join('');

  // Append the list to the innerHTML
  shoppingList.innerHTML = html;
}

/* -------------------------------------------------------------------------- */
/*                  Save and retrieve data from local storage                 */
/* -------------------------------------------------------------------------- */
function mirrorToLocalStorage() {
  console.info('Saving items to localstorage');

  // Convert shopping list to JSON
  localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
  console.info('Restoring from local storage');

  // Pull the items from LS
  const lsItems = JSON.parse(localStorage.getItem('items'));

  // Check if there are some items
  if (lsItems.length) {
    // items = lsItems;
    // lsItems.forEach(item => items.push(item));
    items.push(...lsItems);
    shoppingList.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

/* -------------------------------------------------------------------------- */
/*                   Check off items from the shopping list                   */
/* -------------------------------------------------------------------------- */

function markAsComplete(id) {
  console.log('Marking as complete', id);
  const itemRef = items.find((item) => item.id === id);
  itemRef.complete = !itemRef.complete;
  shoppingList.dispatchEvent(new CustomEvent('itemsUpdated'));
}

/* -------------------------------------------------------------------------- */
/*                     delete items from the shopping list                    */
/* -------------------------------------------------------------------------- */

function deleteItem(id) {
  console.log('DELETING ITEM', id);
  // Update our items array without this one
  items = items.filter((item) => item.id !== id);
  // Rerender items
  shoppingList.dispatchEvent(new CustomEvent('itemsUpdated'));
}

/* -------------------------------------------------------------------------- */
/*                               event listeners                              */
/* -------------------------------------------------------------------------- */

// Listen for an item being submitted
shoppingForm.addEventListener('submit', handleSubmit);
// Add an item to the shopping list
shoppingList.addEventListener('itemsUpdated', displayItems);
// Save items to the local storage
shoppingList.addEventListener('itemsUpdated', mirrorToLocalStorage);
// Event delegation: we listen for the click on the list <ul>
// We then delegate the click over to the button if that is what was clicked
shoppingList.addEventListener('click', (e) => {
  const id = parseInt(e.target.value);
  if (e.target.matches('button')) {
    deleteItem(parseInt(id));
  }
  if (e.target.matches('input[type="checkbox"]')) {
    markAsComplete(parseInt(id));
  }
});

restoreFromLocalStorage();
