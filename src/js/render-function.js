import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { gallery,loader } from '../main.js';
export function createGallery(images) {
  return images
    .map(item => {
      return `<li class="gallery-item">
        <a class="gallery-link" href="${item.largeImageURL}">
        <img
      class="gallery-image"
      src="${item.webformatURL}"
      data-source="${item.largeImageURL}"
      alt="${item.tags}"
    />
  </a>
  <div class="text-container">
  <div class="container-for-desc">
  <h3 class="img-heading">Likes</h3>
  <p class="img-text">${item.likes}</p>
  </div>
  <div class="container-for-desc">
  <h3 class="img-heading">Views</h3>
  <p class="img-text">${item.views}</p>
  </div>
  <div class="container-for-desc">
  <h3 class="img-heading">Comments</h3>
  <p class="img-text">${item.comments}</p>
  </div>
  <div class="container-for-desc">
  <h3 class="img-heading">Downloads</h3>
  <p class="img-text">${item.downloads}</p>
  </div>
  </div>
</li>`;
    })
    .join('');
}
export function clearGallery() {
  gallery.innerHTML = '';
}
export function showLoader() {
  loader.style.overflow = "visible";

}
export function hideLoader() {
  loader.style.overflow = "hidden";
}
