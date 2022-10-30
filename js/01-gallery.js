import { galleryItems } from './gallery-items.js';
// Change code below this line

const photoContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

photoContainer.insertAdjacentHTML('beforeend', galleryMarkup);

photoContainer.addEventListener('click', onGalleryItemClick)


function createGalleryItemsMarkup (galleryItems){
return galleryItems.map(({ preview, original, description }) => {

        return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `
   
    }).join('');
}
function onGalleryItemClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    };
  
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

    instance.show()
    
    photoContainer.addEventListener('keydown',onEscCloseButton);
    function onEscCloseButton(event){
        if (event.key === 'Escape') {
            instance.close()
            photoContainer.removeEventListener('keydown',onEscCloseButton);
        }
    }
     console.log(event.target.dataset.source) 
}