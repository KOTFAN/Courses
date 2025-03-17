'use strict';


//data 
let idGameRuned = true;
let secretNum = Math.floor(Math.random() * 20 + 1)
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


guessInput.value = 0

// console.log(secretNum)

checkBtn.addEventListener('click', () => {
   let userGuess = Number(guessInput.value)

   if (score <= 1) {
      message.textContent = "you lost😭";
      score = 0;
      pageScore.textContent = score;
      return;
   }

   score--
   if (userGuess > 20 || userGuess < 1) {
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



console.log(againBtn)
againBtn.addEventListener('click', () => {
   score = 20;
   pageScore.textContent = score;
   secretNum = Math.floor(Math.random() * 20 + 1)
   checkBtn.disabled = false;
   body.style = 'background-color: #222'
   message.textContent = "Start guessing..."
   hiddenNum.textContent = '?'
})
