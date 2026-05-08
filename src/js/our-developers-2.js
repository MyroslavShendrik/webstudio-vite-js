import Handlebars from "handlebars";
import developerTemplate from "../templates/our-developers-item-1.hbs?raw";
//! Логіка роботи застосунку
//! 1. При перезавантеженні застосунок звертається до бази DB та робить запит на отримання даних 
//! 2. результатом успішного запиту є масив об'єктів з усіма розробниками (20 розробників на початку)
//! 3. після отримання даних вони відмальовуються, як і раніше 
const BASEURL = "http://localhost:3000/"
const EndPoint = "developers"
const url =`${BASEURL}${EndPoint}`
console.log("url:",url);
// Знаходимо елемент для рендеру
const developersList = document.querySelector(".our-developers-list");

// function getAllDevelopers() {
//   fetchAllDevelopers()
//     .then(developers => renderPosts(developers))
//     .catch(error => console.log(error));
// }
// function fetchAllDevelopers() {
//   return fetch(url)
//     .then(res => res.json())
//     .then(data => data.results);
// }


async function fetchDevelopers() {
  try{
    const response = await fetch(url)
    const developers = await response.json()
    console.log("developers:",developers)
    
    renderDevelopers(developers)
  } catch(error){
    console.log("error:",error);
  }
}

//! генеруємо HTML за допомогою Handlebars
const template = Handlebars.compile(developerTemplate);

function renderDevelopers(developers) {
  const markup = developers.map(developer => {

    return template(developer);
  }).join("")
   console.log("markup:",markup);
   developersList.innerHTML = markup;
}

fetchDevelopers()