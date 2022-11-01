const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.card');
  // Grab the image src
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;
  // Populate the modal with the new info
  modalInner.innerHTML = `
<img width="600" height="600" src="${imgSrc.replace(
    '200',
    '600'
  )}" alt="${name}">
<p>${desc}</p>
  `;
  // show the modal
  modalOuter.classList.add('open');
}

// add an event listener to each button
cardButtons.forEach((button) =>
  button.addEventListener('click', handleCardButtonClick)
);

// close the modal
function closeModal() {
  modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', (e) => {
  const isOutside = !e.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
});

// close the modal using the escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
