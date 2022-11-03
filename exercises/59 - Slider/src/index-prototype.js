function Slider(sliderEl) {
  // Check if the data passed in is an element
  if (!(sliderEl instanceof Element)) {
    throw new Error('No slider passed in');
  }

  // Select the elements needed for the slider
  this.slides = sliderEl.querySelector('.slides');
  this.sliderEl = sliderEl;
  const prevButton = sliderEl.querySelector('.goToPrev');
  const nextButton = sliderEl.querySelector('.goToNext');

  // When this slider is created, run the start slider function
  this.startSlider();
  this.applyClasses();

  /* ----------------------------- Event listeners ---------------------------- */
  prevButton.addEventListener('click', () => this.move('back'));
  nextButton.addEventListener('click', () => this.move());
}

// Start the first slide desired
Slider.prototype.startSlider = function () {
  this.current =
    this.sliderEl.querySelector('.current') || this.slides.firstElementChild;
  this.prev =
    this.current.previousElementSibling || this.slides.lastElementChild;
  this.next = this.current.nextElementSibling || this.slides.firstElementChild;
};

// Apply classes to slider
Slider.prototype.applyClasses = function () {
  this.current.classList.add('current');
  this.prev.classList.add('prev');
  this.next.classList.add('next');
};

Slider.prototype.move = function (direction) {
  // First strip all the classes off the current slides
  const classesToRemove = ['prev', 'current', 'next'];
  this.prev.classList.remove(...classesToRemove);
  this.current.classList.remove(...classesToRemove);
  this.next.classList.remove(...classesToRemove);

  // If we're going backwards
  if (direction === 'back') {
    // make a new array of the new values, and destructure them over and into the prev, current and next variables
    [this.prev, this.current, this.next] = [
      // Get the previous slide or get the last slide if you're at the beginning of the slides initially
      this.prev.previousElementSibling || this.slides.lastElementChild,
      this.prev,
      this.current,
    ];
  } else {
    [this.prev, this.current, this.next] = [
      this.current,
      this.next,
      // Get the next slide or get the first slide if you're at the end of the slides initially
      this.next.nextElementSibling || this.slides.firstElementChild,
    ];
  }

  this.applyClasses();
};

const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));

window.dogSlider = dogSlider;

window.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowRight') {
    dogSlider.move();
  }
  if (e.key === 'ArrowLeft') {
    dogSlider.move('back');
  }
});
