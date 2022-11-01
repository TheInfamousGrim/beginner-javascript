function Slider(sliderEl) {
  // Check if the data passed in is an element
  if (!(sliderEl instanceof Element)) {
    throw new Error('No slider passed in');
  }

  // Create some variables for working with the slider
  let current;
  let prev;
  let next;

  // Select the elements needed for the slider
  const slides = sliderEl.querySelector('.slides');
  const prevButton = sliderEl.querySelector('.goToPrev');
  const nextButton = sliderEl.querySelector('.goToNext');

  // Start the first slide desired
  function startSlider() {
    current = sliderEl.querySelector('.current') || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
    console.dir({ current, prev, next });
  }

  // Apply classes to slider
  function applyClasses() {
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next');
  }

  function move(direction) {
    // First strip all the classes off the current slides
    const classesToRemove = ['prev', 'current', 'next'];
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);

    // If we're going backwards
    if (direction === 'back') {
      // make a new array of the new values, and destructure them over and into the prev, current and next variables
      [prev, current, next] = [
        // Get the previous slide or get the last slide if you're at the beginning of the slides initially
        prev.previousElementSibling || slides.lastElementChild,
        prev,
        current,
      ];
    } else {
      [prev, current, next] = [
        current,
        next,
        // Get the next slide or get the first slide if you're at the end of the slides initially
        next.nextElementSibling || slides.firstElementChild,
      ];
    }

    applyClasses();
  }

  // When this slider is created, run the start slider function
  startSlider();
  applyClasses();

  /* ----------------------------- Event listeners ---------------------------- */
  prevButton.addEventListener('click', () => move('back'));
  nextButton.addEventListener('click', () => move());
}

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));
