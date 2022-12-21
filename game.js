let questions = [
    {
        question: 'Which fast food restaurant has the largest number of retail locations in the world?',
        choice1: 'Subway',
        choice2: 'McDonalds',
        choice3: 'Burger King',
        choice4: 'KFC',
        correctChoice: 'Subway'
        },
    {
        question: 'What is the largest organ in the human body?',
        choice1: 'Liver',
        choice2: 'Skin',
        choice3: 'Heart',
        choice4: 'Brain',
        correctChoice: 'Skin'
        },
    
    {
        question: 'What is the highest-grossing video game franchise to date?',
        choice1: 'Mario',
        choice2: 'Pokemon',
        choice3: 'Call of Duty',
        choice4: 'Street Fighter',
        correctChoice: 'Pokemon'
        },
    
    {
        question: 'What is the chemical symbol for the element sodium?',
        choice1: 'Na',
        choice2: 'Mg',
        choice3: 'Ca',
        choice4: 'K',
        correctChoice: 'Na'
        },
    {
        question: 'What is the largest ocean in the world?',
        choice1: 'Indian Ocean',
        choice2: 'Atlantic Ocean',
        choice3: 'Pacific Ocean',
        choice4: 'Arctic Ocean',
         correctChoice: 'Pacific Ocean'
        },
    {
        question: 'Which countrys national animal is a unicorn?',
        choice1: 'Scotland',
        choice2: 'Denmark',
        choice3: 'New Zealand',
        choice4: 'France',
        correctChoice: 'Scotland'
        },
    {
        question: 'Which Avenger other than Captain America was able to pick up Thors Mjolnir in the Marvel movies?',
        choice1: 'Wanda',
        choice2: 'Hulk',
        choice3: 'Doctor Strange',
        choice4: 'Vision',
        correctChoice: 'Vision'
        },
    {
        question: 'Which sea creature has three hearts?',
        choice1: 'Jellyfish',
        choice2: 'Shark',
        choice3: 'Octopus',
        choice4: 'Stingray',
        correctChoice: 'Octopus'
        },
    {
        question: 'What is the national alcoholic beverage of America?',
        choice1: 'Rye',
        choice2: 'Bourbon',
        choice3: 'Whiskey',
        choice4: 'Cognac',
        correctChoice: 'Bourbon'
        },
    
    {
        question: 'What is the hardest natural substance in the world?',
        choice1: 'Granite',
        choice2: 'Marble',
        choice3: 'Diamond',
        choice4: 'Iron',
        correctChoice: 'Diamond'
        },      
]  
      


let score = 0;
let currentQuestionIndex = 0;
      
      
const question = document.querySelector('#question');
const choices = document.querySelectorAll('.choice-txt');
const time = document.querySelector('#timer');
const scoreNumber = document.querySelector('.scoreNumber');
const gameOverScreen = document.querySelector('#game-over');
const finalScore = document.querySelector('#final-score');


let currentQuestion = questions[currentQuestionIndex];

      


let timerInterval;

function displayQuestion() {
  choices.forEach(choice =>
    choice.classList.remove('incorrect'));
    question.innerText = currentQuestion.question;
    choices.forEach(choice => {
    let number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number];
  });
  // start the timer
  let timer = 10; // set the timer to 10 seconds
  timerInterval = setInterval(function() {
    timer--; // decrement the timer by 1 second
    time.innerText = `Time remaining: ${timer} seconds`;
    if (timer === 0) {
      clearInterval(timerInterval); // stop the timer
      nextQuestion(); // proceed to the next question
    }
  }, 1000); // run the timer function every 1 second

}
displayQuestion()





function nextQuestion() {
  clearInterval(timerInterval); // stop the timer
  choices.forEach(choice => {
  choice.classList.remove('incorrect');
  choice.classList.remove('correct');
  }); // clear the incorrect class from the choices
  document.querySelector('#result').innerText = ""; // clear the incorrect/correct result text
  currentQuestionIndex++; // increment the current question index
  currentQuestion = questions[currentQuestionIndex];
  if (currentQuestionIndex < questions.length) {
    // if there are more questions, display the next question
    displayQuestion();
  } else {
    // if there are no more questions, show the game over screen
    gameOverScreen.classList.remove('d-none');
    finalScore.innerText = score;
  }
}

choices.forEach(choice => {  
  choice.addEventListener('click', event => {
    let selectedChoice = choice.innerText;
    if (selectedChoice === currentQuestion.correctChoice) {
      choice.classList.add('correct');
      document.querySelector('#result').innerText = "Correct!";
      score = Number(score); // convert score to a number
      score += 10; // add 10 points to the score
      scoreNumber.innerText = score; //updates the score on screen 
      setTimeout(function(){
        nextQuestion(); // proceed to the next question with a delay
      }, 1000);
    } else {
      // highlight the choice in red for incorrect answer
      choice.classList.add('incorrect');
      document.querySelector('#result').innerText = "Incorrect!";
      score = Number(score); // convert score to a number
      score -= 10; // subtract 10 points from the score
      scoreNumber.innerText = score; // update the score on the page
    }
  });
});








// function gameOver() {
  //   gameOverScreen.style.display = 'block';
  //   finalScore.innerText = score;
  // }
  
  
  
  // choices.forEach(choice => {   *****************
  //   choice.addEventListener('click', event => {
//     let selectedChoice = choice
//     clearInterval(timer);
//     let selectedChoice = e.target;
//     let correct = selectedChoice.dataset['correct'] === 'true';
//     setStatusClass(document.body, correct);
//     Array.from(choices).forEach(choice => {
//       setStatusClass(choice, choice.dataset['correct'] === 'true');
//     });
//     if (correct) {
//       score += 10;
//       scoreNumber.innerText = score;
//       nextQuestion();
//     } else {
//       score -= 10;
//       scoreNumber.innerText = score;
//       gameOver();
//     }
//   });
// // });












        

  





      

  
  










