import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const createGallery = galleryItems.map((img) => {
    return `
    <a class="gallery__link"
    href="${img.original}">

  <img class="gallery__image"
   src="${img.preview}"
    alt="${img.description}" />
   </a>`;
}).join("");
gallery.insertAdjacentHTML("beforeend", createGallery);

new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    disableRightClick: true,
    close:false,
});
