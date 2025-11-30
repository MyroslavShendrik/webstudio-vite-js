import Handlebars from "handlebars";
import developerTemplate from "../templates/our-developers-item-1.hbs?raw";


console.error('Рендеримо список розробників в секції "Наша команда"');

// Знаходимо елемент для рендеру
const developersList = document.querySelector(".our-developers-list");

// Масив розробників
let dataDevelopersList = [
  {
    name: "Ігор Дем'яненко",
    position: "Product Designer",
    images: {
      desktop: [
        new URL("../images/igor-desktop-1x.jpg", import.meta.url).href,
        new URL("../images/igor-desktop-2x.jpg", import.meta.url).href,
        new URL("../images/igor-desktop-3x.jpg", import.meta.url).href,
      ],
      tablet: [
        new URL("../images/igor-tablet-1x.jpg", import.meta.url).href,
        new URL("../images/igor-tablet-2x.jpg", import.meta.url).href,
        new URL("../images/igor-tablet-3x.jpg", import.meta.url).href,
      ],
      mobile: [
        new URL("../images/igor-mobile-1x.jpg", import.meta.url).href,
        new URL("../images/igor-mobile-2x.jpg", import.meta.url).href,
        new URL("../images/igor-mobile-3x.jpg", import.meta.url).href,
      ],
      default: new URL("../images/igor-mobile-1x.jpg", import.meta.url).href,
    },
    icons: [
      new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
      new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
      new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
      new URL("../images/symboldefs.svg#linkedin", import.meta.url).href,
    ],
  },
  {
    name: "Ольга Рєпіна",
    position: "Frontend Developer",
    images: {
      desktop: [
        new URL("../images/olga-desktop-1x.jpg", import.meta.url).href,
        new URL("../images/olga-desktop-2x.jpg", import.meta.url).href,
        new URL("../images/olga-desktop-3x.jpg", import.meta.url).href,
      ],
      tablet: [
        new URL("../images/olga-tablet-1x.jpg", import.meta.url).href,
        new URL("../images/olga-tablet-2x.jpg", import.meta.url).href,
        new URL("../images/olga-tablet-3x.jpg", import.meta.url).href,
      ],
      mobile: [
        new URL("../images/olga-mobile-1x.jpg", import.meta.url).href,
        new URL("../images/olga-mobile-2x.jpg", import.meta.url).href,
        new URL("../images/olga-mobile-3x.jpg", import.meta.url).href,
      ],
      default: new URL("../images/olga-mobile-1x.jpg", import.meta.url).href,
    },
    icons: [
      new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
      new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
      new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
      new URL("../images/symboldefs.svg#linkedin", import.meta.url).href,
    ],
  },
  {
    name: "Микола Тарасов",
    position: "Marketing",
    images: {
      desktop: [
        new URL("../images/mykola-desktop-1x.jpg", import.meta.url).href,
        new URL("../images/mykola-desktop-2x.jpg", import.meta.url).href,
        new URL("../images/mykola-desktop-3x.jpg", import.meta.url).href,
      ],
      tablet: [
        new URL("../images/mykola-tablet-1x.jpg", import.meta.url).href,
        new URL("../images/mykola-tablet-2x.jpg", import.meta.url).href,
        new URL("../images/mykola-tablet-3x.jpg", import.meta.url).href,
      ],
      mobile: [
        new URL("../images/mykola-mobile-1x.jpg", import.meta.url).href,
        new URL("../images/mykola-mobile-2x.jpg", import.meta.url).href,
        new URL("../images/mykola-mobile-3x.jpg", import.meta.url).href,
      ],
      default: new URL("../images/mykola-mobile-1x.jpg", import.meta.url).href,
    },
    icons: [
      new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
      new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
      new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
      new URL("../images/symboldefs.svg#linkedin", import.meta.url).href,
    ],
  },
  {
    name: "Михайло Єрмаков",
    position: "UI Designer",
    images: {
      desktop: [
        new URL("../images/muhailo-desktop-1x.jpg", import.meta.url).href,
        new URL("../images/muhailo-desktop-2x.jpg", import.meta.url).href,
        new URL("../images/muhailo-desktop-3x.jpg", import.meta.url).href,
      ],
      tablet: [
        new URL("../images/muhailo-tablet-1x.jpg", import.meta.url).href,
        new URL("../images/muhailo-tablet-2x.jpg", import.meta.url).href,
        new URL("../images/muhailo-tablet-3x.jpg", import.meta.url).href,
      ],
      mobile: [
        new URL("../images/muhailo-mobile-1x.jpg", import.meta.url).href,
        new URL("../images/muhailo-mobile-2x.jpg", import.meta.url).href,
        new URL("../images/muhailo-mobile-3x.jpg", import.meta.url).href,
      ],
      default: new URL("../images/muhailo-mobile-1x.jpg", import.meta.url).href,
    },
    icons: [
      new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
      new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
      new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
      new URL("../images/symboldefs.svg#linkedin", import.meta.url).href,
    ],
  },
];

// Перевірка: чи всі дані готові
console.log("Масив розробників перед localStorage:", dataDevelopersList);
//! Зберігаємо у localStorage dataDevelopersList
//? умова: якщо localStarage пустий, то додаємо базовий об'єкт dataDevelopersList
if(localStorage.getItem("dataDevelopers") === null){
localStorage.setItem("dataDevelopers", JSON.stringify(dataDevelopersList));
console.log("localStorage.getItem(dataDevelopers):",localStorage.getItem("dataDevelopers"));
}
console.log("localStorage.getItem(dataDevelopers):",localStorage.getItem("dataDevelopers"));
// localStorage.setItem("dataDevelopers", JSON.stringify(dataDevelopersList));
console.log("Дані збережено у localStorage");

//! забираємо дані в dataDevelopersList з localStorage
dataDevelopersList = JSON.parse(localStorage.getItem("dataDevelopers"));
console.log("dataDevelopersList:",dataDevelopersList);

// Генеруємо HTML
// const markup = dataDevelopersList
//   .map(
//     (item) => `
//     <li class="our-developers-list__item">
//       <picture>
//         <source srcset="${item.images.desktop[0]} 1x, ${item.images.desktop[1]} 2x, ${item.images.desktop[2]} 3x" media="(min-width: 1200px)" />
//         <source srcset="${item.images.tablet[0]} 1x, ${item.images.tablet[1]} 2x, ${item.images.tablet[2]} 3x" media="(min-width: 768px)" />
//         <source srcset="${item.images.mobile[0]} 1x, ${item.images.mobile[1]} 2x, ${item.images.mobile[2]} 3x" media="(min-width: 480px)" />
//         <img class="our-developers-list__img" src="${item.images.default}" alt="${item.name}" />
//       </picture>
//       <p class="our-developers-list__text">${item.name}</p>
//       <h4 class="our-developers-list__title">${item.position}</h4>
//       <ul class="our-developers-svg-list">
//         ${item.icons.map(icon => `<li class="our-developers-svg-list__item"><a class="our-developers-svg-list__link" href="#"><svg width="20" height="20"><use href="${icon}"></use></svg></a></li>`).join('')}
//       </ul>
//     </li>
//   `
//   )
//   .join('');

// Перевірка: розмітка
// console.log("HTML-розмітка для вставки:", markup);

// Вставляємо у DOM
// if (developersList) {
//   developersList.innerHTML = markup;
//   console.log("Список розробників вставлено у DOM успішно");
// } else {
//   console.error("Помилка: елемент .our-developers-list не знайдено!");
// }

//! генеруємо HTML за допомогою Handlebars
const template = Handlebars.compile(developerTemplate);

const markup = dataDevelopersList
  .map(item => template(item))
  .join("");
console.log(" markup:", markup);
developersList.innerHTML = markup;
