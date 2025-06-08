import{a as c,i as d}from"./assets/vendor-BPFuI794.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();function u(s){return s.map(e=>`<li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
        <img
      class="gallery-image"
      src="${e.webformatURL}"
      data-source="${e.original}"
      alt="${e.tags}"
    />
  </a>
  <div class="text-container">
  <p class="img-text">Likes<span>${e.likes}</span></p>
  <p class="img-text">Views<span>${e.views}</span></p>
  <p class="img-text">Comments<span>${e.comments}</span></p>
  <p class="img-text">Downloads<span>${e.downloads}</span></p>
  </div>
</li>`).join("")}const p="";function m(s){c.get(`https://pixabay.com/api/?key=${p}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{const a=u(e.data.hits);f.insertAdjacentHTML("beforeend",a)}).catch(e=>{d.show({message:"Sorry, there are no images matching your search query. Please try again!"})})}const o=document.querySelector('[name="search-text"]'),l=document.querySelector(".form"),f=document.querySelector(".gallery"),y=document.createElement("span");y.classList.add("loader");o.addEventListener("keydown",()=>{o.style.borderColor="#4E75FF"});o.addEventListener("blur",()=>{o.style.borderColor="#808080"});l.addEventListener("submit",s=>{s.preventDefault(),m(o.value),l.reset()});
//# sourceMappingURL=index.js.map
