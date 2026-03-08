console.log(
  '%c Додаємо / Редагуємо / Видаляємо розробників (VARIANT INDEX)',
  'color: white; background-color: #D33F49'
);

//! 1️⃣ ЗМІННІ ДАНИХ

let dataDevelopersList = JSON.parse(localStorage.getItem("dataDevelopers"));
let currentDeveloperIndex = null;


//! 2️⃣ ПОШУК DOM-ЕЛЕМЕНТІВ

const developersList = document.querySelector(".our-developers-list");
const addDeveloperButton = document.querySelector(".our-developers__button");

const modalAddEditDeveloper = document.querySelector("[data-modal-add-edit-developer]");
const formAddEditDeveloper = document.querySelector(".form-add-edit-developer");

const formTitle = document.querySelector(".form-add-edit-developer__title");
const buttonSubmitDeveloper = document.querySelector(".form-add-edit-developer__button-submit");
const buttonDeleteDeveloper = document.querySelector(".modal-add-edit-developer__button-delete");
const buttonCancelDeveloper = document.getElementById("button-cancel");

const inputDeveloperName = document.querySelector(".form-add-edit-developer__input-developer-name");
const inputDeveloperPosition = document.querySelector(".form-add-edit-developer__input-developer-position");
const imgFormDeveloper = document.querySelector(".form-add-edit-developer__img");

const developersImages = document.querySelectorAll("#img-developer");


const confirmModal = document.querySelector('[data-modal-confirm-delete]');
const confirmDevName = document.getElementById('confirm-dev-name');
const confirmYesBtn = document.getElementById('confirm-delete-yes');
const confirmNoBtn = document.getElementById('confirm-delete-no');


  //! 3️⃣ СЛУХАЧІ ПОДІЙ

addDeveloperButton.addEventListener("click", openAddDeveloperModal);
formAddEditDeveloper.addEventListener("submit", submitAddEditDeveloperForm);
buttonCancelDeveloper.addEventListener("click", closeAddEditModal);

developersImages.forEach((element) => {
  element.addEventListener("click", openEditDeveloperModal);
});

buttonDeleteDeveloper.addEventListener("click", openConfirmModal);
confirmYesBtn.addEventListener("click", deleteDeveloperByIndex);
confirmNoBtn.addEventListener("click", closeConfirmModal);


  //! 4️⃣ ФУНКЦІЇ


//! ДОДАВАННЯ 
function openAddDeveloperModal() {
  formTitle.textContent = "Додати розробника";
  buttonSubmitDeveloper.textContent = "Додати";
  buttonDeleteDeveloper.style.display = "none";

  inputDeveloperName.value = "";
  inputDeveloperPosition.value = "";

  toggleAddEditModal();
}

//! РЕДАГУВАННЯ 
function openEditDeveloperModal(event) {
  formTitle.textContent = "Редагування розробника";
  buttonSubmitDeveloper.textContent = "Редагувати";
  buttonDeleteDeveloper.style.display = "block";

  dataDevelopersList = JSON.parse(localStorage.getItem("dataDevelopers"));

  currentDeveloperIndex = dataDevelopersList.findIndex(
    developer => developer.name === event.target.alt
  );

  const developer = dataDevelopersList[currentDeveloperIndex];

  inputDeveloperName.value = developer.name;
  inputDeveloperPosition.value = developer.position;
  imgFormDeveloper.src = developer.images.default;

  toggleAddEditModal();
}

//! SUBMIT 
function submitAddEditDeveloperForm(event) {
  dataDevelopersList = JSON.parse(localStorage.getItem("dataDevelopers"));

  if (buttonSubmitDeveloper.textContent === "Додати") {
    const newDeveloper = {
      name: inputDeveloperName.value,
      position: inputDeveloperPosition.value,
      images: {
        default: imgFormDeveloper.src,
      },
    };

    dataDevelopersList.push(newDeveloper);
  }

  if (buttonSubmitDeveloper.textContent === "Редагувати") {
    dataDevelopersList[currentDeveloperIndex].name =
      inputDeveloperName.value;

    dataDevelopersList[currentDeveloperIndex].position =
      inputDeveloperPosition.value;
  }

  localStorage.setItem(
    "dataDevelopers",
    JSON.stringify(dataDevelopersList, null, 2)
  );

  toggleAddEditModal();
}

//! ВИДАЛЕННЯ
function deleteDeveloperByIndex() {
  dataDevelopersList = JSON.parse(localStorage.getItem("dataDevelopers"));

  dataDevelopersList.splice(currentDeveloperIndex, 1);

  localStorage.setItem(
    "dataDevelopers",
    JSON.stringify(dataDevelopersList, null, 2)
  );

  closeConfirmModal();
  toggleAddEditModal();
  location.reload();
}

//! MODALS 
function toggleAddEditModal() {
  modalAddEditDeveloper.classList.toggle("is-hidden");
  document.body.classList.toggle("no-scroll");
}

function closeAddEditModal() {
  toggleAddEditModal();
}

function openConfirmModal(event) {
  event.preventDefault();
  confirmDevName.textContent =
    dataDevelopersList[currentDeveloperIndex].name;

  confirmModal.classList.remove("is-hidden");
  document.body.classList.add("no-scroll");
}

function closeConfirmModal() {
  confirmModal.classList.add("is-hidden");
  document.body.classList.remove("no-scroll");
}


//! 1. При стовренні нової картки розробника, має бути дата та час створення картки розробника(для старих карток НЕПОТРІБНО)
//! 1.1 При створенні картки в об'єкт треба додати нову властивість (data), яка буде зберігати поточну дати
//! 1.2 треба додати в розмітку нову властивість (data) 
//! 1.3 Стилізувати властивість data за допомогою абсолютного позицінування таким чином, щоб розмір картки розробника не змінювався
