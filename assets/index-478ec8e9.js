import{H as p}from"./social-list-d9a96a1c.js";const b=[{title:"УВАГА ДО ДЕТАЛЕЙ",text:"Ідейні міркування, і навіть початок повсякденної роботи з формування позиції."},{title:"ПУНКТУАЛЬНІСТЬ",text:"Завдання організації, особливо рамки і місце навчання кадрів тягне у себе."},{title:"ПЛАНУВАННЯ",text:"Так само консультація з широким активом значною мірою зумовлює."},{title:"СУЧАСНІ ТЕХНОЛОГІЇ",text:"Значимість цих проблем настільки очевидна, що реалізація планових завдань."}],L=` <li class="our-pluses-list__item">
    <h3 class="our-pluses-list__title">{{title}}</h3>
    <p class="our-pluses-list__text">{{text}}</p>
  </li>`,w=document.querySelector(".our-pluses-list"),k=p.compile(L),D=b.map(e=>k(e)).join("");w.innerHTML=D;(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const x=`
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
const E="http://localhost:3000/",S="developers",g=`${E}${S}`;console.log("url:",g);const $=document.querySelector(".our-developers-list");//! var 1
function j(){q().then(e=>B(e)).catch(e=>console.log(e))}function q(){return fetch(g).then(e=>e.json())}//!var2
//! генеруємо HTML за допомогою Handlebars
const T=p.compile(x);function B(e){const t=e.map(d=>T(d)).join("");$.innerHTML=t}j();//! по натиску на кнопку додати розробника: 
//! 1. Сформувати зміну в яку покладемо об'єкт з новими даними розробника 
//! 2.використати метод POST, щоб додати новий об'єкт на JSON сервер 
console.log('%c Додаємо/Редагуємо/Видаляємо розробників в секції "Наша команда"',"color: white; background-color: #D33F49");//! 1️⃣ Дані
const M="http://localhost:3000/",C="developers",c=`${M}${C}`;console.log("url:",c);let u="",l=null,o="";//! Зчитуємо дані з json-server та зберігаємо їх в Масив Об'єктів: dataDevelopersList
function A(){return fetch(c).then(e=>e.json()).then(e=>l=e)}A();console.log("dataDevelopersList:",l);//! 2️⃣ Пошук DOM
const I=document.querySelector(".our-developers-list"),U=document.querySelector(".our-developers__button"),v=document.querySelector(".form-add-edit-developer__title"),R=document.querySelector("[data-modal-add-edit-developer]"),h=document.querySelector(".modal-add-edit-developer__button-delete"),H=document.querySelector(".form-add-edit-developer"),P=document.getElementById("button-cancel"),m=document.querySelector(".form-add-edit-developer__button-submit"),f=document.querySelector(".form-add-edit-developer__img"),i=document.querySelector(".form-add-edit-developer__input-developer-name"),a=document.querySelector(".form-add-edit-developer__input-developer-position"),y=document.querySelector("[data-modal-confirm-delete]"),N=document.getElementById("confirm-delete-yes"),O=document.getElementById("confirm-delete-no"),F=document.getElementById("confirm-dev-name");//! 3️⃣ Слухачі подій
U.addEventListener("click",J);H.addEventListener("submit",z);P.addEventListener("click",G);I.addEventListener("click",function(e){e.target.classList.contains("our-developers-list__img")&&W(e)});h.addEventListener("click",K);O.addEventListener("click",Q);N.addEventListener("click",Y);//! 4️⃣ Функції
//! ДОДАТИ
function J(){console.log("dataDevelopersList-addDeveloper:",l),v.textContent="Додати розробника",m.textContent="Додати",h.style.display="none",i.value="",a.value="",r()}//! РЕДАГУВАННЯ
function W(e){v.textContent="Редагування розробника",m.textContent="Редагувати",h.style.display="block",console.log("dataDevelopersList:",l),o=l.find(t=>t.name===e.target.alt),console.log("об'єкт, що редагується:",o),u=o.name,i.value=o.name,a.value=o.position,f.src=o.images.default,r()}//! ВИДАЛЕННЯ
function Y(){const e=o.id;console.log("developerId видалення :",e),fetch(`${c}/${e}`,{method:"DELETE"}).then(t=>console.log("DELETE status:",t.status)).catch(t=>console.log(t)),r(),location.reload()}//! SUBMIT ФОРМИ
function z(e){if(m.textContent==="Додати"){const s={name:i.value,position:a.value,images:{desktop:["images/sample-desktop-1x.jpg 1x,","images/sample-desktop-2x.jpg 2x,","images/sample-desktop-3x.jpg 3x"],tablet:["images/sample-tablet-1x.jpg 1x,","images/sample-tablet-2x.jpg 2x,","images/sample-tablet-3x.jpg 3x"],mobile:["images/sample-mobile-1x.jpg 1x,","images/sample-mobile-2x.jpg 2x,","images/sample-mobile-3x.jpg 3x"],default:"images/sample-mobile-1x.jpg"},icons:["images/symboldefs.svg#instagram","images/symboldefs.svg#twitter","images/symboldefs.svg#facebook","images/symboldefs.svg#linkedin"],date:new Date().toLocaleString()};console.log("requestBody:",s);//! ================= CREATE (POST) =================
fetch(c,{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(n=>n.json()).then(n=>console.log("POST:",n)).catch(n=>console.log(n))}//! мій код з помилкою 
if(m.textContent==="Редагувати"){console.log("dataDevelopersList:",l),o=l.find(s=>s.name===u),console.log("editableDeveloper:",o),o.name=i.value,o.position=a.value;//! ⭐ ФІКС КАРТИНКИ
o.images.default=f.src}//! ================= UPDATE (PUT) =================
console.log("editableDeveloper:",o);let t=o.id;console.log("developerId:",t);//! ================= UPDATE (PATCH) =================
const d={name:i.value,position:a.value};fetch(`${c}/${t}`,{method:"PATCH",body:JSON.stringify(d),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(s=>s.json()).then(s=>console.log("PATCH:",s)).catch(s=>console.log(s)),r()}//! MODAL
function r(){R.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}function G(){r()}//! CONFIRM DELETE
function K(e){e.preventDefault(),F.textContent=u,y.classList.remove("is-hidden"),document.body.classList.add("no-scroll")}function Q(){y.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}const V=document.querySelectorAll(".our-developers-list__img"),X=e=>{e.src=e.dataset.src,e.parentElement.querySelectorAll("source").forEach(s=>{s.srcset=s.dataset.srcset})},_=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(X(t.target),_.unobserve(t.target),console.log(`Завантажено: ${t.target.alt}`))})},{threshold:.5});V.forEach(e=>_.observe(e));const Z=[{name:"Студія",href:"./index.html",active:!0},{name:"Портфоліо",href:"./portfolio.html",active:!1},{name:"Контакти",href:"#contacts",active:!1}],ee={links:Z},te=`{{#each links}}
  <li class="header-list__item">
    <a
      class="header-list__link {{#if active}}header-list__link--active{{/if}}"
      href="{{href}}"
    >
      {{name}}
    </a>
  </li>
{{/each}}
`,oe=document.querySelector(".header-list"),se=p.compile(te),le=se(ee);oe.innerHTML=le;const ne=document.querySelector(".company-list"),ie=[{width:41,height:46,href:new URL("../images/symboldefs.svg#company1",self.location).href},{width:41,height:46,href:new URL("../images/symboldefs.svg#company2",self.location).href},{width:41,height:46,href:new URL("../images/symboldefs.svg#company3",self.location).href},{width:93,height:43,href:new URL("../images/symboldefs.svg#company4",self.location).href},{width:69,height:43,href:new URL("../images/symboldefs.svg#company5",self.location).href},{width:62,height:45,href:new URL("../images/symboldefs.svg#company6",self.location).href}],ae=ie.map(e=>`
      <li class="company-list__item">
        <a class="company-list__link" href="#">
          <svg width="${e.width}" height="${e.height}">
            <use href="${e.href}"></use>
          </svg>
        </a>
      </li>
    `).join("");ne.innerHTML=ae;const ce=document.querySelector(".our-work-list"),re=[{src:new URL("../images/work1.jpg",self.location).href,alt:"Робота за комп'ютером",title:"Десктопні додатки",width:370},{src:new URL("../images/work2.jpg",self.location).href,alt:"Робота за телефоном",title:"Мобільні додатки",width:370},{src:new URL("../images/work3.jpg",self.location).href,alt:"Робота за планшетом",title:"Дизайнерські рішення",width:370}],de=re.map(e=>`
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
