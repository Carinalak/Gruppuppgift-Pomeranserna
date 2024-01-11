import './scss/style.scss';
import startQuiz from './helpers/timeCount';
import { addPlayerNameEvent } from './helpers/addPlayerName';
import { displayQuestion } from './helpers/displayQuestion';

function highScore(points: number, time: number, name: string) {
  function removeDotFromNumber(num: number): string {
    const numStr = num.toString();
    return numStr.split('.')[0];
  }
  let score = (points / time) * 10000;
  console.log(`${name} - ${removeDotFromNumber(score)}`);
}
highScore(10, 100, 'Adam');

addPlayerNameEvent();

window.onload = () => {
  displayQuestion();

  const startBtn: HTMLButtonElement | null = document.querySelector('#start-btn');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      startQuiz();
    });
  }
};
