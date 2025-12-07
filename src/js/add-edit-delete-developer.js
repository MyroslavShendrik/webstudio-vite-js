console.log(
    '%c Додаємо/Редагуємо/Видаляємо розробників в секції "Наша команда" ',
    'color: white; background-color: #D33F49',
);
// localStorage.getItem("dataDevelopers")
//! 1.Взяти з localStorage дані які вже у нас є! 
//! 2. Перетворити дані, які ми взяли з LocalStorage на масив об'єктів
//! 3. Записати це в якусь зміну
let dataDevelopersList = JSON.parse(localStorage.getItem("dataDevelopers"));
console.log("dataDevelopersList:",dataDevelopersList);
//! 4 Пошук всіх необхідних елементів
const developersList = document.querySelector(".our-developers-list");
console.log("developersList:",developersList);
const addDeveloperButton = document.querySelector(".our-developers__button");
console.log("addDeveloperButton:",addDeveloperButton);
//! 5 Змінні для по3точної роботи
//! 6 надати слухачів подій
addDeveloperButton.addEventListener("click", addDeveloper);
//! 7 блок функцій 
function addDeveloper(){
console.log("додаємо нового розробника")
};
