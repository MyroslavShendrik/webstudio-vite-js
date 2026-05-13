import{H as m}from"./social-list-a2172a6a.js";const w=[{title:"УВАГА ДО ДЕТАЛЕЙ",text:"Ідейні міркування, і навіть початок повсякденної роботи з формування позиції."},{title:"ПУНКТУАЛЬНІСТЬ",text:"Завдання організації, особливо рамки і місце навчання кадрів тягне у себе."},{title:"ПЛАНУВАННЯ",text:"Так само консультація з широким активом значною мірою зумовлює."},{title:"СУЧАСНІ ТЕХНОЛОГІЇ",text:"Значимість цих проблем настільки очевидна, що реалізація планових завдань."}],y=` <li class="our-pluses-list__item">
    <h3 class="our-pluses-list__title">{{title}}</h3>
    <p class="our-pluses-list__text">{{text}}</p>
  </li>`,_=document.querySelector(".our-pluses-list"),L=m.compile(y),j=w.map(e=>L(e)).join("");_.innerHTML=j;(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const D=`
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
const k="http://localhost:3000/",x="developers",v=`${k}${x}`;console.log("url:",v);const S=document.querySelector(".our-developers-list");//! var 1
function E(){q().then(e=>M(e)).catch(e=>console.log(e))}function q(){return fetch(v).then(e=>e.json())}//!var2
//! генеруємо HTML за допомогою Handlebars
const $=m.compile(D);function M(e){const t=e.map(n=>$(n)).join("");S.innerHTML=t}E();//! по натиску на кнопку додати розробника: 
//! 1. Сформувати зміну в яку покладемо об'єкт з новими даними розробника 
//! 2.використати метод POST, щоб додати новий об'єкт на JSON сервер 
console.log('%c Додаємо/Редагуємо/Видаляємо розробників в секції "Наша команда"',"color: white; background-color: #D33F49");//! 1️⃣ Дані
const B="http://localhost:3000/",I="developers",u=`${B}${I}`;console.log("url:",u);let r="",s=null,o="";//! Зчитуємо дані з json-server та зберігаємо їх в Масив Об'єктів: dataDevelopersList
function C(){return fetch(u).then(e=>e.json()).then(e=>s=e)}C();console.log("dataDevelopersList:",s);//! 2️⃣ Пошук DOM
const T=document.querySelector(".our-developers-list"),U=document.querySelector(".our-developers__button"),h=document.querySelector(".form-add-edit-developer__title"),A=document.querySelector("[data-modal-add-edit-developer]"),p=document.querySelector(".modal-add-edit-developer__button-delete"),R=document.querySelector(".form-add-edit-developer"),H=document.getElementById("button-cancel"),a=document.querySelector(".form-add-edit-developer__button-submit"),f=document.querySelector(".form-add-edit-developer__img"),c=document.querySelector(".form-add-edit-developer__input-developer-name"),d=document.querySelector(".form-add-edit-developer__input-developer-position"),g=document.querySelector("[data-modal-confirm-delete]"),N=document.getElementById("confirm-delete-yes"),O=document.getElementById("confirm-delete-no"),P=document.getElementById("confirm-dev-name");//! 3️⃣ Слухачі подій
U.addEventListener("click",F);R.addEventListener("submit",Y);H.addEventListener("click",z);T.addEventListener("click",function(e){e.target.classList.contains("our-developers-list__img")&&J(e)});p.addEventListener("click",G);O.addEventListener("click",K);N.addEventListener("click",W);//! 4️⃣ Функції
//! ДОДАТИ
function F(){console.log("dataDevelopersList-addDeveloper:",s),h.textContent="Додати розробника",a.textContent="Додати",p.style.display="none",c.value="",d.value="",i()}//! РЕДАГУВАННЯ
function J(e){h.textContent="Редагування розробника",a.textContent="Редагувати",p.style.display="block",console.log("dataDevelopersList:",s),o=s.find(t=>t.name===e.target.alt),console.log("об'єкт, що редагується:",o),r=o.name,c.value=o.name,d.value=o.position,f.src=o.images.default,i()}//! ВИДАЛЕННЯ
function W(){s=JSON.parse(localStorage.getItem("dataDevelopers")),s=s.filter(e=>e.name!==r),localStorage.setItem("dataDevelopers",JSON.stringify(s,null,2)),i(),location.reload()}//! SUBMIT ФОРМИ
function Y(e){e.preventDefault();//! скасовує перезавантеження сторінки 
if(a.textContent==="Додати"){const n={name:c.value,position:d.value,images:{desktop:["/webstudio-vite-js/images/sample-desktop-1x.jpg 1x,","/webstudio-vite-js/images/sample-desktop-2x.jpg 2x,","/webstudio-vite-js/images/sample-desktop-3x.jpg 3x"],tablet:["/webstudio-vite-js/images/sample-tablet-1x.jpg 1x,","/webstudio-vite-js/images/sample-tablet-2x.jpg 2x,","/webstudio-vite-js/images/sample-tablet-3x.jpg 3x"],mobile:["/webstudio-vite-js/images/sample-mobile-1x.jpg 1x,","/webstudio-vite-js/images/sample-mobile-2x.jpg 2x,","/webstudio-vite-js/images/sample-mobile-3x.jpg 3x"],default:"/webstudio-vite-js/images/sample-mobile-1x.jpg"},icons:["/webstudio-vite-js/images/symboldefs.svg#instagram","/webstudio-vite-js/images/symboldefs.svg#twitter","/webstudio-vite-js/images/symboldefs.svg#facebook","/webstudio-vite-js/images/symboldefs.svg#linkedin"],date:new Date().toLocaleString()};console.log("requestBody:",n);//! ================= CREATE (POST) =================
fetch(u,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(l=>l.json()).then(l=>console.log("POST:",l)).catch(l=>console.log(l))}//! мій код з помилкою 
if(a.textContent==="Редагувати"){console.log("dataDevelopersList:",s),o=s.find(n=>n.name===r),console.log("editableDeveloper:",o),o.name=c.value,o.position=d.value;//! ⭐ ФІКС КАРТИНКИ
o.images.default=f.src}//! ================= UPDATE (PUT) =================
console.log("editableDeveloper:",o);let t=o.id;console.log("developerId:",t),i()}//! MODAL
function i(){A.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}function z(){i()}//! CONFIRM DELETE
function G(e){e.preventDefault(),P.textContent=r,g.classList.remove("is-hidden"),document.body.classList.add("no-scroll")}function K(){g.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}const Q=document.querySelectorAll(".our-developers-list__img"),V=e=>{e.src=e.dataset.src,e.parentElement.querySelectorAll("source").forEach(l=>{l.srcset=l.dataset.srcset})},b=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(V(t.target),b.unobserve(t.target),console.log(`Завантажено: ${t.target.alt}`))})},{threshold:.5});Q.forEach(e=>b.observe(e));const X=[{name:"Студія",href:"./index.html",active:!0},{name:"Портфоліо",href:"./portfolio.html",active:!1},{name:"Контакти",href:"#contacts",active:!1}],Z={links:X},ee=`{{#each links}}
  <li class="header-list__item">
    <a
      class="header-list__link {{#if active}}header-list__link--active{{/if}}"
      href="{{href}}"
    >
      {{name}}
    </a>
  </li>
{{/each}}
`,te=document.querySelector(".header-list"),oe=m.compile(ee),se=oe(Z);te.innerHTML=se;const le=document.querySelector(".company-list"),ne=[{width:41,height:46,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company1",self.location).href},{width:41,height:46,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company2",self.location).href},{width:41,height:46,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company3",self.location).href},{width:93,height:43,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company4",self.location).href},{width:69,height:43,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company5",self.location).href},{width:62,height:45,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company6",self.location).href}],ie=ne.map(e=>`
      <li class="company-list__item">
        <a class="company-list__link" href="#">
          <svg width="${e.width}" height="${e.height}">
            <use href="${e.href}"></use>
          </svg>
        </a>
      </li>
    `).join("");le.innerHTML=ie;const ae=document.querySelector(".our-work-list"),ce=[{src:new URL("/webstudio-vite-js/assets/work1-b062ba09.jpg",self.location).href,alt:"Робота за комп'ютером",title:"Десктопні додатки",width:370},{src:new URL("/webstudio-vite-js/assets/work2-592f2ac7.jpg",self.location).href,alt:"Робота за телефоном",title:"Мобільні додатки",width:370},{src:new URL("/webstudio-vite-js/assets/work3-98cf051d.jpg",self.location).href,alt:"Робота за планшетом",title:"Дизайнерські рішення",width:370}],de=ce.map(e=>`
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
    `).join("");ae.innerHTML=de;
