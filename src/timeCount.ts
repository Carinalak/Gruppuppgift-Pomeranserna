import { answeredQuestionsCount } from "./answerCurrentQuestion";

const timeCount: HTMLDivElement | null = document.querySelector('#timeCount');
const msg: HTMLDivElement | null = document.querySelector('#msg');
const quizBox: HTMLDivElement | null = document.querySelector('#quizbox');
const quizStartCon: HTMLDivElement | null = document.querySelector('#quiz-start');

function startQuiz() {
    if (quizBox && quizStartCon && msg) {
        quizStartCon.classList.add('hidden');

        msg.innerHTML = `<div class="msg">
        <p>Spelet börjar nu!</p>
        </div>
        `;

        setTimeout(() => {
            if (msg) {
                msg.classList.add('hidden'); 
            }
            quizBox.classList.remove('hidden');
            
        }, 1500);

        let intervalCount = 0;

       const countInterval = setInterval(timeQuiz,1000);

        function timeQuiz() {
            intervalCount += 0.1;
            if (timeCount) {
                timeCount.innerHTML = `<div> Tid: ${intervalCount.toFixed(1)}</div>`;
            } 
            if(answeredQuestionsCount >= 10){
                clearInterval(countInterval);
            }
        }
    }
}

export default startQuiz;