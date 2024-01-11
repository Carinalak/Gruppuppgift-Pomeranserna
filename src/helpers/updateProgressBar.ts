import { NUMBER_OF_QUESTIONS_IN_QUIZ } from '../data/constant';
import { gameState } from '../data/variable';

export const updateProgressBar = (): void => {
  const progressBarContainer = document.getElementById('progress-bar-container') as HTMLDivElement;
  if (!progressBarContainer) {
    console.error('Progress bar container element not found');
    return;
  }

  const progressBar = progressBarContainer.querySelector('span') as HTMLSpanElement;
  if (!progressBar) {
    console.error('Progress bar element not found inside the container');
    return;
  }

  const progressPercentage = (gameState.currentQuestionNumber / NUMBER_OF_QUESTIONS_IN_QUIZ) * 100;
  progressBar.style.width = `${progressPercentage}%`;
};
