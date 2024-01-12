import { NUMBER_OF_QUESTIONS_IN_QUIZ, newQuizBox } from '../data/constant';
import { gameState, questionResults } from '../data/variable';
import { currentQuestionIndex, displayQuestion } from './displayQuestion';
import { displayResults } from './displayResult';

export const checkAnswer = (selectedButtonIndex: number) => {
  const question = newQuizBox[currentQuestionIndex!];
  const button = document.getElementById(`answer${selectedButtonIndex}`)!;
  const selectedAnswer = button.innerText;
  const correct = question.correctAnswer === selectedAnswer;

  if (correct) {
    gameState.score++;
  }

  gameState.currentQuestionNumber++;

  button.classList.add(correct ? 'correct' : 'wrong');

  const answerClass = correct ? 'correct' : 'wrong';
  button.classList.add(answerClass);

  const handleAnimationEnd = () => {
    button.classList.remove(answerClass);
    button.removeEventListener('animationend', handleAnimationEnd);

    if (gameState.currentQuestionNumber <= NUMBER_OF_QUESTIONS_IN_QUIZ) {
      displayQuestion();
    } else {
      displayResults();
    }
  };

  button.addEventListener('animationend', handleAnimationEnd);

  questionResults.push({
    question: question.question,
    answeredCorrectly: correct,
  });
};
