import { QuizQuestion, newQuizBox } from "./main";

const NUMBER_OF_QUESTIONS_IN_QUIZ = 10;

let displayedQuestions: number[] = [];
let currentQuestionIndex: number | undefined;
let questionResults: QuestionResult[] = [];
let answeredQuestionsCount = 0;
let score = 0;
const scoreElement = document.getElementById("score");

type QuestionResult = {
	question: string;
	answeredCorrectly: boolean;
};

const getRandomQuestionIndex = (): number => {
	const indices = [...newQuizBox.keys()];
	const availableIndices = indices.filter((i) => !displayedQuestions.includes(i));
	const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
	return randomIndex;
};

const updateProgressBar = (): void => {
	const progressBar = document.getElementById("progressBar") as HTMLDivElement;
	if (progressBar) {
		const progressPercentage =
			((displayedQuestions.length - 1) / NUMBER_OF_QUESTIONS_IN_QUIZ) * 100;
		progressBar.style.width = `${progressPercentage}%`;
	}
};

const displayQuestion = () => {
	currentQuestionIndex = getRandomQuestionIndex();
	displayedQuestions.push(currentQuestionIndex);
	const question = newQuizBox[currentQuestionIndex];
	const questionElement = document.getElementById("question");

	if (questionElement) {
		questionElement.innerText = question.question;
	} else {
		console.error("Question element not found");
	}

	const answerKeys: (keyof QuizQuestion)[] = ["answerOption1", "answerOptionX", "answerOption2"];

	answerKeys.forEach((key, index) => {
		const button = document.getElementById(`answer${index + 1}`)!;
		button.innerText = question[key];
		button.classList.remove("correct", "wrong");
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
		console.error("Score element not found");
	}

	button.classList.add(correct ? "correct" : "wrong");
	answeredQuestionsCount++;
	questionResults.push({
		question: question.question,
		answeredCorrectly: correct,
	});

	const displayResults = () => {
		const resultsContainer = document.getElementById("resultsContainer") as HTMLDivElement;
		resultsContainer.innerHTML = "";

		const congratsElement = document.createElement("h2");
		congratsElement.className = "question-number";
		congratsElement.innerText = "Grattis!";
		resultsContainer.appendChild(congratsElement);

		const correctAnswers = questionResults.filter((result) => result.answeredCorrectly).length;
		const scoreElement = document.createElement("div");
		scoreElement.className = "score";
		scoreElement.innerText = `Du hade ${correctAnswers} antal rätt och ${
			questionResults.length - correctAnswers
		} antal fel!`;
		resultsContainer.appendChild(scoreElement);

		const timeElement = document.createElement("div");
		timeElement.className = "time";
		timeElement.innerText = "Du klarade frågorna på tiden X";
		resultsContainer.appendChild(timeElement);

		const retryButton = document.createElement("button");
		retryButton.innerText = "Prova igen?";
		retryButton.onclick = () => {};
		resultsContainer.appendChild(retryButton);

		// questionResults.forEach((result, index) => {
		// 	const resultElement = document.createElement("div");
		// 	resultElement.className = result.answeredCorrectly ? "correct-answer" : "wrong-answer";
		// 	resultElement.innerHTML = `<strong>Fråga ${index + 1}:</strong> ${result.question} - ${
		// 		result.answeredCorrectly ? "Correct" : "Wrong"
		// 	}`;
		// 	resultsContainer.appendChild(resultElement);
		// });

		const quizBoxContainer = document.querySelector(".quizbox-container") as HTMLElement;
		quizBoxContainer.style.display = "none";
		resultsContainer.style.display = "block";
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
