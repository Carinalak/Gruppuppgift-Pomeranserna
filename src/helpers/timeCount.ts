import { gameState } from '../data/variable';

const timeCount: HTMLDivElement | null = document.querySelector('#timeCount');
const msg: HTMLDivElement | null = document.querySelector('#msg');
const quizBox: HTMLDivElement | null = document.querySelector('#quizbox');
const quizStartCon: HTMLDivElement | null = document.querySelector('#quiz-start');

const ONE_SECOND = 1000;

export let finalTime = '';

function startQuiz() {
  if (quizBox && quizStartCon && msg) {
    quizStartCon.classList.add('hidden');

    msg.innerHTML = `<div class="msg">
        <h2>Spelet börjar nu!</h2>
        </div>
        `;

    setTimeout(() => {
      if (msg) {
        msg.classList.add('hidden');
      }
      quizBox.classList.remove('hidden');
    }, 1500);

    const countInterval = setInterval(timeQuiz, ONE_SECOND);

    function timeQuiz() {
      gameState.secondsPassed += 1;

      const min = Math.floor(gameState.secondsPassed / 60);
      const sec = gameState.secondsPassed % 60;

      if (timeCount) {
        timeCount.innerHTML = `<div> Tid:  ${time(min)}:${time(sec)}</div>`;
      }
      if (gameState.currentQuestionNumber - 1 >= 10) {
        clearInterval(countInterval);
      }

      finalTime = `${time(min)}:${time(sec)}`;

      if (gameState.currentQuestionNumber - 1 >= 10) {
        clearInterval(countInterval);
      }
    }
  }
  function time(number: number) {
    return number < 10 ? `0${number}` : number;
  }
}

export default startQuiz;
