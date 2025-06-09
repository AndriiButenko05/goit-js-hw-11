import { getImagesByQuery } from './js/pixabay-api.js';
import { clearGallery, gallery, loader } from './js/render-functions.js';

const input = document.querySelector('[name="search-text"]');
const form = document.querySelector('.form');

input.addEventListener('keydown', () => {
  input.style.borderColor = '#4E75FF';
});
input.addEventListener('blur', () => {
  input.style.borderColor = '#808080';
});

form.addEventListener('submit', event => {
  event.preventDefault();
  clearGallery();
  getImagesByQuery(input.value.trim());
  form.reset();
});
