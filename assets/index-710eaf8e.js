import{H as u}from"./social-list-a2172a6a.js";const y=[{title:"УВАГА ДО ДЕТАЛЕЙ",text:"Ідейні міркування, і навіть початок повсякденної роботи з формування позиції."},{title:"ПУНКТУАЛЬНІСТЬ",text:"Завдання організації, особливо рамки і місце навчання кадрів тягне у себе."},{title:"ПЛАНУВАННЯ",text:"Так само консультація з широким активом значною мірою зумовлює."},{title:"СУЧАСНІ ТЕХНОЛОГІЇ",text:"Значимість цих проблем настільки очевидна, що реалізація планових завдань."}],_=` <li class="our-pluses-list__item">
    <h3 class="our-pluses-list__title">{{title}}</h3>
    <p class="our-pluses-list__text">{{text}}</p>
  </li>`,L=document.querySelector(".our-pluses-list"),j=u.compile(_),k=y.map(e=>j(e)).join("");L.innerHTML=k;(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const D=`
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
const x="http://localhost:3000/",E="developers",h=`${x}${E}`;console.log("url:",h);const S=document.querySelector(".our-developers-list");//! var 1
function $(){q().then(e=>B(e)).catch(e=>console.log(e))}function q(){return fetch(h).then(e=>e.json())}//!var2
//! генеруємо HTML за допомогою Handlebars
const T=u.compile(D);function B(e){const t=e.map(r=>T(r)).join("");S.innerHTML=t}$();//! по натиску на кнопку додати розробника: 
//! 1. Сформувати зміну в яку покладемо об'єкт з новими даними розробника 
//! 2.використати метод POST, щоб додати новий об'єкт на JSON сервер 
console.log('%c Додаємо/Редагуємо/Видаляємо розробників в секції "Наша команда"',"color: white; background-color: #D33F49");//! 1️⃣ Дані
const M="http://localhost:3000/",C="developers",a=`${M}${C}`;console.log("url:",a);let p="",l=null,o="";//! Зчитуємо дані з json-server та зберігаємо їх в Масив Об'єктів: dataDevelopersList
function A(){return fetch(a).then(e=>e.json()).then(e=>l=e)}A();console.log("dataDevelopersList:",l);//! 2️⃣ Пошук DOM
const I=document.querySelector(".our-developers-list"),U=document.querySelector(".our-developers__button"),g=document.querySelector(".form-add-edit-developer__title"),R=document.querySelector("[data-modal-add-edit-developer]"),v=document.querySelector(".modal-add-edit-developer__button-delete"),H=document.querySelector(".form-add-edit-developer"),P=document.getElementById("button-cancel"),m=document.querySelector(".form-add-edit-developer__button-submit"),f=document.querySelector(".form-add-edit-developer__img"),i=document.querySelector(".form-add-edit-developer__input-developer-name"),c=document.querySelector(".form-add-edit-developer__input-developer-position"),b=document.querySelector("[data-modal-confirm-delete]"),N=document.getElementById("confirm-delete-yes"),O=document.getElementById("confirm-delete-no"),F=document.getElementById("confirm-dev-name");//! 3️⃣ Слухачі подій
U.addEventListener("click",J);H.addEventListener("submit",z);P.addEventListener("click",G);I.addEventListener("click",function(e){e.target.classList.contains("our-developers-list__img")&&W(e)});v.addEventListener("click",K);O.addEventListener("click",Q);N.addEventListener("click",Y);//! 4️⃣ Функції
//! ДОДАТИ
function J(){console.log("dataDevelopersList-addDeveloper:",l),g.textContent="Додати розробника",m.textContent="Додати",v.style.display="none",i.value="",c.value="",d()}//! РЕДАГУВАННЯ
function W(e){g.textContent="Редагування розробника",m.textContent="Редагувати",v.style.display="block",console.log("dataDevelopersList:",l),o=l.find(t=>t.name===e.target.alt),console.log("об'єкт, що редагується:",o),p=o.name,i.value=o.name,c.value=o.position,f.src=o.images.default,d()}//! ВИДАЛЕННЯ
function Y(){const e=o.id;console.log("developerId видалення :",e),fetch(`${a}/${e}`,{method:"DELETE"}).then(t=>console.log("DELETE status:",t.status)).catch(t=>console.log(t)),d(),location.reload()}//! SUBMIT ФОРМИ
function z(e){if(m.textContent==="Додати"){const s={name:i.value,position:c.value,images:{desktop:["/webstudio-vite-js/images/sample-desktop-1x.jpg 1x,","/webstudio-vite-js/images/sample-desktop-2x.jpg 2x,","/webstudio-vite-js/images/sample-desktop-3x.jpg 3x"],tablet:["/webstudio-vite-js/images/sample-tablet-1x.jpg 1x,","/webstudio-vite-js/images/sample-tablet-2x.jpg 2x,","/webstudio-vite-js/images/sample-tablet-3x.jpg 3x"],mobile:["/webstudio-vite-js/images/sample-mobile-1x.jpg 1x,","/webstudio-vite-js/images/sample-mobile-2x.jpg 2x,","/webstudio-vite-js/images/sample-mobile-3x.jpg 3x"],default:"/webstudio-vite-js/images/sample-mobile-1x.jpg"},icons:["/webstudio-vite-js/images/symboldefs.svg#instagram","/webstudio-vite-js/images/symboldefs.svg#twitter","/webstudio-vite-js/images/symboldefs.svg#facebook","/webstudio-vite-js/images/symboldefs.svg#linkedin"],date:new Date().toLocaleString()};console.log("requestBody:",s);//! ================= CREATE (POST) =================
fetch(a,{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(n=>n.json()).then(n=>console.log("POST:",n)).catch(n=>console.log(n))}//! мій код з помилкою 
if(m.textContent==="Редагувати"){console.log("dataDevelopersList:",l),o=l.find(s=>s.name===p),console.log("editableDeveloper:",o),o.name=i.value,o.position=c.value;//! ⭐ ФІКС КАРТИНКИ
o.images.default=f.src}//! ================= UPDATE (PUT) =================
console.log("editableDeveloper:",o);let t=o.id;console.log("developerId:",t);//! ================= UPDATE (PATCH) =================
const r={name:i.value,position:c.value};fetch(`${a}/${t}`,{method:"PATCH",body:JSON.stringify(r),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(s=>s.json()).then(s=>console.log("PATCH:",s)).catch(s=>console.log(s)),d()}//! MODAL
function d(){R.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}function G(){d()}//! CONFIRM DELETE
function K(e){e.preventDefault(),F.textContent=p,b.classList.remove("is-hidden"),document.body.classList.add("no-scroll")}function Q(){b.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}const V=document.querySelectorAll(".our-developers-list__img"),X=e=>{e.src=e.dataset.src,e.parentElement.querySelectorAll("source").forEach(s=>{s.srcset=s.dataset.srcset})},w=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(X(t.target),w.unobserve(t.target),console.log(`Завантажено: ${t.target.alt}`))})},{threshold:.5});V.forEach(e=>w.observe(e));const Z=[{name:"Студія",href:"./index.html",active:!0},{name:"Портфоліо",href:"./portfolio.html",active:!1},{name:"Контакти",href:"#contacts",active:!1}],ee={links:Z},te=`{{#each links}}
  <li class="header-list__item">
    <a
      class="header-list__link {{#if active}}header-list__link--active{{/if}}"
      href="{{href}}"
    >
      {{name}}
    </a>
  </li>
{{/each}}
`,oe=document.querySelector(".header-list"),se=u.compile(te),le=se(ee);oe.innerHTML=le;const ne=document.querySelector(".company-list"),ie=[{width:41,height:46,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company1",self.location).href},{width:41,height:46,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company2",self.location).href},{width:41,height:46,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company3",self.location).href},{width:93,height:43,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company4",self.location).href},{width:69,height:43,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company5",self.location).href},{width:62,height:45,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company6",self.location).href}],ce=ie.map(e=>`
      <li class="company-list__item">
        <a class="company-list__link" href="#">
          <svg width="${e.width}" height="${e.height}">
            <use href="${e.href}"></use>
          </svg>
        </a>
      </li>
    `).join("");ne.innerHTML=ce;const ae=document.querySelector(".our-work-list"),de=[{src:new URL("/webstudio-vite-js/assets/work1-b062ba09.jpg",self.location).href,alt:"Робота за комп'ютером",title:"Десктопні додатки",width:370},{src:new URL("/webstudio-vite-js/assets/work2-592f2ac7.jpg",self.location).href,alt:"Робота за телефоном",title:"Мобільні додатки",width:370},{src:new URL("/webstudio-vite-js/assets/work3-98cf051d.jpg",self.location).href,alt:"Робота за планшетом",title:"Дизайнерські рішення",width:370}],re=de.map(e=>`
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
