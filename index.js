import{a as d,i as u}from"./assets/vendor-DSJL_ovD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();function g(r){return r.map(t=>`<li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
        <img
      class="gallery-image"
      src="${t.webformatURL}"
      data-source="${t.largeImageURL}"
      alt="${t.tags}"
    />
  </a>
  <div class="text-container">
  <div class="container-for-desc">
  <h3 class="img-heading">Likes</h3>
  <p class="img-text">${t.likes}</p>
  </div>
  <div class="container-for-desc">
  <h3 class="img-heading">Views</h3>
  <p class="img-text">${t.views}</p>
  </div>
  <div class="container-for-desc">
  <h3 class="img-heading">Comments</h3>
  <p class="img-text">${t.comments}</p>
  </div>
  <div class="container-for-desc">
  <h3 class="img-heading">Downloads</h3>
  <p class="img-text">${t.downloads}</p>
  </div>
  </div>
</li>`).join("")}function f(){c.innerHTML=""}const m="50744753-f362bf6174861c1f1e53027f5";function p(r){const t=`"${r}"`,n=encodeURIComponent(t);d.get(`https://pixabay.com/api/?key=${m}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{const e=g(o.data.hits);c.insertAdjacentHTML("beforeend",e)}).catch(o=>{u.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"})})}const a=document.querySelector('[name="search-text"]'),l=document.querySelector(".form"),c=document.querySelector(".gallery");document.querySelector(".loader");a.addEventListener("keydown",()=>{a.style.borderColor="#4E75FF"});a.addEventListener("blur",()=>{a.style.borderColor="#808080"});l.addEventListener("submit",r=>{r.preventDefault(),f(),p(a.value),l.reset()});c.addEventListener("click",r=>{if(console.log(r.target),r.preventDefault(),!r.target.closest("a"))return;const t=r.target.dataset.source;basicLightbox.create(`<img src="${t}">`).show()});
//# sourceMappingURL=index.js.map
