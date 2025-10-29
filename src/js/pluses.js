import Handlebars from "handlebars";
import plusesData from "../data/pluses.json";
import templatePluses from "../templates/pluses.hbs?raw";

const ul = document.querySelector(".our-pluses-list");
const template = Handlebars.compile(templatePluses);

const html = plusesData.map(item => template(item)).join("");
ul.innerHTML = html;

