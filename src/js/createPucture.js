
import imagesPortraints from './portraints.js';




//export default 
//function creatPicture() {
  //const gallery = document.getElementById('question__gallery');

  //const img = document.createElement('img');
  //img.classList.add('question__img');

  //gallery.appendChild(img);
//};

export default function shuffleImg(arrow) {
  for(let i = arrow.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arrow[i], arrow[j]] = [arrow[j], arrow[i]];
  }
}

