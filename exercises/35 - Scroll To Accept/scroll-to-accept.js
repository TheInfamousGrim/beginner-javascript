const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

const ob = new IntersectionObserver(obCallBack, { root: terms, threshold: 1 });

function obCallBack(payload) {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    console.log('REMOVING DISABLED');
    // stop observing the button
    ob.unobserve(terms.lastElementChild);
  }
}

/* -------------------------- Intersection Observer ------------------------- */
// Something that will watch if an element is on or off part of the page

// It only fires when there is new information that has to be give to us

// use [0] to find the first selected node

// Use isIntersecting to get a boolean to see if the item is there or not

// intersectionRatio will show how much of the item is taking up the screen
// We can use this to know when we've scrolled all the way to the bottom of the screen/element

ob.observe(terms.lastElementChild);
