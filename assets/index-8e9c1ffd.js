import{H as d}from"./social-list-a2172a6a.js";const g=[{title:"УВАГА ДО ДЕТАЛЕЙ",text:"Ідейні міркування, і навіть початок повсякденної роботи з формування позиції."},{title:"ПУНКТУАЛЬНІСТЬ",text:"Завдання організації, особливо рамки і місце навчання кадрів тягне у себе."},{title:"ПЛАНУВАННЯ",text:"Так само консультація з широким активом значною мірою зумовлює."},{title:"СУЧАСНІ ТЕХНОЛОГІЇ",text:"Значимість цих проблем настільки очевидна, що реалізація планових завдань."}],_=` <li class="our-pluses-list__item">
    <h3 class="our-pluses-list__title">{{title}}</h3>
    <p class="our-pluses-list__text">{{text}}</p>
  </li>`,y=document.querySelector(".our-pluses-list"),w=d.compile(_),b=g.map(e=>w(e)).join("");y.innerHTML=b;(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const L=`
<li class="our-developers-list__item">
  <picture>
    <source
      data-srcset="
        {{#each images.desktop}}
          {{this}}
        {{/each}}
      "
      media="(min-width: 1200px)"
    />

    <source
      data-srcset="
        {{#each images.tablet}}
          {{this}}
        {{/each}}
      "
      media="(min-width: 768px)"
    />

    <source
      data-srcset="
        {{#each images.mobile}}
          {{this}}
        {{/each}}
      "
      media="(min-width: 480px)"
    />

    <img
      class="our-developers-list__img"
      data-src="{{images.default}}"
      alt="{{name}}"
      src="placeholder.jpg"
    />
  </picture>

  <p class="our-developers-list__text">{{name}}</p>
  <h4 class="our-developers-list__title">{{position}}</h4>
  <ul class="our-developers-svg-list">
    {{#each icons}}
    <li class="our-developers-svg-list__item">
      <a class="our-developers-svg-list__link" href="#">
        <svg width="20" height="20">
          <use href="{{this}}"></use>
        </svg>
      </a>
    </li>
    {{/each}}
  </ul>
  {{#if date}}
<p class="our-developers-list__date">
{{date}}
</p>
{{/if}}
</li>
`;//! Логіка роботи застосунку
//! 1. При перезавантеженні застосунок звертається до бази DB та робить запит на отримання даних 
//! 2. результатом успішного запиту є масив об'єктів з усіма розробниками (20 розробників на початку)
//! 3. після отримання даних вони відмальовуються, як і раніше 
const S="http://localhost:3000/",D="developers",p=`${S}${D}`;console.log("url:",p);const k=document.querySelector(".our-developers-list");async function E(){try{const t=await(await fetch(p)).json();console.log("developers:",t),j(t)}catch(e){console.log("error:",e)}}//! генеруємо HTML за допомогою Handlebars
const q=d.compile(L);function j(e){const t=e.map(s=>q(s)).join("");console.log("markup:",t),k.innerHTML=t}E();console.log('%c Додаємо/Редагуємо/Видаляємо розробників в секції "Наша команда"',"color: white; background-color: #D33F49");//! 1️⃣ Дані
let o=JSON.parse(localStorage.getItem("dataDevelopers"))||[],r="";//! 2️⃣ Пошук DOM
const x=document.querySelector(".our-developers-list"),M=document.querySelector(".our-developers__button"),v=document.querySelector(".form-add-edit-developer__title"),I=document.querySelector("[data-modal-add-edit-developer]"),u=document.querySelector(".modal-add-edit-developer__button-delete"),$=document.querySelector(".form-add-edit-developer"),B=document.getElementById("button-cancel"),l=document.querySelector(".form-add-edit-developer__button-submit"),c=document.querySelector(".form-add-edit-developer__img"),a=document.querySelector(".form-add-edit-developer__input-developer-name"),i=document.querySelector(".form-add-edit-developer__input-developer-position"),f=document.querySelector("[data-modal-confirm-delete]"),C=document.getElementById("confirm-delete-yes"),N=document.getElementById("confirm-delete-no"),R=document.getElementById("confirm-dev-name");//! 3️⃣ Слухачі подій
M.addEventListener("click",U);$.addEventListener("submit",A);B.addEventListener("click",H);x.addEventListener("click",function(e){e.target.classList.contains("our-developers-list__img")&&O(e)});u.addEventListener("click",J);N.addEventListener("click",P);C.addEventListener("click",T);//! 4️⃣ Функції
//! ДОДАТИ
function U(){v.textContent="Додати розробника",l.textContent="Додати",u.style.display="none",a.value="",i.value="",n()}//! РЕДАГУВАННЯ
function O(e){v.textContent="Редагування розробника",l.textContent="Редагувати",u.style.display="block",o=JSON.parse(localStorage.getItem("dataDevelopers"));const t=o.find(s=>s.name===e.target.alt);r=t.name,a.value=t.name,i.value=t.position,c.src=t.images.default,n()}//! ВИДАЛЕННЯ
function T(){o=JSON.parse(localStorage.getItem("dataDevelopers")),o=o.filter(e=>e.name!==r),localStorage.setItem("dataDevelopers",JSON.stringify(o,null,2)),n(),location.reload()}//! SUBMIT ФОРМИ
function A(e){if(e.preventDefault(),o=JSON.parse(localStorage.getItem("dataDevelopers")),l.textContent==="Додати"){const t={name:a.value,position:i.value,images:{default:c.src||"./images/developers/default.jpg"},date:new Date().toLocaleString()};o.push(t)}if(l.textContent==="Редагувати"){const t=o.find(s=>s.name===r);t.name=a.value,t.position=i.value;//! ⭐ ФІКС КАРТИНКИ
t.images.default=c.src}localStorage.setItem("dataDevelopers",JSON.stringify(o,null,2)),n()}//! MODAL
function n(){I.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}function H(){n()}//! CONFIRM DELETE
function J(e){e.preventDefault(),R.textContent=r,f.classList.remove("is-hidden"),document.body.classList.add("no-scroll")}function P(){f.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}const F=document.querySelectorAll(".our-developers-list__img"),W=e=>{e.src=e.dataset.src,e.parentElement.querySelectorAll("source").forEach(m=>{m.srcset=m.dataset.srcset})},h=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(W(t.target),h.unobserve(t.target),console.log(`Завантажено: ${t.target.alt}`))})},{threshold:.5});F.forEach(e=>h.observe(e));const Y=[{name:"Студія",href:"./index.html",active:!0},{name:"Портфоліо",href:"./portfolio.html",active:!1},{name:"Контакти",href:"#contacts",active:!1}],z={links:Y},G=`{{#each links}}
  <li class="header-list__item">
    <a
      class="header-list__link {{#if active}}header-list__link--active{{/if}}"
      href="{{href}}"
    >
      {{name}}
    </a>
  </li>
{{/each}}
`,K=document.querySelector(".header-list"),Q=d.compile(G),V=Q(z);K.innerHTML=V;const X=document.querySelector(".company-list"),Z=[{width:41,height:46,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company1",self.location).href},{width:41,height:46,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company2",self.location).href},{width:41,height:46,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company3",self.location).href},{width:93,height:43,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company4",self.location).href},{width:69,height:43,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company5",self.location).href},{width:62,height:45,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company6",self.location).href}],ee=Z.map(e=>`
      <li class="company-list__item">
        <a class="company-list__link" href="#">
          <svg width="${e.width}" height="${e.height}">
            <use href="${e.href}"></use>
          </svg>
        </a>
      </li>
    `).join("");X.innerHTML=ee;const te=document.querySelector(".our-work-list"),oe=[{src:new URL("/webstudio-vite-js/assets/work1-b062ba09.jpg",self.location).href,alt:"Робота за комп'ютером",title:"Десктопні додатки",width:370},{src:new URL("/webstudio-vite-js/assets/work2-592f2ac7.jpg",self.location).href,alt:"Робота за телефоном",title:"Мобільні додатки",width:370},{src:new URL("/webstudio-vite-js/assets/work3-98cf051d.jpg",self.location).href,alt:"Робота за планшетом",title:"Дизайнерські рішення",width:370}],se=oe.map(e=>`
      <li class="our-work-list__item">
        <img 
          src="${e.src}" 
          alt="${e.alt}" 
          width="${e.width}" 
          class="our-work-list__img"
        />
        <div class="our-work-list__overlay">
          <p class="our-work-list__title">${e.title}</p>
        </div>
      </li>
    `).join("");te.innerHTML=se;
