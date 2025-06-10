import{S as f,a as m,i as y}from"./assets/vendor-DFCQGEf1.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const l=document.querySelector(".gallery"),d=document.querySelector(".loader");function p(s){return s.map(({largeImageURL:r,webformatURL:n,tags:o,likes:e,views:t,comments:a,downloads:u})=>`<li class="gallery-item">
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
  <p class="img-text">${u}</p>
  </div>
  </div>
</li>`).join("")}function h(){l.innerHTML=""}function g(){d.style.display="block"}function v(){d.style.display="none"}const b=new f(".gallery a",{captionsData:"alt",captionDelay:250}),L="50744753-f362bf6174861c1f1e53027f5";function $(s){g();const r=`"${s}"`,n=encodeURIComponent(r);m.get(`https://pixabay.com/api/?key=${L}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{const e=o.data.hits;if(e.length===0){y.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"});return}const t=p(e);l.insertAdjacentHTML("beforeend",t),b.refresh()}).catch(o=>{}).finally(()=>{v()})}const i=document.querySelector('[name="search-text"]'),c=document.querySelector(".form");i.addEventListener("keydown",()=>{i.style.borderColor="#4E75FF"});i.addEventListener("blur",()=>{i.style.borderColor="#808080"});c.addEventListener("submit",s=>{if(i.value.trim()===""){alert("Please, write in photo name");return}s.preventDefault(),h(),$(i.value.trim()),c.reset()});
//# sourceMappingURL=index.js.map
