import { newQuizBox } from '../data/constant';
import { displayedQuestions } from '../data/variable';

export const getRandomQuestionIndex = (): number => {
  const indices = [...newQuizBox.keys()];
  const availableIndices = indices.filter(i => !displayedQuestions.includes(i));
  const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
  return randomIndex;
};
