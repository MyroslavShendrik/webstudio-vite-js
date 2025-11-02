// import Handlebars from "handlebars";
// import workData from "../data/our-work.json";
// import workTemplate from "../templates/our-work-item.hbs?raw";

const workList = document.querySelector(".our-work-list");

// const template = Handlebars.compile(workTemplate);
// const markup = template(workData);

// workList.innerHTML = markup;

const dataWorkList = [
  {
    src: new URL("../images/work1.jpg", import.meta.url).href,
    alt: "Робота за комп'ютером",
    title: "Десктопні додатки",
    width: 370,
  },
  {
    src: new URL("../images/work2.jpg", import.meta.url).href,
    alt: "Робота за телефоном",
    title: "Мобільні додатки",
    width: 370,
  },
  {
    src: new URL("../images/work3.jpg", import.meta.url).href,
    alt: "Робота за планшетом",
    title: "Дизайнерські рішення",
    width: 370,
  },
];

const markup = dataWorkList
  .map(
    (item) => `
      <li class="our-work-list__item">
        <img 
          src="${item.src}" 
          alt="${item.alt}" 
          width="${item.width}" 
          class="our-work-list__img"
        />
        <div class="our-work-list__overlay">
          <p class="our-work-list__title">${item.title}</p>
        </div>
      </li>
    `
  )
  .join("");

workList.innerHTML = markup;
