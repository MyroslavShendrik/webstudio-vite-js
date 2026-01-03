import{H as d}from"./social-list-5012a507.js";const w=[{title:"УВАГА ДО ДЕТАЛЕЙ",text:"Ідейні міркування, і навіть початок повсякденної роботи з формування позиції."},{title:"ПУНКТУАЛЬНІСТЬ",text:"Завдання організації, особливо рамки і місце навчання кадрів тягне у себе."},{title:"ПЛАНУВАННЯ",text:"Так само консультація з широким активом значною мірою зумовлює."},{title:"СУЧАСНІ ТЕХНОЛОГІЇ",text:"Значимість цих проблем настільки очевидна, що реалізація планових завдань."}],h=` <li class="our-pluses-list__item">
    <h3 class="our-pluses-list__title">{{title}}</h3>
    <p class="our-pluses-list__text">{{text}}</p>
  </li>`,j=document.querySelector(".our-pluses-list"),x=d.compile(h),L=w.map(e=>x(e)).join("");j.innerHTML=L;(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",s),e.closeModalBtn.addEventListener("click",s);function s(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const y=`<li class="our-developers-list__item">
  <picture id="img-developer">
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
      src="{{images.default}}"
      alt="{{name}}"
      loading="lazy"
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
</li>
`;console.error('Рендеримо список розробників в секції "Наша команда"');const U=document.querySelector(".our-developers-list");let o=[{name:"Ігор Дем'яненко",position:"Product Designer",images:{desktop:[new URL("/webstudio-vite-js/assets/igor-desktop-1x-b138e391.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/igor-desktop-2x-18e23e2e.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/igor-desktop-3x-f0641e09.jpg",self.location).href+" 3x"],tablet:[new URL("/webstudio-vite-js/assets/igor-tablet-1x-a1f96800.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/igor-tablet-2x-5bd351b1.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/igor-tablet-3x-4c28ed9e.jpg",self.location).href+" 3x"],mobile:[new URL("/webstudio-vite-js/assets/igor-mobile-1x-9e045f9a.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/igor-mobile-2x-dedb5f8b.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/igor-mobile-3x-e67f5e2c.jpg",self.location).href+" 3x"],default:new URL("/webstudio-vite-js/assets/igor-mobile-1x-9e045f9a.jpg",self.location).href},icons:[new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#instagram",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#twitter",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#facebook",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#linkedin",self.location).href]},{name:"Ольга Рєпіна",position:"Frontend Developer",images:{desktop:[new URL("/webstudio-vite-js/assets/olga-desktop-1x-04e8f028.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/olga-desktop-2x-c2f88c59.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/olga-desktop-3x-58abe69a.jpg",self.location).href+" 3x"],tablet:[new URL("/webstudio-vite-js/assets/olga-tablet-1x-cfa58443.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/olga-tablet-2x-86184944.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/olga-tablet-3x-0a94d03d.jpg",self.location).href+" 3x"],mobile:[new URL("/webstudio-vite-js/assets/olga-mobile-1x-f516194c.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/olga-mobile-2x-2804cc8f.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/olga-mobile-3x-834474c3.jpg",self.location).href+" 3x"],default:new URL("/webstudio-vite-js/assets/olga-mobile-1x-f516194c.jpg",self.location).href},icons:[new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#instagram",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#twitter",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#facebook",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#linkedin",self.location).href]},{name:"Микола Тарасов",position:"Marketing",images:{desktop:[new URL("/webstudio-vite-js/assets/mykola-desktop-1x-224be953.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/mykola-desktop-2x-adce90a2.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/mykola-desktop-3x-52585efb.jpg",self.location).href+" 3x"],tablet:[new URL("/webstudio-vite-js/assets/mykola-tablet-1x-eb9c14c4.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/mykola-tablet-2x-0cabf309.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/mykola-tablet-3x-22eb3a11.jpg",self.location).href+" 3x"],mobile:[new URL("/webstudio-vite-js/assets/mykola-mobile-1x-557651d7.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/mykola-mobile-2x-58b208b4.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/mykola-mobile-3x-63372173.jpg",self.location).href+" 3x"],default:new URL("/webstudio-vite-js/assets/mykola-mobile-1x-557651d7.jpg",self.location).href},icons:[new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#instagram",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#twitter",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#facebook",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#linkedin",self.location).href]},{name:"Михайло Єрмаков",position:"UI Designer",images:{desktop:[new URL("/webstudio-vite-js/assets/muhailo-desktop-1x-da48a78f.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/muhailo-desktop-2x-384d3bbd.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/muhailo-desktop-3x-de19754e.jpg",self.location).href+" 3x"],tablet:[new URL("/webstudio-vite-js/assets/muhailo-tablet-1x-58c7255e.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/muhailo-tablet-2x-fbb78bcf.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/muhailo-tablet-3x-9b8c52d7.jpg",self.location).href+" 3x"],mobile:[new URL("/webstudio-vite-js/assets/muhailo-mobile-1x-fdca993a.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/muhailo-mobile-2x-31262677.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/muhailo-mobile-3x-1020d3c1.jpg",self.location).href+" 3x"],default:new URL("/webstudio-vite-js/assets/muhailo-mobile-1x-fdca993a.jpg",self.location).href},icons:[new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#instagram",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#twitter",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#facebook",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#linkedin",self.location).href]}];console.log("Масив розробників перед localStorage:",o);//! Зберігаємо у localStorage dataDevelopersList
localStorage.getItem("dataDevelopers")===null&&(localStorage.setItem("dataDevelopers",JSON.stringify(o)),console.log("localStorage.getItem(dataDevelopers):",localStorage.getItem("dataDevelopers")));console.log("localStorage.getItem(dataDevelopers):",localStorage.getItem("dataDevelopers"));console.log("Дані збережено у localStorage");//! забираємо дані в dataDevelopersList з localStorage
o=JSON.parse(localStorage.getItem("dataDevelopers"));console.log("dataDevelopersList:",o);//! генеруємо HTML за допомогою Handlebars
const R=d.compile(y),f=o.map(e=>R(e)).join("");console.log(" markup:",f);U.innerHTML=f;console.log('%c Додаємо/Редагуємо/Видаляємо розробників в секції "Наша команда" ',"color: white; background-color: #D33F49");//! 1.1 Взяти з localStorage дані які вже у нас є! 
//! 1.2 Перетворити дані, які ми взяли з LocalStorage на масив об'єктів
//! 1.3 Записати це в якусь зміну
let t=JSON.parse(localStorage.getItem("dataDevelopers")),m=null;console.log("dataDevelopersList:",t);//! 2.1 Пошук всіх необхідних елементів
document.querySelector(".our-developers-list");const k=document.querySelector(".our-developers__button"),p=document.querySelector(".form-add-edit-developer__title"),_=document.querySelector("[data-modal-add-edit-developer]"),u=document.querySelector(".modal-add-edit-developer__button-delete"),n=document.querySelector(".form-add-edit-developer"),D=document.getElementById("button-cancel"),S=document.querySelectorAll("#img-developer"),l=document.querySelector(".form-add-edit-developer__button-submit"),c=document.querySelector(".form-add-edit-developer__img");console.log("imgFormDeveloper:",c);const g=document.querySelector(".form-add-edit-developer__input-developer-name"),b=document.querySelector(".form-add-edit-developer__input-developer-position");//! 2.2 Змінні для поточної роботи
//! 3 надати слухачів подій
k.addEventListener("click",q);n.addEventListener("submit",$);D.addEventListener("click",M);S.forEach(e=>{e.addEventListener("click",I),console.log("click on:",e)});//! 4 блок функцій 
//! Додає розробника
function q(){console.log("додаємо нового розробника");//! 4.1.1 заміна контенту заголовка модального вікна, приховуємо зайві елементи
p.textContent="Додати розробника",l.textContent="Додати",u.style.display="none";//! 4.1.2 відкриття модального вікна з формою для збирання даних
i()}//! редагує розробника 
function I(e){console.log("Вікно редагування");//! 4.1.1 заміна контенту заголовка модального вікна, відкриваємо необхідні елементи
p.textContent="Редагування розробника",l.textContent="Редагувати",u.style.display="block";//! при натисканні на розробника треба, щоб підставлялось його зображення
console.log("event.currentTarget:",e.target.currentTarget),console.log("typyof imgFormDeveloper:",typeof c);//! стратегічна задача (що робимо?)
//! 1. зробити однаковим розміри зображення в модальному вікні 
//! 2. підлаштувати розмір зобрадення таким чином, щоб модальне вікно віповідало висоті екрана
t=JSON.parse(localStorage.getItem("dataDevelopers")),console.log("dataDevelopersList:",t),console.log("event.target:",e.target),console.log("event.target.alt:",e.target.alt),console.log("event.target.name:",e.target.name),console.log("event.currentTarget:",e.currentTarget);const s=t.find(a=>a.name===e.target.alt);m=s.name,g.value=s.name,b.value=s.position,c.src=s.images.default,i()}//! Закривання модально вікна при стоворенні нового розробника 
function M(){i()}//! відкривання/закривання модального вікна для додавання/редагування розробника
function i(){console.log("відкривання/закривання модального вікна для додавання/редагування розробника"),_.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}//! підтвердження даних в формі модальних  вікон ДОДАТИ/РЕДАГУВАТИ 
function $(e){//! блокуємо перезавантаження сторінки 
//! 4.3.1 стягнути найсвіжіші дані з LocalStorage в масив об'єктів всіх користувачів
if(t=JSON.parse(localStorage.getItem("dataDevelopers")),l.textContent==="Додати"){const s={name:n.developerName.value,position:n.developerPosition.value,images:{desktop:[new URL("/webstudio-vite-js/assets/sample-desktop-1x-6f815283.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/sample-desktop-2x-02d6ae45.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/sample-desktop-3x-5afcc7c9.jpg",self.location).href+" 3x"],tablet:[new URL("/webstudio-vite-js/assets/sample-tablet-1x-f731c0b1.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/sample-tablet-2x-c40bf428.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/sample-tablet-3x-58cbcf21.jpg",self.location).href+" 3x"],mobile:[new URL("/webstudio-vite-js/assets/sample-mobile-1x-6a91fc91.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/sample-mobile-2x-1c983446.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/sample-mobile-3x-74a3db58.jpg",self.location).href+" 3x"],default:new URL("/webstudio-vite-js/assets/sample-mobile-1x-6a91fc91.jpg",self.location).href},icons:[new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#instagram",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#twitter",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#facebook",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#linkedin",self.location).href]};console.log("developerObject:",s);//! 4.3.3 додаємо новий об'єкт до масиву об'єктів
t.push(s),console.log("ПІСЛЯ  dataDevelopersList:",t);//! 4.3.4 зберегти змінені дані в LocalStorage
localStorage.setItem("dataDevelopers",JSON.stringify(t,null,2))}if(l.textContent==="Редагувати"){const s=g.value,a=b.value,r=t.find(v=>v.name===m);r.name=s,r.position=a}console.log("ДО dataDevelopersList:",t);//! 4.3.4 зберегти змінені дані в LocalStorage
localStorage.setItem("dataDevelopers",JSON.stringify(t,null,2));//! 4.3.5 закрити модальне вікно з формою для збирання даних
i()}const E=[{name:"Студія",href:"./index.html",active:!0},{name:"Портфоліо",href:"./portfolio.html",active:!1},{name:"Контакти",href:"./contacts.html",active:!1}],T={links:E},N=`{{#each links}}
  <li class="header-list__item">
    <a
      class="header-list__link {{#if active}}header-list__link--active{{/if}}"
      href="{{href}}"
    >
      {{name}}
    </a>
  </li>
{{/each}}
`,O=document.querySelector(".header-list"),C=d.compile(N),H=C(T);O.innerHTML=H;const J=document.querySelector(".company-list"),B=[{width:41,height:46,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company1",self.location).href},{width:41,height:46,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company2",self.location).href},{width:41,height:46,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company3",self.location).href},{width:93,height:43,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company4",self.location).href},{width:69,height:43,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company5",self.location).href},{width:62,height:45,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company6",self.location).href}],A=B.map(e=>`
      <li class="company-list__item">
        <a class="company-list__link" href="#">
          <svg width="${e.width}" height="${e.height}">
            <use href="${e.href}"></use>
          </svg>
        </a>
      </li>
    `).join("");J.innerHTML=A;const F=document.querySelector(".our-work-list"),P=[{src:new URL("/webstudio-vite-js/assets/work1-b062ba09.jpg",self.location).href,alt:"Робота за комп'ютером",title:"Десктопні додатки",width:370},{src:new URL("/webstudio-vite-js/assets/work2-592f2ac7.jpg",self.location).href,alt:"Робота за телефоном",title:"Мобільні додатки",width:370},{src:new URL("/webstudio-vite-js/assets/work3-98cf051d.jpg",self.location).href,alt:"Робота за планшетом",title:"Дизайнерські рішення",width:370}],z=P.map(e=>`
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
    `).join("");F.innerHTML=z;
