import axios from 'axios';
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
import { createGallery, clearGallery, showLoader, hideLoader } from './render-function.js'
import { gallery } from '../main.js';
const apiKey =''
function getImagesByQuery(query) {
    axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then(response => {
            const elements = createGallery(response.data.hits)
            gallery.insertAdjacentHTML("beforeend", elements)
    })
        .catch(error => {
            iziToast.show({
                message: 'Sorry, there are no images matching your search query. Please try again!'
            });
    })
}
export default getImagesByQuery;
