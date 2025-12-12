console.log(
    '%c Додаємо/Редагуємо/Видаляємо розробників в секції "Наша команда" ',
    'color: white; background-color: #D33F49',
);
// localStorage.getItem("dataDevelopers")
//! 1.1 Взяти з localStorage дані які вже у нас є! 
//! 1.2 Перетворити дані, які ми взяли з LocalStorage на масив об'єктів
//! 1.3 Записати це в якусь зміну
let dataDevelopersList = JSON.parse(localStorage.getItem("dataDevelopers"));
console.log("dataDevelopersList:",dataDevelopersList);
//! 2.1 Пошук всіх необхідних елементів
const developersList = document.querySelector(".our-developers-list");
// console.log("developersList:",developersList);
const addDeveloperButton = document.querySelector(".our-developers__button");
// console.log("addDeveloperButton:",addDeveloperButton);
const formTitle = document.querySelector(".form-add-edit-developer__title");
// console.log("formTitle:",formTitle);
const modalAddEditDeveloper = document.querySelector("[data-modal-add-edit-developer]");
// console.log("modalAddEditDeveloper:",modalAddEditDeveloper);
//! 2.2 Змінні для поточної роботи
//! 3 надати слухачів подій
addDeveloperButton.addEventListener("click", addDeveloper);
//! 4 блок функцій 
function addDeveloper(){
console.log("додаємо нового розробника")
//! 4.1.1 заміна контенту заголовка модального вікна
formTitle.textContent = "Додати розробника"
//! 4.1.2 відкриття модального вікна з формою для збирання даних
toggleModalAddEditDeveloper()
//! 4.1.3 зібрати дані з форми по кнопці "submit" і записати ці дані в об'єкт 
//! 4.1.4 стягнути найсвіжіші дані з LocalStorage в масив об'єктів всіх користувачів
//! 4.1.5 додати цей об'єкт в масів об'єктів всіх користувачів
//! 4.1.6 закрити модальне вікно з формою для збирання даних 
//! 4.1.7 зберегти змінені дані в LocalStorage
};

//! відкривання/закривання модального вікна для додавання/редагування розробника
function toggleModalAddEditDeveloper(){
    console.log("відкривання/закривання модального вікна для додавання/редагування розробника");
    modalAddEditDeveloper.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
}