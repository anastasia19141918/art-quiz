//import creatArtist from './createArtist.js';

const pictures = document.querySelectorAll('.gallery__item_picture');

const gallery = document.getElementById('gallery_picture');

gallery.addEventListener('click', galleryPicture);

function galleryPicture(e) {
  console.log(e.target);
}


