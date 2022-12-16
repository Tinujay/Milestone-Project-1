   let question = document.querySelector('#question');
   let choices = Array.from(document.querySelectorAll('.choice-txt'));
   let progressText = document.querySelector('#progressText');
   let scoreText = document.querySelector('#score');
   let progessBarFull = document.querySelector('#progressBarFull');


   let currentQuestion = {}
   let answers = true 
   let score = 0 
   let questionCounter = 0 
   let availableQuestions = []


   let questions = [
    {
        question: "What year was John F. Kennedy assassinated?",
        choice1: '1963', 
        choice2: '1955', 
        choice3: '1972', 
        choice4: '1965',
        answer: 1,
    },
    {
        question: "Who built the first car in America?",
        choice1: 'Andrew Carnegie', 
        choice2: 'Karl Benz', 
        choice3: 'Henry Ford', 
        choice4: 'Cornelius Vanderbilt',
        answer: 3,
    }
   ]

let SCORE_POINTS = 100
let MAX_QUESTIONS = 2
   

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    let questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        let number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false 
        let selectedChoice = e.target
        let selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : "incorrect"

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)
        
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()