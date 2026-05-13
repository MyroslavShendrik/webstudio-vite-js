import{H as r}from"./social-list-a2172a6a.js";const b=[{title:"УВАГА ДО ДЕТАЛЕЙ",text:"Ідейні міркування, і навіть початок повсякденної роботи з формування позиції."},{title:"ПУНКТУАЛЬНІСТЬ",text:"Завдання організації, особливо рамки і місце навчання кадрів тягне у себе."},{title:"ПЛАНУВАННЯ",text:"Так само консультація з широким активом значною мірою зумовлює."},{title:"СУЧАСНІ ТЕХНОЛОГІЇ",text:"Значимість цих проблем настільки очевидна, що реалізація планових завдань."}],w=` <li class="our-pluses-list__item">
    <h3 class="our-pluses-list__title">{{title}}</h3>
    <p class="our-pluses-list__text">{{text}}</p>
  </li>`,y=document.querySelector(".our-pluses-list"),_=r.compile(w),L=b.map(e=>_(e)).join("");y.innerHTML=L;(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const j=`
<li class="our-developers-list__item">
  <picture>
    <source
      srcset="
        {{#each images.desktop}}
          {{this}}
        {{/each}}
      "
      media="(min-width: 1200px)"
    />

    <source
      srcset="
        {{#each images.tablet}}
          {{this}}
        {{/each}}
      "
      media="(min-width: 768px)"
    />

    <source
      srcset="
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
const k="http://localhost:3000/",x="developers",p=`${k}${x}`;console.log("url:",p);const D=document.querySelector(".our-developers-list");//! var 1
function S(){E().then(e=>$(e)).catch(e=>console.log(e))}function E(){return fetch(p).then(e=>e.json())}//!var2
//! генеруємо HTML за допомогою Handlebars
const q=r.compile(j);function $(e){const t=e.map(o=>q(o)).join("");D.innerHTML=t}S();//! по натиску на кнопку додати розробника: 
//! 1. Сформувати зміну в яку покладемо об'єкт з новими даними розробника 
//! 2.використати метод POST, щоб додати новий об'єкт на JSON сервер 
console.log('%c Додаємо/Редагуємо/Видаляємо розробників в секції "Наша команда"',"color: white; background-color: #D33F49");//! 1️⃣ Дані
const M="http://localhost:3000/",B="developers",d=`${M}${B}`;console.log("url:",d);let c="",s=null;//! Зчитуємо дані з json-server та зберігаємо їх в Масив Об'єктів: dataDevelopersList
function C(){return fetch(d).then(e=>e.json()).then(e=>s=e)}C();console.log("dataDevelopersList:",s);//! 2️⃣ Пошук DOM
const I=document.querySelector(".our-developers-list"),T=document.querySelector(".our-developers__button"),v=document.querySelector(".form-add-edit-developer__title"),U=document.querySelector("[data-modal-add-edit-developer]"),m=document.querySelector(".modal-add-edit-developer__button-delete"),A=document.querySelector(".form-add-edit-developer"),R=document.getElementById("button-cancel"),n=document.querySelector(".form-add-edit-developer__button-submit"),h=document.querySelector(".form-add-edit-developer__img"),i=document.querySelector(".form-add-edit-developer__input-developer-name"),a=document.querySelector(".form-add-edit-developer__input-developer-position"),f=document.querySelector("[data-modal-confirm-delete]"),N=document.getElementById("confirm-delete-yes"),H=document.getElementById("confirm-delete-no"),O=document.getElementById("confirm-dev-name");//! 3️⃣ Слухачі подій
T.addEventListener("click",P);A.addEventListener("submit",W);R.addEventListener("click",Y);I.addEventListener("click",function(e){e.target.classList.contains("our-developers-list__img")&&J(e)});m.addEventListener("click",z);H.addEventListener("click",G);N.addEventListener("click",F);//! 4️⃣ Функції
//! ДОДАТИ
function P(){console.log("dataDevelopersList-addDeveloper:",s),v.textContent="Додати розробника",n.textContent="Додати",m.style.display="none",i.value="",a.value="",l()}//! РЕДАГУВАННЯ
function J(e){v.textContent="Редагування розробника",n.textContent="Редагувати",m.style.display="block",s=fetch("http://localhost:3000/developers"),console.log("dataDevelopersList:",s);const t=s.find(o=>o.name===e.target.alt);c=t.name,i.value=t.name,a.value=t.position,h.src=t.images.default,l()}//! ВИДАЛЕННЯ
function F(){s=JSON.parse(localStorage.getItem("dataDevelopers")),s=s.filter(e=>e.name!==c),localStorage.setItem("dataDevelopers",JSON.stringify(s,null,2)),l(),location.reload()}//! SUBMIT ФОРМИ
function W(e){if(n.textContent==="Додати"){const t={name:i.value,position:a.value,images:{desktop:["/webstudio-vite-js/images/sample-desktop-1x.jpg 1x,","/webstudio-vite-js/images/sample-desktop-2x.jpg 2x,","/webstudio-vite-js/images/sample-desktop-3x.jpg 3x"],tablet:["/webstudio-vite-js/images/sample-tablet-1x.jpg 1x,","/webstudio-vite-js/images/sample-tablet-2x.jpg 2x,","/webstudio-vite-js/images/sample-tablet-3x.jpg 3x"],mobile:["/webstudio-vite-js/images/sample-mobile-1x.jpg 1x,","/webstudio-vite-js/images/sample-mobile-2x.jpg 2x,","/webstudio-vite-js/images/sample-mobile-3x.jpg 3x"],default:"/webstudio-vite-js/images/sample-mobile-1x.jpg"},icons:["/webstudio-vite-js/images/symboldefs.svg#instagram","/webstudio-vite-js/images/symboldefs.svg#twitter","/webstudio-vite-js/images/symboldefs.svg#facebook","/webstudio-vite-js/images/symboldefs.svg#linkedin"],date:new Date().toLocaleString()};console.log("requestBody:",t);//! ================= CREATE (POST) =================
fetch(d,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(o=>o.json()).then(o=>console.log("POST:",o)).catch(o=>console.log(o))}//! мій код з помилкою 
if(n.textContent==="Редагувати"){const t=s.find(o=>o.name===c);t.name=i.value,t.position=a.value;//! ⭐ ФІКС КАРТИНКИ
t.images.default=h.src}localStorage.setItem("dataDevelopers",JSON.stringify(s,null,2)),l()}//! MODAL
function l(){U.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}function Y(){l()}//! CONFIRM DELETE
function z(e){e.preventDefault(),O.textContent=c,f.classList.remove("is-hidden"),document.body.classList.add("no-scroll")}function G(){f.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}const K=document.querySelectorAll(".our-developers-list__img"),Q=e=>{e.src=e.dataset.src,e.parentElement.querySelectorAll("source").forEach(u=>{u.srcset=u.dataset.srcset})},g=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(Q(t.target),g.unobserve(t.target),console.log(`Завантажено: ${t.target.alt}`))})},{threshold:.5});K.forEach(e=>g.observe(e));const V=[{name:"Студія",href:"./index.html",active:!0},{name:"Портфоліо",href:"./portfolio.html",active:!1},{name:"Контакти",href:"#contacts",active:!1}],X={links:V},Z=`{{#each links}}
  <li class="header-list__item">
    <a
      class="header-list__link {{#if active}}header-list__link--active{{/if}}"
      href="{{href}}"
    >
      {{name}}
    </a>
  </li>
{{/each}}
`,ee=document.querySelector(".header-list"),te=r.compile(Z),oe=te(X);ee.innerHTML=oe;const se=document.querySelector(".company-list"),le=[{width:41,height:46,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company1",self.location).href},{width:41,height:46,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company2",self.location).href},{width:41,height:46,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company3",self.location).href},{width:93,height:43,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company4",self.location).href},{width:69,height:43,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company5",self.location).href},{width:62,height:45,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company6",self.location).href}],ne=le.map(e=>`
      <li class="company-list__item">
        <a class="company-list__link" href="#">
          <svg width="${e.width}" height="${e.height}">
            <use href="${e.href}"></use>
          </svg>
        </a>
      </li>
    `).join("");se.innerHTML=ne;const ie=document.querySelector(".our-work-list"),ae=[{src:new URL("/webstudio-vite-js/assets/work1-b062ba09.jpg",self.location).href,alt:"Робота за комп'ютером",title:"Десктопні додатки",width:370},{src:new URL("/webstudio-vite-js/assets/work2-592f2ac7.jpg",self.location).href,alt:"Робота за телефоном",title:"Мобільні додатки",width:370},{src:new URL("/webstudio-vite-js/assets/work3-98cf051d.jpg",self.location).href,alt:"Робота за планшетом",title:"Дизайнерські рішення",width:370}],ce=ae.map(e=>`
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
    `).join("");ie.innerHTML=ce;
