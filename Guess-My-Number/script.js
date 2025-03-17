'use strict';
const getRandomValueBetwen = (min, max) => {
   return Math.floor(Math.random() * (max - min) + min + 1)
}



//data 
let guessDiapazone = [-1000, 1000]
let secretNum = getRandomValueBetwen(guessDiapazone[0], guessDiapazone[1])
let score = 20;
let highScore = 0;


//page content
const guessInput = document.querySelector('.guess');
const hiddenNum = document.querySelector('.number');
const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const body = document.querySelector('body');
const pageScore = document.querySelector('.score');
const pageHighScore = document.querySelector('.highscore');
const guesFrom = document.querySelector('.diapFrom')
const guesTo = document.querySelector('.diapTo')


//some deafalt values
guessInput.value = 0
pageScore.textContent = score;
guesFrom.textContent = guessDiapazone[0]
guesTo.textContent = guessDiapazone[1]



//game functional
checkBtn.addEventListener('click', () => {
   let userGuess = Number(guessInput.value)

   if (score <= 1) {
      message.textContent = "you lost😭";
      score = 0;
      pageScore.textContent = score;
      return;
   }


   score--

   if (userGuess < guessDiapazone[0] || userGuess > guessDiapazone[1]) {
      message.textContent = "Not even close😂"

   }
   else if (userGuess < secretNum) {
      message.textContent = "It's Bigger📈"

   }
   else if (userGuess > secretNum) {
      message.textContent = "It's Lower📉"

   }
   else if (userGuess === secretNum) {
      message.textContent = "You did it🎉🎉🎉"
      hiddenNum.textContent = secretNum
      body.style = 'background-color: #34ae0f'


      if (score > highScore) {
         highScore = score;
         pageHighScore.textContent = highScore;
      }
      checkBtn.disabled = true;
   }

   pageScore.textContent = score;
})

//play again functional
againBtn.addEventListener('click', () => {
   score = 20;
   pageScore.textContent = score;
   secretNum = getRandomValueBetwen(guessDiapazone[0], guessDiapazone[1])
   checkBtn.disabled = false;
   body.style = 'background-color: #222'
   message.textContent = "Start guessing..."
   hiddenNum.textContent = '?'
   guessInput.value = 0
})
