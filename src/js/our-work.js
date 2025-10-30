import Handlebars from "handlebars";
import workData from "../data/our-work.json";
import workTemplate from "../templates/our-work-item.hbs?raw";

const workList = document.querySelector(".our-work-list");

const template = Handlebars.compile(workTemplate);
const markup = template(workData);

workList.innerHTML = markup;
