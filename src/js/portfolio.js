// import Handlebars from "handlebars";
// import portfolioData from "../data/portfolio.json";
// import portfolioTemplate from "../templates/portfolio-item.hbs?raw";

const portfolioList = document.querySelector(".portfolio-list");
// const template = Handlebars.compile(portfolioTemplate);

// const markup = portfolioData.map(item => template(item)).join('');

// portfolioList.innerHTML = markup;
const portfolioData = [
  {
    title: "Технокряк",
    type: "Веб-сайт",
    description: "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.",
    images: {
      desktop: [
        new URL("../images/devlaptop-desktop-1x.jpg", import.meta.url).href,
        new URL("../images/devlaptop-desktop-2x.jpg", import.meta.url).href,
        new URL("../images/devlaptop-desktop-3x.jpg", import.meta.url).href
      ],
      tablet: [
        new URL("../images/devlaptop-tablet-1x.jpg", import.meta.url).href,
        new URL("../images/devlaptop-tablet-2x.jpg", import.meta.url).href,
        new URL("../images/devlaptop-tablet-3x.jpg", import.meta.url).href
      ],
      mobile: [
        new URL("../images/devlaptop-mobile-1x.jpg", import.meta.url).href,
        new URL("../images/devlaptop-mobile-2x.jpg", import.meta.url).href,
        new URL("../images/devlaptop-mobile-3x.jpg", import.meta.url).href
      ],
      default: new URL("../images/devlaptop-mobile-1x.jpg", import.meta.url).href
    }
  },
  {
    title: "Постер New Orlean vs Golden Star",
    type: "Дизайн",
    description: "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.",
    images: {
      desktop: [
        new URL("../images/basketball-desktop-1x.jpg", import.meta.url).href,
        new URL("../images/basketball-desktop-2x.jpg", import.meta.url).href,
        new URL("../images/basketball-desktop-3x.jpg", import.meta.url).href
      ],
      tablet: [
        new URL("../images/basketball-tablet-1x.jpg", import.meta.url).href,
        new URL("../images/basketball-tablet-2x.jpg", import.meta.url).href,
        new URL("../images/basketball-tablet-3x.jpg", import.meta.url).href
      ],
      mobile: [
        new URL("../images/basketball-mobile-1x.jpg", import.meta.url).href,
        new URL("../images/basketball-mobile-2x.jpg", import.meta.url).href,
        new URL("../images/basketball-mobile-3x.jpg", import.meta.url).href
      ],
      default: new URL("../images/basketball-mobile-1x.jpg", import.meta.url).href
    }
  },
  {
    title: "Ресторан Seafood",
    type: "Додаток",
    description: "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.",
    images: {
      desktop: [
        new URL("../images/shark-desktop-1x.jpg", import.meta.url).href,
        new URL("../images/shark-desktop-2x.jpg", import.meta.url).href,
        new URL("../images/shark-desktop-3x.jpg", import.meta.url).href
      ],
      tablet: [
        new URL("../images/shark-tablet-1x.jpg", import.meta.url).href,
        new URL("../images/shark-tablet-2x.jpg", import.meta.url).href,
        new URL("../images/shark-tablet-3x.jpg", import.meta.url).href
      ],
      mobile: [
        new URL("../images/shark-mobile-1x.jpg", import.meta.url).href,
        new URL("../images/shark-mobile-2x.jpg", import.meta.url).href,
        new URL("../images/shark-mobile-3x.jpg", import.meta.url).href
      ],
      default: new URL("../images/shark-mobile-1x.jpg", import.meta.url).href
    }
  },
  {
    title: "Проєкт Prime",
    type: "Маркетинг",
    description: "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.",
    images: {
      desktop: [
        new URL("../images/headphones-desktop-1x.jpg", import.meta.url).href,
        new URL("../images/headphones-desktop-2x.jpg", import.meta.url).href,
        new URL("../images/headphones-desktop-3x.jpg", import.meta.url).href
      ],
      tablet: [
        new URL("../images/headphones-tablet-1x.jpg", import.meta.url).href,
        new URL("../images/headphones-tablet-2x.jpg", import.meta.url).href,
        new URL("../images/headphones-tablet-3x.jpg", import.meta.url).href
      ],
      mobile: [
        new URL("../images/headphones-mobile-1x.jpg", import.meta.url).href,
        new URL("../images/headphones-mobile-2x.jpg", import.meta.url).href,
        new URL("../images/headphones-mobile-3x.jpg", import.meta.url).href
      ],
      default: new URL("../images/headphones-mobile-1x.jpg", import.meta.url).href
    }
  },
  {
    title: "Проєкт Boxes",
    type: "Додаток",
    description: "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.",
    images: {
      desktop: [
        new URL("../images/box-desktop-1x.jpg", import.meta.url).href,
        new URL("../images/box-desktop-2x.jpg", import.meta.url).href,
        new URL("../images/box-desktop-3x.jpg", import.meta.url).href
      ],
      tablet: [
        new URL("../images/box-tablet-1x.jpg", import.meta.url).href,
        new URL("../images/box-tablet-2x.jpg", import.meta.url).href,
        new URL("../images/box-tablet-3x.jpg", import.meta.url).href
      ],
      mobile: [
        new URL("../images/box-mobile-1x.jpg", import.meta.url).href,
        new URL("../images/box-mobile-2x.jpg", import.meta.url).href,
        new URL("../images/box-mobile-3x.jpg", import.meta.url).href
      ],
      default: new URL("../images/box-mobile-1x.jpg", import.meta.url).href
    }
  },
  {
    title: "Inspiration has no Borders",
    type: "Веб-сайт",
    description: "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.",
    images: {
      desktop: [
        new URL("../images/monitor-desktop-1x.jpg", import.meta.url).href,
        new URL("../images/monitor-desktop-2x.jpg", import.meta.url).href,
        new URL("../images/monitor-desktop-3x.jpg", import.meta.url).href
      ],
      tablet: [
        new URL("../images/monitor-tablet-1x.jpg", import.meta.url).href,
        new URL("../images/monitor-tablet-2x.jpg", import.meta.url).href,
        new URL("../images/monitor-tablet-3x.jpg", import.meta.url).href
      ],
      mobile: [
        new URL("../images/monitor-mobile-1x.jpg", import.meta.url).href,
        new URL("../images/monitor-mobile-2x.jpg", import.meta.url).href,
        new URL("../images/monitor-mobile-3x.jpg", import.meta.url).href
      ],
      default: new URL("../images/monitor-mobile-1x.jpg", import.meta.url).href
    }
  },
  {
    title: "Видання Limited Edition",
    type: "Дизайн",
    description: "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.",
    images: {
      desktop: [
        new URL("../images/book-desktop-1x.jpg", import.meta.url).href,
        new URL("../images/book-desktop-2x.jpg", import.meta.url).href,
        new URL("../images/book-desktop-3x.jpg", import.meta.url).href
      ],
      tablet: [
        new URL("../images/book-tablet-1x.jpg", import.meta.url).href,
        new URL("../images/book-tablet-2x.jpg", import.meta.url).href,
        new URL("../images/book-tablet-3x.jpg", import.meta.url).href
      ],
      mobile: [
        new URL("../images/book-mobile-1x.jpg", import.meta.url).href,
        new URL("../images/book-mobile-2x.jpg", import.meta.url).href,
        new URL("../images/book-mobile-3x.jpg", import.meta.url).href
      ],
      default: new URL("../images/book-mobile-1x.jpg", import.meta.url).href
    }
  },
  {
    title: "Проєкт LAB",
    type: "Маркетинг",
    description: "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.",
    images: {
      desktop: [
        new URL("../images/tag-desktop-1x.jpg", import.meta.url).href,
        new URL("../images/tag-desktop-2x.jpg", import.meta.url).href,
        new URL("../images/tag-desktop-3x.jpg", import.meta.url).href
      ],
      tablet: [
        new URL("../images/tag-tablet-1x.jpg", import.meta.url).href,
        new URL("../images/tag-tablet-2x.jpg", import.meta.url).href,
        new URL("../images/tag-tablet-3x.jpg", import.meta.url).href
      ],
      mobile: [
        new URL("../images/tag-mobile-1x.jpg", import.meta.url).href,
        new URL("../images/tag-mobile-2x.jpg", import.meta.url).href,
        new URL("../images/tag-mobile-3x.jpg", import.meta.url).href
      ],
      default: new URL("../images/tag-mobile-1x.jpg", import.meta.url).href
    }
  },
  {
    title: "Growing Business",
    type: "Додаток",
    description: "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.",
    images: {
      desktop: [
        new URL("../images/laptop-desktop-1x.jpg", import.meta.url).href,
        new URL("../images/laptop-desktop-2x.jpg", import.meta.url).href,
        new URL("../images/laptop-desktop-3x.jpg", import.meta.url).href
      ],
      tablet: [
        new URL("../images/laptop-tablet-1x.jpg", import.meta.url).href,
        new URL("../images/laptop-tablet-2x.jpg", import.meta.url).href,
        new URL("../images/laptop-tablet-3x.jpg", import.meta.url).href
      ],
      mobile: [
        new URL("../images/laptop-mobile-1x.jpg", import.meta.url).href,
        new URL("../images/laptop-mobile-2x.jpg", import.meta.url).href,
        new URL("../images/laptop-mobile-3x.jpg", import.meta.url).href
      ],
      default: new URL("../images/laptop-mobile-1x.jpg", import.meta.url).href
    }
  }
];























const markup = portfolioData
  .map(item => `
    <li class="portfolio-list__item">
      <div class="portfolio-list__div">
        <picture>
          <source 
            srcset="${item.images.desktop[0]} 1x, ${item.images.desktop[1]} 2x, ${item.images.desktop[2]} 3x" 
            media="(min-width: 1200px)">
          <source 
            srcset="${item.images.tablet[0]} 1x, ${item.images.tablet[1]} 2x, ${item.images.tablet[2]} 3x" 
            media="(min-width: 768px)">
          <source 
            srcset="${item.images.mobile[0]} 1x, ${item.images.mobile[1]} 2x, ${item.images.mobile[2]} 3x" 
            media="(max-width: 767px)">
          <img class="portfolio-list__img" src="${item.images.default}" alt="${item.title}">
        </picture>
        <div class="portfolio-list__div--active">
          <p>${item.description}</p>
        </div>
      </div>
      <div class="portfolio-list__box">
        <h3 class="portfolio-list__paragraph">${item.title}</h3>
        <p class="portfolio-list__text">${item.type}</p>
      </div>
    </li>
  `)
  .join('');

// 👉 Вставляємо в DOM
portfolioList.innerHTML = markup;
