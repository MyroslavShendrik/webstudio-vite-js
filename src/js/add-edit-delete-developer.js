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
const addDeveloperButton = documet.querySelector(".our-developers__button");
//! 5 Змінні для поточної роботи
//! 6 надати слухачів подій
//! 7 блок функцій 