console.log(
  '%c Додаємо/Редагуємо/Видаляємо розробників в секції "Наша команда"',
  'color: white; background-color: #D33F49'
);

//! 1️⃣ Дані
let dataDevelopersList = JSON.parse(localStorage.getItem("dataDevelopers")) || [];
let currentDeveloperName = "";


//! 2️⃣ Пошук DOM
const developersList = document.querySelector(".our-developers-list");
const addDeveloperButton = document.querySelector(".our-developers__button");

const formTitle = document.querySelector(".form-add-edit-developer__title");
const modalAddEditDeveloper = document.querySelector("[data-modal-add-edit-developer]");
const buttonDeleteDeveloper = document.querySelector(".modal-add-edit-developer__button-delete");

const formAddEditDeveloper = document.querySelector(".form-add-edit-developer");
const buttonCancelDeveloper = document.getElementById("button-cancel");

const buttonSubmitDeveloper = document.querySelector(".form-add-edit-developer__button-submit");

const imgFormDeveloper = document.querySelector(".form-add-edit-developer__img");

const inputDeveloperName = document.querySelector(".form-add-edit-developer__input-developer-name");
const inputDeveloperPosition = document.querySelector(".form-add-edit-developer__input-developer-position");

const confirmModal = document.querySelector("[data-modal-confirm-delete]");
const confirmYesBtn = document.getElementById("confirm-delete-yes");
const confirmNoBtn = document.getElementById("confirm-delete-no");
const confirmDevName = document.getElementById("confirm-dev-name");


//! 3️⃣ Слухачі подій

addDeveloperButton.addEventListener("click", addDeveloper);

formAddEditDeveloper.addEventListener("submit", submitModalAddEditDeveloper);

buttonCancelDeveloper.addEventListener("click", closeModal);

developersList.addEventListener("click", function (event) {
  if (event.target.classList.contains("our-developers-list__img")) {
    editDeleteDeveloper(event);
  }
});

buttonDeleteDeveloper.addEventListener("click", openConfirmModal);

confirmNoBtn.addEventListener("click", closeConfirmModal);
confirmYesBtn.addEventListener("click", deleteDeveloper);


//! 4️⃣ Функції


//! ДОДАТИ
function addDeveloper() {

  formTitle.textContent = "Додати розробника";
  buttonSubmitDeveloper.textContent = "Додати";
  buttonDeleteDeveloper.style.display = "none";

  inputDeveloperName.value = "";
  inputDeveloperPosition.value = "";

  // imgFormDeveloper.src = "./images/default.jpg";

  toggleModalAddEditDeveloper();
}


//! РЕДАГУВАННЯ
function editDeleteDeveloper(event) {

  formTitle.textContent = "Редагування розробника";
  buttonSubmitDeveloper.textContent = "Редагувати";
  buttonDeleteDeveloper.style.display = "block";

  dataDevelopersList = JSON.parse(localStorage.getItem("dataDevelopers"));

  const editableDeveloper = dataDevelopersList.find(
    developer => developer.name === event.target.alt
  );

  currentDeveloperName = editableDeveloper.name;

  inputDeveloperName.value = editableDeveloper.name;
  inputDeveloperPosition.value = editableDeveloper.position;

  imgFormDeveloper.src = editableDeveloper.images.default;

  toggleModalAddEditDeveloper();
}


//! ВИДАЛЕННЯ
function deleteDeveloper() {

  dataDevelopersList = JSON.parse(localStorage.getItem("dataDevelopers"));

  dataDevelopersList = dataDevelopersList.filter(
    developer => developer.name !== currentDeveloperName
  );

  localStorage.setItem(
    "dataDevelopers",
    JSON.stringify(dataDevelopersList, null, 2)
  );

  toggleModalAddEditDeveloper();
  location.reload();
}


//! SUBMIT ФОРМИ
function submitModalAddEditDeveloper(event) {

  // event.preventDefault();

  dataDevelopersList = JSON.parse(localStorage.getItem("dataDevelopers"));

  if (buttonSubmitDeveloper.textContent === "Додати") {

    const developerObject = {

      name: inputDeveloperName.value,

      position: inputDeveloperPosition.value,

      images: {
        default: imgFormDeveloper.src || "./images/developers/default.jpg"
      },

      //! ⭐ НОВЕ
      date: new Date().toLocaleString()

    };

    dataDevelopersList.push(developerObject);
  }


  if (buttonSubmitDeveloper.textContent === "Редагувати") {

    const editableDeveloper = dataDevelopersList.find(
      developer => developer.name === currentDeveloperName
    );

    editableDeveloper.name = inputDeveloperName.value;

    editableDeveloper.position = inputDeveloperPosition.value;

    //! ⭐ ФІКС КАРТИНКИ
    editableDeveloper.images.default = imgFormDeveloper.src;
  }


  localStorage.setItem(
    "dataDevelopers",
    JSON.stringify(dataDevelopersList, null, 2)
  );

  toggleModalAddEditDeveloper();
}


//! MODAL

function toggleModalAddEditDeveloper() {

  modalAddEditDeveloper.classList.toggle("is-hidden");
  document.body.classList.toggle("no-scroll");

}

function closeModal() {

  toggleModalAddEditDeveloper();

}


//! CONFIRM DELETE

function openConfirmModal(event) {

  // event.preventDefault();

  confirmDevName.textContent = currentDeveloperName;

  confirmModal.classList.remove("is-hidden");
  document.body.classList.add("no-scroll");

}

function closeConfirmModal() {

  confirmModal.classList.add("is-hidden");
  document.body.classList.remove("no-scroll");

}