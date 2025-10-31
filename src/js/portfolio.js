import Handlebars from "handlebars";
import portfolioData from "../data/portfolio.json";
import portfolioTemplate from "../templates/portfolio-item.hbs?raw";

const portfolioList = document.querySelector(".portfolio-list");
const template = Handlebars.compile(portfolioTemplate);

const markup = portfolioData.map(item => template(item)).join('');

portfolioList.innerHTML = markup;
