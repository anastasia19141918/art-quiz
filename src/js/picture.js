import imagesPortraints from './portraints.js';
import shuffleImg from './createPucture.js';


let questionIndex = 0; 

const answer = document.getElementById('question_picture');
const gallery = document.getElementById('gallery_picture');
const galleryImg = document.getElementById('question__gallery'); 

const answerTrue = document.getElementById('question__answer_true');
const answers = document.querySelectorAll('.answer');

const questionAnswer =  document.querySelectorAll('.question__answer');
const questionAnswers =  document.getElementById('question__answers');
let random = Array.from(questionAnswer);

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
    creatPicture(imagesPortraints);
  }
}

function galleryDelit () {
  const title =  document.getElementById('gallery_title_picture');
  const galleryItemns = document.querySelector('.gallery_picture');

  title.classList.add('art__gallery_title_active');
  galleryItemns.classList.add('gallery__active');
}

function creatPicture(e) {
  shuffleImg(e);
  const img = document.createElement('img');
  img.classList.add('question__img');
  galleryImg.appendChild(img);

  e.forEach(function(el, item) {
    img.src = el.image;

    answerTrue.innerHTML = el.author;
});

answers.forEach(function(el,i) {
  el.innerHTML = e[i].author;
});

randomItem();
};

function randomItem () {
  let arrowNumber = [0, 1, 2, 3, 4];

  const randomIndex = Math.floor(Math.random() * (arrowNumber.length - 1));
  const result = arrowNumber[randomIndex];
  console.log(result);

  questionAnswers.insertBefore(questionAnswer[result], null);
  questionAnswers.insertBefore(questionAnswer[0], questionAnswer[result]);
}









