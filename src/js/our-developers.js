import Handlebars from "handlebars";
import developersData from "../data/developers.json";
import developerTemplate from "../templates/our-developers-item.hbs?raw";

const listContainer = document.querySelector(".our-developers-list");
const template = Handlebars.compile(developerTemplate);

// Генеруємо HTML для всіх розробників
const html = developersData.developers.map(dev => template(dev)).join("");

// Вставляємо у DOM
listContainer.innerHTML = html;
