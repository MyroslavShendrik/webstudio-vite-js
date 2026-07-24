const socialLinks = [
  { id: "instagram", url: "https://instagram.com" },
  { id: "twitter", url: "https://twitter.com" },
  { id: "facebook", url: "https://facebook.com" },
  { id: "linkedin", url: "https://linkedin.com" },
];

const spritePath = "/images/symboldefs.svg";

const followList = document.querySelector(".follow-list");

followList.insertAdjacentHTML(
  "beforeend",
  socialLinks
    .map(
      ({ id, url }) => `
        <li class="follow-list__item">
          <a
            class="follow-list__link"
            href="${url}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="20" height="20">
              <use href="${spritePath}#${id}"></use>
            </svg>
          </a>
        </li>
      `
    )
    .join("")
);