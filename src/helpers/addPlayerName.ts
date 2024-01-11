import { playerArray } from '../data/variable';

export const addPlayerNameEvent = () => {
  function addPlayerName(): void {
    let inputElement = document.getElementById('nameInput') as HTMLInputElement;
    playerArray.playerName = inputElement.value;
    inputElement.value = '';
  }

  const addButton = document.getElementById('addButton');
  addButton?.addEventListener('click', addPlayerName);
};
