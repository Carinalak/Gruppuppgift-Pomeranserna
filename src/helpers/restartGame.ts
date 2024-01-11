import startQuiz from './timeCount';

export const restartGame = () => {
  const resultsContainer = document.getElementById('resultsContainer') as HTMLDivElement;
  const quizBoxContainer = document.querySelector('.quizbox-container') as HTMLElement;
  resultsContainer.classList.remove('visible');
  resultsContainer.innerHTML = '';
  quizBoxContainer.classList.remove('hidden');
  startQuiz();
};
