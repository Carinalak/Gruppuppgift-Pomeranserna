import { newQuizBox, scoreElement } from '../data/constant';
import { displayedQuestions, gameState } from '../data/variable';
import { IQuizQuestion } from '../types';
import { checkAnswer } from './checkAnswer';
import { getRandomQuestionIndex } from './getRandomQuestionIndex';
import { updateProgressBar } from './updateProgressBar';

export let currentQuestionIndex: number | undefined;

export const displayQuestion = () => {
  currentQuestionIndex = getRandomQuestionIndex();
  displayedQuestions.push(currentQuestionIndex);
  const question = newQuizBox[currentQuestionIndex];
  const questionElement = document.getElementById('question');
  const currentQuestionNumberElement = document.getElementById('currentQuestionNumber');
  if (scoreElement) {
    scoreElement.innerText = `Poäng: ${gameState.score}`;
  } else {
    console.error('Score element not found');
  }

  if (questionElement && currentQuestionNumberElement) {
    questionElement.innerText = question.question;
    currentQuestionNumberElement.innerText = gameState.currentQuestionNumber.toString();
  } else {
    console.error('Question element or currentQuestionNumber element not found');
  }

  const answerKeys: (keyof IQuizQuestion)[] = ['answerOption1', 'answerOptionX', 'answerOption2'];

  answerKeys.forEach((key, index) => {
    const button = document.getElementById(`answer${index + 1}`)!;
    button.innerText = question[key];
    button.classList.remove('correct', 'wrong');
    button.onclick = () => {
      answerKeys.forEach((_, index) => {
        const button = document.getElementById(`answer${index + 1}`)!;
        button.onclick = null;
      });
      checkAnswer(index + 1);
    };
  });
  updateProgressBar();
};
