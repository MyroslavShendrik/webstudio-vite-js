import Handlebars from "handlebars";
import footerData from "../data/footer-address.json";
import footerTemplate from "../templates/footer-address-item.hbs?raw";

const footerList = document.querySelector(".footer-address-list");
console.log("footerList:", footerList);
const template = Handlebars.compile(footerTemplate);
const markup = template(footerData);

footerList.innerHTML = markup;
