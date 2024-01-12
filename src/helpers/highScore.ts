import { highScoreBoard } from '../data/variable';
import { HighScore } from '../data/variable';

function maxFiveHighScoreList() {
  if (highScoreBoard.length > 5) {
    return (highScoreBoard.length = 5);
  }
}

function sortHighScores(highScoreBoard: any): void {
  highScoreBoard.sort((a: any, b: any) => b.score - a.score);
}

function convertTimeToMinutes(time: any): number {
  const [hours, minutes] = time.split(':').map(Number);
  return Number(hours * 60 + minutes);
}

export function addScoreToArray(playerName: string, score: number): void {
  const newScore: HighScore = { playerName, score };
  highScoreBoard.push(newScore);
  sortHighScores(highScoreBoard);
  maxFiveHighScoreList();
}

export function highScoreCalc(points: number, time: any): number {
  const timeConvertedToSec = convertTimeToMinutes(time);
  let score: number = (points / timeConvertedToSec) * 10000;
  console.log(Math.trunc(score));
  return Math.trunc(score);
}

export function highScoreBoardHTML(highScore: any) {
  highScore.forEach((highScore: any, index: number) => {
    const container = document.getElementById('high-Score');
    let newElement = document.createElement('div');
    newElement.className = `score-board-${index + 1}`;
    newElement.innerText = `#${index + 1} ${highScore.playerName}: ${highScore.score}`;
    console.log(container);
    if (container) {
      container.appendChild(newElement);
    }
    console.log(`#${index + 1} ${highScore.playerName}: ${highScore.score}`);
    console.log(newElement);
  });
}
