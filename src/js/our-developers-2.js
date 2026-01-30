import Handlebars from "handlebars";
import developerTemplate from "../templates/our-developers-item-1.hbs?raw";
// import 'lazysizes';
// import 'lazysizes/plugins/parent-fit/ls.parent-fit';
// import developerTemplate from "../templates/our-developers-item-2.hbs?raw";


if (window.lazySizes) {
  lazySizes.loader.checkElems();
}

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
        new URL("../images/igor-desktop-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/igor-desktop-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/igor-desktop-3x.jpg", import.meta.url).href + " 3x"
      ], 
      tablet: [
        new URL("../images/igor-tablet-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/igor-tablet-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/igor-tablet-3x.jpg", import.meta.url).href + " 3x"
      ],
      mobile: [
        new URL("../images/igor-mobile-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/igor-mobile-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/igor-mobile-3x.jpg", import.meta.url).href + " 3x"
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
        new URL("../images/olga-desktop-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/olga-desktop-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/olga-desktop-3x.jpg", import.meta.url).href + " 3x"
      ],
      tablet: [
        new URL("../images/olga-tablet-1x.jpg", import.meta.url).href + " 1x,", 
        new URL("../images/olga-tablet-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/olga-tablet-3x.jpg", import.meta.url).href + " 3x"
      ],
      mobile: [
        new URL("../images/olga-mobile-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/olga-mobile-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/olga-mobile-3x.jpg", import.meta.url).href + " 3x"
      ],
      default: new URL("../images/olga-mobile-1x.jpg", import.meta.url).href ,
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
        new URL("../images/mykola-desktop-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/mykola-desktop-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/mykola-desktop-3x.jpg", import.meta.url).href + " 3x"
      ],
      tablet: [
        new URL("../images/mykola-tablet-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/mykola-tablet-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/mykola-tablet-3x.jpg", import.meta.url).href + " 3x"
      ],
      mobile: [
        new URL("../images/mykola-mobile-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/mykola-mobile-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/mykola-mobile-3x.jpg", import.meta.url).href + " 3x"
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
        new URL("../images/muhailo-desktop-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/muhailo-desktop-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/muhailo-desktop-3x.jpg", import.meta.url).href + " 3x"
      ],
      tablet: [
        new URL("../images/muhailo-tablet-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/muhailo-tablet-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/muhailo-tablet-3x.jpg", import.meta.url).href + " 3x"
      ],
      mobile: [
        new URL("../images/muhailo-mobile-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/muhailo-mobile-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/muhailo-mobile-3x.jpg", import.meta.url).href + " 3x"
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
//! ✅1️⃣-2️⃣Робимо фінальний варіант dataDevelopersList з урахуванням використання Intersection Observer
//! 2️⃣0️⃣ розробників 👤
dataDevelopersList = [
   {
    name: "Ігор Дем'яненко",
    position: "Product Designer",
    images: {
      desktop: [
        new URL("../images/igor-desktop-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/igor-desktop-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/igor-desktop-3x.jpg", import.meta.url).href + " 3x"
      ], 
      tablet: [
        new URL("../images/igor-tablet-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/igor-tablet-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/igor-tablet-3x.jpg", import.meta.url).href + " 3x"
      ],
      mobile: [
        new URL("../images/igor-mobile-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/igor-mobile-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/igor-mobile-3x.jpg", import.meta.url).href + " 3x"
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
        new URL("../images/olga-desktop-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/olga-desktop-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/olga-desktop-3x.jpg", import.meta.url).href + " 3x"
      ],
      tablet: [
        new URL("../images/olga-tablet-1x.jpg", import.meta.url).href + " 1x,", 
        new URL("../images/olga-tablet-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/olga-tablet-3x.jpg", import.meta.url).href + " 3x"
      ],
      mobile: [
        new URL("../images/olga-mobile-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/olga-mobile-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/olga-mobile-3x.jpg", import.meta.url).href + " 3x"
      ],
      default: new URL("../images/olga-mobile-1x.jpg", import.meta.url).href ,
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
        new URL("../images/mykola-desktop-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/mykola-desktop-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/mykola-desktop-3x.jpg", import.meta.url).href + " 3x"
      ],
      tablet: [
        new URL("../images/mykola-tablet-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/mykola-tablet-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/mykola-tablet-3x.jpg", import.meta.url).href + " 3x"
      ],
      mobile: [
        new URL("../images/mykola-mobile-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/mykola-mobile-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/mykola-mobile-3x.jpg", import.meta.url).href + " 3x"
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
        new URL("../images/muhailo-desktop-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/muhailo-desktop-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/muhailo-desktop-3x.jpg", import.meta.url).href + " 3x"
      ],
      tablet: [
        new URL("../images/muhailo-tablet-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/muhailo-tablet-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/muhailo-tablet-3x.jpg", import.meta.url).href + " 3x"
      ],
      mobile: [
        new URL("../images/muhailo-mobile-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/muhailo-mobile-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/muhailo-mobile-3x.jpg", import.meta.url).href + " 3x"
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
  {
    name: "Ігор Дем'яненко-2",
    position: "Product Designer-2",
    images: {
      desktop: [
        new URL("../images/igor2-desktop-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/igor2-desktop-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/igor2-desktop-3x.jpg", import.meta.url).href + " 3x"
      ], 
      tablet: [
        new URL("../images/igor2-tablet-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/igor2-tablet-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/igor2-tablet-3x.jpg", import.meta.url).href + " 3x"
      ],
      mobile: [
        new URL("../images/igor2-mobile-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/igor2-mobile-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/igor2-mobile-3x.jpg", import.meta.url).href + " 3x"
      ],
      default: new URL("../images/igor2-mobile-1x.jpg", import.meta.url).href,
    },
    icons: [
      new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
      new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
      new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
      new URL("../images/symboldefs.svg#linkedin", import.meta.url).href,
    ],
  },
  {
    name: "Ольга Рєпіна-2",
    position: "Frontend Developer-2",
    images: {
      desktop: [
        new URL("../images/olga2-desktop-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/olga2-desktop-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/olga2-desktop-3x.jpg", import.meta.url).href + " 3x"
      ],
      tablet: [
        new URL("../images/olga2-tablet-1x.jpg", import.meta.url).href + " 1x,", 
        new URL("../images/olga2-tablet-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/olga2-tablet-3x.jpg", import.meta.url).href + " 3x"
      ],
      mobile: [
        new URL("../images/olga2-mobile-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/olga2-mobile-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/olga2-mobile-3x.jpg", import.meta.url).href + " 3x"
      ],
      default: new URL("../images/olga2-mobile-1x.jpg", import.meta.url).href ,
    },
    icons: [
      new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
      new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
      new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
      new URL("../images/symboldefs.svg#linkedin", import.meta.url).href,
    ],
  },
  {
    name: "Микола Тарасов-2",
    position: "Marketing-2",
    images: {
      desktop: [
        new URL("../images/mykola2-desktop-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/mykola2-desktop-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/mykola2-desktop-3x.jpg", import.meta.url).href + " 3x"
      ],
      tablet: [
        new URL("../images/mykola2-tablet-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/mykola2-tablet-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/mykola2-tablet-3x.jpg", import.meta.url).href + " 3x"
      ],
      mobile: [
        new URL("../images/mykola2-mobile-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/mykola2-mobile-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/mykola2-mobile-3x.jpg", import.meta.url).href + " 3x"
      ],
      default: new URL("../images/mykola2-mobile-1x.jpg", import.meta.url).href,
    },
    icons: [
      new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
      new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
      new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
      new URL("../images/symboldefs.svg#linkedin", import.meta.url).href,
    ],
  },
  {
    name: "Михайло Єрмаков-2",
    position: "UI Designer-2",
    images: {
      desktop: [
        new URL("../images/muhailo2-desktop-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/muhailo2-desktop-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/muhailo2-desktop-3x.jpg", import.meta.url).href + " 3x"
      ],
      tablet: [
        new URL("../images/muhailo2-tablet-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/muhailo2-tablet-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/muhailo2-tablet-3x.jpg", import.meta.url).href + " 3x"
      ],
      mobile: [
        new URL("../images/muhailo2-mobile-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/muhailo2-mobile-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/muhailo2-mobile-3x.jpg", import.meta.url).href + " 3x"
      ],
      default: new URL("../images/muhailo2-mobile-1x.jpg", import.meta.url).href,
    },
    icons: [
      new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
      new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
      new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
      new URL("../images/symboldefs.svg#linkedin", import.meta.url).href,
    ],
  },
  {
    name: "Ігор Дем'яненко-3",
    position: "Product Designer-3",
    images: {
      desktop: [
        new URL("../images/igor3-desktop-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/igor3-desktop-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/igor3-desktop-3x.jpg", import.meta.url).href + " 3x"
      ], 
      tablet: [
        new URL("../images/igor3-tablet-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/igor3-tablet-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/igor3-tablet-3x.jpg", import.meta.url).href + " 3x"
      ],
      mobile: [
        new URL("../images/igor3-mobile-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/igor3-mobile-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/igor3-mobile-3x.jpg", import.meta.url).href + " 3x"
      ],
      default: new URL("../images/igor3-mobile-1x.jpg", import.meta.url).href,
    },
    icons: [
      new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
      new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
      new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
      new URL("../images/symboldefs.svg#linkedin", import.meta.url).href,
    ],
  },
  {
    name: "Ольга Рєпіна-3",
    position: "Frontend Developer-3",
    images: {
      desktop: [
        new URL("../images/olga3-desktop-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/olga3-desktop-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/olga3-desktop-3x.jpg", import.meta.url).href + " 3x"
      ],
      tablet: [
        new URL("../images/olga3-tablet-1x.jpg", import.meta.url).href + " 1x,", 
        new URL("../images/olga3-tablet-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/olga3-tablet-3x.jpg", import.meta.url).href + " 3x"
      ],
      mobile: [
        new URL("../images/olga3-mobile-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/olga3-mobile-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/olga3-mobile-3x.jpg", import.meta.url).href + " 3x"
      ],
      default: new URL("../images/olga3-mobile-1x.jpg", import.meta.url).href ,
    },
    icons: [
      new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
      new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
      new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
      new URL("../images/symboldefs.svg#linkedin", import.meta.url).href,
    ],
  },
  {
    name: "Микола Тарасов-3",
    position: "Marketing-3",
    images: {
      desktop: [
        new URL("../images/mykola3-desktop-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/mykola3-desktop-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/mykola3-desktop-3x.jpg", import.meta.url).href + " 3x"
      ],
      tablet: [
        new URL("../images/mykola3-tablet-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/mykola3-tablet-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/mykola3-tablet-3x.jpg", import.meta.url).href + " 3x"
      ],
      mobile: [
        new URL("../images/mykola3-mobile-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/mykola3-mobile-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/mykola3-mobile-3x.jpg", import.meta.url).href + " 3x"
      ],
      default: new URL("../images/mykola3-mobile-1x.jpg", import.meta.url).href,
    },
    icons: [
      new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
      new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
      new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
      new URL("../images/symboldefs.svg#linkedin", import.meta.url).href,
    ],
  },
  {
    name: "Михайло Єрмаков-3",
    position: "UI Designer-3",
    images: {
      desktop: [
        new URL("../images/muhailo3-desktop-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/muhailo3-desktop-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/muhailo3-desktop-3x.jpg", import.meta.url).href + " 3x"
      ],
      tablet: [
        new URL("../images/muhailo3-tablet-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/muhailo3-tablet-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/muhailo3-tablet-3x.jpg", import.meta.url).href + " 3x"
      ],
      mobile: [
        new URL("../images/muhailo3-mobile-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/muhailo3-mobile-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/muhailo3-mobile-3x.jpg", import.meta.url).href + " 3x"
      ],
      default: new URL("../images/muhailo3-mobile-1x.jpg", import.meta.url).href,
    },
    icons: [
      new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
      new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
      new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
      new URL("../images/symboldefs.svg#linkedin", import.meta.url).href,
    ],
  },
    {
    name: "Ігор Дем'яненко-4",
    position: "Product Designer-4",
    images: {
      desktop: [
        new URL("../images/igor4-desktop-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/igor4-desktop-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/igor4-desktop-3x.jpg", import.meta.url).href + " 3x"
      ], 
      tablet: [
        new URL("../images/igor4-tablet-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/igor4-tablet-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/igor4-tablet-3x.jpg", import.meta.url).href + " 3x"
      ],
      mobile: [
        new URL("../images/igor4-mobile-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/igor4-mobile-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/igor4-mobile-3x.jpg", import.meta.url).href + " 3x"
      ],
      default: new URL("../images/igor4-mobile-1x.jpg", import.meta.url).href,
    },
    icons: [
      new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
      new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
      new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
      new URL("../images/symboldefs.svg#linkedin", import.meta.url).href,
    ],
  },
  {
    name: "Ольга Рєпіна-4",
    position: "Frontend Developer-4",
    images: {
      desktop: [
        new URL("../images/olga4-desktop-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/olga4-desktop-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/olga4-desktop-3x.jpg", import.meta.url).href + " 3x"
      ],
      tablet: [
        new URL("../images/olga4-tablet-1x.jpg", import.meta.url).href + " 1x,", 
        new URL("../images/olga4-tablet-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/olga4-tablet-3x.jpg", import.meta.url).href + " 3x"
      ],
      mobile: [
        new URL("../images/olga4-mobile-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/olga4-mobile-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/olga4-mobile-3x.jpg", import.meta.url).href + " 3x"
      ],
      default: new URL("../images/olga4-mobile-1x.jpg", import.meta.url).href ,
    },
    icons: [
      new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
      new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
      new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
      new URL("../images/symboldefs.svg#linkedin", import.meta.url).href,
    ],
  },
  {
    name: "Микола Тарасов-4",
    position: "Marketing-4",
    images: {
      desktop: [
        new URL("../images/mykola4-desktop-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/mykola4-desktop-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/mykola4-desktop-3x.jpg", import.meta.url).href + " 3x"
      ],
      tablet: [
        new URL("../images/mykola4-tablet-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/mykola4-tablet-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/mykola4-tablet-3x.jpg", import.meta.url).href + " 3x"
      ],
      mobile: [
        new URL("../images/mykola4-mobile-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/mykola4-mobile-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/mykola4-mobile-3x.jpg", import.meta.url).href + " 3x"
      ],
      default: new URL("../images/mykola4-mobile-1x.jpg", import.meta.url).href,
    },
    icons: [
      new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
      new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
      new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
      new URL("../images/symboldefs.svg#linkedin", import.meta.url).href,
    ],
  },
  {
    name: "Михайло Єрмаков-4",
    position: "UI Designer-4",
    images: {
      desktop: [
        new URL("../images/muhailo4-desktop-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/muhailo4-desktop-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/muhailo4-desktop-3x.jpg", import.meta.url).href + " 3x"
      ],
      tablet: [
        new URL("../images/muhailo4-tablet-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/muhailo4-tablet-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/muhailo4-tablet-3x.jpg", import.meta.url).href + " 3x"
      ],
      mobile: [
        new URL("../images/muhailo4-mobile-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/muhailo4-mobile-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/muhailo4-mobile-3x.jpg", import.meta.url).href + " 3x"
      ],
      default: new URL("../images/muhailo4-mobile-1x.jpg", import.meta.url).href,
    },
    icons: [
      new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
      new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
      new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
      new URL("../images/symboldefs.svg#linkedin", import.meta.url).href,
    ],
  },
      {
    name: "Ігор Дем'яненко-5",
    position: "Product Designer-5",
    images: {
      desktop: [
        new URL("../images/igor5-desktop-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/igor5-desktop-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/igor5-desktop-3x.jpg", import.meta.url).href + " 3x"
      ], 
      tablet: [
        new URL("../images/igor5-tablet-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/igor5-tablet-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/igor5-tablet-3x.jpg", import.meta.url).href + " 3x"
      ],
      mobile: [
        new URL("../images/igor5-mobile-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/igor5-mobile-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/igor5-mobile-3x.jpg", import.meta.url).href + " 3x"
      ],
      default: new URL("../images/igor5-mobile-1x.jpg", import.meta.url).href,
    },
    icons: [
      new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
      new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
      new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
      new URL("../images/symboldefs.svg#linkedin", import.meta.url).href,
    ],
  },
  {
    name: "Ольга Рєпіна-5",
    position: "Frontend Developer-5",
    images: {
      desktop: [
        new URL("../images/olga5-desktop-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/olga5-desktop-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/olga5-desktop-3x.jpg", import.meta.url).href + " 3x"
      ],
      tablet: [
        new URL("../images/olga5-tablet-1x.jpg", import.meta.url).href + " 1x,", 
        new URL("../images/olga5-tablet-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/olga5-tablet-3x.jpg", import.meta.url).href + " 3x"
      ],
      mobile: [
        new URL("../images/olga5-mobile-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/olga5-mobile-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/olga5-mobile-3x.jpg", import.meta.url).href + " 3x"
      ],
      default: new URL("../images/olga5-mobile-1x.jpg", import.meta.url).href ,
    },
    icons: [
      new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
      new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
      new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
      new URL("../images/symboldefs.svg#linkedin", import.meta.url).href,
    ],
  },
  {
    name: "Микола Тарасов-5",
    position: "Marketing-5",
    images: {
      desktop: [
        new URL("../images/mykola5-desktop-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/mykola5-desktop-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/mykola5-desktop-3x.jpg", import.meta.url).href + " 3x"
      ],
      tablet: [
        new URL("../images/mykola5-tablet-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/mykola5-tablet-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/mykola5-tablet-3x.jpg", import.meta.url).href + " 3x"
      ],
      mobile: [
        new URL("../images/mykola5-mobile-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/mykola5-mobile-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/mykola5-mobile-3x.jpg", import.meta.url).href + " 3x"
      ],
      default: new URL("../images/mykola5-mobile-1x.jpg", import.meta.url).href,
    },
    icons: [
      new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
      new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
      new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
      new URL("../images/symboldefs.svg#linkedin", import.meta.url).href,
    ],
  },
  {
    name: "Михайло Єрмаков-5",
    position: "UI Designer-5",
    images: {
      desktop: [
        new URL("../images/muhailo5-desktop-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/muhailo5-desktop-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/muhailo5-desktop-3x.jpg", import.meta.url).href + " 3x"
      ],
      tablet: [
        new URL("../images/muhailo5-tablet-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/muhailo5-tablet-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/muhailo5-tablet-3x.jpg", import.meta.url).href + " 3x"
      ],
      mobile: [
        new URL("../images/muhailo5-mobile-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/muhailo5-mobile-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/muhailo5-mobile-3x.jpg", import.meta.url).href + " 3x"
      ],
      default: new URL("../images/muhailo5-mobile-1x.jpg", import.meta.url).href,
    },
    icons: [
      new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
      new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
      new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
      new URL("../images/symboldefs.svg#linkedin", import.meta.url).href,
    ],
  },
]

// Перевірка: чи всі дані готові
console.log("Масив розробників перед localStorage:", dataDevelopersList);
//! Зберігаємо у localStorage dataDevelopersList
//? умова: якщо localStarage пустий, то додаємо базовий об'єкт dataDevelopersList
if(localStorage.getItem("dataDevelopers") === null){
localStorage.setItem("dataDevelopers", JSON.stringify(dataDevelopersList));
console.log("localStorage.getItem(dataDevelopers):",localStorage.getItem("dataDevelopers"));
}
console.log("localStorage.getItem(dataDevelopers):",localStorage.getItem("dataDevelopers"));
console.log("Дані збережено у localStorage");

//! забираємо дані в dataDevelopersList з localStorage
dataDevelopersList = JSON.parse(localStorage.getItem("dataDevelopers"));
console.log("dataDevelopersList:",dataDevelopersList);

//! генеруємо HTML за допомогою Handlebars
const template = Handlebars.compile(developerTemplate);

const markup = dataDevelopersList
  .map(item => template(item))
  .join("");
console.log(" markup:", markup);
developersList.innerHTML = markup;
lazySizes.loader.checkElems();