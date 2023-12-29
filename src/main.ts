import './scss/style.scss'; // Importera huvud-SCSS-filen
import typescriptLogo from './assets/images/typescript.svg'; // Exempel på hur ni importerar bilder
import { sortArrayByText } from './helpers'; // Exempel på hur ni importerar en funktion från en annan fil

/**
 * Här definierar vi en mall för hur vi vill att vår array ska se ut.
 * Ett så kallat "interface".
 * Den är för att garantera att ALLA objekt i vår array har samtliga egenskaper.
 * Prova t.ex. att lägga till en egenskap i interfacet, och notera hur arrayen nedanför
 * får rödmarkeringar där denna egenskap saknas.
 */
interface QuizQuestion {
  question: string;
  answerOption1: string;
  answerOption2: string;
  answerOptionX: string;
  correctAnswer: string;
}


// Här skriver vi att vår array med namnet myExampleArray ska följa reglerna (interfacet)
// i IExampleArray och att det är en array genom att vi sätter [] efter
let newQuizBox: QuizQuestion[] = [
  {
    question: 'Vem regisserade Jurassic Park',
    answerOption1: 'Martin Scorsese',
    answerOptionX: 'Steven Speilberg',
    answerOption2: 'Ridley Scott',
    correctAnswer: 'Steven Speilberg',
  },
  {
    question: 'Vilken film är den högst rankade på IMDB',
    answerOption1: 'The Godfather',
    answerOptionX: 'Schindlers List',
    answerOption2: 'The Shawshank Redemption',
    correctAnswer: 'The Shawshank Redemption',
  },
  {
    question: 'Vart filmades Lord of the Rings trilogin',
    answerOption1: 'Ireland',
    answerOptionX: 'New Zealand',
    answerOption2: 'Australia',
    correctAnswer: 'New Zealand',
  },
  {
    question: 'Vilken skådespelare spelar "Private Ryan" i filmen "Saving Private Ryan"',
    answerOption1: 'Matt Damon',
    answerOptionX: 'Tom Hanks',
    answerOption2: 'Vin Diesel',
    correctAnswer: 'Matt Damon',
  },
  {
    question: 'Vilken är den mest inkomstbringande filmen genom tiderna',
    answerOption1: 'Titanic',
    answerOptionX: 'Avatar',
    answerOption2: 'Avatar: The way of water',
    correctAnswer: 'Avatar: The way of water',
  },
];
let oldQuizBox: QuizQuestion[] = [];

// Skriv ut den sorterade arrayen i konsolen, använd en importerad funktion
console.table(sortArrayByText(myExampleArray, 'name'));

// Använd samma funktion för att sortera på en annan egenskap
console.table(sortArrayByText(myExampleArray, 'age'));

// Hämta ett HTML-element från index.html
const container: HTMLDivElement | null = document.querySelector('#app');

if (container !== null) { // Om HTML-elementet finns
  container.innerHTML = `
    <div>
      <h1>Hello FED23D!</h1>
      <img src="${typescriptLogo}" loading="lazy" width="32" height="32"
        alt="Blå bakgrund, vita bokstäver ovanpå med texten TS">
    </div>
  `;
}
