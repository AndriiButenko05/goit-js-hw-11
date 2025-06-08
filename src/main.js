import getImagesByQuery from "./js/pixabay-api.js"
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const input = document.querySelector('[name="search-text"]')
const form = document.querySelector('.form')
export const gallery = document.querySelector('.gallery')
const loader = document.createElement('span')
loader.classList.add("loader")

input.addEventListener('keydown', () => {
    input.style.borderColor = '#4E75FF';
  });
  input.addEventListener('blur', () => {
    input.style.borderColor = '#808080';
  });

form.addEventListener('submit', event => {
    event.preventDefault();
    getImagesByQuery(input.value)
    form.reset()
})
 
