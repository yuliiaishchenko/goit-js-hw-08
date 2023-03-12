import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
import { galleryItems } from './gallery-items.js';


// Change code below this line

console.log(galleryItems);

const divRef = document.querySelector(".gallery");

function createGalleryMarkup (items) {
    return items.map(({preview, original, description}) => {
        return `<div class = "gallery__item">
    <a class = "gallery__link" href = "${original}">
    <img class = "gallery__image" 
    src = "${preview}"
    data-source = "${original}"
    alt = "${description}"/>
    </a>
    </div>`}).join("");
};

const addGalleryMarkup = createGalleryMarkup(galleryItems);
divRef.innerHTML = addGalleryMarkup;


function blockStandardAction (e) {
    e.preventDefault();
}