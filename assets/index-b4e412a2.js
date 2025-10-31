import{H as e}from"./footer-6de5938c.js";const l=[{title:"УВАГА ДО ДЕТАЛЕЙ",text:"Ідейні міркування, і навіть початок повсякденної роботи з формування позиції."},{title:"ПУНКТУАЛЬНІСТЬ",text:"Завдання організації, особливо рамки і місце навчання кадрів тягне у себе."},{title:"ПЛАНУВАННЯ",text:"Так само консультація з широким активом значною мірою зумовлює."},{title:"СУЧАСНІ ТЕХНОЛОГІЇ",text:"Значимість цих проблем настільки очевидна, що реалізація планових завдань."}],a=` <li class="our-pluses-list__item">
    <h3 class="our-pluses-list__title">{{title}}</h3>
    <p class="our-pluses-list__text">{{text}}</p>
  </li>`,c=document.querySelector(".our-pluses-list"),n=e.compile(a),r=l.map(s=>n(s)).join("");c.innerHTML=r;(()=>{const s={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};s.openModalBtn.addEventListener("click",o),s.closeModalBtn.addEventListener("click",o);function o(){s.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const d="/webstudio-vite-js/assets/igor-desktop-1x-b138e391.jpg",g="/webstudio-vite-js/assets/igor-desktop-2x-18e23e2e.jpg",p="/webstudio-vite-js/assets/igor-desktop-3x-f0641e09.jpg",u="/webstudio-vite-js/assets/igor-tablet-1x-a1f96800.jpg",m="/webstudio-vite-js/assets/igor-tablet-2x-5bd351b1.jpg",h="/webstudio-vite-js/assets/igor-tablet-3x-4c28ed9e.jpg",i="/webstudio-vite-js/assets/igor-mobile-1x-9e045f9a.jpg",v="/webstudio-vite-js/assets/igor-mobile-2x-dedb5f8b.jpg",w="/webstudio-vite-js/assets/igor-mobile-3x-e67f5e2c.jpg",b="/webstudio-vite-js/assets/symboldefs-fedcc540.svg#instagram",_="/webstudio-vite-js/assets/symboldefs-fedcc540.svg#twitter",k="/webstudio-vite-js/assets/symboldefs-fedcc540.svg#facebook",x="/webstudio-vite-js/assets/symboldefs-fedcc540.svg#linkedin";console.error('Рендеримо список розробників в секції "Наша команда"');//! Знаходимо елемент в якому рендерим список розробників
const f=document.querySelector(".our-developers-list");//! Дані для списку з масиву об'єктів (ПРИКЛАД з різними Рішеннями):
let j=[{name:"Ігор Дем'яненко",position:"Product Designer",images:{desktop:[d,g,p],tablet:[u,m,h],mobile:[i,v,w],default:i},icons:[b,_,k,x]}];const t=j.map(s=>`
            <li class="our-developers-list__item">
                <picture>
                    <source
                        srcset="
                            ${s.images.desktop[0]} 1x,
                            ${s.images.desktop[1]} 2x,
                            ${s.images.desktop[2]} 3x
                        "
                        media="(min-width: 1200px)"
                    />
                    <source
                        srcset="
                            ${s.images.tablet[0]} 1x,
                            ${s.images.tablet[1]} 2x,
                            ${s.images.tablet[2]} 3x
                        "
                        media="(min-width: 768px)"
                    />
                    <source
                        srcset="
                            ${s.images.mobile[0]} 1x,
                            ${s.images.mobile[1]} 2x,
                            ${s.images.mobile[2]} 3x
                        "
                        media="(min-width: 480px)"
                    />
                    <img
                        class="our-developers-list__img"
                        src="${s.images.default}"
                        alt="${s.name}"
                    />
                </picture>

                <p class="our-developers-list__text">${s.name}</p>
                <h4 class="our-developers-list__title">${s.position}</h4>
                <ul class="our-developers-svg-list">
                    <li class="our-developers-svg-list__item">
                        <a class="our-developers-svg-list__link" href="#">
                            <svg width="20" height="20">
                                <use href="${s.icons[0]}"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="our-developers-svg-list__item">
                        <a class="our-developers-svg-list__link" href="#">
                            <svg width="20" height="20">
                                <use href="${s.icons[1]}"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="our-developers-svg-list__item">
                        <a class="our-developers-svg-list__link" href="#">
                            <svg width="20" height="20">
                                <use href="${s.icons[2]}"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="our-developers-svg-list__item">
                        <a class="our-developers-svg-list__link" href="#">
                            <svg width="20" height="20">
                                <use href="${s.icons[3]}"></use>
                            </svg>
                        </a>
                    </li>
                </ul>
            </li>
        `).join("");console.log("6️⃣markup:",t);//!
f.innerHTML=t;console.log("markup:",t);const y=[{id:"company1",width:41,height:46},{id:"company2",width:41,height:46},{id:"company3",width:41,height:46},{id:"company5",width:84,height:40},{id:"company6",width:62,height:45},{id:"company4",width:93,height:43}],$={companies:y},L=`{{#each companies}}
  <li class="company-list__item">
    <a class="company-list__link" href="#">
      <svg width="{{width}}" height="{{height}}">
        <use href="./images/symboldefs.svg#{{id}}"></use>
      </svg>
    </a>
  </li>
{{/each}}
`,M=document.querySelector(".company-list"),T=e.compile(L),D=T($);M.innerHTML=D;const q=[{src:"./images/work1.jpg",alt:"Робота за комп'ютером",title:"Десктопні додатки",width:370},{src:"./images/work2.jpg",alt:"Робота за телефоном",title:"Мобільні додатки",width:370},{src:"./images/work3.jpg",alt:"Робота за планшетом",title:"Дизайнерські рішення",width:370}],S={works:q},H=`{{#each works}}
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
`,B=document.querySelector(".our-work-list"),E=e.compile(H),P=E(S);B.innerHTML=P;
