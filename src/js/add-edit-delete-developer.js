//! по натиску на кнопку додати розробника: 
//! 1. Сформувати зміну в яку покладемо об'єкт з новими даними розробника 
//! 2.використати метод POST, щоб додати новий об'єкт на JSON сервер 
//? const newAlbum = {
//?   userId: 1,
//?   title: "My new album"
//? };

//? fetch(`${BASE_URL}/${EndPoint}`, {
//?   method: "POST",
//?   body: JSON.stringify(newAlbum),
//?   headers: {
//?     "Content-Type": "application/json; charset=UTF-8"
//?   }
//? })
//?   .then(res => res.json())
//?   .then(data => console.log("POST:", data))
//?   .catch(err => console.log(err));
console.log(
  '%c Додаємо/Редагуємо/Видаляємо розробників в секції "Наша команда"',
  'color: white; background-color: #D33F49'
);

//! 1️⃣ Дані
const BASEURL = "http://localhost:3000/"
const EndPoint = "developers"
const url =`${BASEURL}${EndPoint}`
console.log("url:",url);
// let dataDevelopersList = JSON.parse(localStorage.getItem("dataDevelopers")) || [];
let currentDeveloperName = "";
let dataDevelopersList = null;
let editableDeveloper = "";
//*: NEW
//! Зчитуємо дані з json-server та зберігаємо їх в Масив Об'єктів: dataDevelopersList
function fetchAllDevelopers(){
  return fetch(url)
  .then(res => res.json())
  .then(data => dataDevelopersList = data);
}
fetchAllDevelopers()
console.log("dataDevelopersList:",dataDevelopersList);
//! 2️⃣ Пошук DOM
const developersList = document.querySelector(".our-developers-list");
const addDeveloperButton = document.querySelector(".our-developers__button");
console.log(addDeveloperButton);
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
console.log("Натиснули Додати");
  editableDeveloper = null;
  currentDeveloperName = "";

  formTitle.textContent = "Додати розробника";
  buttonSubmitDeveloper.textContent = "Додати";
  buttonDeleteDeveloper.style.display = "none";

  inputDeveloperName.value = "";
  inputDeveloperPosition.value = "";
  imgFormDeveloper.src = "/images/default.jpg";

  toggleModalAddEditDeveloper();
}


//! РЕДАГУВАННЯ
function editDeleteDeveloper(event) {

  formTitle.textContent = "Редагування розробника";
  buttonSubmitDeveloper.textContent = "Редагувати";
  buttonDeleteDeveloper.style.display = "block";

  // dataDevelopersList = JSON.parse(localStorage.getItem("dataDevelopers"));
  console.log("dataDevelopersList:",dataDevelopersList);
   editableDeveloper = dataDevelopersList.find(
    developer => developer.name === event.target.alt
  );
  console.log("об'єкт, що редагується:",editableDeveloper);
  currentDeveloperName = editableDeveloper.name;

  inputDeveloperName.value = editableDeveloper.name;
  inputDeveloperPosition.value = editableDeveloper.position;

  imgFormDeveloper.src = editableDeveloper.images.default;

  toggleModalAddEditDeveloper();
}


//! ВИДАЛЕННЯ
async function deleteDeveloper() {
  try {
    const developerId = editableDeveloper.id;

    console.log("DELETE:", `${url}/${developerId}`);

    const response = await fetch(`${url}/${developerId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Помилка видалення: ${response.status}`);
    }

closeConfirmModal();
closeModal();
await fetchAllDevelopers();
location.reload();

  } catch (error) {
    console.error(error);
    alert("Не вдалося видалити розробника.");
  }
}


//! SUBMIT ФОРМИ
function submitModalAddEditDeveloper(event) {

  // event.preventDefault(); //! скасовує перезавантеження сторінки 

  // dataDevelopersList = JSON.parse(localStorage.getItem("dataDevelopers"));

if (buttonSubmitDeveloper.textContent === "Додати") {
//todo OLD 
  // const developerObject = {
  //   name: inputDeveloperName.value,
  //   position: inputDeveloperPosition.value,
  //   images: {
  //     default:
  //       imgFormDeveloper.getAttribute("src") ||
  //       "./images/developers/default.jpg"
  //   },
  //   icons: [
  //     "/webstudio-vite-js/images/symboldefs.svg#instagram",
  //     "/webstudio-vite-js/images/symboldefs.svg#twitter",
  //     "/webstudio-vite-js/images/symboldefs.svg#facebook",
  //     "/webstudio-vite-js/images/symboldefs.svg#linkedin"
  //   ],
  //   date: new Date().toLocaleString()
  // };
  //* NEW
  const requestBody = {
    name: inputDeveloperName.value,
    position: inputDeveloperPosition.value,
    images: {
      desktop: [
        "images/sample-desktop-1x.jpg 1x,",
        "images/sample-desktop-2x.jpg 2x,",
        "images/sample-desktop-3x.jpg 3x"
      ],
      tablet: [
        "images/sample-tablet-1x.jpg 1x,",
        "images/sample-tablet-2x.jpg 2x,",
        "images/sample-tablet-3x.jpg 3x"
      ],
      mobile: [
        "images/sample-mobile-1x.jpg 1x,",
        "images/sample-mobile-2x.jpg 2x,",
        "images/sample-mobile-3x.jpg 3x"
      ],
      default: "images/sample-mobile-1x.jpg"
    },
    icons: [
      "images/symboldefs.svg#instagram",
      "images/symboldefs.svg#twitter",
      "images/symboldefs.svg#facebook",
      "images/symboldefs.svg#linkedin"
    ],
    date: new Date().toLocaleString()
  }
  console.log("requestBody:",requestBody);
//! ================= CREATE (POST) =================
fetch(url, {
  method: "POST",
  body: JSON.stringify(requestBody),
  headers: {
    "Content-Type": "application/json; charset=UTF-8"
  }
})
  .then(res => res.json())
  .then(data => console.log("POST:", data))
  .catch(err => console.log(err));
}
//! мій код з помилкою 
//   fetch(url, {
//     method: "POST",
//     body: JSON.stringify(developerObject),
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8"
//     }
//   })
//     .then(res => res.json())
//     .then(data => {

//       console.log("POST:", data);

//       fetch(url)
//         .then(res => res.json())
//         .then(data => {
//           dataDevelopersList = data;
//         });

//     })
//     .catch(err => console.log(err));
// }


  if (buttonSubmitDeveloper.textContent === "Редагувати") {
 console.log("dataDevelopersList:",dataDevelopersList);
     editableDeveloper = dataDevelopersList.find(
      developer => developer.name === currentDeveloperName
    );
 console.log("editableDeveloper:",editableDeveloper)
    editableDeveloper.name = inputDeveloperName.value;

    editableDeveloper.position = inputDeveloperPosition.value;

    //! ⭐ ФІКС КАРТИНКИ
    editableDeveloper.images.default = imgFormDeveloper.src;

  }

//todo OLD
  // localStorage.setItem(
  //   "dataDevelopers",
  //   JSON.stringify(dataDevelopersList, null, 2)
  // );
//* NEW 
//! ================= UPDATE (PUT) =================
console.log("editableDeveloper:",editableDeveloper)
let developerId = editableDeveloper.id;
console.log("developerId:",developerId);

//! ================= UPDATE (PATCH) =================
const requestBody = {
  name: inputDeveloperName.value,
  position:inputDeveloperPosition.value,
};

fetch(`${url}/${developerId}`, {
  method: "PATCH",
  body: JSON.stringify(requestBody),
  headers: {
    "Content-Type": "application/json; charset=UTF-8"
  }
})
  .then(res => res.json())
  .then(data => console.log("PATCH:", data))
  .catch(err => console.log(err));
  toggleModalAddEditDeveloper();
}


//! MODAL

function toggleModalAddEditDeveloper() {
  modalAddEditDeveloper.classList.toggle("is-hidden");
  document.body.classList.toggle("no-scroll");
}


//! CONFIRM DELETE

function openConfirmModal(event) {

  event.preventDefault();

  confirmDevName.textContent = currentDeveloperName;

  confirmModal.classList.remove("is-hidden");
  document.body.classList.add("no-scroll");

}


function closeConfirmModal() {
  confirmModal.classList.add("is-hidden");
}

function closeModal() {
  inputDeveloperName.value = "";
  inputDeveloperPosition.value = "";
  imgFormDeveloper.src = "/images/default.jpg";

  editableDeveloper = null;
  currentDeveloperName = "";

  toggleModalAddEditDeveloper();
}