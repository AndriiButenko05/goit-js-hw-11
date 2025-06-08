import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


export function createGallery(images) {
    return images
        .map(item => {
        return`<li class="gallery-item">
        <a class="gallery-link" href="${item.largeImageURL}">
        <img
      class="gallery-image"
      src="${item.webformatURL}"
      data-source="${item.original}"
      alt="${item.tags}"
    />
  </a>
  <div class="text-container">
  <p class="img-text">Likes<span>${item.likes}</span></p>
  <p class="img-text">Views<span>${item.views }</span></p>
  <p class="img-text">Comments<span>${item.comments}</span></p>
  <p class="img-text">Downloads<span>${item.downloads}</span></p>
  </div>
</li>`
    }).join("")
};
export function clearGallery(item) {
    item.innerHTML = "";
    
}
export function showLoader() {
}
export function hideLoader() {
    
}