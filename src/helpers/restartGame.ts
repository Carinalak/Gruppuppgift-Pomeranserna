import { gameState } from '../data/variable';
import { displayQuestion } from './displayQuestion';

export const restartGame = () => {
  const resultsContainer = document.getElementById('resultsContainer') as HTMLDivElement;
  resultsContainer.classList.remove('visible');
  resultsContainer.innerHTML = '';
  gameState.currentQuestionNumber = 1;
  gameState.score = 0;
  gameState.secondsPassed = 0;
  const quizBoxContainer = document.querySelector('.quizbox-container') as HTMLElement;
  quizBoxContainer.classList.remove('hidden');
  displayQuestion();
};
