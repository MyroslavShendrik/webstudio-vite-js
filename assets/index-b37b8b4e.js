import{H as g}from"./social-list-d9a96a1c.js";const w=[{title:"УВАГА ДО ДЕТАЛЕЙ",text:"Ідейні міркування, і навіть початок повсякденної роботи з формування позиції."},{title:"ПУНКТУАЛЬНІСТЬ",text:"Завдання організації, особливо рамки і місце навчання кадрів тягне у себе."},{title:"ПЛАНУВАННЯ",text:"Так само консультація з широким активом значною мірою зумовлює."},{title:"СУЧАСНІ ТЕХНОЛОГІЇ",text:"Значимість цих проблем настільки очевидна, що реалізація планових завдань."}],k=` <li class="our-pluses-list__item">
    <h3 class="our-pluses-list__title">{{title}}</h3>
    <p class="our-pluses-list__text">{{text}}</p>
  </li>`,D=document.querySelector(".our-pluses-list"),x=g.compile(k),E=w.map(e=>x(e)).join("");D.innerHTML=E;(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const S=`
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
const $="http://localhost:3000/",j="developers",f=`${$}${j}`;console.log("url:",f);const q=document.querySelector(".our-developers-list");//! var 1
function T(){B().then(e=>C(e)).catch(e=>console.log(e))}function B(){return fetch(f).then(e=>e.json())}//!var2
//! генеруємо HTML за допомогою Handlebars
const M=g.compile(S);function C(e){const t=e.map(d=>M(d)).join("");q.innerHTML=t}T();//! по натиску на кнопку додати розробника: 
//! 1. Сформувати зміну в яку покладемо об'єкт з новими даними розробника 
//! 2.використати метод POST, щоб додати новий об'єкт на JSON сервер 
console.log('%c Додаємо/Редагуємо/Видаляємо розробників в секції "Наша команда"',"color: white; background-color: #D33F49");//! 1️⃣ Дані
const U="http://localhost:3000/",A="developers",i=`${U}${A}`;console.log("url:",i);let r="",a=null,o="";//! Зчитуємо дані з json-server та зберігаємо їх в Масив Об'єктів: dataDevelopersList
function y(){return fetch(i).then(e=>e.json()).then(e=>a=e)}y();console.log("dataDevelopersList:",a);//! 2️⃣ Пошук DOM
const I=document.querySelector(".our-developers-list"),_=document.querySelector(".our-developers__button");console.log(_);const b=document.querySelector(".form-add-edit-developer__title"),R=document.querySelector("[data-modal-add-edit-developer]"),h=document.querySelector(".modal-add-edit-developer__button-delete"),H=document.querySelector(".form-add-edit-developer"),P=document.getElementById("button-cancel"),m=document.querySelector(".form-add-edit-developer__button-submit"),p=document.querySelector(".form-add-edit-developer__img"),s=document.querySelector(".form-add-edit-developer__input-developer-name"),n=document.querySelector(".form-add-edit-developer__input-developer-position"),N=document.querySelector("[data-modal-confirm-delete]"),O=document.getElementById("confirm-delete-yes"),F=document.getElementById("confirm-delete-no"),J=document.getElementById("confirm-dev-name");//! 3️⃣ Слухачі подій
_.addEventListener("click",W);H.addEventListener("submit",G);P.addEventListener("click",v);I.addEventListener("click",function(e){e.target.classList.contains("our-developers-list__img")&&Y(e)});h.addEventListener("click",K);F.addEventListener("click",v);O.addEventListener("click",z);//! 4️⃣ Функції
//! ДОДАТИ
function W(){console.log("Натиснули Додати"),o=null,r="",b.textContent="Додати розробника",m.textContent="Додати",h.style.display="none",s.value="",n.value="",p.src="/images/default.jpg",u()}//! РЕДАГУВАННЯ
function Y(e){b.textContent="Редагування розробника",m.textContent="Редагувати",h.style.display="block",console.log("dataDevelopersList:",a),o=a.find(t=>t.name===e.target.alt),console.log("об'єкт, що редагується:",o),r=o.name,s.value=o.name,n.value=o.position,p.src=o.images.default,u()}//! ВИДАЛЕННЯ
async function z(){try{const e=o.id;console.log("editableDeveloper:",o),console.log("developerId:",e),console.log("DELETE URL:",`${i}/${e}`);const t=await fetch(`${i}/${e}`,{method:"DELETE"});if(!t.ok)throw new Error(`Помилка видалення: ${t.status}`);closeConfirmModal(),v(),await y(),location.reload()}catch(e){console.error("Помилка deleteDeveloper:",e),alert("Не вдалося видалити розробника.")}}//! SUBMIT ФОРМИ
function G(e){if(m.textContent==="Додати"){const l={name:s.value,position:n.value,images:{desktop:["images/sample-desktop-1x.jpg 1x,","images/sample-desktop-2x.jpg 2x,","images/sample-desktop-3x.jpg 3x"],tablet:["images/sample-tablet-1x.jpg 1x,","images/sample-tablet-2x.jpg 2x,","images/sample-tablet-3x.jpg 3x"],mobile:["images/sample-mobile-1x.jpg 1x,","images/sample-mobile-2x.jpg 2x,","images/sample-mobile-3x.jpg 3x"],default:"images/sample-mobile-1x.jpg"},icons:["images/symboldefs.svg#instagram","images/symboldefs.svg#twitter","images/symboldefs.svg#facebook","images/symboldefs.svg#linkedin"],date:new Date().toLocaleString()};console.log("requestBody:",l);//! ================= CREATE (POST) =================
fetch(i,{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(c=>c.json()).then(c=>console.log("POST:",c)).catch(c=>console.log(c))}//! мій код з помилкою 
if(m.textContent==="Редагувати"){console.log("dataDevelopersList:",a),o=a.find(l=>l.name===r),console.log("editableDeveloper:",o),o.name=s.value,o.position=n.value;//! ⭐ ФІКС КАРТИНКИ
o.images.default=p.src}//! ================= UPDATE (PUT) =================
console.log("editableDeveloper:",o);let t=o.id;console.log("developerId:",t);//! ================= UPDATE (PATCH) =================
const d={name:s.value,position:n.value};fetch(`${i}/${t}`,{method:"PATCH",body:JSON.stringify(d),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(l=>l.json()).then(l=>console.log("PATCH:",l)).catch(l=>console.log(l)),u()}//! MODAL
function u(){R.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}//! CONFIRM DELETE
function K(e){e.preventDefault(),J.textContent=r,N.classList.remove("is-hidden"),document.body.classList.add("no-scroll")}function v(){s.value="",n.value="",p.src="/images/default.jpg",o=null,r="",u()}const Q=document.querySelectorAll(".our-developers-list__img"),V=e=>{e.src=e.dataset.src,e.parentElement.querySelectorAll("source").forEach(l=>{l.srcset=l.dataset.srcset})},L=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(V(t.target),L.unobserve(t.target),console.log(`Завантажено: ${t.target.alt}`))})},{threshold:.5});Q.forEach(e=>L.observe(e));const X=[{name:"Студія",href:"./index.html",active:!0},{name:"Портфоліо",href:"./portfolio.html",active:!1},{name:"Контакти",href:"#contacts",active:!1}],Z={links:X},ee=`{{#each links}}
  <li class="header-list__item">
    <a
      class="header-list__link {{#if active}}header-list__link--active{{/if}}"
      href="{{href}}"
    >
      {{name}}
    </a>
  </li>
{{/each}}
`,te=document.querySelector(".header-list"),oe=g.compile(ee),le=oe(Z);te.innerHTML=le;const se=document.querySelector(".company-list"),ne=[{width:41,height:46,href:new URL("../images/symboldefs.svg#company1",self.location).href},{width:41,height:46,href:new URL("../images/symboldefs.svg#company2",self.location).href},{width:41,height:46,href:new URL("../images/symboldefs.svg#company3",self.location).href},{width:93,height:43,href:new URL("../images/symboldefs.svg#company4",self.location).href},{width:69,height:43,href:new URL("../images/symboldefs.svg#company5",self.location).href},{width:62,height:45,href:new URL("../images/symboldefs.svg#company6",self.location).href}],ie=ne.map(e=>`
      <li class="company-list__item">
        <a class="company-list__link" href="#">
          <svg width="${e.width}" height="${e.height}">
            <use href="${e.href}"></use>
          </svg>
        </a>
      </li>
    `).join("");se.innerHTML=ie;const ae=document.querySelector(".our-work-list"),ce=[{src:new URL("../images/work1.jpg",self.location).href,alt:"Робота за комп'ютером",title:"Десктопні додатки",width:370},{src:new URL("../images/work2.jpg",self.location).href,alt:"Робота за телефоном",title:"Мобільні додатки",width:370},{src:new URL("../images/work3.jpg",self.location).href,alt:"Робота за планшетом",title:"Дизайнерські рішення",width:370}],re=ce.map(e=>`
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
    `).join("");ae.innerHTML=re;
