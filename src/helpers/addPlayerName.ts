import { playerArray } from '../data/variable';

const inPutToStart = document.querySelector('.input-start')!;
function startQuizMessage() {
  inPutToStart.innerHTML = `Hej ${playerArray.playerName} !, Klicka på "Starta Quizet" för att börja spela! `;
}

export const addPlayerNameEvent = () => {
  function addPlayerName(): void {
    let inputElement = document.getElementById('nameInput') as HTMLInputElement;
    playerArray.playerName = inputElement.value;
    inputElement.value = '';
  }
  const addButton = document.getElementById('addButton');
  addButton?.addEventListener('click', addPlayerName);
  addButton?.addEventListener('click', startQuizMessage);
};
