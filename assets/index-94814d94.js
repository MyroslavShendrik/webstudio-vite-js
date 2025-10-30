import{H as s}from"./footer-3cb271dc.js";const o=[{title:"УВАГА ДО ДЕТАЛЕЙ",text:"Ідейні міркування, і навіть початок повсякденної роботи з формування позиції."},{title:"ПУНКТУАЛЬНІСТЬ",text:"Завдання організації, особливо рамки і місце навчання кадрів тягне у себе."},{title:"ПЛАНУВАННЯ",text:"Так само консультація з широким активом значною мірою зумовлює."},{title:"СУЧАСНІ ТЕХНОЛОГІЇ",text:"Значимість цих проблем настільки очевидна, що реалізація планових завдань."}],a=` <li class="our-pluses-list__item">
    <h3 class="our-pluses-list__title">{{title}}</h3>
    <p class="our-pluses-list__text">{{text}}</p>
  </li>`,l=document.querySelector(".our-pluses-list"),m=s.compile(a),g=o.map(e=>m(e)).join("");l.innerHTML=g;(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",i),e.closeModalBtn.addEventListener("click",i);function i(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const t=[{name:"Ігор Дем'яненко",position:"Product Designer",images:{desktop:["./images/igor-desktop-1x.jpg","./images/igor-desktop-2x.jpg","./images/igor-desktop-3x.jpg"],tablet:["../images/igor-tablet-1x.jpg","../images/igor-tablet-2x.jpg","../images/igor-tablet-3x.jpg"],mobile:["./images/igor-mobile-1x.jpg","./images/igor-mobile-2x.jpg","./images/igor-mobile-3x.jpg"],default:"./images/igor-mobile-1x.jpg"},socials:["./images/symboldefs.svg#instagram","./images/symboldefs.svg#twitter","./images/symboldefs.svg#facebook","./images/symboldefs.svg#linkedin"]},{name:"Ольга Рєпіна",position:"Frontend Developer",images:{desktop:["./images/olga-desktop-1x.jpg","./images/olga-desktop-2x.jpg","./images/olga-desktop-3x.jpg"],tablet:["./images/olga-tablet-1x.jpg","./images/olga-tablet-2x.jpg","./images/olga-tablet-3x.jpg"],mobile:["./images/olga-mobile-1x.jpg","./images/olga-mobile-2x.jpg","./images/olga-mobile-3x.jpg"],default:"./images/olga-mobile-1x.jpg"},socials:["./images/symboldefs.svg#instagram","./images/symboldefs.svg#twitter","./images/symboldefs.svg#facebook","./images/symboldefs.svg#linkedin"]},{name:"Микола Тарасов",position:"Marketing",images:{desktop:["./images/mykola-desktop-1x.jpg","./images/mykola-desktop-2x.jpg","./images/mykola-desktop-3x.jpg"],tablet:["./images/mykola-tablet-1x.jpg","./images/mykola-tablet-2x.jpg","./images/mykola-tablet-3x.jpg"],mobile:["./images/mykola-mobile-1x.jpg","./images/mykola-mobile-2x.jpg","./images/mykola-mobile-3x.jpg"],default:"./images/mykola-mobile-1x.jpg"},socials:["./images/symboldefs.svg#instagram","./images/symboldefs.svg#twitter","./images/symboldefs.svg#facebook","./images/symboldefs.svg#linkedin"]},{name:"Михайло Єрмаков",position:"UI Designer",images:{desktop:["./images/muhailo-desktop-1x.jpg","./images/muhailo-desktop-2x.jpg","./images/muhailo-desktop-3x.jpg"],tablet:["./images/muhailo-tablet-1x.jpg","./images/muhailo-tablet-2x.jpg","./images/muhailo-tablet-3x.jpg"],mobile:["./images/muhailo-mobile-1x.jpg","./images/muhailo-mobile-2x.jpg","./images/muhailo-mobile-3x.jpg"],default:"./images/muhailo-mobile-1x.jpg"},socials:["./images/symboldefs.svg#instagram","./images/symboldefs.svg#twitter","./images/symboldefs.svg#facebook","./images/symboldefs.svg#linkedin"]}],n=`<li class="our-developers-list__item">
  <picture>
    <source
      srcset="{{images.desktop.[0]}} 1x, {{images.desktop.[1]}} 2x, {{images.desktop.[2]}} 3x"
      media="(min-width: 1200px)"
    />
    <source
      srcset="{{images.tablet.[0]}} 1x, {{images.tablet.[1]}} 2x, {{images.tablet.[2]}} 3x"
      media="(min-width: 768px)"
    />
    <source
      srcset="{{images.mobile.[0]}} 1x, {{images.mobile.[1]}} 2x, {{images.mobile.[2]}} 3x"
      media="(max-width: 767px)"
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
    {{#each socials}}
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
`;console.log("Будуємо розмітку списку розробників");const p=document.querySelector(".our-developers-list");console.log("developersData:",t);const d=s.compile(n),c=t.map(e=>d(e)).join("");p.innerHTML=c;const r=[{id:"company1",width:41,height:46},{id:"company2",width:41,height:46},{id:"company3",width:41,height:46},{id:"company5",width:84,height:40},{id:"company6",width:62,height:45},{id:"company4",width:93,height:43}],u={companies:r},b=`{{#each companies}}
  <li class="company-list__item">
    <a class="company-list__link" href="#">
      <svg width="{{width}}" height="{{height}}">
        <use href="./images/symboldefs.svg#{{id}}"></use>
      </svg>
    </a>
  </li>
{{/each}}
`,h=document.querySelector(".company-list"),x=s.compile(b),k=x(u);h.innerHTML=k;const y=[{src:"./images/work1.jpg",alt:"Робота за комп'ютером",title:"Десктопні додатки",width:370},{src:"./images/work2.jpg",alt:"Робота за телефоном",title:"Мобільні додатки",width:370},{src:"./images/work3.jpg",alt:"Робота за планшетом",title:"Дизайнерські рішення",width:370}],j={works:y},v=`{{#each works}}
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
`,w=document.querySelector(".our-work-list"),f=s.compile(v),_=f(j);w.innerHTML=_;
