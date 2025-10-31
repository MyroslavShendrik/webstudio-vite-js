import{H as n}from"./footer-6de5938c.js";const v=[{title:"УВАГА ДО ДЕТАЛЕЙ",text:"Ідейні міркування, і навіть початок повсякденної роботи з формування позиції."},{title:"ПУНКТУАЛЬНІСТЬ",text:"Завдання організації, особливо рамки і місце навчання кадрів тягне у себе."},{title:"ПЛАНУВАННЯ",text:"Так само консультація з широким активом значною мірою зумовлює."},{title:"СУЧАСНІ ТЕХНОЛОГІЇ",text:"Значимість цих проблем настільки очевидна, що реалізація планових завдань."}],h=` <li class="our-pluses-list__item">
    <h3 class="our-pluses-list__title">{{title}}</h3>
    <p class="our-pluses-list__text">{{text}}</p>
  </li>`,x=document.querySelector(".our-pluses-list"),k=n.compile(h),L=v.map(e=>k(e)).join("");x.innerHTML=L;(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",d),e.closeModalBtn.addEventListener("click",d);function d(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const g="/webstudio-vite-js/assets/igor-desktop-1x-b138e391.jpg",r="/webstudio-vite-js/assets/igor-desktop-2x-18e23e2e.jpg",f="/webstudio-vite-js/assets/igor-desktop-3x-f0641e09.jpg",b="/webstudio-vite-js/assets/igor-tablet-1x-a1f96800.jpg",m="/webstudio-vite-js/assets/igor-tablet-2x-5bd351b1.jpg",p="/webstudio-vite-js/assets/igor-tablet-3x-4c28ed9e.jpg",t="/webstudio-vite-js/assets/igor-mobile-1x-9e045f9a.jpg",w="/webstudio-vite-js/assets/igor-mobile-2x-dedb5f8b.jpg",u="/webstudio-vite-js/assets/igor-mobile-3x-e67f5e2c.jpg",o="/webstudio-vite-js/assets/symboldefs-fedcc540.svg#instagram",i="/webstudio-vite-js/assets/symboldefs-fedcc540.svg#twitter",l="/webstudio-vite-js/assets/symboldefs-fedcc540.svg#facebook",a="/webstudio-vite-js/assets/symboldefs-fedcc540.svg#linkedin";console.error('Рендеримо список розробників в секції "Наша команда"');//! Знаходимо елемент в якому рендерим список розробників
const U=document.querySelector(".our-developers-list");//! ❌ ---------------------------------- Рішення-1: ----------------------------------
//!❌ Рішення-1: з створенням функції з new URL(...)(динамічний шлях без явного import):
const s=e=>new URL(e,import.meta.url).href;//!❌ Рішення-1: Один з об'єктів для прикладу синтаксису:
const R={desktop:[s("../images/igor-desktop-1x.jpg"),s("../images/igor-desktop-2x.jpg"),s("../images/igor-desktop-3x.jpg")],tablet:[s("../images/igor-tablet-1x.jpg"),s("../images/igor-tablet-2x.jpg"),s("../images/igor-tablet-3x.jpg")],mobile:[s("../images/igor-mobile-1x.jpg"),s("../images/igor-mobile-2x.jpg"),s("../images/igor-mobile-3x.jpg")],default:s("../images/igor-mobile-1x.jpg")};console.log("images:",R);//!
//!✅ Рішення-3: з new URL(...)(динамічний шлях без явного import)
new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#instagram",self.location).href;//! Дані для списку з масиву об'єктів (ПРИКЛАД з різними Рішеннями):
let c=[{name:"Ігор Дем'яненко",position:"Product Designer",images:{desktop:[s("../images/igor-desktop-1x.jpg"),s("../images/igor-desktop-2x.jpg"),s("../images/igor-desktop-3x.jpg")],tablet:[s("../images/igor-tablet-1x.jpg"),s("../images/igor-tablet-2x.jpg"),s("../images/igor-tablet-3x.jpg")],mobile:[s("../images/igor-mobile-1x.jpg"),s("../images/igor-mobile-2x.jpg"),s("../images/igor-mobile-3x.jpg")],default:s("../images/igor-mobile-1x.jpg")},icons:[o,i,l,a]},{name:"Ігор Дем'яненко",position:"Product Designer",images:{desktop:[g,r,f],tablet:[b,m,p],mobile:[t,w,u],default:t},icons:[o,i,l,a]},{name:"Ігор Дем'яненко",position:"Product Designer",images:{desktop:[new URL("/webstudio-vite-js/assets/igor-desktop-1x-b138e391.jpg",self.location).href,new URL("/webstudio-vite-js/assets/igor-desktop-2x-18e23e2e.jpg",self.location).href,new URL("/webstudio-vite-js/assets/igor-desktop-3x-f0641e09.jpg",self.location).href],tablet:[new URL("/webstudio-vite-js/assets/igor-tablet-1x-a1f96800.jpg",self.location).href,new URL("/webstudio-vite-js/assets/igor-tablet-2x-5bd351b1.jpg",self.location).href,new URL("/webstudio-vite-js/assets/igor-tablet-3x-4c28ed9e.jpg",self.location).href],mobile:[new URL("/webstudio-vite-js/assets/igor-mobile-1x-9e045f9a.jpg",self.location).href,new URL("/webstudio-vite-js/assets/igor-mobile-2x-dedb5f8b.jpg",self.location).href,new URL("/webstudio-vite-js/assets/igor-mobile-3x-e67f5e2c.jpg",self.location).href],default:new URL("/webstudio-vite-js/assets/igor-mobile-1x-9e045f9a.jpg",self.location).href},icons:[new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#instagram",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#twitter",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#facebook",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#linkedin",self.location).href]},{name:"Ігор Дем'яненко",position:"Product Designer",images:{desktop:[g,r,f],tablet:[b,m,p],mobile:[t,w,u],default:t},icons:[o,i,l,a]}];//! робимо масив розробників
c=[{name:"Ігор Дем'яненко",position:"Product Designer",images:{desktop:[new URL("/webstudio-vite-js/assets/igor-desktop-1x-b138e391.jpg",self.location).href,new URL("/webstudio-vite-js/assets/igor-desktop-2x-18e23e2e.jpg",self.location).href,new URL("/webstudio-vite-js/assets/igor-desktop-3x-f0641e09.jpg",self.location).href],tablet:[new URL("/webstudio-vite-js/assets/igor-tablet-1x-a1f96800.jpg",self.location).href,new URL("/webstudio-vite-js/assets/igor-tablet-2x-5bd351b1.jpg",self.location).href,new URL("/webstudio-vite-js/assets/igor-tablet-3x-4c28ed9e.jpg",self.location).href],mobile:[new URL("/webstudio-vite-js/assets/igor-mobile-1x-9e045f9a.jpg",self.location).href,new URL("/webstudio-vite-js/assets/igor-mobile-2x-dedb5f8b.jpg",self.location).href,new URL("/webstudio-vite-js/assets/igor-mobile-3x-e67f5e2c.jpg",self.location).href],default:new URL("/webstudio-vite-js/assets/igor-mobile-1x-9e045f9a.jpg",self.location).href},icons:[new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#instagram",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#twitter",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#facebook",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#linkedin",self.location).href]},{name:"Ольга Рєпіна",position:"Frontend Developer",images:{desktop:[new URL("/webstudio-vite-js/assets/olga-desktop-1x-04e8f028.jpg",self.location).href,new URL("/webstudio-vite-js/assets/olga-desktop-2x-c2f88c59.jpg",self.location).href,new URL("/webstudio-vite-js/assets/olga-desktop-3x-58abe69a.jpg",self.location).href],tablet:[new URL("/webstudio-vite-js/assets/olga-tablet-1x-cfa58443.jpg",self.location).href,new URL("/webstudio-vite-js/assets/olga-tablet-2x-86184944.jpg",self.location).href,new URL("/webstudio-vite-js/assets/olga-tablet-3x-0a94d03d.jpg",self.location).href],mobile:[new URL("/webstudio-vite-js/assets/olga-mobile-1x-f516194c.jpg",self.location).href,new URL("/webstudio-vite-js/assets/olga-mobile-2x-2804cc8f.jpg",self.location).href,new URL("/webstudio-vite-js/assets/olga-mobile-3x-834474c3.jpg",self.location).href],default:new URL("/webstudio-vite-js/assets/olga-mobile-1x-f516194c.jpg",self.location).href},icons:[new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#instagram",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#twitter",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#facebook",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#linkedin",self.location).href]},{name:"Микола Тарасов",position:"Marketing",images:{desktop:[new URL("/webstudio-vite-js/assets/mykola-desktop-1x-224be953.jpg",self.location).href,new URL("/webstudio-vite-js/assets/mykola-desktop-2x-adce90a2.jpg",self.location).href,new URL("/webstudio-vite-js/assets/mykola-desktop-3x-52585efb.jpg",self.location).href],tablet:[new URL("/webstudio-vite-js/assets/mykola-tablet-1x-eb9c14c4.jpg",self.location).href,new URL("/webstudio-vite-js/assets/mykola-tablet-2x-0cabf309.jpg",self.location).href,new URL("/webstudio-vite-js/assets/mykola-tablet-3x-22eb3a11.jpg",self.location).href],mobile:[new URL("/webstudio-vite-js/assets/mykola-mobile-1x-557651d7.jpg",self.location).href,new URL("/webstudio-vite-js/assets/mykola-mobile-2x-58b208b4.jpg",self.location).href,new URL("/webstudio-vite-js/assets/mykola-mobile-3x-63372173.jpg",self.location).href],default:new URL("/webstudio-vite-js/assets/mykola-mobile-1x-557651d7.jpg",self.location).href},icons:[new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#instagram",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#twitter",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#facebook",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#linkedin",self.location).href]},{name:"Михайло Єрмаков",position:"UI Designer",images:{desktop:[new URL("/webstudio-vite-js/assets/muhailo-desktop-1x-da48a78f.jpg",self.location).href,new URL("/webstudio-vite-js/assets/muhailo-desktop-2x-384d3bbd.jpg",self.location).href,new URL("/webstudio-vite-js/assets/muhailo-desktop-3x-de19754e.jpg",self.location).href],tablet:[new URL("/webstudio-vite-js/assets/muhailo-tablet-1x-58c7255e.jpg",self.location).href,new URL("/webstudio-vite-js/assets/muhailo-tablet-2x-fbb78bcf.jpg",self.location).href,new URL("/webstudio-vite-js/assets/muhailo-tablet-3x-9b8c52d7.jpg",self.location).href],mobile:[new URL("/webstudio-vite-js/assets/muhailo-mobile-1x-fdca993a.jpg",self.location).href,new URL("/webstudio-vite-js/assets/muhailo-mobile-2x-31262677.jpg",self.location).href,new URL("/webstudio-vite-js/assets/muhailo-mobile-3x-1020d3c1.jpg",self.location).href],default:new URL("/webstudio-vite-js/assets/muhailo-mobile-1x-fdca993a.jpg",self.location).href},icons:[new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#instagram",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#twitter",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#facebook",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#linkedin",self.location).href]}];const y=JSON.stringify(c);console.log("JSONDataDevelopersList:",y);const j=c.map(e=>`
            <li class="our-developers-list__item">
                <picture>
                    <source
                        srcset="
                            ${e.images.desktop[0]} 1x,
                            ${e.images.desktop[1]} 2x,
                            ${e.images.desktop[2]} 3x
                        "
                        media="(min-width: 1200px)"
                    />
                    <source
                        srcset="
                            ${e.images.tablet[0]} 1x,
                            ${e.images.tablet[1]} 2x,
                            ${e.images.tablet[2]} 3x
                        "
                        media="(min-width: 768px)"
                    />
                    <source
                        srcset="
                            ${e.images.mobile[0]} 1x,
                            ${e.images.mobile[1]} 2x,
                            ${e.images.mobile[2]} 3x
                        "
                        media="(min-width: 480px)"
                    />
                    <img
                        class="our-developers-list__img"
                        src="${e.images.default}"
                        alt="${e.name}"
                    />
                </picture>

                <p class="our-developers-list__text">${e.name}</p>
                <h4 class="our-developers-list__title">${e.position}</h4>
                <ul class="our-developers-svg-list">
                    <li class="our-developers-svg-list__item">
                        <a class="our-developers-svg-list__link" href="#">
                            <svg width="20" height="20">
                                <use href="${e.icons[0]}"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="our-developers-svg-list__item">
                        <a class="our-developers-svg-list__link" href="#">
                            <svg width="20" height="20">
                                <use href="${e.icons[1]}"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="our-developers-svg-list__item">
                        <a class="our-developers-svg-list__link" href="#">
                            <svg width="20" height="20">
                                <use href="${e.icons[2]}"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="our-developers-svg-list__item">
                        <a class="our-developers-svg-list__link" href="#">
                            <svg width="20" height="20">
                                <use href="${e.icons[3]}"></use>
                            </svg>
                        </a>
                    </li>
                </ul>
            </li>
        `).join("");console.log("6️⃣markup:",j);//!
U.innerHTML=j;const _=[{id:"company1",width:41,height:46},{id:"company2",width:41,height:46},{id:"company3",width:41,height:46},{id:"company5",width:84,height:40},{id:"company6",width:62,height:45},{id:"company4",width:93,height:43}],$={companies:_},D=`{{#each companies}}
  <li class="company-list__item">
    <a class="company-list__link" href="#">
      <svg width="{{width}}" height="{{height}}">
        <use href="./images/symboldefs.svg#{{id}}"></use>
      </svg>
    </a>
  </li>
{{/each}}
`,M=document.querySelector(".company-list"),S=n.compile(D),T=S($);M.innerHTML=T;const q=[{src:"./images/work1.jpg",alt:"Робота за комп'ютером",title:"Десктопні додатки",width:370},{src:"./images/work2.jpg",alt:"Робота за телефоном",title:"Мобільні додатки",width:370},{src:"./images/work3.jpg",alt:"Робота за планшетом",title:"Дизайнерські рішення",width:370}],H={works:q},P=`{{#each works}}
  <li class="our-work-list__item">
    <img
      class="our-work-list__img"
      src="{{src}}"
      alt="{{alt}}"
      width="{{width}}"
    />
    <h3 class="our-work-list__title">{{title}}</h3>
  </li>
{{/each}}
`,B=document.querySelector(".our-work-list"),J=n.compile(P),N=J(H);B.innerHTML=N;
