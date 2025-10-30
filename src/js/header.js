import Handlebars from "handlebars";
import headerData from "../data/header-links.json";
import headerItemTemplate from "../templates/header-list.hbs?raw";

const headerList = document.querySelector(".header-list");

const template = Handlebars.compile(headerItemTemplate);
const markup = template(headerData);

headerList.innerHTML = markup;
