import Handlebars from "handlebars";
import buttonData from "../data/button-list.json";
import buttonTemplate from "../templates/button-item.hbs?raw";

const buttonList = document.querySelector(".button-list");

const template = Handlebars.compile(buttonTemplate);
const markup = template(buttonData);

buttonList.innerHTML = markup;
