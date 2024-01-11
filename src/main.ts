import displayQuestion from './answerCurrentQuestion';
import './scss/style.scss';
import startQuiz from './timeCount';


const addButton = document.getElementById('addButton');
addButton?.addEventListener('click', addPlayerName);
function addPlayerName(): void {
  let inputElement = document.getElementById('nameInput') as HTMLInputElement;
  playerArray.playerName = inputElement.value;
  inputElement.value = '';
}

interface player {
  playerName: string;
  playerScore: number;
}

export let playerArray: player = {
  playerName: '',
  playerScore: 0,
};

function highScore(points: number, time: number, name: string) {
  function removeDotFromNumber(num: number): string {
    const numStr = num.toString();
    return numStr.split('.')[0];
  }
  let score = (points / time) * 10000;
  console.log(`${name} - ${removeDotFromNumber(score)}`);
}
highScore(10, 100, 'Adam');

export interface QuizQuestion {
  question: string;
  answerOption1: string;
  answerOption2: string;
  answerOptionX: string;
  correctAnswer: string;
}

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
    correctAnswer: 'Avatar',
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
  {
    question: 'Vilken skådespelare spelar Tony Stark, också känd som Iron Man, i Marvel Cinematic Universe?',
    answerOption1: 'Robert Downey Jr.',
    answerOptionX: 'Chris Evans',
    answerOption2: 'Mark Ruffalo',
    correctAnswer: 'Robert Downey Jr.',
  },
  {
    question:
      'I "World of Warcraft" finns det två grupper som spelarna kan välja att tillhöra. Vad heter dessa två grupper?',
    answerOption1: 'Horde och Order',
    answerOptionX: 'Horde och Alliance.',
    answerOption2: 'Alliance och Faction',
    correctAnswer: 'Horde och Alliance.',
  },
  {
    question: 'Vad är namnet på den mest kända spelstaden för Alliance i "World of Warcraft"?',
    answerOption1: 'Undercity',
    answerOptionX: 'Stormwind',
    answerOption2: 'Orgrimmar',
    correctAnswer: 'Stormwind',
  },
  {
    question:
      'Vilken karaktär i TV-serien ”The Vampire Diaries” är den första hybriden och vem är skådepelaren bakom denna roll? ',
    answerOption1: 'Elijah Mikaelson, spelad av Daniel Gillies',
    answerOptionX: 'Klaus Mikaelson, spelad av Joseph Morgan',
    answerOption2: 'Damon Salvatore och spelas av Ian somerholder',
    correctAnswer: 'Klaus Mikaelson, spelad av Joseph Morgan',
  },
  {
    question: 'I vilken TV-serie är en svensk skådespelare med?',
    answerOption1: 'The Originals',
    answerOptionX: 'True Blood',
    answerOption2: 'Buffy the Vampire Slayer',
    correctAnswer: 'True Blood',
  },
  {
    question: 'Vilken film regisserades av Christopher Nolan och involverar drömmar inom drömmar?',
    answerOption1: 'Inception',
    answerOptionX: 'Interstellar',
    answerOption2: 'The Dark Knight',
    correctAnswer: 'Inception',
  },
  {
    question: 'I vilken film uttalar Arnold Schwarzenegger den berömda repliken "I\'ll be back"?',
    answerOption1: 'Predator',
    answerOptionX: 'Terminator',
    answerOption2: 'Total Recall',
    correctAnswer: 'Terminator',
  },
  {
    question: 'Vilken film från 1997, regisserad av James Cameron, handlar om en olycka med ett berömt skepp?',
    answerOption1: 'The Abyss',
    answerOptionX: 'Titanic',
    answerOption2: 'Avatar',
    correctAnswer: 'Titanic',
  },
  {
    question: 'Vem spelade huvudrollen i filmen "Pirates of the Caribbean" som Kapten Jack Sparrow?',
    answerOption1: 'Orlando Bloom',
    answerOptionX: 'Johnny Depp',
    answerOption2: 'Geoffrey Rush',
    correctAnswer: 'Johnny Depp',
  },
  {
    question:
      'Vilken film av Quentin Tarantino handlar om en grupp judiska amerikanska soldater under Andra Världskriget?',
    answerOption1: 'Django Unchained',
    answerOptionX: 'Inglourious Basterds',
    answerOption2: 'Pulp Fiction',
    correctAnswer: 'Inglourious Basterds',
  },
  {
    question: 'I vilken filmserie finns en ring som måste förstöras för att besegra ondskan?',
    answerOption1: 'Harry Potter',
    answerOptionX: 'Sagan om ringen',
    answerOption2: 'The Hunger Games',
    correctAnswer: 'Sagan om ringen',
  },
  {
    question: 'Vem regisserade filmen "Psycho", som är känd för sin duschscen?',
    answerOption1: 'Alfred Hitchcock',
    answerOptionX: 'Stanley Kubrick',
    answerOption2: 'Martin Scorsese',
    correctAnswer: 'Alfred Hitchcock',
  },
  {
    question: 'Vilken film, baserad på en bok av J.K. Rowling, introducerar karaktären Harry Potter?',
    answerOption1: 'Harry Potter och Hemligheternas kammare',
    answerOptionX: 'Harry Potter och De vises sten',
    answerOption2: 'Harry Potter och Fången från Azkaban',
    correctAnswer: 'Harry Potter och De vises sten',
  },
  {
    question: 'Vem spelade huvudrollen i "The Matrix" som Neo?',
    answerOption1: 'Keanu Reeves',
    answerOptionX: 'Brad Pitt',
    answerOption2: 'Will Smith',
    correctAnswer: 'Keanu Reeves',
  },
  {
    question: 'Vilken animerad film från Disney släpptes 1994 och handlar om en ung lejonkung?',
    answerOption1: 'Aladdin',
    answerOptionX: 'Lejonkungen',
    answerOption2: 'Skönheten och odjuret',
    correctAnswer: 'Lejonkungen',
  },
];

window.onload = () => {
  displayQuestion();

  const startBtn: HTMLButtonElement | null = document.querySelector('#start-btn');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      startQuiz();
    });
  }
};
