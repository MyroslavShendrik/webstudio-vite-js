import{H as i}from"./social-list-293d3ee1.js";const c=[{title:"УВАГА ДО ДЕТАЛЕЙ",text:"Ідейні міркування, і навіть початок повсякденної роботи з формування позиції."},{title:"ПУНКТУАЛЬНІСТЬ",text:"Завдання організації, особливо рамки і місце навчання кадрів тягне у себе."},{title:"ПЛАНУВАННЯ",text:"Так само консультація з широким активом значною мірою зумовлює."},{title:"СУЧАСНІ ТЕХНОЛОГІЇ",text:"Значимість цих проблем настільки очевидна, що реалізація планових завдань."}],d=` <li class="our-pluses-list__item">
    <h3 class="our-pluses-list__title">{{title}}</h3>
    <p class="our-pluses-list__text">{{text}}</p>
  </li>`,r=document.querySelector(".our-pluses-list"),f=i.compile(d),m=c.map(e=>f(e)).join("");r.innerHTML=m;(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const b=`<li class="our-developers-list__item">
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
      src="{{images.default}}"
      alt="developer {{name}}"
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
`;console.error('Рендеримо список розробників в секції "Наша команда"');const p=document.querySelector(".our-developers-list");let o=[{name:"Ігор Дем'яненко",position:"Product Designer",images:{desktop:[new URL("/webstudio-vite-js/assets/igor-desktop-1x-b138e391.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/igor-desktop-2x-18e23e2e.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/igor-desktop-3x-f0641e09.jpg",self.location).href+" 3x"],tablet:[new URL("/webstudio-vite-js/assets/igor-tablet-1x-a1f96800.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/igor-tablet-2x-5bd351b1.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/igor-tablet-3x-4c28ed9e.jpg",self.location).href+" 3x"],mobile:[new URL("/webstudio-vite-js/assets/igor-mobile-1x-9e045f9a.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/igor-mobile-2x-dedb5f8b.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/igor-mobile-3x-e67f5e2c.jpg",self.location).href+" 3x"],default:new URL("/webstudio-vite-js/assets/igor-mobile-1x-9e045f9a.jpg",self.location).href},icons:[new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#instagram",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#twitter",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#facebook",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#linkedin",self.location).href]},{name:"Ольга Рєпіна",position:"Frontend Developer",images:{desktop:[new URL("/webstudio-vite-js/assets/olga-desktop-1x-04e8f028.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/olga-desktop-2x-c2f88c59.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/olga-desktop-3x-58abe69a.jpg",self.location).href+" 3x"],tablet:[new URL("/webstudio-vite-js/assets/olga-tablet-1x-cfa58443.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/olga-tablet-2x-86184944.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/olga-tablet-3x-0a94d03d.jpg",self.location).href+" 3x"],mobile:[new URL("/webstudio-vite-js/assets/olga-mobile-1x-f516194c.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/olga-mobile-2x-2804cc8f.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/olga-mobile-3x-834474c3.jpg",self.location).href+" 3x"],default:new URL("/webstudio-vite-js/assets/olga-mobile-1x-f516194c.jpg",self.location).href},icons:[new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#instagram",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#twitter",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#facebook",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#linkedin",self.location).href]},{name:"Микола Тарасов",position:"Marketing",images:{desktop:[new URL("/webstudio-vite-js/assets/mykola-desktop-1x-224be953.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/mykola-desktop-2x-adce90a2.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/mykola-desktop-3x-52585efb.jpg",self.location).href+" 3x"],tablet:[new URL("/webstudio-vite-js/assets/mykola-tablet-1x-eb9c14c4.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/mykola-tablet-2x-0cabf309.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/mykola-tablet-3x-22eb3a11.jpg",self.location).href+" 3x"],mobile:[new URL("/webstudio-vite-js/assets/mykola-mobile-1x-557651d7.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/mykola-mobile-2x-58b208b4.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/mykola-mobile-3x-63372173.jpg",self.location).href+" 3x"],default:new URL("/webstudio-vite-js/assets/mykola-mobile-1x-557651d7.jpg",self.location).href},icons:[new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#instagram",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#twitter",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#facebook",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#linkedin",self.location).href]},{name:"Михайло Єрмаков",position:"UI Designer",images:{desktop:[new URL("/webstudio-vite-js/assets/muhailo-desktop-1x-da48a78f.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/muhailo-desktop-2x-384d3bbd.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/muhailo-desktop-3x-de19754e.jpg",self.location).href+" 3x"],tablet:[new URL("/webstudio-vite-js/assets/muhailo-tablet-1x-58c7255e.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/muhailo-tablet-2x-fbb78bcf.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/muhailo-tablet-3x-9b8c52d7.jpg",self.location).href+" 3x"],mobile:[new URL("/webstudio-vite-js/assets/muhailo-mobile-1x-fdca993a.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/muhailo-mobile-2x-31262677.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/muhailo-mobile-3x-1020d3c1.jpg",self.location).href+" 3x"],default:new URL("/webstudio-vite-js/assets/muhailo-mobile-1x-fdca993a.jpg",self.location).href},icons:[new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#instagram",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#twitter",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#facebook",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#linkedin",self.location).href]}];console.log("Масив розробників перед localStorage:",o);//! Зберігаємо у localStorage dataDevelopersList
localStorage.getItem("dataDevelopers")===null&&(localStorage.setItem("dataDevelopers",JSON.stringify(o)),console.log("localStorage.getItem(dataDevelopers):",localStorage.getItem("dataDevelopers")));console.log("localStorage.getItem(dataDevelopers):",localStorage.getItem("dataDevelopers"));console.log("Дані збережено у localStorage");//! забираємо дані в dataDevelopersList з localStorage
o=JSON.parse(localStorage.getItem("dataDevelopers"));console.log("dataDevelopersList:",o);//! генеруємо HTML за допомогою Handlebars
const u=i.compile(b),n=o.map(e=>u(e)).join("");console.log(" markup:",n);p.innerHTML=n;console.log('%c Додаємо/Редагуємо/Видаляємо розробників в секції "Наша команда" ',"color: white; background-color: #D33F49");//! 1.1 Взяти з localStorage дані які вже у нас є! 
//! 1.2 Перетворити дані, які ми взяли з LocalStorage на масив об'єктів
//! 1.3 Записати це в якусь зміну
let s=JSON.parse(localStorage.getItem("dataDevelopers"));console.log("dataDevelopersList:",s);//! 2.1 Пошук всіх необхідних елементів
document.querySelector(".our-developers-list");const w=document.querySelector(".our-developers__button"),g=document.querySelector(".form-add-edit-developer__title"),v=document.querySelector("[data-modal-add-edit-developer]"),h=document.querySelector(".modal-add-edit-developer__button-delete"),l=document.querySelector(".form-add-edit-developer"),j=document.querySelector(".modal-add-edit-developer__button-cancel");//! 2.2 Змінні для поточної роботи
//! 3 надати слухачів подій
w.addEventListener("click",x);l.addEventListener("submit",U);j.addEventListener("click",L);//! 4 блок функцій 
function x(){console.log("додаємо нового розробника");//! 4.1.1 заміна контенту заголовка модального вікна, приховуємо зайві елементи
g.textContent="Додати розробника",h.style.display="none";//! 4.1.2 відкриття модального вікна з формою для збирання даних
a()}function L(){a()}//! відкривання/закривання модального вікна для додавання/редагування розробника
function a(){console.log("відкривання/закривання модального вікна для додавання/редагування розробника"),v.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}//! підтвердження даних в формі модальних  вікон ДОДАТИ/РЕДАГУВАТИ 
function U(e){//! блокуємо перезавантаження сторінки 
//! 4.3.1 стягнути найсвіжіші дані з LocalStorage в масив об'єктів всіх користувачів
s=JSON.parse(localStorage.getItem("dataDevelopers"));//! 4.3.2 зібрати дані з форми по кнопці "submit" і записати ці дані в об'єкт
console.log("ДО dataDevelopersList:",s);const t={name:l.developerName.value,position:l.developerPosition.value,images:{desktop:[new URL("/webstudio-vite-js/assets/sample-desktop-1x-6f815283.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/sample-desktop-2x-02d6ae45.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/sample-desktop-3x-5afcc7c9.jpg",self.location).href+" 3x"],tablet:[new URL("/webstudio-vite-js/assets/sample-tablet-1x-f731c0b1.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/sample-tablet-2x-c40bf428.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/sample-tablet-3x-58cbcf21.jpg",self.location).href+" 3x"],mobile:[new URL("/webstudio-vite-js/assets/sample-mobile-1x-6a91fc91.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/sample-mobile-2x-1c983446.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/sample-mobile-3x-74a3db58.jpg",self.location).href+" 3x"],default:new URL("/webstudio-vite-js/assets/sample-mobile-1x-6a91fc91.jpg",self.location).href},icons:[new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#instagram",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#twitter",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#facebook",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#linkedin",self.location).href]};console.log("developerObject:",t);//! 4.3.3 додаємо новий об'єкт до масиву об'єктів
s.push(t),console.log("ПІСЛЯ  dataDevelopersList:",s);//! 4.3.4 зберегти змінені дані в LocalStorage
localStorage.setItem("dataDevelopers",JSON.stringify(s,null,2));//! 4.3.5 закрити модальне вікно з формою для збирання даних
a()}const R=[{name:"Студія",href:"./index.html",active:!0},{name:"Портфоліо",href:"./portfolio.html",active:!1},{name:"Контакти",href:"./contacts.html",active:!1}],y={links:R},k=`{{#each links}}
  <li class="header-list__item">
    <a
      class="header-list__link {{#if active}}header-list__link--active{{/if}}"
      href="{{href}}"
    >
      {{name}}
    </a>
  </li>
{{/each}}
`,_=document.querySelector(".header-list"),S=i.compile(k),D=S(y);_.innerHTML=D;const q=document.querySelector(".company-list"),M=[{width:41,height:46,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company1",self.location).href},{width:41,height:46,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company2",self.location).href},{width:41,height:46,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company3",self.location).href},{width:93,height:43,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company4",self.location).href},{width:69,height:43,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company5",self.location).href},{width:62,height:45,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company6",self.location).href}],$=M.map(e=>`
      <li class="company-list__item">
        <a class="company-list__link" href="#">
          <svg width="${e.width}" height="${e.height}">
            <use href="${e.href}"></use>
          </svg>
        </a>
      </li>
    `).join("");q.innerHTML=$;const I=document.querySelector(".our-work-list"),E=[{src:new URL("/webstudio-vite-js/assets/work1-b062ba09.jpg",self.location).href,alt:"Робота за комп'ютером",title:"Десктопні додатки",width:370},{src:new URL("/webstudio-vite-js/assets/work2-592f2ac7.jpg",self.location).href,alt:"Робота за телефоном",title:"Мобільні додатки",width:370},{src:new URL("/webstudio-vite-js/assets/work3-98cf051d.jpg",self.location).href,alt:"Робота за планшетом",title:"Дизайнерські рішення",width:370}],T=E.map(e=>`
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
    `).join("");I.innerHTML=T;
