import { QuizQuestion, newQuizBox } from "./main";

let displayedQuestions: number[] = [];
let currentQuestionIndex: number | undefined;

const getRandomQuestionIndex = (): number => {
	const indices = [...newQuizBox.keys()];
	const availableIndices = indices.filter((i) => !displayedQuestions.includes(i));
	const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
	return randomIndex;
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
};

const checkAnswer = (selectedButtonIndex: number) => {
	const question = newQuizBox[currentQuestionIndex!];
	const button = document.getElementById(`answer${selectedButtonIndex}`)!;
	const selectedAnswer = button.innerText;
	const correct = question.correctAnswer === selectedAnswer;
	button.classList.add(correct ? "correct" : "wrong");

	setTimeout(() => {
		if (displayedQuestions.length < newQuizBox.length) {
			displayQuestion();
		} else {
			alert("Quiz completed");
		}
	}, 1000); // 1s
};

export default displayQuestion;
