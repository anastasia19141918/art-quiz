
export default function shuffleImg(arrow) {
  for(let i = arrow.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arrow[i], arrow[j]] = [arrow[j], arrow[i]];
  }
}

