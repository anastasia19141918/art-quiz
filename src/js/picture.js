import imagesPortraints from './portraints.js';
import shuffleImg from './createPucture.js';


let questionIndex = 0; 

const answer = document.getElementById('question_picture');
const gallery = document.getElementById('gallery_picture');

gallery.addEventListener('click', galleryPicture);

function galleryPicture(e) {
  if(e.target.classList.contains('gallery__item_picture')) {
    picturePort(e);
  }
}

function picturePort(e) {
  if(e.target.innerText === 'Портреты') {
    galleryDelit();
    answer.classList.add('question_picture__active');
    creatPicture();
  }
}

function galleryDelit () {
  const title =  document.getElementById('gallery_title_picture');
  const galleryItemns = document.querySelector('.gallery_picture');

  title.classList.add('art__gallery_title_active');
  galleryItemns.classList.add('gallery__active');
}

function creatPicture(e) {
  
  shuffleImg(imagesPortraints);
  const gallery = document.getElementById('question__gallery');
  const answer = document.getElementById('question__answers');
  const answers = document.querySelectorAll('.question__answer');

  const img = document.createElement('img');
  img.classList.add('question__img');
  gallery.appendChild(img);

  const div =  document.createElement('div');
  div.classList.add('question__answer');
  answer.appendChild(div);

  imagesPortraints.forEach(function(el) {
    img.src = el.image;

    div.innerText = el.author;
});

answers.forEach(function(el,i) {
  el.innerHTML = imagesPortraints[i].author;
})
};




