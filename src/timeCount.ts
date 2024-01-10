import { answeredQuestionsCount } from './answerCurrentQuestion';

const timeCount: HTMLDivElement | null = document.querySelector('#timeCount');
const msg: HTMLDivElement | null = document.querySelector('#msg');
const quizBox: HTMLDivElement | null = document.querySelector('#quizbox');
const quizStartCon: HTMLDivElement | null = document.querySelector('#quiz-start');

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

    let intervalCount = 0;

    const countInterval = setInterval(timeQuiz, 1000);

    function timeQuiz() {
      intervalCount += 1;

      const min = Math.floor(intervalCount / 60);
      const sec = intervalCount % 60;

      if (timeCount) {
        timeCount.innerHTML = `<div> Tid:  ${time(min)}:${time(sec)}</div>`;
      }
      if (answeredQuestionsCount >= 10) {
        clearInterval(countInterval);
      }
    }
  }
  function time(number: number) {
    return number < 10 ? `0${number}` : number;
  }
}

export default startQuiz;
