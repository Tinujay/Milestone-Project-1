// Define a variable to store the current question number, and a variable to store the user's score.
// Create an array of objects to represent the trivia questions, each containing the question text, a list of possible answers, and the correct answer.
// Write a function to display the current question and answer choices to the user.
// Add event listeners to the answer choices to allow the user to select an answer.
// Write a function to handle the user's selection and check if it is correct. If the answer is correct, increment the user's score and move on to the next question. If the answer is incorrect, display a message to the user and move on to the next question.
// When the game is finished, display the user's final score to them.
  
  




let questionText = document.querySelector('#questionText');
let scoreNumber = document.querySelector('#score');






let answers = true 
let questionCounter = 0 
let availableQuestions = []




let score = 0;
let question = document.querySelector('#question');
let choices = document.querySelectorAll('.choice-txt')

let questions = [
    {
      question: 'What is the capital of France?',
      choice1: 'Paris',
      choice2: 'London',
      choice3: 'Berlin',
      choice4: 'Rome',
      correctChoice: 'Paris'
    },
    {
      question: 'What is the highest mountain in the world?',
      choice1: 'Mount Everest',
      choice2: 'K2',
      choice3: 'Kilimanjaro',
      choice4: 'Denali',
      correctChoice: 'Mount Everest'
    }
  ]

let currentQuestionIndex = 0
let currentQuestion = questions[currentQuestionIndex] //index of each array

  
question.innerText = currentQuestion.question
  
choices.forEach(choice => {
let number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]
})



choices.forEach(choice => {
    choice.addEventListener('click', event => {
      let selectedChoice = event.target.innerText;
      if (selectedChoice === currentQuestion.correctChoice) {
        choice.classList.add('correct');
        setTimeout(nextQuestion, 1000);
        // proceed to the next question after 1 sec
      } else {
        // highlight the choice in red for incorrect answer
        choice.classList.add('incorrect');
      }
    });
  });


  function nextQuestion() {
    // remove the correct or incorrect class from the selected choice
    choices.forEach(choice => choice.classList.remove('correct', 'incorrect'));
  
    // increment the currentQuestionIndex and update the currentQuestion
    currentQuestionIndex++;
    currentQuestion = questions[currentQuestionIndex];
  
    // update the question and choices on the page
    question.innerText = currentQuestion.question;
    choices.forEach(choice => {
      let number = choice.dataset['number'];
      choice.innerText = currentQuestion['choice' + number];
    });
  }
 
  
  
  
  
  
  
