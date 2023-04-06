// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const gallerySpace = document.querySelector('.gallery');

const markup = (function () {
    const newMarkup = galleryItems.map(item =>
        `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt='${item.description}' title ='${item.description}' />
   </a>
</li>`)
    return newMarkup
})().join('');

gallerySpace.innerHTML = markup

const lightBox = new SimpleLightbox('.gallery a', {captionDelay:	250});
// console.log(galleryItems);
