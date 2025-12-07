import{H as t}from"./social-list-e0f63d07.js";const a=[{title:"УВАГА ДО ДЕТАЛЕЙ",text:"Ідейні міркування, і навіть початок повсякденної роботи з формування позиції."},{title:"ПУНКТУАЛЬНІСТЬ",text:"Завдання організації, особливо рамки і місце навчання кадрів тягне у себе."},{title:"ПЛАНУВАННЯ",text:"Так само консультація з широким активом значною мірою зумовлює."},{title:"СУЧАСНІ ТЕХНОЛОГІЇ",text:"Значимість цих проблем настільки очевидна, що реалізація планових завдань."}],n=` <li class="our-pluses-list__item">
    <h3 class="our-pluses-list__title">{{title}}</h3>
    <p class="our-pluses-list__text">{{text}}</p>
  </li>`,c=document.querySelector(".our-pluses-list"),d=t.compile(n),r=a.map(e=>d(e)).join("");c.innerHTML=r;(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);function o(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const f=`<li class="our-developers-list__item">
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
`;console.error('Рендеримо список розробників в секції "Наша команда"');const w=document.querySelector(".our-developers-list");let s=[{name:"Ігор Дем'яненко",position:"Product Designer",images:{desktop:[new URL("/webstudio-vite-js/assets/igor-desktop-1x-b138e391.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/igor-desktop-2x-18e23e2e.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/igor-desktop-3x-f0641e09.jpg",self.location).href+" 3x"],tablet:[new URL("/webstudio-vite-js/assets/igor-tablet-1x-a1f96800.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/igor-tablet-2x-5bd351b1.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/igor-tablet-3x-4c28ed9e.jpg",self.location).href+" 3x"],mobile:[new URL("/webstudio-vite-js/assets/igor-mobile-1x-9e045f9a.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/igor-mobile-2x-dedb5f8b.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/igor-mobile-3x-e67f5e2c.jpg",self.location).href+" 3x"],default:new URL("/webstudio-vite-js/assets/igor-mobile-1x-9e045f9a.jpg",self.location).href},icons:[new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#instagram",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#twitter",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#facebook",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#linkedin",self.location).href]},{name:"Ольга Рєпіна",position:"Frontend Developer",images:{desktop:[new URL("/webstudio-vite-js/assets/olga-desktop-1x-04e8f028.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/olga-desktop-2x-c2f88c59.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/olga-desktop-3x-58abe69a.jpg",self.location).href+" 3x"],tablet:[new URL("/webstudio-vite-js/assets/olga-tablet-1x-cfa58443.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/olga-tablet-2x-86184944.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/olga-tablet-3x-0a94d03d.jpg",self.location).href+" 3x"],mobile:[new URL("/webstudio-vite-js/assets/olga-mobile-1x-f516194c.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/olga-mobile-2x-2804cc8f.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/olga-mobile-3x-834474c3.jpg",self.location).href+" 3x"],default:new URL("/webstudio-vite-js/assets/olga-mobile-1x-f516194c.jpg",self.location).href},icons:[new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#instagram",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#twitter",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#facebook",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#linkedin",self.location).href]},{name:"Микола Тарасов",position:"Marketing",images:{desktop:[new URL("/webstudio-vite-js/assets/mykola-desktop-1x-224be953.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/mykola-desktop-2x-adce90a2.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/mykola-desktop-3x-52585efb.jpg",self.location).href+" 3x"],tablet:[new URL("/webstudio-vite-js/assets/mykola-tablet-1x-eb9c14c4.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/mykola-tablet-2x-0cabf309.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/mykola-tablet-3x-22eb3a11.jpg",self.location).href+" 3x"],mobile:[new URL("/webstudio-vite-js/assets/mykola-mobile-1x-557651d7.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/mykola-mobile-2x-58b208b4.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/mykola-mobile-3x-63372173.jpg",self.location).href+" 3x"],default:new URL("/webstudio-vite-js/assets/mykola-mobile-1x-557651d7.jpg",self.location).href},icons:[new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#instagram",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#twitter",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#facebook",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#linkedin",self.location).href]},{name:"Михайло Єрмаков",position:"UI Designer",images:{desktop:[new URL("/webstudio-vite-js/assets/muhailo-desktop-1x-da48a78f.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/muhailo-desktop-2x-384d3bbd.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/muhailo-desktop-3x-de19754e.jpg",self.location).href+" 3x"],tablet:[new URL("/webstudio-vite-js/assets/muhailo-tablet-1x-58c7255e.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/muhailo-tablet-2x-fbb78bcf.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/muhailo-tablet-3x-9b8c52d7.jpg",self.location).href+" 3x"],mobile:[new URL("/webstudio-vite-js/assets/muhailo-mobile-1x-fdca993a.jpg",self.location).href+" 1x,",new URL("/webstudio-vite-js/assets/muhailo-mobile-2x-31262677.jpg",self.location).href+" 2x,",new URL("/webstudio-vite-js/assets/muhailo-mobile-3x-1020d3c1.jpg",self.location).href+" 3x"],default:new URL("/webstudio-vite-js/assets/muhailo-mobile-1x-fdca993a.jpg",self.location).href},icons:[new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#instagram",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#twitter",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#facebook",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#linkedin",self.location).href]}];console.log("Масив розробників перед localStorage:",s);//! Зберігаємо у localStorage dataDevelopersList
localStorage.getItem("dataDevelopers")===null&&(localStorage.setItem("dataDevelopers",JSON.stringify(s)),console.log("localStorage.getItem(dataDevelopers):",localStorage.getItem("dataDevelopers")));console.log("localStorage.getItem(dataDevelopers):",localStorage.getItem("dataDevelopers"));console.log("Дані збережено у localStorage");//! забираємо дані в dataDevelopersList з localStorage
s=JSON.parse(localStorage.getItem("dataDevelopers"));console.log("dataDevelopersList:",s);//! генеруємо HTML за допомогою Handlebars
const g=t.compile(f),l=s.map(e=>g(e)).join("");console.log(" markup:",l);w.innerHTML=l;console.log('%c Додаємо/Редагуємо/Видаляємо розробників в секції "Наша команда" ',"color: white; background-color: #D33F49");//! 1.Взяти з localStorage дані які вже у нас є! 
//! 2. Перетворити дані, які ми взяли з LocalStorage на масив об'єктів
//! 3. Записати це в якусь зміну
let h=JSON.parse(localStorage.getItem("dataDevelopers"));console.log("dataDevelopersList:",h);//! 4 Пошук всіх необхідних елементів
const m=document.querySelector(".our-developers-list");console.log("developersList:",m);const i=document.querySelector(".our-developers__button");console.log("addDeveloperButton:",i);//! 5 Змінні для по3точної роботи
//! 6 надати слухачів подій
i.addEventListener("click",b);//! 7 блок функцій 
function b(){console.log("додаємо нового розробника")}const u=[{name:"Студія",href:"./index.html",active:!0},{name:"Портфоліо",href:"./portfolio.html",active:!1},{name:"Контакти",href:"./contacts.html",active:!1}],p={links:u},v=`{{#each links}}
  <li class="header-list__item">
    <a
      class="header-list__link {{#if active}}header-list__link--active{{/if}}"
      href="{{href}}"
    >
      {{name}}
    </a>
  </li>
{{/each}}
`,j=document.querySelector(".header-list"),x=t.compile(v),L=x(p);j.innerHTML=L;const U=document.querySelector(".company-list"),R=[{width:41,height:46,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company1",self.location).href},{width:41,height:46,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company2",self.location).href},{width:41,height:46,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company3",self.location).href},{width:93,height:43,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company4",self.location).href},{width:69,height:43,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company5",self.location).href},{width:62,height:45,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company6",self.location).href}],k=R.map(e=>`
      <li class="company-list__item">
        <a class="company-list__link" href="#">
          <svg width="${e.width}" height="${e.height}">
            <use href="${e.href}"></use>
          </svg>
        </a>
      </li>
    `).join("");U.innerHTML=k;const y=document.querySelector(".our-work-list"),_=[{src:new URL("/webstudio-vite-js/assets/work1-b062ba09.jpg",self.location).href,alt:"Робота за комп'ютером",title:"Десктопні додатки",width:370},{src:new URL("/webstudio-vite-js/assets/work2-592f2ac7.jpg",self.location).href,alt:"Робота за телефоном",title:"Мобільні додатки",width:370},{src:new URL("/webstudio-vite-js/assets/work3-98cf051d.jpg",self.location).href,alt:"Робота за планшетом",title:"Дизайнерські рішення",width:370}],S=_.map(e=>`
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
    `).join("");y.innerHTML=S;
