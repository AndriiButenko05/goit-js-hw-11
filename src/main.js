import getImagesByQuery from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-function.js';
const input = document.querySelector('[name="search-text"]');
const form = document.querySelector('.form');
export const gallery = document.querySelector('.gallery');
export const loader = document.querySelector('.loader');
input.addEventListener('keydown', () => {
  input.style.borderColor = '#4E75FF';
});
input.addEventListener('blur', () => {
  input.style.borderColor = '#808080';
});
form.addEventListener('submit', event => {
  event.preventDefault();
  clearGallery()
  getImagesByQuery(input.value);
  form.reset();
});
gallery.addEventListener('click', event => {
  console.log(event.target);
  event.preventDefault();
  if (!event.target.closest('a')) {
    return;
  }
  const originalSize = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${originalSize}">`);
  instance.show();
});