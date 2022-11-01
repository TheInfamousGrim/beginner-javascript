/* -------------------------------------------------------------------------- */
/*                       Prevent Default and Form Events                      */
/* -------------------------------------------------------------------------- */

/* ---------------------------- Prevent Defaults ---------------------------- */
// preventDefault is super handy for stopping actions from taking place

const wes = document.querySelector('.wes');

// wes.addEventListener('click', (event) => {
//   const shouldChangePage = confirm(
//     'This website might be malicious!, do you wish to proceed?'
//   );
//   if (!shouldChangePage) {
//     event.preventDefault();
//   }
//   console.log(shouldChangePage);
// });

const signupForm = document.querySelector('[name="signup"]');

/* ------------------------------- Form Events ------------------------------ */

// Stopping forms from submitting straight away
// Often times you want to grab the data with javascript and turn it into data that will be recognized with the server
// You can check if terms and conditions are accepted
// You can do some extended validation
// Use proper names so you can select using name data attributes in your forms
signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  //   console.log(event.currentTarget.name.value);
  //   console.log(event.currentTarget.email.value);
  //   console.log(event.currentTarget.agree.checked);
  const name = event.currentTarget.name.value;
  if (name.includes('chad')) {
    alert('Sorry bro');
    event.preventDefault();
  }
});

function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}
/* --------------------------------- 'keyup' -------------------------------- */
// current value
signupForm.name.addEventListener('keyup', logEvent);

/* -------------------------------- 'keydown' ------------------------------- */
// input value
// You can prevent certain numbers or characters from being used in a password or input in a form
signupForm.name.addEventListener('keydown', logEvent);

/* --------------------------------- 'focus' -------------------------------- */
// when you focus into an input
// tabbing into it for example
signupForm.name.addEventListener('focus', logEvent);

/* --------------------------------- 'blur' --------------------------------- */
// when you focus out of an input
signupForm.name.addEventListener('blue', logEvent);

/* -------------------------------------------------------------------------- */
/*                                Accesibility                                */
/* -------------------------------------------------------------------------- */

// HTML itself if it's marked up correctly is very accessible

/* ------------------ Difference Between Buttons and Links ------------------ */
// Buttons are to be used for actions that happen inside of an application
// Links are to be used to change the page

const photo = document.querySelector('.photo');

function handlePhotoClick(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    console.log('You clicked the photo');
  }
  console.log(event.key);
}

// Clicks shouldn't be registered to things that are not keyboard accessible
// You can either use the data attribute of role="button" and a data attribute of tabindex=0 on the html so it can be tabbed into.
// You also need to add to your function the event.key === 'Enter' as well

photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);
