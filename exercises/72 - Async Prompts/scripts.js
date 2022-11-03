function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
  let myPopup = popup;
  popup.classList.remove('open');
  await wait(1000);
  // Remove the popup entirely!
  popup.remove();
  myPopup = null;
}

function ask(options) {
  return new Promise(async (resolve) => {
    // First we need to create a popup with all the fields in it
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML(
      'afterbegin',
      `<fieldset>
          <label>${options.title}</label>
          <input type="text" name="input"/>
          <button type="submit">Submit</button>    
        </fieldset>
    `
    );

    console.log(popup);
    // Check if they want a cancel button
    if (options.cancel) {
      const skipButton = document.createElement('button');
      skipButton.type = 'button';
      skipButton.textContent = 'Cancel';
      popup.firstElementChild.appendChild(skipButton);
      // TODO: Listen for a click on that cancel button
      skipButton.addEventListener(
        'click',
        () => {
          resolve(null);
          destroyPopup(popup);
        },
        {
          once: true,
        }
      );
    }
    // Listen for the submit event on the inputs
    popup.addEventListener(
      'submit',
      (e) => {
        e.preventDefault();
        resolve(e.target.input.value);
        // Remove it from the DOM entirely
        destroyPopup(popup);
      },
      { once: true }
    );
    // When someone does submit it, resolve the data that was in the input box!

    // Insert that popup into the DOM
    document.body.appendChild(popup);
    // Put a very small timeout before we add the open class
    await wait(50);
    popup.classList.add('open');
  });
}

// Select all buttons that have a question
async function askQuestion(e) {
  const button = e.currentTarget;
  const cancel = 'cancel' in button.dataset;
  const answer = await ask({
    title: button.dataset.question,
    cancel,
  });
  console.log(answer);
}

const buttons = document.querySelectorAll('[data-question]');
buttons.forEach((button) => button.addEventListener('click', askQuestion));

const questions = [
  { title: 'What is your name?' },
  { title: 'What is your age?', cancel: true },
  { title: 'What is your dogs name?' },
];

// This will happen concurrently
// const answers = Promise.all([
//   ask(questions[0]),
//   ask(questions[1]),
//   ask(questions[2]),
// ]).then((answers) => {
//   console.log(answers);
// });

async function asyncMap(array, callback) {
  // Make an array to store our results
  const results = [];
  // Loop over our array
  for (const item of array) {
    results.push(await callback(item));
  }
  // When we are don with the loop, return it!
  return results;
}

async function go() {
  const answers = await asyncMap(questions, ask);
}

go();

// async function askMany() {
//   for (const question of questions) {
//     const answer = await ask(question);
//     console.log(answer);
//   }
// }

// askMany();
