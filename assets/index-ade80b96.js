import{H as g}from"./social-list-d9a96a1c.js";const x=[{title:"УВАГА ДО ДЕТАЛЕЙ",text:"Ідейні міркування, і навіть початок повсякденної роботи з формування позиції."},{title:"ПУНКТУАЛЬНІСТЬ",text:"Завдання організації, особливо рамки і місце навчання кадрів тягне у себе."},{title:"ПЛАНУВАННЯ",text:"Так само консультація з широким активом значною мірою зумовлює."},{title:"СУЧАСНІ ТЕХНОЛОГІЇ",text:"Значимість цих проблем настільки очевидна, що реалізація планових завдань."}],D=` <li class="our-pluses-list__item">
    <h3 class="our-pluses-list__title">{{title}}</h3>
    <p class="our-pluses-list__text">{{text}}</p>
  </li>`,j=document.querySelector(".our-pluses-list"),E=g.compile(D),S=x.map(e=>E(e)).join("");j.innerHTML=S;(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const $=`
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
const q="http://localhost:3000/",T="developers",v=`${q}${T}`;console.log("url:",v);const B=document.querySelector(".our-developers-list");//! var 1
function M(){C().then(e=>U(e)).catch(e=>console.log(e))}function C(){return fetch(v).then(e=>e.json())}//!var2
//! генеруємо HTML за допомогою Handlebars
const A=g.compile($);function U(e){const t=e.map(d=>A(d)).join("");B.innerHTML=t}M();//! по натиску на кнопку додати розробника: 
//! 1. Сформувати зміну в яку покладемо об'єкт з новими даними розробника 
//! 2.використати метод POST, щоб додати новий об'єкт на JSON сервер 
console.log('%c Додаємо/Редагуємо/Видаляємо розробників в секції "Наша команда"',"color: white; background-color: #D33F49");//! 1️⃣ Дані
const I="http://localhost:3000/",R="developers",i=`${I}${R}`;console.log("url:",i);let r="",a=null,o="";//! Зчитуємо дані з json-server та зберігаємо їх в Масив Об'єктів: dataDevelopersList
function f(){return fetch(i).then(e=>e.json()).then(e=>a=e)}f();console.log("dataDevelopersList:",a);//! 2️⃣ Пошук DOM
const H=document.querySelector(".our-developers-list"),y=document.querySelector(".our-developers__button");console.log(y);const b=document.querySelector(".form-add-edit-developer__title"),P=document.querySelector("[data-modal-add-edit-developer]"),h=document.querySelector(".modal-add-edit-developer__button-delete"),N=document.querySelector(".form-add-edit-developer"),O=document.getElementById("button-cancel"),m=document.querySelector(".form-add-edit-developer__button-submit"),u=document.querySelector(".form-add-edit-developer__img"),l=document.querySelector(".form-add-edit-developer__input-developer-name"),n=document.querySelector(".form-add-edit-developer__input-developer-position"),_=document.querySelector("[data-modal-confirm-delete]"),F=document.getElementById("confirm-delete-yes"),J=document.getElementById("confirm-delete-no"),W=document.getElementById("confirm-dev-name");//! 3️⃣ Слухачі подій
y.addEventListener("click",Y);N.addEventListener("submit",K);O.addEventListener("click",L);H.addEventListener("click",function(e){e.target.classList.contains("our-developers-list__img")&&z(e)});h.addEventListener("click",Q);J.addEventListener("click",w);F.addEventListener("click",G);//! 4️⃣ Функції
//! ДОДАТИ
function Y(){console.log("Натиснули Додати"),o=null,r="",b.textContent="Додати розробника",m.textContent="Додати",h.style.display="none",l.value="",n.value="",u.src="/images/default.jpg",p()}//! РЕДАГУВАННЯ
function z(e){b.textContent="Редагування розробника",m.textContent="Редагувати",h.style.display="block",console.log("dataDevelopersList:",a),o=a.find(t=>t.name===e.target.alt),console.log("об'єкт, що редагується:",o),r=o.name,l.value=o.name,n.value=o.position,u.src=o.images.default,p()}//! ВИДАЛЕННЯ
async function G(){try{const e=o.id;console.log("DELETE:",`${i}/${e}`);const t=await fetch(`${i}/${e}`,{method:"DELETE"});if(!t.ok)throw new Error(`Помилка видалення: ${t.status}`);w(),L(),await f(),location.reload()}catch(e){console.error(e),alert("Не вдалося видалити розробника.")}}//! SUBMIT ФОРМИ
function K(e){if(m.textContent==="Додати"){const s={name:l.value,position:n.value,images:{desktop:["images/sample-desktop-1x.jpg 1x,","images/sample-desktop-2x.jpg 2x,","images/sample-desktop-3x.jpg 3x"],tablet:["images/sample-tablet-1x.jpg 1x,","images/sample-tablet-2x.jpg 2x,","images/sample-tablet-3x.jpg 3x"],mobile:["images/sample-mobile-1x.jpg 1x,","images/sample-mobile-2x.jpg 2x,","images/sample-mobile-3x.jpg 3x"],default:"images/sample-mobile-1x.jpg"},icons:["images/symboldefs.svg#instagram","images/symboldefs.svg#twitter","images/symboldefs.svg#facebook","images/symboldefs.svg#linkedin"],date:new Date().toLocaleString()};console.log("requestBody:",s);//! ================= CREATE (POST) =================
fetch(i,{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(c=>c.json()).then(c=>console.log("POST:",c)).catch(c=>console.log(c))}//! мій код з помилкою 
if(m.textContent==="Редагувати"){console.log("dataDevelopersList:",a),o=a.find(s=>s.name===r),console.log("editableDeveloper:",o),o.name=l.value,o.position=n.value;//! ⭐ ФІКС КАРТИНКИ
o.images.default=u.src}//! ================= UPDATE (PUT) =================
console.log("editableDeveloper:",o);let t=o.id;console.log("developerId:",t);//! ================= UPDATE (PATCH) =================
const d={name:l.value,position:n.value};fetch(`${i}/${t}`,{method:"PATCH",body:JSON.stringify(d),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(s=>s.json()).then(s=>console.log("PATCH:",s)).catch(s=>console.log(s)),p()}//! MODAL
function p(){P.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}//! CONFIRM DELETE
function Q(e){e.preventDefault(),W.textContent=r,_.classList.remove("is-hidden"),document.body.classList.add("no-scroll")}function w(){_.classList.add("is-hidden")}function L(){l.value="",n.value="",u.src="/images/default.jpg",o=null,r="",p()}const V=document.querySelectorAll(".our-developers-list__img"),X=e=>{e.src=e.dataset.src,e.parentElement.querySelectorAll("source").forEach(s=>{s.srcset=s.dataset.srcset})},k=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(X(t.target),k.unobserve(t.target),console.log(`Завантажено: ${t.target.alt}`))})},{threshold:.5});V.forEach(e=>k.observe(e));const Z=[{name:"Студія",href:"./index.html",active:!0},{name:"Портфоліо",href:"./portfolio.html",active:!1},{name:"Контакти",href:"#contacts",active:!1}],ee={links:Z},te=`{{#each links}}
  <li class="header-list__item">
    <a
      class="header-list__link {{#if active}}header-list__link--active{{/if}}"
      href="{{href}}"
    >
      {{name}}
    </a>
  </li>
{{/each}}
`,oe=document.querySelector(".header-list"),se=g.compile(te),le=se(ee);oe.innerHTML=le;const ne=document.querySelector(".company-list"),ie=[{width:41,height:46,href:new URL("/webstudio-vite-js/images/symboldefs.svg#company1",self.location).href},{width:41,height:46,href:new URL("/webstudio-vite-js/images/symboldefs.svg#company2",self.location).href},{width:41,height:46,href:new URL("/webstudio-vite-js/images/symboldefs.svg#company3",self.location).href},{width:93,height:43,href:new URL("/webstudio-vite-js/images/symboldefs.svg#company4",self.location).href},{width:69,height:43,href:new URL("/webstudio-vite-js/images/symboldefs.svg#company5",self.location).href},{width:62,height:45,href:new URL("/webstudio-vite-js/images/symboldefs.svg#company6",self.location).href}],ae=ie.map(e=>`
      <li class="company-list__item">
        <a class="company-list__link" href="#">
          <svg width="${e.width}" height="${e.height}">
            <use href="${e.href}"></use>
          </svg>
        </a>
      </li>
    `).join("");ne.innerHTML=ae;const ce=document.querySelector(".our-work-list"),re=[{src:new URL("/webstudio-vite-js/images/work1.jpg",self.location).href,alt:"Робота за комп'ютером",title:"Десктопні додатки",width:370},{src:new URL("/webstudio-vite-js/images/work2.jpg",self.location).href,alt:"Робота за телефоном",title:"Мобільні додатки",width:370},{src:new URL("/webstudio-vite-js/images/work3.jpg",self.location).href,alt:"Робота за планшетом",title:"Дизайнерські рішення",width:370}],de=re.map(e=>`
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
    `).join("");ce.innerHTML=de;
