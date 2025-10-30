import Handlebars from "handlebars";
import companyData from "../data/company-list.json";
import companyTemplate from "../templates/company-item.hbs?raw";

const companyList = document.querySelector(".company-list");

const template = Handlebars.compile(companyTemplate);
const markup = template(companyData);

companyList.innerHTML = markup;
