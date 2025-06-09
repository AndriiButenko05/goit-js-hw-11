import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import {
  createGallery,
  showLoader,
  gallery,
  hideLoader,
  lightbox,
} from './render-function.js';

const apiKey = '50744753-f362bf6174861c1f1e53027f5';

export function getImagesByQuery(query) {
  showLoader();
  const formattedQuery = `"${query}"`;
  const encodedQuery = encodeURIComponent(formattedQuery);
  axios
    .get(
      `https://pixabay.com/api/?key=${apiKey}&q=${encodedQuery}&image_type=photo&orientation=horizontal&safesearch=true`
    )
    .then(response => {
      const data = response.data.hits;
      if (data.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          color: 'red',
        });
        return;
      }
      const elements = createGallery(data);
      gallery.insertAdjacentHTML('beforeend', elements);
      lightbox.refresh();
    })
    .catch(error => {})
    .finally(() => {
      hideLoader();
    });
}
