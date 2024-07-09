import imagesPortraints from './portraints.js';
import shuffleImg from './createPucture.js';


let questionIndex = 0; //вопрос
let score = 0;//счёт
let next = 0;

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

const result =  document.getElementById('result');
const resultNumber = document.getElementById('result__number');

gallery.addEventListener('click', galleryPicture);
questionAnswers.addEventListener('click', btnAnswer);
popButton.addEventListener('click', buttonNext);

function galleryPicture(e) {
  if(e.target.classList.contains('gallery__item_picture')) {
    picturePort(e);
    picturelandscapes(e);
    pictureDomestic(e);
    pictureMythology(e);
    pictureHistorical(e);
    pictureRenaissance(e);
    pictureRussians(e);
    pictureEpochs(e);
    pictureImpressionism(e);
    pictureArtFirst(e);
    pictureArtSecond(e);
    picture20th(e);
  }
};

function picturePort(e) {
  if(e.target.innerText === 'Портреты') {
    galleryDelit();
    answer.classList.add('question_picture__active');
    popArtButn.classList.add('btnPort');
    creatPicture(imagesPortraints[0]);
  }
};

function pictureDomestic(e) {
  if(e.target.innerText === 'Бытовой жанр') {
    galleryDelit();
    answer.classList.add('question_picture__active');
    popArtButn.classList.add('btnDomestic');
    creatPicture(imagesPortraints[4]);
  }
};

function picturelandscapes(e) {
  if(e.target.innerText === 'Пейзажи') {
    galleryDelit();
    answer.classList.add('question_picture__active');
    popArtButn.classList.add('btnlandscapes');
    creatPicture(imagesPortraints[7]);
  }
}

function pictureMythology(e) {
  if(e.target.innerText === 'Мифологический жанр') {
    galleryDelit();
    answer.classList.add('question_picture__active');
    popArtButn.classList.add('btnMythology');
    creatPicture(imagesPortraints[8]);
  }
}

function pictureHistorical(e) {
  if(e.target.innerText === 'Исторический жанр') {
    galleryDelit();
    answer.classList.add('question_picture__active');
    popArtButn.classList.add('btnHistorical');
    creatPicture(imagesPortraints[5]);
  }
}

function pictureRenaissance(e) {
  if(e.target.innerText === 'Возрождение') {
    galleryDelit();
    answer.classList.add('question_picture__active');
    popArtButn.classList.add('btnRenaissance');
    creatPicture(imagesPortraints[10]);
  }
}

function pictureRussians(e) {
  if(e.target.innerText === 'Русские художники') {
    galleryDelit();
    answer.classList.add('question_picture__active');
    popArtButn.classList.add('btnRussians');
    creatPicture(imagesPortraints[11]);
  }
}

function pictureEpochs(e) {
  if(e.target.innerText === 'Живопись 16 - 18 вв.') {
    galleryDelit();
    answer.classList.add('question_picture__active');
    popArtButn.classList.add('btnEpochs');
    creatPicture(imagesPortraints[9]);
  }
}

function pictureImpressionism(e) {
  if(e.target.innerText === 'Импрессионизм') {
    galleryDelit();
    answer.classList.add('question_picture__active');
    popArtButn.classList.add('btnImpressionism');
    creatPicture(imagesPortraints[6]);
  }
}

function pictureArtFirst(e) {
  if(e.target.innerText === 'Живопись 1 половины XIX века') {
    galleryDelit();
    answer.classList.add('question_picture__active');
    popArtButn.classList.add('btnArtFirst');
    creatPicture(imagesPortraints[2]);
  }
};

function pictureArtSecond(e) {
  if(e.target.innerText === 'Живопись 2 половины XIX века') {
    galleryDelit();
    answer.classList.add('question_picture__active');
    popArtButn.classList.add('btnArtSecond');
    creatPicture(imagesPortraints[3]);
  }
};

function picture20th(e) {
  if(e.target.innerText === 'Живопись начало XX века') {
    galleryDelit();
    answer.classList.add('question_picture__active');
    popArtButn.classList.add('btnPicture20th');
    creatPicture(imagesPortraints[1]);
  }
};


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
    popArtCheck.innerText = 'Верно';
    popAnswer();
    score ++; 
  }
  else {
    popArtCheck.innerText = ' Не верно';
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

    if(popArtButn.classList.contains('btnPort')) {
      creatPicture(imagesPortraints[0]);
    };

    if(popArtButn.classList.contains('btnlandscapes')) {
      creatPicture(imagesPortraints[7]);
    };

    if(popArtButn.classList.contains('btnDomestic')) {
      creatPicture(imagesPortraints[4]);
    };

    if(popArtButn.classList.contains('btnMythology')) {
      creatPicture(imagesPortraints[8]);
    };

    if(popArtButn.classList.contains('btnHistorical')) {
      creatPicture(imagesPortraints[5]);
    };

    if(popArtButn.classList.contains('btnRenaissance')) {
      creatPicture(imagesPortraints[10]);
    };

    if(popArtButn.classList.contains('btnRussians')) {
      creatPicture(imagesPortraints[11]);
    };

    if(popArtButn.classList.contains('btnEpochs')) {
      creatPicture(imagesPortraints[9]);
    };

    if(popArtButn.classList.contains('btnImpressionism')) {
      creatPicture(imagesPortraints[6]);
    };

    if(popArtButn.classList.contains('btnArtFirst')) {
      creatPicture(imagesPortraints[2]);
    };

    if(popArtButn.classList.contains('btnArtSecond')) {
      creatPicture(imagesPortraints[3]);
    };

    if(popArtButn.classList.contains('btnPicture20th')) {
      creatPicture(imagesPortraints[1]);
    };
  };

  if(questionIndex === questionPag.length-1) {
    showResult();
  }
  dots();
};

function dots() {
  if (questionIndex !== questionPag.length-1) {
    questionIndex ++;
    let dotsActive = questionPag[questionIndex];
    dotsActive.classList.add('question__pag__active');
  } 
};

function showResult() {
  result.classList.add('result__active');
  resultNumber.innerText = score;
};

function randomItem () {
  let arrowNumber = [0, 1, 2, 3, 4];

  const randomIndex = Math.floor(Math.random() * (arrowNumber.length - 1));
  const result = arrowNumber[randomIndex];
 
  questionAnswers.insertBefore(questionAnswer[result], null);
  questionAnswers.insertBefore(questionAnswer[0], questionAnswer[result]);
}





