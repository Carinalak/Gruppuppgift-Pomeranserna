export type QuestionResult = {
  question: string;
  answeredCorrectly: boolean;
};

export type GameState = {
  score: number;
  currentQuestionNumber: number;
  secondsPassed: number;
};

export interface IQuizQuestion {
  question: string;
  answerOption1: string;
  answerOption2: string;
  answerOptionX: string;
  correctAnswer: string;
}

export interface IPlayer {
  playerName: string;
  playerScore: number;
}
