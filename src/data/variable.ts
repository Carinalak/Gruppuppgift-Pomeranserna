import { GameState, IPlayer, QuestionResult } from '../types';

export let displayedQuestions: number[] = [];

export let questionResults: QuestionResult[] = [];

// Lägger dessa variabler i ett objekt för att kunna uppdatera dom i andra filer
export const gameState: GameState = {
  currentQuestionNumber: 1,
  score: 0,
  secondsPassed: 0,
};

export let playerArray: IPlayer = {
  playerName: '',
  playerScore: 0,
};
export interface HighScore {
  playerName: string;
  score: number;
}
export let highScoreBoard: HighScore[] = [
  { playerName: 'Jenni är bäst', score: 99999 },
  { playerName: 'Adam', score: 4500 },
  { playerName: 'Urban', score: 100 },
  { playerName: 'Bogan', score: 490 },
];
