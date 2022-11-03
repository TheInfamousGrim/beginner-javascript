// The Recipe Puppy API used in the course is broken
// Please use this replacement API URL "https://recipes.beginnerjavascript.com/api"

// CORS - explained
// CO = Cross Origin
// GrimFunk.com                 localhost
// ☝️                             ☝️
// NO NO NO                     CORS proxy ✅
// 👇                             👇
// github.com                   github.com

// R = Resource
// S = Sharing

const baseEndpoint = 'recipes.beginnerjavascript.com/api';
const proxy = `https://cors-anywhere.herokuapp.com/`;
const form = document.querySelector('form.search');
const recipesGrid = document.querySelector('.recipes');

async function fetchRecipes(query) {
  const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const data = await res.json();
  return data;
}

function displayRecipes(recipes) {
  console.log('Creating HTML');

  const html = recipes.results.map(
    (recipe) => `<div class="recipe">
        <h2>${recipe.title}</h2>
        <p>${recipe.ingredients}</p>
        ${
          recipe.thumbnail &&
          `<img class="recipes__recipe-img" src="${recipe.thumbnail}" alt="${recipe.title}"/>`
        }
        <a href="${recipe.href}">View Recipe ➡️</a>
    </div>`
  );
  console.log(html);
  recipesGrid.innerHTML = html.join('');
}

async function fetchAndDisplay(query) {
  // Turn the form off
  form.submit.disable = true;

  // Submit the search
  const recipes = await fetchRecipes(query);

  // Display the recipes as HTML
  displayRecipes(recipes);

  // Turn the form on
  form.submit.disable = false;
}

async function handleSubmit(e) {
  e.preventDefault();
  const el = e.currentTarget;
  console.log(el.query.value);
  fetchAndDisplay(form.query.value);
}

form.addEventListener('submit', handleSubmit);
// On page load run it with pizza
fetchAndDisplay('pizza');
