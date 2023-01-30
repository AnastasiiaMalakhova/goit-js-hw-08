import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const galleryImg = createGalleryImg(galleryItems);

function createGalleryImg(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
          
        />
      </a>`
    )
    .join('');
}

gallery.innerHTML = galleryImg;

new SimpleLightbox('.gallery .gallery__item', {
  captionsData: 'alt',
  fadeSpeed: 250,
});
