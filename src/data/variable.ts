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
