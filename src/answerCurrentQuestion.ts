import { QuizQuestion, newQuizBox } from './main';
import { finalTime } from './timeCount';

type QuestionResult = {
  question: string;
  answeredCorrectly: boolean;
};

const NUMBER_OF_QUESTIONS_IN_QUIZ = 10;

let displayedQuestions: number[] = [];
let currentQuestionIndex: number | undefined;
let questionResults: QuestionResult[] = [];
export let answeredQuestionsCount = 0;
let score = 0;
const scoreElement = document.getElementById('score');

const getRandomQuestionIndex = (): number => {
  const indices = [...newQuizBox.keys()];
  const availableIndices = indices.filter(i => !displayedQuestions.includes(i));
  const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
  return randomIndex;
};

const updateProgressBar = (): void => {
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

  const progressPercentage = (displayedQuestions.length / NUMBER_OF_QUESTIONS_IN_QUIZ) * 100;
  progressBar.style.width = `${progressPercentage}%`;
};
let currentQuestionNumber = 1;
const displayQuestion = () => {
  currentQuestionIndex = getRandomQuestionIndex();
  displayedQuestions.push(currentQuestionIndex);
  const question = newQuizBox[currentQuestionIndex];
  const questionElement = document.getElementById('question');
  const currentQuestionNumberElement = document.getElementById('currentQuestionNumber');

  if (questionElement && currentQuestionNumberElement) {
    questionElement.innerText = question.question;
    currentQuestionNumberElement.innerText = currentQuestionNumber.toString();
  } else {
    console.error('Question element or currentQuestionNumber element not found');
  }

  const answerKeys: (keyof QuizQuestion)[] = ['answerOption1', 'answerOptionX', 'answerOption2'];

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

const checkAnswer = (selectedButtonIndex: number) => {
  const question = newQuizBox[currentQuestionIndex!];
  const button = document.getElementById(`answer${selectedButtonIndex}`)!;
  const selectedAnswer = button.innerText;
  const correct = question.correctAnswer === selectedAnswer;

  if (correct) {
    score++;
  }
  if (scoreElement) {
    scoreElement.innerText = `Poäng: ${score}`;
  } else {
    console.error('Score element not found');
  }
  currentQuestionNumber++;
  button.classList.add(correct ? 'correct' : 'wrong');
  answeredQuestionsCount++;
  questionResults.push({
    question: question.question,
    answeredCorrectly: correct,
  });

  const displayResults = () => {
    const resultsContainer = document.getElementById('resultsContainer') as HTMLDivElement;
    resultsContainer.classList.add('visible');
    resultsContainer.innerHTML = '';

    const congratsElement = document.createElement('h2');
    congratsElement.className = 'congratulations';
    congratsElement.innerText = 'Grattis!';
    resultsContainer.appendChild(congratsElement);

    const correctAnswers = questionResults.filter(result => result.answeredCorrectly).length;
    const scoreElement = document.createElement('div');
    scoreElement.className = 'score';
    scoreElement.innerText = `Du hade ${correctAnswers} antal rätt och ${
      questionResults.length - correctAnswers
    } antal fel!`;
    resultsContainer.appendChild(scoreElement);

    const timeElement = document.createElement('div');
    timeElement.className = 'time';
    timeElement.innerText = `Du klarade frågorna på tiden ${finalTime}.`;
    resultsContainer.appendChild(timeElement);

    const retryButton = document.createElement('button');
    retryButton.className = 'retry-button';
    retryButton.innerText = 'Prova igen?';
    retryButton.onclick = () => {};
    resultsContainer.appendChild(retryButton);

    const quizBoxContainer = document.querySelector('.quizbox-container') as HTMLElement;
    quizBoxContainer.classList.add('hidden');
    resultsContainer.classList.add('visible');
  };

  setTimeout(() => {
    if (displayedQuestions.length < NUMBER_OF_QUESTIONS_IN_QUIZ) {
      displayQuestion();
    } else {
      displayResults();
    }
  }, 1000); // 2s
};

export default displayQuestion;
