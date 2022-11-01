function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery Fond!');
  }

  this.gallery = gallery;

  // Select the elements we need
  this.image = Array.from(gallery.querySelectorAll('img'));
  this.modal = document.querySelector('.modal');
  this.prevButton = this.modal.querySelector('.prev');
  this.nextButton = this.modal.querySelector('.next');

  // Bind our methods to the instance when we need them
  this.handleNextImg = this.handleNextImg.bind(this);
  this.handlePrevImg = this.handlePrevImg.bind(this);
  this.handleKeyUp = this.handleKeyUp.bind(this);
  this.handleClickOutside = this.handleClickOutside.bind(this);

  // Loop through all the imgs
  this.image.forEach((img) =>
    // add an event listener to each img
    img.addEventListener('click', (e) => {
      this.showImg(e.currentTarget);
    })
  );

  // Loop though all the imgs
  this.image.forEach((img) => {
    // Add a keyup event listener to each img
    img.addEventListener('keyup', (e) => {
      // If the img is keyup is === to enter
      if (e.key === 'Enter') {
        // if it was show the img
        this.showImg(e.currentTarget);
      }
    });
  });

  // Modal click outside content event listener
  this.modal.addEventListener('click', this.handleClickOutside);
}

// Function to open the modal
Gallery.prototype.openModal = function () {
  console.info('Opening Modal...');
  // Check if the modal is already open
  if (this.modal.matches('.open')) {
    console.info('Modal already open');
  }
  this.modal.classList.add('open');

  /* ----------- event listeners to be bound when we open the modal: ---------- */
  // Modal escape key event listener
  window.addEventListener('keyup', this.handleKeyUp);
  // Modal next button event listener
  this.nextButton.addEventListener('click', this.handleNextImg);
  // Modal prev button event listener
  this.prevButton.addEventListener('click', this.handlePrevImg);
};

// Function to clos the modal
Gallery.prototype.closeModal = function () {
  console.info('Closing the modal...');
  this.modal.classList.remove('open');
  // TODO: add event listeners for clicks and keyboard...
  // Modal remove escape key event listener
  window.removeEventListener('keyup', this.handleKeyUp);
  // Modal remove next button event listener
  this.nextButton.removeEventListener('click', this.handleNextImg);
  // Modal remove prev button event listener
  this.prevButton.removeEventListener('click', this.handlePrevImg);
};

// function to handle a click outside of the modal so that it closes
Gallery.prototype.handleClickOutside = function (e) {
  if (e.target === e.currentTarget) {
    this.closeModal();
  }
};

// Function to handle keyboard inputs
Gallery.prototype.handleKeyUp = function (e) {
  if (e.key === 'Escape') return this.closeModal();
  if (e.key === 'ArrowRight') return this.handleNextImg();
  if (e.key === 'ArrowLeft') return this.handlePrevImg();
};

// Function to handle the next button so that the next img will be displayed
Gallery.prototype.handleNextImg = function () {
  this.showImg(
    this.currentImg.nextElementSibling || this.gallery.firstElementChild
  );
};

// Function to handle the previous button showing the previous img
Gallery.prototype.handlePrevImg = function () {
  console.log('firing');
  this.showImg(
    this.currentImg.previousElementSibling || this.gallery.lastElementChild
  );
};

// Showing the img
Gallery.prototype.showImg = function (el) {
  if (!el) {
    console.info('no image to show');
  }

  // Update the modal with this info
  console.log(el);
  // update img src
  this.modal.querySelector('img').src = el.src;
  // update h2
  // One of the attributes in the img is the title
  this.modal.querySelector('h2').textContent = el.title;
  // update the description
  this.modal.querySelector('figure p').textContent = el.dataset.description;
  this.currentImg = el;

  // Open the modal
  this.openModal();
};

// Use it on the page

const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));

console.log(gallery1, gallery2);
