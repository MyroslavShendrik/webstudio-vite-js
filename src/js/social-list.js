
const socialLinks = [
  { id: "instagram", url: "https://instagram.com" },
  { id: "twitter", url: "https://twitter.com" },
  { id: "facebook", url: "https://facebook.com" },
  { id: "linkedin", url: "https://linkedin.com" },
];


const spritePath = new URL("../images/symboldefs.svg", import.meta.url).href;

const followList = document.querySelector(".follow-list");

// Генеруємо й вставляємо <li> елементи
followList.insertAdjacentHTML(
  "beforeend",
  socialLinks
    .map(
      (item) => `
      <li class="follow-list__item">
        <a class="follow-list__link" href="${item.url}" target="_blank" rel="noopener noreferrer">
          <svg width="20" height="20">
            <use href="${spritePath}#${item.id}"></use>
          </svg>
        </a>
      </li>`
    )
    .join("")
);
