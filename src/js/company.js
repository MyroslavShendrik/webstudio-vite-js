// import Handlebars from "handlebars";
// import companyData from "../data/company-list.json";
// import companyTemplate from "../templates/company-item.hbs?raw";
// const template = Handlebars.compile(companyTemplate);
// const markup = template(companyData);

// companyList.innerHTML = markup;
const companyList = document.querySelector(".company-list");


const dataCompanyList = [
  {
    width: 41,
    height: 46,
    href: new URL("/images/symboldefs.svg#company1", import.meta.url).href,
  },
  {
    width: 41,
    height: 46,
    href: new URL("/images/symboldefs.svg#company2", import.meta.url).href,
  },
  {
    width: 41,
    height: 46,
    href: new URL("/images/symboldefs.svg#company3", import.meta.url).href,
  },
  {
    width: 93,
    height: 43,
    href: new URL("/images/symboldefs.svg#company4", import.meta.url).href,
  },
  {
    width: 69,
    height: 43,
    href: new URL("/images/symboldefs.svg#company5", import.meta.url).href,
  },
  {
    width: 62,
    height: 45,
    href: new URL("/images/symboldefs.svg#company6", import.meta.url).href,
  },
];

// ✅ Генеруємо HTML-розмітку
const markup = dataCompanyList
  .map(
    (item) => `
      <li class="company-list__item">
        <a class="company-list__link" href="#">
          <svg width="${item.width}" height="${item.height}">
            <use href="${item.href}"></use>
          </svg>
        </a>
      </li>
    `
  )
  .join("");

// ✅ Вставляємо у DOM
companyList.innerHTML = markup;
