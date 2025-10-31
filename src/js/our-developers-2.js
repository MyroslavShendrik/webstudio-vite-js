console.error('Рендеримо список розробників в секції "Наша команда"');
const developersList = document.querySelector(".our-developers-list");
//!✅ Рішення-2:
import igorDesktop1x from "../images/igor-desktop-1x.jpg";
import igorDesktop2x from "../images/igor-desktop-2x.jpg";
import igorDesktop3x from "../images/igor-desktop-3x.jpg";
import igorTablet1x from "../images/igor-tablet-1x.jpg";
import igorTablet2x from "../images/igor-tablet-2x.jpg";
import igorTablet3x from "../images/igor-tablet-3x.jpg";
import igorMobile1x from "../images/igor-mobile-1x.jpg";
import igorMobile2x from "../images/igor-mobile-2x.jpg";
import igorMobile3x from "../images/igor-mobile-3x.jpg";

import iconInstagram from "../images/symboldefs.svg#instagram";
import iconTwiter from "../images/symboldefs.svg#twitter";
import iconFacebook from "../images/symboldefs.svg#facebook";
import iconLinkedin from "../images/symboldefs.svg#linkedin";

//! Дані для списку з масиву об'єктів (ПРИКЛАД з різними Рішеннями):
let dataDevelopersList = [
  {
    name: "Ігор Дем'яненко",
    position: "Product Designer",
    images: {
      desktop: [igorDesktop1x, igorDesktop2x, igorDesktop3x],
      tablet: [igorTablet1x, igorTablet2x, igorTablet3x],
      mobile: [igorMobile1x, igorMobile2x, igorMobile3x],
      default: igorMobile1x,
    },
    icons: [iconInstagram, iconTwiter, iconFacebook, iconLinkedin],
  },
  {
    name: "Ігор Дем'яненко",
    position: "Product Designer",
    images: {
      desktop: [igorDesktop1x, igorDesktop2x, igorDesktop3x],
      tablet: [igorTablet1x, igorTablet2x, igorTablet3x],
      mobile: [igorMobile1x, igorMobile2x, igorMobile3x],
      default: igorMobile1x,
    },
    icons: [iconInstagram, iconTwiter, iconFacebook, iconLinkedin],
  },
  {
    name: "Ігор Дем'яненко",
    position: "Product Designer",
    images: {
      desktop: [igorDesktop1x, igorDesktop2x, igorDesktop3x],
      tablet: [igorTablet1x, igorTablet2x, igorTablet3x],
      mobile: [igorMobile1x, igorMobile2x, igorMobile3x],
      default: igorMobile1x,
    },
    icons: [iconInstagram, iconTwiter, iconFacebook, iconLinkedin],
  },
  {
    name: "Ігор Дем'яненко",
    position: "Product Designer",
    images: {
      desktop: [igorDesktop1x, igorDesktop2x, igorDesktop3x],
      tablet: [igorTablet1x, igorTablet2x, igorTablet3x],
      mobile: [igorMobile1x, igorMobile2x, igorMobile3x],
      default: igorMobile1x,
    },
    icons: [iconInstagram, iconTwiter, iconFacebook, iconLinkedin],
  }
];

//todo: ++++++++++++++++++++++++ Розмітка без Handlebars ++++++++++++++++++++++++
const markup = dataDevelopersList
    .map(item =>
        `
            <li class="our-developers-list__item">
                <picture>
                    <source
                        srcset="
                            ${item.images.desktop[0]} 1x,
                            ${item.images.desktop[1]} 2x,
                            ${item.images.desktop[2]} 3x
                        "
                        media="(min-width: 1200px)"
                    />
                    <source
                        srcset="
                            ${item.images.tablet[0]} 1x,
                            ${item.images.tablet[1]} 2x,
                            ${item.images.tablet[2]} 3x
                        "
                        media="(min-width: 768px)"
                    />
                    <source
                        srcset="
                            ${item.images.mobile[0]} 1x,
                            ${item.images.mobile[1]} 2x,
                            ${item.images.mobile[2]} 3x
                        "
                        media="(min-width: 480px)"
                    />
                    <img
                        class="our-developers-list__img"
                        src="${item.images.default}"
                        alt="${item.name}"
                    />
                </picture>

                <p class="our-developers-list__text">${item.name}</p>
                <h4 class="our-developers-list__title">${item.position}</h4>
                <ul class="our-developers-svg-list">
                    <li class="our-developers-svg-list__item">
                        <a class="our-developers-svg-list__link" href="#">
                            <svg width="20" height="20">
                                <use href="${item.icons[0]}"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="our-developers-svg-list__item">
                        <a class="our-developers-svg-list__link" href="#">
                            <svg width="20" height="20">
                                <use href="${item.icons[1]}"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="our-developers-svg-list__item">
                        <a class="our-developers-svg-list__link" href="#">
                            <svg width="20" height="20">
                                <use href="${item.icons[2]}"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="our-developers-svg-list__item">
                        <a class="our-developers-svg-list__link" href="#">
                            <svg width="20" height="20">
                                <use href=".${item.icons[3]}"></use>
                            </svg>
                        </a>
                    </li>
                </ul>
            </li>
        `
    )
    .join("");

// ! 6️⃣Генеруємо HTML-розмітку для списку всіх розробників
console.log("6️⃣markup:", markup); //!

// ! 7️⃣Додаємо у DOM
// developersList.innerHTML = ""; //todo: var.1
// developersList.insertAdjacentHTML("beforeend", markup); //todo: var.1
developersList.innerHTML = markup; //todo: var.2



// import Handlebars from "handlebars";
// import developersData from "../data/developers-1.json";
// import developerTemplate from "../templates/our-developers-item-1.hbs?raw";
// console.log("developersData:",developersData);

// const template = Handlebars.compile(developerTemplate);

// const html = developersData
//   .map(dev => template(dev))
//   .join("");

// developersList.innerHTML = html;
