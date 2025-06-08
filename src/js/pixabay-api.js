import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './render-function.js';
import { gallery } from '../main.js';
const apiKey = '50744753-f362bf6174861c1f1e53027f5';
function getImagesByQuery(query) {
  const formattedQuery = `"${query}"`;
  const encodedQuery = encodeURIComponent(formattedQuery);
  axios
    .get(
      `https://pixabay.com/api/?key=${apiKey}&q=${encodedQuery}&image_type=photo&orientation=horizontal&safesearch=true`
    )
    .then(response => {
      const elements = createGallery(response.data.hits);
      gallery.insertAdjacentHTML('beforeend', elements);
    })
    .catch(error => {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        color: 'red',
      });
    });
}
export default getImagesByQuery;
