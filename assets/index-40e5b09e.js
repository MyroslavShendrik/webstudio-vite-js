import{H as u}from"./footer-6de5938c.js";const b=[{title:"УВАГА ДО ДЕТАЛЕЙ",text:"Ідейні міркування, і навіть початок повсякденної роботи з формування позиції."},{title:"ПУНКТУАЛЬНІСТЬ",text:"Завдання організації, особливо рамки і місце навчання кадрів тягне у себе."},{title:"ПЛАНУВАННЯ",text:"Так само консультація з широким активом значною мірою зумовлює."},{title:"СУЧАСНІ ТЕХНОЛОГІЇ",text:"Значимість цих проблем настільки очевидна, що реалізація планових завдань."}],w=` <li class="our-pluses-list__item">
    <h3 class="our-pluses-list__title">{{title}}</h3>
    <p class="our-pluses-list__text">{{text}}</p>
  </li>`,k=document.querySelector(".our-pluses-list"),_=u.compile(w),x=b.map(s=>_(s)).join("");k.innerHTML=x;(()=>{const s={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};s.openModalBtn.addEventListener("click",h),s.closeModalBtn.addEventListener("click",h);function h(){s.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const t="/webstudio-vite-js/assets/igor-desktop-1x-b138e391.jpg",o="/webstudio-vite-js/assets/igor-desktop-2x-18e23e2e.jpg",i="/webstudio-vite-js/assets/igor-desktop-3x-f0641e09.jpg",l="/webstudio-vite-js/assets/igor-tablet-1x-a1f96800.jpg",a="/webstudio-vite-js/assets/igor-tablet-2x-5bd351b1.jpg",n="/webstudio-vite-js/assets/igor-tablet-3x-4c28ed9e.jpg",e="/webstudio-vite-js/assets/igor-mobile-1x-9e045f9a.jpg",c="/webstudio-vite-js/assets/igor-mobile-2x-dedb5f8b.jpg",r="/webstudio-vite-js/assets/igor-mobile-3x-e67f5e2c.jpg",d="/webstudio-vite-js/assets/symboldefs-fedcc540.svg#instagram",g="/webstudio-vite-js/assets/symboldefs-fedcc540.svg#twitter",p="/webstudio-vite-js/assets/symboldefs-fedcc540.svg#facebook",m="/webstudio-vite-js/assets/symboldefs-fedcc540.svg#linkedin";console.error('Рендеримо список розробників в секції "Наша команда"');const f=document.querySelector(".our-developers-list");//! Дані для списку з масиву об'єктів (ПРИКЛАД з різними Рішеннями):
let j=[{name:"Ігор Дем'яненко",position:"Product Designer",images:{desktop:[t,o,i],tablet:[l,a,n],mobile:[e,c,r],default:e},icons:[d,g,p,m]},{name:"Ігор Дем'яненко",position:"Product Designer",images:{desktop:[t,o,i],tablet:[l,a,n],mobile:[e,c,r],default:e},icons:[d,g,p,m]},{name:"Ігор Дем'яненко",position:"Product Designer",images:{desktop:[t,o,i],tablet:[l,a,n],mobile:[e,c,r],default:e},icons:[d,g,p,m]},{name:"Ігор Дем'яненко",position:"Product Designer",images:{desktop:[t,o,i],tablet:[l,a,n],mobile:[e,c,r],default:e},icons:[d,g,p,m]}];const v=j.map(s=>`
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
                                <use href=".${s.icons[3]}"></use>
                            </svg>
                        </a>
                    </li>
                </ul>
            </li>
        `).join("");console.log("6️⃣markup:",v);//!
f.innerHTML=v;const y=[{id:"company1",width:41,height:46},{id:"company2",width:41,height:46},{id:"company3",width:41,height:46},{id:"company5",width:84,height:40},{id:"company6",width:62,height:45},{id:"company4",width:93,height:43}],$={companies:y},L=`{{#each companies}}
  <li class="company-list__item">
    <a class="company-list__link" href="#">
      <svg width="{{width}}" height="{{height}}">
        <use href="./images/symboldefs.svg#{{id}}"></use>
      </svg>
    </a>
  </li>
{{/each}}
`,M=document.querySelector(".company-list"),D=u.compile(L),T=D($);M.innerHTML=T;const q=[{src:"./images/work1.jpg",alt:"Робота за комп'ютером",title:"Десктопні додатки",width:370},{src:"./images/work2.jpg",alt:"Робота за телефоном",title:"Мобільні додатки",width:370},{src:"./images/work3.jpg",alt:"Робота за планшетом",title:"Дизайнерські рішення",width:370}],S={works:q},H=`{{#each works}}
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
`,P=document.querySelector(".our-work-list"),B=u.compile(H),E=B(S);P.innerHTML=E;
