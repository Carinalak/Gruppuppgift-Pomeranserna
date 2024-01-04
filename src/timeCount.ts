const timeCount: HTMLDivElement | null = document.querySelector('#timeCount');
const msg: HTMLDivElement | null = document.querySelector('#msg');
const quizBox: HTMLDivElement | null = document.querySelector('#quizbox');
const quizStartCon: HTMLDivElement | null = document.querySelector('#quiz-start');
// const startBtn: HTMLButtonElement | null = document.querySelector('#start-btn');

// if (startBtn) {
//     startBtn.addEventListener('click', startQuiz);
// }

export function startQuiz() {
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
            setInterval(timeQuiz,1000);
        }, 2000);

        
        // setTimeout(timeQuiz, 3000);
        // setInterval(timeQuiz, 1000);
        let intervalCount = 0;

        function timeQuiz() {
            intervalCount += 0.1;
            if (timeCount) {
                timeCount.innerHTML = `<div> Tid: ${intervalCount.toFixed(1)}</div>`;
            }
        }
    }
}