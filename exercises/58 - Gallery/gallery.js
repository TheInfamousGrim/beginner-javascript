function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery Fond!');
  }

  // Select the elements we need
  const images = Array.from(gallery.querySelectorAll('img'));
  const modal = document.querySelector('.modal');
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
  let currentImg;

  // Function to open the modal
  function openModal() {
    console.info('Opening Modal...');
    // Check if the modal is already open
    if (modal.matches('.open')) {
      console.info('Modal already open');
    }
    modal.classList.add('open');

    /* ----------- event listeners to be bound when we open the modal: ---------- */
    // Modal escape key event listener
    window.addEventListener('keyup', handkleKeyUp);
    // Modal next button event listener
    nextButton.addEventListener('click', handleNextImg);
    // Modal prev button event listener
    prevButton.addEventListener('click', handlePrevImg);
  }

  // Function to clos the modal
  function closeModal() {
    console.info('Closing the modal...');
    modal.classList.remove('open');
    // TODO: add event listeners for clicks and keyboard...
    // Modal remove escape key event listener
    window.removeEventListener('keyup', handkleKeyUp);
    // Modal remove next button event listener
    nextButton.removeEventListener('click', handleNextImg);
    // Modal remove prev button event listener
    prevButton.removeEventListener('click', handlePrevImg);
  }

  // function to handle a click outside of the modal so that it closes
  function handleClickOutside(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  // Function to handle an escape key press so that a modal will close
  function handkleKeyUp(e) {
    if (e.key === 'Escape') return closeModal();
    if (e.key === 'ArrowRight') return handleNextImg();
    if (e.key === 'ArrowLeft') return handlePrevImg();
  }

  // Function to handle the next button so that the next img will be displayed
  function handleNextImg() {
    showImg(currentImg.nextElementSibling || gallery.firstElementChild);
  }

  // Function to handle the previous button showing the previous img
  function handlePrevImg() {
    console.log('firing');
    showImg(currentImg.previousElementSibling || gallery.lastElementChild);
  }

  // Showing the img
  function showImg(el) {
    if (!el) {
      console.info('no image to show');
    }

    // Update the modal with this info
    console.log(el);
    // update img src
    modal.querySelector('img').src = el.src;
    // update h2
    // One of the attributes in the img is the title
    modal.querySelector('h2').textContent = el.title;
    // update the description
    modal.querySelector('figure p').textContent = el.dataset.description;
    currentImg = el;

    // Open the modal
    openModal();
  }

  // Loop through all the imgs
  images.forEach((img) =>
    // add an event listener to each img
    img.addEventListener('click', (e) => {
      showImg(e.currentTarget);
    })
  );

  // Loop though all the imgs
  images.forEach((img) => {
    // Add a keyup event listener to each img
    img.addEventListener('keyup', (e) => {
      // If the img is keyup is === to eneter
      if (e.key === 'Enter') {
        // if it was show the img
        showImg(e.currentTarget);
      }
    });
  });

  // Modal click outside content event listener
  modal.addEventListener('click', handleClickOutside);
}

// Use it on the page

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
