import imagesPortraints from './portraints.js';
import shuffleImg from './createPucture.js';


let questionIndex = 0; //вопрос
let score = 0;//счёт

const gallery = document.getElementById('gallery_picture');
const artGallery = document.getElementById('art__gallery');
const answer = document.getElementById('question_picture');
const galleryImg = document.getElementById('question__gallery'); 

const answerTrue = document.getElementById('question__answer_true');
const answers = document.querySelectorAll('.answer');

const questionAnswer =  document.querySelectorAll('.question__answer');
const questionAnswers =  document.getElementById('question__answers');

const popActive = document.getElementById('pop-art');
const popArtHeader = document.getElementById('pop-art__header');
const popArtDesk = document.getElementById('pop-art_desk');
const popArtCheck = document.getElementById('pop-art__check');
const popButton = document.getElementById('pop-art__button');
const popArtButn =  document.querySelector('.pop-art__butn');
const questionPag = document.querySelectorAll('.question__pag');


gallery.addEventListener('click', galleryPicture);
questionAnswers.addEventListener('click', btnAnswer);
popButton.addEventListener('click', buttonNext);



function galleryPicture(e) {
  if(e.target.classList.contains('gallery__item_picture')) {
    picturePort(e);
  }
}

function picturePort(e) {
  if(e.target.innerText === 'Портреты') {
    galleryDelit();
    answer.classList.add('question_picture__active');
    popArtButn.classList.add('btnPort');
    creatPicture(imagesPortraints[0]);
  }
}

function galleryDelit () {
  artGallery.classList.add('art__gallery_title_active');
}

function creatPicture(e) {
 
  shuffleImg(e);
  const img = document.createElement('img');
  img.classList.add('question__img');
  img.alt = 'img';
  galleryImg.appendChild(img);

  const imgPop = document.createElement('img');
  imgPop.classList.add('pop-art__img');
  imgPop.alt = 'img';
  popArtHeader.appendChild(imgPop);
  
  const divName = document.createElement('div');
  divName.classList.add('pop-art_name');
  popArtDesk.appendChild(divName);

  const divAuthor = document.createElement('div');
  divAuthor.classList.add('pop-art_author');
  popArtDesk.appendChild(divAuthor);

  const divYear = document.createElement('div');
  divYear.classList.add('pop-art_year');
  popArtDesk.appendChild(divYear);

  e.forEach(function(el, item) {
    img.src = el.image;
    imgPop.src = el.image;
    answerTrue.innerHTML = el.author;
    divName.innerHTML = el.name;
    divAuthor.innerHTML = el.author;
    divYear.innerHTML = el.year;
  });

  answers.forEach(function(el,i) {
  el.innerHTML = e[i].author;
  });

randomItem();
};

function btnAnswer (e) {
  if(e.target.classList.contains('question__answer_true')) {
    popArtCheck.classList.add('pop-art__check_true');
    popAnswer();
    score ++; 
  }
  else {
    popArtCheck.classList.add('pop-art__check_false');
    popAnswer();
  }
}

function popAnswer() {
  popActive.classList.add('pop-art__active');
}



function buttonNext(e) {
  popActive.classList.remove('pop-art__active');
  
  
  
  galleryImg.innerHTML = '';
  questionAnswer.forEach(function(el){
    el.innerHTML = '';
  });

  popArtHeader.innerHTML = '';
  popArtDesk.innerHTML = '';

  if (questionIndex !== questionPag.length-1) {
    console.log('не последний')
  };

  if(questionIndex === questionPag.length-1) {
    console.log('последний')
  }
  
  if(popArtButn.classList.contains('btnPort')) {
    creatPicture(imagesPortraints[0]);
  };
  dots();
}

function dots() {
  if (questionIndex !== questionPag.length-1) {
    questionIndex ++;
    let dotsActive = questionPag[questionIndex];
    dotsActive.classList.add('question__pag__active');
  } 
}

function randomItem () {
  let arrowNumber = [0, 1, 2, 3, 4];

  const randomIndex = Math.floor(Math.random() * (arrowNumber.length - 1));
  const result = arrowNumber[randomIndex];
 
  questionAnswers.insertBefore(questionAnswer[result], null);
  questionAnswers.insertBefore(questionAnswer[0], questionAnswer[result]);
}





