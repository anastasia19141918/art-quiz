import imagesPortraints from './portraints.js';
import shuffleImg from './createPucture.js';

let questionIndex = 0; //вопрос
let score = 0;//счёт

const galleryArt = document.getElementById('gallery__art');
const answerArt = document.getElementById('question__art');
const questionTitleAftor = document.getElementById('question__title_aftor');
const questionPaintingsAnswer = document.querySelector('.question__paintings_answer');
const questionArtist = document.querySelectorAll('.question__artist');

const questionGalleryPainting = document.getElementById('question__gallery_painting');
const questionPaintings = document.querySelectorAll('.question__paintings');

const popArtist = document.getElementById('pop-artist');
const popArtistCheck = document.getElementById('pop-artist__check');
const popArtistDesk = document.getElementById('pop-artist_desk');
const popArtistHeader = document.getElementById('pop-artist__header');

const popbutnArtNext = document.querySelector('.pop-art__butn');

const questionPagArtist = document.querySelectorAll('.question__pag');

const resultArtist = document.querySelector('.result');
const resultArtNumber =  document.getElementById('resultArt__number');

galleryArt.addEventListener('click', galleryArts);
questionGalleryPainting.addEventListener('click', btnAnswerArt);
popbutnArtNext.addEventListener('click', btnNextArtist);


function galleryArts(e) {
  if(e.target.classList.contains('gallery__item_art')) {
    pictureArt(e);
    domesticArt(e);
    landscapesArt(e);
    mythologyArt(e);
    historicalArt(e);
    renaissancealArt(e);
    russiansArt(e);
    epochsArt(e);
    impressionismArt(e);
    firstArt(e);
    secondArt(e);
    picture20thArt(e);
  }
}

function pictureArt(e) {
  if(e.target.innerText === 'Портреты') {
    galleryArtDelit();
    answerArt.classList.add('question__art__active');
    popbutnArtNext.classList.add('btnPort');
    creatArt(imagesPortraints[0]);
  }
};

function landscapesArt(e) {
  if(e.target.innerText === 'Пейзажи') {
    galleryArtDelit();
    answerArt.classList.add('question__art__active');
    popbutnArtNext.classList.add('btnlandscapes');
    creatArt(imagesPortraints[7]);
  }
};


function domesticArt(e) {
  if(e.target.innerText === 'Бытовой жанр') {
    galleryArtDelit();
    answerArt.classList.add('question__art__active');
    popbutnArtNext.classList.add('btnDomestic');
    creatArt(imagesPortraints[4]);
  }
};

function mythologyArt(e) {
  if(e.target.innerText === 'Мифологический жанр') {
    galleryArtDelit();
    answerArt.classList.add('question__art__active');
    popbutnArtNext.classList.add('btnMythology');
    creatArt(imagesPortraints[8]);
  }
};

function historicalArt(e) {
  if(e.target.innerText === 'Исторический жанр') {
    galleryArtDelit();
    answerArt.classList.add('question__art__active');
    popbutnArtNext.classList.add('btnHistorical');
    creatArt(imagesPortraints[5]);
  }
};

function renaissancealArt(e) {
  if(e.target.innerText === 'Возрождение') {
    galleryArtDelit();
    answerArt.classList.add('question__art__active');
    popbutnArtNext.classList.add('btnRenaissance');
    creatArt(imagesPortraints[10]);
  }
};

function russiansArt(e) {
  if(e.target.innerText === 'Русские художники') {
    galleryArtDelit();
    answerArt.classList.add('question__art__active');
    popbutnArtNext.classList.add('btnRussians');
    creatArt(imagesPortraints[11]);
  }
};

function epochsArt(e) {
  if(e.target.innerText === 'Живопись 16 - 18 вв.') {
    galleryArtDelit();
    answerArt.classList.add('question__art__active');
    popbutnArtNext.classList.add('btnEpochs');
    creatArt(imagesPortraints[9]);
  }
};

function impressionismArt(e) {
  if(e.target.innerText === 'Импрессионизм') {
    galleryArtDelit();
    answerArt.classList.add('question__art__active');
    popbutnArtNext.classList.add('btnImpressionism');
    creatArt(imagesPortraints[6]);
  }
};

function firstArt(e) {
  if(e.target.innerText === 'Живопись 1 половины XIX века') {
    galleryArtDelit();
    answerArt.classList.add('question__art__active');
    popbutnArtNext.classList.add('btnFirstArt');
    creatArt(imagesPortraints[2]);
  }
};

function secondArt(e) {
  if(e.target.innerText === 'Живопись 2 половины XIX века') {
    galleryArtDelit();
    answerArt.classList.add('question__art__active');
    popbutnArtNext.classList.add('btnSecondArt');
    creatArt(imagesPortraints[3]);
  }
};

function picture20thArt(e) {
  if(e.target.innerText === 'Живопись начало XX века') {
    galleryArtDelit();
    answerArt.classList.add('question__art__active');
    popbutnArtNext.classList.add('btnPicture20th');
    creatArt(imagesPortraints[1]);
  }
};

function galleryArtDelit() {
  galleryArt.classList.add('art__gallery_title_active');
};

function creatArt(e) {
  shuffleImg(e);

  const imgPop = document.createElement('img');
  imgPop.classList.add('pop-art__img');
  imgPop.alt = 'img';
  popArtistHeader.appendChild(imgPop);
  
  const divName = document.createElement('div');
  divName.classList.add('pop-art_name');
  popArtistDesk.appendChild(divName);

  const divAuthor = document.createElement('div');
  divAuthor.classList.add('pop-art_author');
  popArtistDesk.appendChild(divAuthor);

  const divYear = document.createElement('div');
  divYear.classList.add('pop-art_year');
  popArtistDesk.appendChild(divYear);

  e.forEach(function(el){
    questionTitleAftor.innerText = el.author;
    questionPaintingsAnswer.src = el.image;
    
    imgPop.src = el.image;
    divName.innerHTML = el.name;
    divAuthor.innerHTML = el.author;
    divYear.innerHTML = el.year;

  });

  questionArtist.forEach(function(el, i){
    el.src = e[i].image;
  });

  randomItemnsArt();
};

function btnAnswerArt(e) {
  if(e.target.classList.contains('question__paintings_answer')){
    popAnswerArtist();
    popArtistCheck.innerText = 'Верно';
    score ++; 
  }
  else {
    popArtistCheck.innerText = 'Не Верно';
    popAnswerArtist();
  }
};

function popAnswerArtist() {
  popArtist.classList.add('pop-art__active');
};

function btnNextArtist() {
  popArtist.classList.remove('pop-art__active');

  questionTitleAftor.innerText = '';
  popArtistHeader.innerHTML = '';
  popArtistDesk.innerHTML = '';

  questionPaintings.forEach(function(element){
    element.src = '';
  });

  if (questionIndex !== questionPagArtist.length-1) {

    if(popbutnArtNext.classList.contains('btnPort')) {
    creatArt(imagesPortraints[0]);
    };

    if(popbutnArtNext.classList.contains('btnDomestic')) {
      creatArt(imagesPortraints[4]);
    };

    if(popbutnArtNext.classList.contains('btnlandscapes')) {
      creatArt(imagesPortraints[7]);
    };

    if(popbutnArtNext.classList.contains('btnMythology')) {
      creatArt(imagesPortraints[8]);
    };

    if(popbutnArtNext.classList.contains('btnHistorical')) {
      creatArt(imagesPortraints[5]);
    };

    if(popbutnArtNext.classList.contains('btnRenaissance')) {
      creatArt(imagesPortraints[10]);
    };

    if(popbutnArtNext.classList.contains('btnRussians')) {
      creatArt(imagesPortraints[11]);
    };

    if(popbutnArtNext.classList.contains('btnEpochs')) {
      creatArt(imagesPortraints[9]);
    };

    if(popbutnArtNext.classList.contains('btnImpressionism')) {
      creatArt(imagesPortraints[6]);
    };

    if(popbutnArtNext.classList.contains('btnFirstArt')) {
      creatArt(imagesPortraints[2]);
    };

    if(popbutnArtNext.classList.contains('btnSecondArt')) {
      creatArt(imagesPortraints[3]);
    };

    if(popbutnArtNext.classList.contains('btnPicture20th')) {
      creatArt(imagesPortraints[1]);
    };

  }

  if (questionIndex === questionPagArtist.length-1) {
    showResultArts();
  }


  dotsActiveArtis();
};

function showResultArts() {
  resultArtist.classList.add('result__active');
  resultArtNumber.innerText = score ++; 
}


function dotsActiveArtis() {
  if (questionIndex !== questionPagArtist.length-1) {
    questionIndex ++;
    let dotsActive = questionPagArtist[questionIndex];
    dotsActive.classList.add('question__pag__active');
  }
}

function randomItemnsArt() {
  let arrowNumber = [0, 1, 2, 3, 4];

  const randomIndex = Math.floor(Math.random() * (arrowNumber.length - 1));
  const result = arrowNumber[randomIndex];
 
  questionGalleryPainting.insertBefore(questionPaintings[result], null);
  questionGalleryPainting.insertBefore(questionPaintings[3], questionPaintings[result]);
  questionGalleryPainting.insertBefore(questionPaintings[1], questionPaintings[2]);
  questionGalleryPainting.insertBefore(questionPaintings[0], questionPaintings[result]);
}