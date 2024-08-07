import{S as m,i as n}from"./assets/vendor-f33cd494.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const c="/goit-advancedjs-hw-03/assets/x-d9947029.svg",u="https://pixabay.com/api/";function d(a){const s=new URLSearchParams({q:a,key:"45298002-4b3df346318b923a57726fdbd",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9});return fetch(`${u}?${s.toString()}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const y=new m(".gallery-item a",{captionsData:"alt",captionDelay:"250"});function g(a,s){const t=a.map(l=>`
  <li class="gallery-item">
  <a class="gallery-link" href=${l.largeImageURL}>
    <img
      class="gallery-image"
      src=${l.webformatURL} 
      alt="${l.tags}"
    />
  </a>
  <ul class="gallery-item-text">
      <li class="gallery-item-text-container">
        <p class="gallery-item-text-header">Likes</p>
        <p class="gallery-item-text-value">${l.likes}</p>
      </li>
      <li class="gallery-item-text-container">
        <p class="gallery-item-text-header">Views</p>
        <p class="gallery-item-text-value">${l.views}</p>
      </li>
      <li class="gallery-item-text-container">
        <p class="gallery-item-text-header">Comments</p>
        <p class="gallery-item-text-value">${l.comments}</p>
      </li>
      <li class="gallery-item-text-container">
        <p class="gallery-item-text-header">Downloads</p>
        <p class="gallery-item-text-value">${l.downloads}</p>
      </li>
      </ul>
    </li>`).join("");s.insertAdjacentHTML("afterbegin",t),y.refresh()}const i=document.querySelector("form"),p=document.querySelector(".gallery"),f=document.querySelector(".loader-wrapper span");i.addEventListener("submit",a=>{a.preventDefault(),p.innerHTML="";let s=i.elements.userinput.value;s?(f.classList.add("loader"),d(s.trim()).then(t=>{t.hits.length===0?n.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",color:"#EF4040",position:"topRight",displayMode:1,iconUrl:`${c}`}):g(t.hits,p)}).catch(t=>console.log(t)).finally(()=>{i.reset(),f.classList.remove("loader")})):n.show({message:"Search field can not be empty!",messageColor:"#ffffff",color:"#EF4040",position:"topRight",displayMode:1,iconUrl:`${c}`})});
//# sourceMappingURL=commonHelpers.js.map
