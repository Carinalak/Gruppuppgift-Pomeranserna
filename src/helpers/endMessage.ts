import { playerArray } from '../data/variable';

export function endMessage(value: number): string {
  if (value >= 0 && value <= 3) {
    return `Ajdå ${playerArray.playerName}, bättre kan du! Testa igen!`;
  } else if (value >= 4 && value <= 6) {
    return `Grymt jobbat ${playerArray.playerName}!, men de känns som att du kan bättre.`;
  } else if (value >= 7 && value <= 9) {
    return `Bra jobbat ${playerArray.playerName}, vad grym du är!!`;
  } else if (value === 10) {
    return `${playerArray.playerName} är bäst! alla rätt! whoop whoop!`;
  } else {
    throw new Error('Parameter must be between 0 and 10');
  }
}
