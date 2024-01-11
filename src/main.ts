import './scss/style.scss';
import startQuiz from './helpers/timeCount';
import { addPlayerNameEvent } from './helpers/addPlayerName';
addPlayerNameEvent();

window.onload = () => {
  const startBtn: HTMLButtonElement | null = document.querySelector('#start-btn');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      startQuiz();
    });
  }
};
