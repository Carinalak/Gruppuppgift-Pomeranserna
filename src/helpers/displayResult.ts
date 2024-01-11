import { NUMBER_OF_QUESTIONS_IN_QUIZ } from '../data/constant';
import { questionResults, highScoreBoard, playerArray } from '../data/variable';
import { endMessage } from './endMessage';
import { restartGame } from './restartGame';
import { finalTime } from './timeCount';
import { addScoreToArray, highScoreCalc, highScoreBoardHTML } from './highScore';

export const displayResults = () => {
  const resultsContainer = document.getElementById('resultsContainer') as HTMLDivElement;
  resultsContainer.classList.add('visible');
  resultsContainer.innerHTML = '';

  const congratsElement = document.createElement('h2');
  congratsElement.className = 'congratulations';
  congratsElement.innerText = 'Grattis!';
  resultsContainer.appendChild(congratsElement);

  const correctAnswers = questionResults
    .slice(-NUMBER_OF_QUESTIONS_IN_QUIZ)
    .filter(result => result.answeredCorrectly).length;
  const scoreElement = document.createElement('div');
  scoreElement.className = 'score';
  scoreElement.innerText = `Du hade ${correctAnswers} antal rätt och ${
    NUMBER_OF_QUESTIONS_IN_QUIZ - correctAnswers
  } antal fel!`;
  resultsContainer.appendChild(scoreElement);

  const timeElement = document.createElement('div');
  timeElement.className = 'time';
  timeElement.innerText = `Du klarade frågorna på tiden ${finalTime}.`;
  resultsContainer.appendChild(timeElement);

  const retryButton = document.createElement('button');
  retryButton.className = 'retry-button';
  retryButton.innerText = 'Prova igen?';
  retryButton.addEventListener('click', restartGame);
  resultsContainer.appendChild(retryButton);

  const endText = document.createElement('div');
  endText.className = 'end-Message';
  endText.innerText = endMessage(correctAnswers);
  resultsContainer.appendChild(endText);

  const highScoreSection = document.createElement('div');
  highScoreSection.id = 'high-Score';
  highScoreSection.innerText = 'High Score Top 5';
  resultsContainer.appendChild(highScoreSection);

  let highScorePlayerPoints = highScoreCalc(correctAnswers, finalTime);
  addScoreToArray(playerArray.playerName, highScorePlayerPoints);
  highScoreBoardHTML(highScoreBoard);

  const quizBoxContainer = document.querySelector('.quizbox-container') as HTMLElement;
  quizBoxContainer.classList.add('hidden');
  resultsContainer.classList.add('visible');
};
