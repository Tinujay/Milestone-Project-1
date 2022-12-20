// Define a variable to store the current question number, and a variable to store the user's score.
// Create an array of objects to represent the trivia questions, each containing the question text, a list of possible answers, and the correct answer.
// Write a function to display the current question and answer choices to the user.
// Add event listeners to the answer choices to allow the user to select an answer.
// Write a function to handle the user's selection and check if it is correct. If the answer is correct, increment the user's score and move on to the next question. If the answer is incorrect, display a message to the user and move on to the next question.
// When the game is finished, display the user's final score to them.
  
  




let question = document.querySelector('#question');
let choices = document.querySelectorAll('.choice-txt')
let scoreNumber = document.querySelector('#score');


let gameOverScreen = document.querySelector('#game-over');
let finalScore = document.querySelector('#final-score');
let restartButton = document.querySelector('#restart-button');
let time = document.querySelector('#timer');


let score = 0;


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


    let currentQuestionIndex = 0
    let currentQuestion = questions[currentQuestionIndex] //index of each array 

    question.innerText = currentQuestion.question

    choices.forEach(choice => {
    let number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })
    

    startTimer()


    choices.forEach(choice => {
        choice.addEventListener('click', event => {
          let selectedChoice = choice.innerText;
          if (selectedChoice === currentQuestion.correctChoice) {
            choice.classList.add('correct');
            score = Number(score); // convert score to a number
            score += 10; // add 5 points to the score
            nextQuestion(); // proceed to the next question
          } else {
            // highlight the choice in red for incorrect answer
            choice.classList.add('incorrect');
            score = Number(score); // convert score to a number
            score -= 10; // subtract 5 points from the score
          }
          scoreNumber.innerText = score; // update the score on the page
        });
      });


    
      
      function startTimer() {              
        let timer = 10; // set the timer to 10 seconds
        let timerInterval = setInterval(function() {
          timer--; // decrement the timer by 1 second
          time.innerText = `Time remaining: ${timer} seconds`;
          if (timer === 0) {
            clearInterval(timerInterval); // stop the timer
            nextQuestion(); // proceed to the next question
          }
        }, 1000); // run the timer function every 1 second
      }


      
      function nextQuestion() {
        currentQuestionIndex++; // move to the next question
        if (currentQuestionIndex === questions.length) {
          // all questions have been displayed, show the game over screen
          gameOverScreen.style.display = 'block';
          finalScore.innerText = `Your final score is ${score}`;
        } else {
          // display the next question
          currentQuestion = questions[currentQuestionIndex];
          question.innerText = currentQuestion.question;
          choices.forEach(choice => {
            let number = choice.dataset['number'];
            choice.innerText = currentQuestion['choice' + number];
            choice.classList.remove('correct', 'incorrect');
          });
          
          startTimer()// start the timer for the next question
        }
      }
      

  
  










