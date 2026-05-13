import{H as u}from"./social-list-a2172a6a.js";const g=[{title:"УВАГА ДО ДЕТАЛЕЙ",text:"Ідейні міркування, і навіть початок повсякденної роботи з формування позиції."},{title:"ПУНКТУАЛЬНІСТЬ",text:"Завдання організації, особливо рамки і місце навчання кадрів тягне у себе."},{title:"ПЛАНУВАННЯ",text:"Так само консультація з широким активом значною мірою зумовлює."},{title:"СУЧАСНІ ТЕХНОЛОГІЇ",text:"Значимість цих проблем настільки очевидна, що реалізація планових завдань."}],y=` <li class="our-pluses-list__item">
    <h3 class="our-pluses-list__title">{{title}}</h3>
    <p class="our-pluses-list__text">{{text}}</p>
  </li>`,_=document.querySelector(".our-pluses-list"),b=u.compile(y),L=g.map(e=>b(e)).join("");_.innerHTML=L;(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const w=`
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
const D="http://localhost:3000/",k="developers",p=`${D}${k}`;console.log("url:",p);const S=document.querySelector(".our-developers-list");//! var 1
function j(){E().then(e=>$(e)).catch(e=>console.log(e))}function E(){return fetch(p).then(e=>e.json())}//!var2
//! генеруємо HTML за допомогою Handlebars
const q=u.compile(w);function $(e){const t=e.map(o=>q(o)).join("");S.innerHTML=t}j();//! по натиску на кнопку додати розробника: 
//! 1. Сформувати зміну в яку покладемо об'єкт з новими даними розробника 
//! 2.використати метод POST, щоб додати новий об'єкт на JSON сервер 
console.log('%c Додаємо/Редагуємо/Видаляємо розробників в секції "Наша команда"',"color: white; background-color: #D33F49");//! 1️⃣ Дані
const x="http://localhost:3000/",M="developers",r=`${x}${M}`;console.log("url:",r);let c="";//! 2️⃣ Пошук DOM
const B=document.querySelector(".our-developers-list"),C=document.querySelector(".our-developers__button"),v=document.querySelector(".form-add-edit-developer__title"),I=document.querySelector("[data-modal-add-edit-developer]"),m=document.querySelector(".modal-add-edit-developer__button-delete"),T=document.querySelector(".form-add-edit-developer"),U=document.getElementById("button-cancel"),l=document.querySelector(".form-add-edit-developer__button-submit"),d=document.querySelector(".form-add-edit-developer__img"),i=document.querySelector(".form-add-edit-developer__input-developer-name"),a=document.querySelector(".form-add-edit-developer__input-developer-position"),h=document.querySelector("[data-modal-confirm-delete]"),A=document.getElementById("confirm-delete-yes"),R=document.getElementById("confirm-delete-no"),N=document.getElementById("confirm-dev-name");//! 3️⃣ Слухачі подій
C.addEventListener("click",O);T.addEventListener("submit",J);U.addEventListener("click",F);B.addEventListener("click",function(e){e.target.classList.contains("our-developers-list__img")&&H(e)});m.addEventListener("click",W);R.addEventListener("click",Y);A.addEventListener("click",P);//! 4️⃣ Функції
//! ДОДАТИ
function O(){v.textContent="Додати розробника",l.textContent="Додати",m.style.display="none",i.value="",a.value="",n()}//! РЕДАГУВАННЯ
function H(e){v.textContent="Редагування розробника",l.textContent="Редагувати",m.style.display="block",dataDevelopersList=fetch("http://localhost:3000/developers"),console.log("dataDevelopersList:",dataDevelopersList);const t=dataDevelopersList.find(o=>o.name===e.target.alt);c=t.name,i.value=t.name,a.value=t.position,d.src=t.images.default,n()}//! ВИДАЛЕННЯ
function P(){dataDevelopersList=JSON.parse(localStorage.getItem("dataDevelopers")),dataDevelopersList=dataDevelopersList.filter(e=>e.name!==c),localStorage.setItem("dataDevelopers",JSON.stringify(dataDevelopersList,null,2)),n(),location.reload()}//! SUBMIT ФОРМИ
function J(e){if(e.preventDefault(),l.textContent==="Додати"){const t={name:i.value,position:a.value,images:{default:d.getAttribute("src")||"./images/developers/default.jpg"},icons:["/webstudio-vite-js/images/symboldefs.svg#instagram","/webstudio-vite-js/images/symboldefs.svg#twitter","/webstudio-vite-js/images/symboldefs.svg#facebook","/webstudio-vite-js/images/symboldefs.svg#linkedin"],date:new Date().toLocaleString()};fetch(r,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(o=>o.json()).then(o=>{console.log("POST:",o),fetch(r).then(s=>s.json()).then(s=>{dataDevelopersList=s})}).catch(o=>console.log(o))}if(l.textContent==="Редагувати"){const t=dataDevelopersList.find(o=>o.name===c);t.name=i.value,t.position=a.value;//! ⭐ ФІКС КАРТИНКИ
t.images.default=d.src}localStorage.setItem("dataDevelopers",JSON.stringify(dataDevelopersList,null,2)),n()}//! MODAL
function n(){I.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}function F(){n()}//! CONFIRM DELETE
function W(e){e.preventDefault(),N.textContent=c,h.classList.remove("is-hidden"),document.body.classList.add("no-scroll")}function Y(){h.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}const z=document.querySelectorAll(".our-developers-list__img"),G=e=>{e.src=e.dataset.src,e.parentElement.querySelectorAll("source").forEach(s=>{s.srcset=s.dataset.srcset})},f=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(G(t.target),f.unobserve(t.target),console.log(`Завантажено: ${t.target.alt}`))})},{threshold:.5});z.forEach(e=>f.observe(e));const K=[{name:"Студія",href:"./index.html",active:!0},{name:"Портфоліо",href:"./portfolio.html",active:!1},{name:"Контакти",href:"#contacts",active:!1}],Q={links:K},V=`{{#each links}}
  <li class="header-list__item">
    <a
      class="header-list__link {{#if active}}header-list__link--active{{/if}}"
      href="{{href}}"
    >
      {{name}}
    </a>
  </li>
{{/each}}
`,X=document.querySelector(".header-list"),Z=u.compile(V),ee=Z(Q);X.innerHTML=ee;const te=document.querySelector(".company-list"),oe=[{width:41,height:46,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company1",self.location).href},{width:41,height:46,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company2",self.location).href},{width:41,height:46,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company3",self.location).href},{width:93,height:43,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company4",self.location).href},{width:69,height:43,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company5",self.location).href},{width:62,height:45,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company6",self.location).href}],se=oe.map(e=>`
      <li class="company-list__item">
        <a class="company-list__link" href="#">
          <svg width="${e.width}" height="${e.height}">
            <use href="${e.href}"></use>
          </svg>
        </a>
      </li>
    `).join("");te.innerHTML=se;const ne=document.querySelector(".our-work-list"),le=[{src:new URL("/webstudio-vite-js/assets/work1-b062ba09.jpg",self.location).href,alt:"Робота за комп'ютером",title:"Десктопні додатки",width:370},{src:new URL("/webstudio-vite-js/assets/work2-592f2ac7.jpg",self.location).href,alt:"Робота за телефоном",title:"Мобільні додатки",width:370},{src:new URL("/webstudio-vite-js/assets/work3-98cf051d.jpg",self.location).href,alt:"Робота за планшетом",title:"Дизайнерські рішення",width:370}],ie=le.map(e=>`
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
    `).join("");ne.innerHTML=ie;
