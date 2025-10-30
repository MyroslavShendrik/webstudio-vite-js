import Handlebars from "handlebars";
console.log("Будуємо розмітку списку розробників");
const developersList = document.querySelector(".our-developers-list");
import developersData from "../data/developers-1.json";
import developerTemplate from "../templates/our-developers-item-1.hbs?raw";
console.log("developersData:",developersData);

const template = Handlebars.compile(developerTemplate);

const html = developersData
  .map(dev => template(dev))
  .join("");

developersList.innerHTML = html;
// const dataDeveloperList = [
//   {
//     name: "Ігор Дем'яненко",
//     position: "Product Designer",
//     images: {
//       desktop: [
//         "./images/igor-desktop-1x.jpg",
//         "./images/igor-desktop-2x.jpg",
//         "./images/igor-desktop-3x.jpg",
//       ],
//       tablet: [
//         "./images/igor-tablet-1x.jpg",
//         "./images/igor-tablet-2x.jpg",
//         "./images/igor-tablet-3x.jpg",
//       ],
//       mobile: [
//         "./images/igor-mobile-1x.jpg",
//         "./images/igor-mobile-2x.jpg",
//         "./images/igor-mobile-3x.jpg",
//       ],
//       default: "./images/igor-mobile-1x.jpg",
//     },
//     socials: [
//       "./images/symboldefs.svg#instagram",
//       "./images/symboldefs.svg#twitter",
//       "./images/symboldefs.svg#facebook",
//       "./images/symboldefs.svg#linkedin",
//     ],
//   },
//   {
//     name: "Ольга Рєпіна",
//     position: "Frontend Developer",
//     images: {
//       desktop: [
//         "./images/olga-desktop-1x.jpg",
//         "./images/olga-desktop-2x.jpg",
//         "./images/olga-desktop-3x.jpg",
//       ],
//       tablet: [
//         "./images/olga-tablet-1x.jpg",
//         "./images/olga-tablet-2x.jpg",
//         "./images/olga-tablet-3x.jpg",
//       ],
//       mobile: [
//         "./images/olga-mobile-1x.jpg",
//         "./images/olga-mobile-2x.jpg",
//         "./images/olga-mobile-3x.jpg",
//       ],
//       default: "./images/olga-mobile-1x.jpg",
//     },
//     socials: [
//       "./images/symboldefs.svg#instagram",
//       "./images/symboldefs.svg#twitter",
//       "./images/symboldefs.svg#facebook",
//       "./images/symboldefs.svg#linkedin",
//     ],
//   },
//   {
//     name: "Микола Тарасов",
//     position: "Marketing",
//     images: {
//       desktop: [
//         "./images/mykola-desktop-1x.jpg",
//         "./images/mykola-desktop-2x.jpg",
//         "./images/mykola-desktop-3x.jpg",
//       ],
//       tablet: [
//         "./images/mykola-tablet-1x.jpg",
//         "./images/mykola-tablet-2x.jpg",
//         "./images/mykola-tablet-3x.jpg",
//       ],
//       mobile: [
//         "./images/mykola-mobile-1x.jpg",
//         "./images/mykola-mobile-2x.jpg",
//         "./images/mykola-mobile-3x.jpg",
//       ],
//       default: "./images/mykola-mobile-1x.jpg",
//     },
//     socials: [
//       "./images/symboldefs.svg#instagram",
//       "./images/symboldefs.svg#twitter",
//       "./images/symboldefs.svg#facebook",
//       "./images/symboldefs.svg#linkedin",
//     ],
//   },
//   {
//     name: "Михайло Єрмаков",
//     position: "UI Designer",
//     images: {
//       desktop: [
//         "./images/muhailo-desktop-1x.jpg",
//         "./images/muhailo-desktop-2x.jpg",
//         "./images/muhailo-desktop-3x.jpg",
//       ],
//       tablet: [
//         "./images/muhailo-tablet-1x.jpg",
//         "./images/muhailo-tablet-2x.jpg",
//         "./images/muhailo-tablet-3x.jpg",
//       ],
//       mobile: [
//         "./images/muhailo-mobile-1x.jpg",
//         "./images/muhailo-mobile-2x.jpg",
//         "./images/muhailo-mobile-3x.jpg",
//       ],
//       default: "./images/muhailo-mobile-1x.jpg",
//     },
//     socials: [
//       "./images/symboldefs.svg#instagram",
//       "./images/symboldefs.svg#twitter",
//       "./images/symboldefs.svg#facebook",
//       "./images/symboldefs.svg#linkedin",
//     ],
//   },
// // ]; //! це масив об'єктів!
// console.log("dataDeveloperList", dataDeveloperList);
// const markup = developersData.map(
//   (developer) =>
//     `
// <li class="our-developers-list__item">
//               <picture>
//                 <source
//                 srcset="
//                 ${developer.images.desktop[0]} 1x,
//                 ${developer.images.desktop[1]} 2x,
//                 ${developer.images.desktop[2]} 3x
//                 "
//                   media="(min-width: 1200px)"
//                 />
//                 <source
//                   srcset="
//                 ${developer.images.tablet[0]} 1x,
//                 ${developer.images.tablet[1]} 2x,
//                 ${developer.images.tablet[2]} 3x
//                   "
//                   media="(min-width: 768px)"
//                 />
//                 <source
//                   srcset="
//                 ${developer.images.mobile[0]} 1x,
//                 ${developer.images.mobile[1]} 2x,
//                 ${developer.images.mobile[2]} 3x
//                 "
//                  mobile media="(min-width: 480px)"
//                 />
//                 <img
//                   class="our-developers-list__img"
//                   src="${developer.images.default}"
//                   alt="${developer.name}"
//                 />
//               </picture>

//               <p class="our-developers-list__text">${developer.name}</p>
//               <h4 class="our-developers-list__title">${developer.position}</h4>
//               <ul class="our-developers-svg-list">
//                 <li class="our-developers-svg-list__item">
//                   <a class="our-developers-svg-list__link" href="#"
//                     ><svg width="20" height="20">
//                       <use href="${developer.socials[0]}"></use></svg
//                   ></a>
//                 </li>
//                 <li class="our-developers-svg-list__item">
//                   <a class="our-developers-svg-list__link" href="#"
//                     ><svg width="20" height="20">
//                       <use href="${developer.socials[1]}"></use></svg
//                   ></a>
//                 </li>
//                 <li class="our-developers-svg-list__item">
//                   <a class="our-developers-svg-list__link" href="#"
//                     ><svg width="20" height="20">
//                       <use href="${developer.socials[2]}"></use></svg
//                   ></a>
//                 </li>
//                 <li class="our-developers-svg-list__item">
//                   <a class="our-developers-svg-list__link" href="#"
//                     ><svg width="20" height="20">
//                       <use href="${developer.socials[3]}"></use></svg
//                   ></a>
//                 </li>
//               </ul>
//             </li>
// `
// ).join("");

// // developersList.innerHTML = markup;
// developersList.insertAdjacentHTML("beforeend", markup);


