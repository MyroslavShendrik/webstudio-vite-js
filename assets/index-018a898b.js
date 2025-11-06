import{H as j}from"./social-list-7aafcd99.js";const v=[{title:"УВАГА ДО ДЕТАЛЕЙ",text:"Ідейні міркування, і навіть початок повсякденної роботи з формування позиції."},{title:"ПУНКТУАЛЬНІСТЬ",text:"Завдання організації, особливо рамки і місце навчання кадрів тягне у себе."},{title:"ПЛАНУВАННЯ",text:"Так само консультація з широким активом значною мірою зумовлює."},{title:"СУЧАСНІ ТЕХНОЛОГІЇ",text:"Значимість цих проблем настільки очевидна, що реалізація планових завдань."}],h=` <li class="our-pluses-list__item">
    <h3 class="our-pluses-list__title">{{title}}</h3>
    <p class="our-pluses-list__text">{{text}}</p>
  </li>`,x=document.querySelector(".our-pluses-list"),L=j.compile(h),k=v.map(e=>L(e)).join("");x.innerHTML=k;(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",d),e.closeModalBtn.addEventListener("click",d);function d(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const c="/webstudio-vite-js/assets/igor-desktop-1x-b138e391.jpg",f="/webstudio-vite-js/assets/igor-desktop-2x-18e23e2e.jpg",r="/webstudio-vite-js/assets/igor-desktop-3x-f0641e09.jpg",g="/webstudio-vite-js/assets/igor-tablet-1x-a1f96800.jpg",b="/webstudio-vite-js/assets/igor-tablet-2x-5bd351b1.jpg",w="/webstudio-vite-js/assets/igor-tablet-3x-4c28ed9e.jpg",t="/webstudio-vite-js/assets/igor-mobile-1x-9e045f9a.jpg",p="/webstudio-vite-js/assets/igor-mobile-2x-dedb5f8b.jpg",m="/webstudio-vite-js/assets/igor-mobile-3x-e67f5e2c.jpg",o="/webstudio-vite-js/assets/symboldefs-fedcc540.svg#instagram",i="/webstudio-vite-js/assets/symboldefs-fedcc540.svg#twitter",l="/webstudio-vite-js/assets/symboldefs-fedcc540.svg#facebook",a="/webstudio-vite-js/assets/symboldefs-fedcc540.svg#linkedin";console.error('Рендеримо список розробників в секції "Наша команда"');//! Знаходимо елемент в якому рендерим список розробників
const U=document.querySelector(".our-developers-list");//! ❌ ---------------------------------- Рішення-1: ----------------------------------
//!❌ Рішення-1: з створенням функції з new URL(...)(динамічний шлях без явного import):
const s=e=>new URL(e,import.meta.url).href;//!❌ Рішення-1: Один з об'єктів для прикладу синтаксису:
const R={desktop:[s("../images/igor-desktop-1x.jpg"),s("../images/igor-desktop-2x.jpg"),s("../images/igor-desktop-3x.jpg")],tablet:[s("../images/igor-tablet-1x.jpg"),s("../images/igor-tablet-2x.jpg"),s("../images/igor-tablet-3x.jpg")],mobile:[s("../images/igor-mobile-1x.jpg"),s("../images/igor-mobile-2x.jpg"),s("../images/igor-mobile-3x.jpg")],default:s("../images/igor-mobile-1x.jpg")};console.log("images:",R);//!
//!✅ Рішення-3: з new URL(...)(динамічний шлях без явного import)
new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#instagram",self.location).href;//! Дані для списку з масиву об'єктів (ПРИКЛАД з різними Рішеннями):
let n=[{name:"Ігор Дем'яненко",position:"Product Designer",images:{desktop:[s("../images/igor-desktop-1x.jpg"),s("../images/igor-desktop-2x.jpg"),s("../images/igor-desktop-3x.jpg")],tablet:[s("../images/igor-tablet-1x.jpg"),s("../images/igor-tablet-2x.jpg"),s("../images/igor-tablet-3x.jpg")],mobile:[s("../images/igor-mobile-1x.jpg"),s("../images/igor-mobile-2x.jpg"),s("../images/igor-mobile-3x.jpg")],default:s("../images/igor-mobile-1x.jpg")},icons:[o,i,l,a]},{name:"Ігор Дем'яненко",position:"Product Designer",images:{desktop:[c,f,r],tablet:[g,b,w],mobile:[t,p,m],default:t},icons:[o,i,l,a]},{name:"Ігор Дем'яненко",position:"Product Designer",images:{desktop:[new URL("/webstudio-vite-js/assets/igor-desktop-1x-b138e391.jpg",self.location).href,new URL("/webstudio-vite-js/assets/igor-desktop-2x-18e23e2e.jpg",self.location).href,new URL("/webstudio-vite-js/assets/igor-desktop-3x-f0641e09.jpg",self.location).href],tablet:[new URL("/webstudio-vite-js/assets/igor-tablet-1x-a1f96800.jpg",self.location).href,new URL("/webstudio-vite-js/assets/igor-tablet-2x-5bd351b1.jpg",self.location).href,new URL("/webstudio-vite-js/assets/igor-tablet-3x-4c28ed9e.jpg",self.location).href],mobile:[new URL("/webstudio-vite-js/assets/igor-mobile-1x-9e045f9a.jpg",self.location).href,new URL("/webstudio-vite-js/assets/igor-mobile-2x-dedb5f8b.jpg",self.location).href,new URL("/webstudio-vite-js/assets/igor-mobile-3x-e67f5e2c.jpg",self.location).href],default:new URL("/webstudio-vite-js/assets/igor-mobile-1x-9e045f9a.jpg",self.location).href},icons:[new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#instagram",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#twitter",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#facebook",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#linkedin",self.location).href]},{name:"Ігор Дем'яненко",position:"Product Designer",images:{desktop:[c,f,r],tablet:[g,b,w],mobile:[t,p,m],default:t},icons:[o,i,l,a]}];//! робимо масив розробників
n=[{name:"Ігор Дем'яненко",position:"Product Designer",images:{desktop:[new URL("/webstudio-vite-js/assets/igor-desktop-1x-b138e391.jpg",self.location).href,new URL("/webstudio-vite-js/assets/igor-desktop-2x-18e23e2e.jpg",self.location).href,new URL("/webstudio-vite-js/assets/igor-desktop-3x-f0641e09.jpg",self.location).href],tablet:[new URL("/webstudio-vite-js/assets/igor-tablet-1x-a1f96800.jpg",self.location).href,new URL("/webstudio-vite-js/assets/igor-tablet-2x-5bd351b1.jpg",self.location).href,new URL("/webstudio-vite-js/assets/igor-tablet-3x-4c28ed9e.jpg",self.location).href],mobile:[new URL("/webstudio-vite-js/assets/igor-mobile-1x-9e045f9a.jpg",self.location).href,new URL("/webstudio-vite-js/assets/igor-mobile-2x-dedb5f8b.jpg",self.location).href,new URL("/webstudio-vite-js/assets/igor-mobile-3x-e67f5e2c.jpg",self.location).href],default:new URL("/webstudio-vite-js/assets/igor-mobile-1x-9e045f9a.jpg",self.location).href},icons:[new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#instagram",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#twitter",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#facebook",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#linkedin",self.location).href]},{name:"Ольга Рєпіна",position:"Frontend Developer",images:{desktop:[new URL("/webstudio-vite-js/assets/olga-desktop-1x-04e8f028.jpg",self.location).href,new URL("/webstudio-vite-js/assets/olga-desktop-2x-c2f88c59.jpg",self.location).href,new URL("/webstudio-vite-js/assets/olga-desktop-3x-58abe69a.jpg",self.location).href],tablet:[new URL("/webstudio-vite-js/assets/olga-tablet-1x-cfa58443.jpg",self.location).href,new URL("/webstudio-vite-js/assets/olga-tablet-2x-86184944.jpg",self.location).href,new URL("/webstudio-vite-js/assets/olga-tablet-3x-0a94d03d.jpg",self.location).href],mobile:[new URL("/webstudio-vite-js/assets/olga-mobile-1x-f516194c.jpg",self.location).href,new URL("/webstudio-vite-js/assets/olga-mobile-2x-2804cc8f.jpg",self.location).href,new URL("/webstudio-vite-js/assets/olga-mobile-3x-834474c3.jpg",self.location).href],default:new URL("/webstudio-vite-js/assets/olga-mobile-1x-f516194c.jpg",self.location).href},icons:[new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#instagram",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#twitter",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#facebook",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#linkedin",self.location).href]},{name:"Микола Тарасов",position:"Marketing",images:{desktop:[new URL("/webstudio-vite-js/assets/mykola-desktop-1x-224be953.jpg",self.location).href,new URL("/webstudio-vite-js/assets/mykola-desktop-2x-adce90a2.jpg",self.location).href,new URL("/webstudio-vite-js/assets/mykola-desktop-3x-52585efb.jpg",self.location).href],tablet:[new URL("/webstudio-vite-js/assets/mykola-tablet-1x-eb9c14c4.jpg",self.location).href,new URL("/webstudio-vite-js/assets/mykola-tablet-2x-0cabf309.jpg",self.location).href,new URL("/webstudio-vite-js/assets/mykola-tablet-3x-22eb3a11.jpg",self.location).href],mobile:[new URL("/webstudio-vite-js/assets/mykola-mobile-1x-557651d7.jpg",self.location).href,new URL("/webstudio-vite-js/assets/mykola-mobile-2x-58b208b4.jpg",self.location).href,new URL("/webstudio-vite-js/assets/mykola-mobile-3x-63372173.jpg",self.location).href],default:new URL("/webstudio-vite-js/assets/mykola-mobile-1x-557651d7.jpg",self.location).href},icons:[new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#instagram",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#twitter",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#facebook",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#linkedin",self.location).href]},{name:"Михайло Єрмаков",position:"UI Designer",images:{desktop:[new URL("/webstudio-vite-js/assets/muhailo-desktop-1x-da48a78f.jpg",self.location).href,new URL("/webstudio-vite-js/assets/muhailo-desktop-2x-384d3bbd.jpg",self.location).href,new URL("/webstudio-vite-js/assets/muhailo-desktop-3x-de19754e.jpg",self.location).href],tablet:[new URL("/webstudio-vite-js/assets/muhailo-tablet-1x-58c7255e.jpg",self.location).href,new URL("/webstudio-vite-js/assets/muhailo-tablet-2x-fbb78bcf.jpg",self.location).href,new URL("/webstudio-vite-js/assets/muhailo-tablet-3x-9b8c52d7.jpg",self.location).href],mobile:[new URL("/webstudio-vite-js/assets/muhailo-mobile-1x-fdca993a.jpg",self.location).href,new URL("/webstudio-vite-js/assets/muhailo-mobile-2x-31262677.jpg",self.location).href,new URL("/webstudio-vite-js/assets/muhailo-mobile-3x-1020d3c1.jpg",self.location).href],default:new URL("/webstudio-vite-js/assets/muhailo-mobile-1x-fdca993a.jpg",self.location).href},icons:[new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#instagram",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#twitter",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#facebook",self.location).href,new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#linkedin",self.location).href]}];const y=JSON.stringify(n);console.log("JSONDataDevelopersList:",y);const u=n.map(e=>`
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
        `).join("");console.log("6️⃣markup:",u);//!
U.innerHTML=u;const _=document.querySelector(".company-list"),$=[{width:41,height:46,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company1",self.location).href},{width:41,height:46,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company2",self.location).href},{width:41,height:46,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company3",self.location).href},{width:93,height:43,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company4",self.location).href},{width:69,height:43,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company5",self.location).href},{width:62,height:45,href:new URL("/webstudio-vite-js/assets/symboldefs-fedcc540.svg#company6",self.location).href}],D=$.map(e=>`
      <li class="company-list__item">
        <a class="company-list__link" href="#">
          <svg width="${e.width}" height="${e.height}">
            <use href="${e.href}"></use>
          </svg>
        </a>
      </li>
    `).join("");_.innerHTML=D;const M=document.querySelector(".our-work-list"),S=[{src:new URL("/webstudio-vite-js/assets/work1-b062ba09.jpg",self.location).href,alt:"Робота за комп'ютером",title:"Десктопні додатки",width:370},{src:new URL("/webstudio-vite-js/assets/work2-592f2ac7.jpg",self.location).href,alt:"Робота за телефоном",title:"Мобільні додатки",width:370},{src:new URL("/webstudio-vite-js/assets/work3-98cf051d.jpg",self.location).href,alt:"Робота за планшетом",title:"Дизайнерські рішення",width:370}],T=S.map(e=>`
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
    `).join("");M.innerHTML=T;
