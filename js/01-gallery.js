import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const createGallery = galleryItems.map(img => {
    return `
    <div class="gallery__item">
       <a class="gallery__link" href="${img.original}">
       <img
       class="gallery__image"
       src="${img.preview}"
       data-source="${img.original}"
       alt="${img.description}"
        />
        </a>
        </div>`;
        
}).join("")
gallery.insertAdjacentHTML('beforeend', createGallery);
gallery.addEventListener('click',showGallery)


function showGallery(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }

    const tremendousImg = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600" />`,{
        onShow: instance => {
            document.onkeydown = function (evt) {
                evt.preventDefault();
                if (evt.code === 'Escape') {
                    instance.close();
                }
            }
        }
    });
    tremendousImg.show()
    console.log(event.target.dataset.source);
};



console.log(galleryItems);

console.log(gallery);