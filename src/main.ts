import displayQuestion from './answerCurrentQuestion';
import './scss/style.scss'; // Importera huvud-SCSS-filen

/**
 * Här definierar vi en mall för hur vi vill att vår array ska se ut.
 * Ett så kallat "interface".
 * Den är för att garantera att ALLA objekt i vår array har samtliga egenskaper.
 * Prova t.ex. att lägga till en egenskap i interfacet, och notera hur arrayen nedanför
 * får rödmarkeringar där denna egenskap saknas.
 */
export interface QuizQuestion {
  question: string;
  answerOption1: string;
  answerOption2: string;
  answerOptionX: string;
  correctAnswer: string;
}

// Här skriver vi att vår array med namnet myExampleArray ska följa reglerna (interfacet)
// i IExampleArray och att det är en array genom att vi sätter [] efter
export let newQuizBox: QuizQuestion[] = [
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
  {
    question: 'Vilken stad kommer Beatles från?',
    answerOption1: 'Liverpool',
    answerOptionX: 'London',
    answerOption2: 'Sheffield',
    correctAnswer: 'Liverpool',
  },
  {
    question: 'Vem vann Eurovision Song Contest år 2012?',
    answerOption1: 'Måns Zelmerlöv',
    answerOptionX: 'Loreen',
    answerOption2: 'Charlotte Perrelli',
    correctAnswer: 'Loreen',
  },
  {
    question: 'I filmen ”Tillbaka till framtiden” stannade den stora klockan. Varför?',
    answerOption1: 'Det blev strömavbrott.',
    answerOptionX: 'Någon kastade en sten på den.',
    answerOption2: 'Blixten slog ner i den.',
    correctAnswer: 'Blixten slog ner i den.',
  },
  {
    question: 'Vad var David Bowies riktiga namn?',
    answerOption1: 'David Smith',
    answerOptionX: 'David Jones',
    answerOption2: 'David Fowles',
    correctAnswer: 'David Jones',
  },
  {
    question: 'Vad hette rockgruppen Europe när de bildades 1978, innan de bytte namn?',
    answerOption1: 'Force',
    answerOptionX: 'Enigma',
    answerOption2: 'Dragons Lair',
    correctAnswer: 'Force',
  },
];

window.onload = () => {
  displayQuestion();
};
