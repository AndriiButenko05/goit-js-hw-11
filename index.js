import{S as m,a as p,i as l}from"./assets/vendor-DFCQGEf1.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d=document.querySelector(".gallery"),u=document.querySelector(".loader");function y(s){return s.map(({largeImageURL:r,webformatURL:n,tags:o,likes:e,views:t,comments:a,downloads:f})=>`<li class="gallery-item">
        <a class="gallery-link" href="${r}">
        <img
      class="gallery-image"
      src="${n}"
      data-source="${r}"
      alt="${o}"
    />
  </a>
  <div class="text-container">
  <div class="container-for-desc">
  <h3 class="img-heading">Likes</h3>
  <p class="img-text">${e}</p>
  </div>
  <div class="container-for-desc">
  <h3 class="img-heading">Views</h3>
  <p class="img-text">${t}</p>
  </div>
  <div class="container-for-desc">
  <h3 class="img-heading">Comments</h3>
  <p class="img-text">${a}</p>
  </div>
  <div class="container-for-desc">
  <h3 class="img-heading">Downloads</h3>
  <p class="img-text">${f}</p>
  </div>
  </div>
</li>`).join("")}function h(){d.innerHTML=""}function g(){u.style.display="block"}function v(){u.style.display="none"}const b=new m(".gallery a",{captionsData:"alt",captionDelay:250}),L="50744753-f362bf6174861c1f1e53027f5";function $(s){g();const r=`"${s}"`,n=encodeURIComponent(r);return p.get(`https://pixabay.com/api/?key=${L}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{const e=o.data.hits;if(e.length===0){l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"});return}const t=y(e);d.insertAdjacentHTML("beforeend",t),b.refresh()}).catch(o=>{}).finally(()=>{v()})}const i=document.querySelector('[name="search-text"]'),c=document.querySelector(".form");i.addEventListener("keydown",()=>{i.style.borderColor="#4E75FF"});i.addEventListener("blur",()=>{i.style.borderColor="#808080"});c.addEventListener("submit",s=>{if(s.preventDefault(),i.value.trim()===""){l.show({message:"Please, write correct name of photo",position:"topRight",color:"red"});return}h(),$(i.value.trim()),c.reset()});
//# sourceMappingURL=index.js.map
