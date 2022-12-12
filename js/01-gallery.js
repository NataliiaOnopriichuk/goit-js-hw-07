import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divEl = document.querySelector(".gallery");

divEl.addEventListener("click", onImageOriginal);

const galleryItemsElem = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`;
  })
  .join("");

divEl.innerHTML = galleryItemsElem;

function onImageOriginal(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
		<img src="${event.target.dataset.source}" width='800' height='600'>
	`
  );
  instance.show();

  divEl.addEventListener(
    "keydown",
    (event) => {
      if (event.code === "Escape") {
        instance.close();
      }
    },
    { once: true }
  );
}
