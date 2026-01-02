
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
const buttonDeleteDeveloper = document.querySelector(".modal-add-edit-developer__button-delete");
// console.log("buttonDeleteDeveloper:",buttonDeleteDeveloper);
const formAddEditDeveloper = document.querySelector(".form-add-edit-developer");  
const buttonCancelDeveloper = document.getElementById("button-cancel");
const imgDeveloper = document.querySelectorAll("#img-developer");
// console.log("imgDeveloper:",imgDeveloper);
const buttonSumbitDeveloper = document.querySelector(".form-add-edit-developer__button-submit");
// console.log("buttonSumbitDeveloper:",buttonSumbitDeveloper);
const imgFormDeveloper = document.querySelector(".form-add-edit-developer__img")
console.log("imgFormDeveloper:",imgFormDeveloper);
const inputDeveloperName = document.querySelector(".form-add-edit-developer__input-developer-name");
const inputDeveloperPosition = document.querySelector(".form-add-edit-developer__input-developer-position");

//! 2.2 Змінні для поточної роботи
//! 3 надати слухачів подій
addDeveloperButton.addEventListener("click", addDeveloper);
formAddEditDeveloper.addEventListener("submit", sumbitModalAddEditDeveloper);
buttonCancelDeveloper.addEventListener("click", closeModal);
imgDeveloper.forEach((img) => {
  img.addEventListener("click", editDeleteDeveloper)
  console.log("click on:", img);
});


// imgDeveloper.addEventListener("click", editDeleteDeveloper);
//! 4 блок функцій 
//! Додає розробника
function addDeveloper(){
console.log("додаємо нового розробника")
//! 4.1.1 заміна контенту заголовка модального вікна, приховуємо зайві елементи
formTitle.textContent = "Додати розробника";
buttonSumbitDeveloper.textContent ="Додати"
buttonDeleteDeveloper.style.display = 'none';

//! 4.1.2 відкриття модального вікна з формою для збирання даних
toggleModalAddEditDeveloper() 
};
//! редагує розробника 
function editDeleteDeveloper(event){
  console.log("Вікно редагування")
  //! 4.1.1 заміна контенту заголовка модального вікна, відкриваємо необхідні елементи
  formTitle.textContent = "Редагування розробника";
  buttonSumbitDeveloper.textContent ="Редагувати"
  buttonDeleteDeveloper.style.display = 'block';
  //! при натисканні на розробника треба, щоб підставлялось його зображення
  // imgFormDeveloper.src = event.currentTarget.src;//! тут у нас помилка
  // imgFormDeveloper.src = event.target.currentSrc;
  console.log("event.currentTarget:",event.target.currentTarget);
  console.log("typyof imgFormDeveloper:",typeof imgFormDeveloper);
  //! стратегічна задача (що робимо?)
  //! 1. зробити однаковим розміри зображення в модальному вікні 
  //! 2. підлаштувати розмір зобрадення таким чином, щоб модальне вікно віповідало висоті екрана
  //? тактична задача var1 (як робимо?)
  //? 1. змінити в файлі scss стилізації модального вікна. Зображення та його властивість width, так щоб вона підходила всім версткам стилізації
  //todo тактична задача var2 (як робимо?)
  //todo забираємо дані з localStorage в dataDevelopersList
  dataDevelopersList = JSON.parse(localStorage.getItem("dataDevelopers"));
  console.log("dataDevelopersList:", dataDevelopersList);
  //todo знайти об'єкт з яким треба взаємодіяти при кліку на кнопці редагування
  //todo alt та p можна знайти об'єкт за допомогою значення alt порівнюючи з name
    console.log("event.target:", event.target)
    console.log("event.target.alt:",event.target.alt)
    console.log("event.target.name:",event.target.name)
    //todo знайти в масиві об'єктів об'єкт на якому відбулася дія  за допомогою порівняння event.target.alt з властивістю об'єкта name
    console.log("event.currentTarget:",event.currentTarget);
  //todo після того як  ми знайшли об'єкт розробника використати 3 властивості (name, position, default) 
  //todo потім ці дані підставити в відповідні поля форми редагування
  const editableDeveloper = dataDevelopersList.find(
    developer => developer.name === event.target.alt
  );


  inputDeveloperName.value = editableDeveloper.name;
  inputDeveloperPosition.value = editableDeveloper.position;
  imgFormDeveloper.src = editableDeveloper.images.default;
  toggleModalAddEditDeveloper() 
}
//! Закривання модально вікна при стоворенні нового розробника 
function closeModal() {
  toggleModalAddEditDeveloper();
}

//! відкривання/закривання модального вікна для додавання/редагування розробника
function toggleModalAddEditDeveloper(){
    console.log("відкривання/закривання модального вікна для додавання/редагування розробника");
    modalAddEditDeveloper.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");

};
//! підтвердження даних в формі модальних  вікон ДОДАТИ/РЕДАГУВАТИ 
function sumbitModalAddEditDeveloper(event){
//! блокуємо перезавантаження сторінки 
    // event.preventDefault(); //! НЕ  блокуємо перезавантаження сторінки 
//! 4.3.1 стягнути найсвіжіші дані з LocalStorage в масив об'єктів всіх користувачів
dataDevelopersList = JSON.parse(localStorage.getItem("dataDevelopers"));
if (buttonSumbitDeveloper.textContent === "Додати"){
  const developerObject = {
name: formAddEditDeveloper.developerName.value,
position: formAddEditDeveloper.developerPosition.value,
images: {
      desktop: [
        new URL("../images/sample-desktop-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/sample-desktop-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/sample-desktop-3x.jpg", import.meta.url).href + " 3x"
      ],
      tablet: [
        new URL("../images/sample-tablet-1x.jpg", import.meta.url).href + " 1x,", 
        new URL("../images/sample-tablet-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/sample-tablet-3x.jpg", import.meta.url).href + " 3x"
      ],
      mobile: [
        new URL("../images/sample-mobile-1x.jpg", import.meta.url).href + " 1x,",
        new URL("../images/sample-mobile-2x.jpg", import.meta.url).href + " 2x,",
        new URL("../images/sample-mobile-3x.jpg", import.meta.url).href + " 3x"
      ],
      default: new URL("../images/sample-mobile-1x.jpg", import.meta.url).href ,
    },
    icons: [
      new URL("../images/symboldefs.svg#instagram", import.meta.url).href,
      new URL("../images/symboldefs.svg#twitter", import.meta.url).href,
      new URL("../images/symboldefs.svg#facebook", import.meta.url).href,
      new URL("../images/symboldefs.svg#linkedin", import.meta.url).href,
    ],
};

console.log("developerObject:", developerObject);
//! 4.3.3 додаємо новий об'єкт до масиву об'єктів
dataDevelopersList.push(developerObject);
console.log("ПІСЛЯ  dataDevelopersList:", dataDevelopersList);
//! 4.3.4 зберегти змінені дані в LocalStorage
 localStorage.setItem("dataDevelopers", JSON.stringify(dataDevelopersList, null, 2));
}
if(buttonSumbitDeveloper.textContent === "Редагувати"){
//! збираємо дані з форми 
}
console.log("ДО dataDevelopersList:", dataDevelopersList);
//! 4.3.4 зберегти змінені дані в LocalStorage
 localStorage.setItem("dataDevelopers", JSON.stringify(dataDevelopersList, null, 2));

 //! 4.3.5 закрити модальне вікно з формою для збирання даних
 toggleModalAddEditDeveloper()
}
