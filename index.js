import{S as u,a as f,i as m}from"./assets/vendor-DFCQGEf1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const l=document.querySelector(".gallery"),d=document.querySelector(".loader");function g(o){return o.map(t=>`<li class="gallery-item">
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
</li>`).join("")}function y(){l.innerHTML=""}function p(){d.style.display="block"}function h(){d.style.display="none"}const v=new u(".gallery a",{captionsData:"alt",captionDelay:250}),L="50744753-f362bf6174861c1f1e53027f5";function b(o){p();const t=`"${o}"`,n=encodeURIComponent(t);f.get(`https://pixabay.com/api/?key=${L}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`).then(a=>{const e=a.data.hits;if(e.length===0){m.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"});return}const r=g(e);l.insertAdjacentHTML("beforeend",r),v.refresh()}).catch(a=>{}).finally(()=>{h()})}const s=document.querySelector('[name="search-text"]'),c=document.querySelector(".form");s.addEventListener("keydown",()=>{s.style.borderColor="#4E75FF"});s.addEventListener("blur",()=>{s.style.borderColor="#808080"});c.addEventListener("submit",o=>{if(s.value.trim()===""){alert("Please, write in photo name");return}o.preventDefault(),y(),b(s.value.trim()),c.reset()});
//# sourceMappingURL=index.js.map
