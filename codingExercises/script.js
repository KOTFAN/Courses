
//Challenge #1

// let massMark = 78
// let heightMark = 1.69
// let massJohn = 92
// let heightJohn = 1.76

// let BMIMark = massMark / (heightMark * heightMark)
// let BMIJohn = massJohn / (heightJohn * heightJohn)

// console.log(BMIMark, BMIJohn)
// let markHigherBMI = BMIMark > BMIJohn;

// console.log(markHigherBMI)

////Challenge #2
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// console.log(BMIMark > BMIJohn ? `Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!` : `John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)

//Challenge #3

// const scoreDolphins = (96 + 108 + 89) / 3
// const scoreKoalas = (88 + 91 + 110) / 3

// console.log(scoreDolphins === scoreKoalas ? "Both win the trophy" : scoreDolphins > scoreKoalas ? "Dolphins win the trophy" : "Koalas win the trophy")

//Challenge #4
// const bill = 275;
// const tip = 50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.2


// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)



//Challenge #5
// const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3

// const scoreDolphins = calcAverage(44, 23, 71)
// const scoreKoalas = calcAverage(65, 54, 49)

// const checkWinner = (avgDolphins, avgKoalas) => {
//    if (avgDolphins >= 2 * avgKoalas) {
//       console.log(`Dolphins win (${avgKoalas} vs. ${avgDolphins})`)
//    } else if (avgKoalas >= 2 * avgDolphins) {
//       console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
//    }
//    else {
//       console.log("No team wins...")
//    }
// }



//Challenge #6

// let bills = [125, 555, 44];

// const calcTip = (bill) => {
//    return 50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.2
// }
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// console.log(tips)
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(totals)
// console.log(bills)



//Challenge #7
// const mark = {
//    fullName: "Mark Miller",
//    mass: 78,
//    height: 1.69,
//    calcBMI: function () {
//       this.bmi = this.mass / (this.height * this.height)
//       return this.bmi
//    }
// }

// const john = {
//    fullName: "John Smith",
//    mass: 92,
//    height: 1.95,
//    calcBMI: function () {
//       this.bmi = this.mass / (this.height * this.height)
//       return this.bmi
//    }
// }

// console.log(john.calcBMI() > mark.calcBMI() ? `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!` : `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)

//Challenge #8
// const calcTip = function (bill) {
//    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// let tips = []
// let totals = []


// for (let i = 0; i < bills.length; i++) {
//    tips.push(calcTip(bills[i]))
//    totals.push(bills[i] + tips[i])

// }



//Challenge #9

/*
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/


// const game = {
//    team1: 'Bayern Munich',
//    team2: 'Borrussia Dortmund',
//    players: [
//       [
//          'Neuer',
//          'Pavard',
//          'Martinez',
//          'Alaba',
//          'Davies',
//          'Kimmich',
//          'Goretzka',
//          'Coman',
//          'Muller',
//          'Gnarby',
//          'Lewandowski',
//       ],
//       [
//          'Burki',
//          'Schulz',
//          'Hummels',
//          'Akanji',
//          'Hakimi',
//          'Weigl',
//          'Witsel',
//          'Hazard',
//          'Brandt',
//          'Sancho',
//          'Gotze',
//       ],
//    ],
//    score: '4:0',
//    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//    date: 'Nov 9th, 2037',
//    odds: {
//       team1: 1.33,
//       x: 3.25,
//       team2: 6.5,
//    },
// };


// //is better
// const [players1, players2] = game.players


// const [gk1, ...fieldPlayers1] = players1
// const [gk2, ...fieldPlayers2] = players2

// const allPlayers = [...players1, ...players2]

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
// const players2Final = [...players2]

// const [team1, draw, team2] = [...Object.values(game.odds)]


// function printGoals() {
//    const goalsMade = arguments.length

//    const PlayersGoalsNums = {}

//    for (let player of arguments) {
//       if (PlayersGoalsNums[player]) {
//          ++PlayersGoalsNums[player]
//       } else {
//          PlayersGoalsNums[player] = 1
//       }
//    }

//    Object.freeze(PlayersGoalsNums)
//    for (let PlayerGoalsNum of Object.entries(PlayersGoalsNums)) {
//       console.log(`Player ${PlayerGoalsNum[0]} made ${PlayerGoalsNum[1]} of ${goalsMade} in this game!`)
//    }

// }

// const coefs = {
//    [team1]: [game.team1],
//    [team2]: [game.team2],
// }


// console.log(`Team ${coefs[String(Math.min(...(Object.keys(coefs).map((s) => parseFloat(s)))))]} has the biggest chanses to win this game`)

// printGoals()
// console.log(players1, players2)


//Challenge #10


/*
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// const game = {
//    team1: 'Bayern Munich',
//    team2: 'Borrussia Dortmund',
//    players: [
//       [
//          'Neuer',
//          'Pavard',
//          'Martinez',
//          'Alaba',
//          'Davies',
//          'Kimmich',
//          'Goretzka',
//          'Coman',
//          'Muller',
//          'Gnarby',
//          'Lewandowski',
//       ],
//       [
//          'Burki',
//          'Schulz',
//          'Hummels',
//          'Akanji',
//          'Hakimi',
//          'Weigl',
//          'Witsel',
//          'Hazard',
//          'Brandt',
//          'Sancho',
//          'Gotze',
//       ],
//    ],
//    score: '4:0',
//    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//    date: 'Nov 9th, 2037',
//    odds: {
//       team1: 1.33,
//       x: 3.25,
//       team2: 6.5,
//    },
// };


// function printGoals(...players) {
//    const goalsMade = players.length

//    const PlayersGoalsNums = {}


//    let goal = 0
//    for (let player of players) {
//       console.log(`${++goal} goal was made my ${player}`)
//       if (PlayersGoalsNums[player]) {
//          ++PlayersGoalsNums[player]
//       } else {
//          PlayersGoalsNums[player] = 1
//       }
//    }

//    Object.freeze(PlayersGoalsNums)
//    // for (let PlayerGoalsNum of Object.entries(PlayersGoalsNums)) {
//    //    console.log(`Player ${PlayerGoalsNum[0]} made ${PlayerGoalsNum[1]} of ${goalsMade} in this game!`)
//    // }

//    return PlayersGoalsNums;

// }

// console.log("Average coef is " + (Object.values(game.odds).reduce((a, v) => a + Number(v), 0) / Object.values(game.odds).length).toFixed(2));


// const scorers = printGoals(...game.scored)

// const { team1, x: draw, team2 } = { ...game.odds }

// const gameOdds = {
//    [game.team1]: team1,
//    'Draw': draw,
//    [game.team2]: team2,
// }

// for (let teamOdd of Object.entries(gameOdds)) {
//    console.log(`Odd on ${teamOdd[0]}: ${teamOdd[1]}`)
// }


//Challenge #11

/*
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//    [17, '⚽️ GOAL'],
//    [36, '🔁 Substitution'],
//    [47, '⚽️ GOAL'],
//    [61, '🔁 Substitution'],
//    [64, '🔶 Yellow card'],
//    [69, '🔴 Red card'],
//    [70, '🔁 Substitution'],
//    [72, '🔁 Substitution'],
//    [76, '⚽️ GOAL'],
//    [80, '⚽️ GOAL'],
//    [92, '🔶 Yellow card'],
// ]);

// //1.
// const events = [...new Set(gameEvents.values())]
// console.log(events)
// //2
// gameEvents.delete(64)

// //3
// const eventCounts = {}

// for (const [time, event] of gameEvents) {

//    if (eventCounts[event]) {
//       eventCounts[event]++
//    } else {
//       eventCounts[event] = 1
//    }
// }

// for (const [event, count] of Object.entries(eventCounts)) {


//    console.log(`An ${event} happened, on average, every ${Math.floor(90 / count)} minutes`)
// }


// //4
// gameEvents.forEach((v, k) => console.log(`${k < 45 ? '[FIRST HALF]' : '[SECOND HALF]'} ${k}:${v}`))



// Challenge #12

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/



// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// const textarea = document.querySelector('textarea')



// document.querySelector('button').addEventListener('click', () => {
//    const inputData = textarea.value.split('\n')
//    const res = []


//    for (const line of inputData) {
//       const lineData = line.toLowerCase().trim().split('_')
//       console.log(lineData)
//       const resLineArr = [];
//       for (let i = 0; i < lineData.length; i++) {
//          lineData[i] = lineData[i].trim()
//          if (lineData[i] !== '') {
//             if (i === 0) {
//                resLineArr.push(lineData[i])
//             } else {
//                resLineArr.push(lineData[i][0].toUpperCase() + lineData[i].slice(1))
//             }

//          }

//       }
//       res.push(resLineArr.join(''))
//    }
//    console.log(res.join('\n'))
// })


// Challenge #13


/*
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)

  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
GOOD LUCK 😀
*/

// const poll = {
//    question: 'What is your favourite programming language?',

//    options: [
//       '0: JavaScript',
//       '1: Python',
//       '2: Rust',
//       '3: C++'],
//    answers: new Array(4).fill(0),
//    registerNewAnswer() {
//       const favouriteProgramingLenguageNum = Number(window.prompt(this.question + '\n' + this.options.join('\n')))
//       if (this.options[favouriteProgramingLenguageNum]) {
//          this.answers[favouriteProgramingLenguageNum]++
//          this.displayResults('array')
//       }
//    },

//    displayResults(type = 'array') {
//       if (type === 'array') {
//          console.log(this.answers)
//       }
//       if (type === 'string') {
//          console.log(`Poll results are ${this.answers.join(' ')}`)
//       }
//    }
// }

// const answerThePool = document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))

// let someData = [1, 2, 3, , 4, 5, 6, 6, , 7, 7,]

// poll.displayResults.call({ answers: someData }, 'string')



// Challenge #14



/*
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
// */
// 'use strict';

// (function () {
//    const rgb = [0, 0, 0]
//    const header = document.querySelector('h1')
//    header.style.color = 'red';
//    document.body.addEventListener('click', () => {
//       header.style.color = `rgb(${rgb[0]++},${rgb[1]++},${rgb[2]++})`;
//       console.log(rgb);
//    })
// })()



//my bind
// const p1 = { name: 'Alex', age: 22, job: 'Frontend' }
// const p2 = { name: 'Leorio', age: 20, job: 'Medic' }

// function logP() {
//    console.log(`This is ${this.name}, i am ${this.age} years old, my job is ${this.job}`)
// }

// function bind(p, callback) {
//    return function () {
//       callback.apply(p)
//    }
// }

// let logAlex = bind(p1, logP)
// let logLeorio = bind(p2, logP)

// logLeorio()


// Coding Challenge #15

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each).
For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array,
 and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// function checkDogs(arr1, arr2) {
//    const allDodsArr = [...arr1.slice(1, -2), ...arr2]
//    console.log(arr1, arr2, allDodsArr)

//    const dogsBox = document.querySelector('.dogs-box')
//    dogsBox.innerHTML = '';

//    allDodsArr.forEach((age, i) => {
//       const dogTitle = age < 3 ? 'puppy' : 'adult'
//       const dogInfo = `Dog number ${i + 1} is an ${dogTitle}, and is ${age} years old`
//       console.log(dogInfo)

//       dogsBox.insertAdjacentHTML('beforeend', dogInfo + '<br>')

//    })

// }

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])



// Coding Challenge #16

/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = function (ages) {
//    let average = 0
//    const adultDogsAges = ages.map((age) => {
//       if (age <= 2) {
//          return 2 * age
//       } else {
//          return age * 4 + 16
//       }
//    }).filter((age) => age >= 18)

//    if (adultDogsAges.length) {
//       average = adultDogsAges.reduce((sum, age) => sum + age) / adultDogsAges.length
//    }


//    return average

// }

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])


// Coding Challenge #17
/*
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = ages => ages.map(age => (age <= 2) ? (2 * age) : (age * 4 + 16))
//    .filter((age) => age >= 18)
//    .reduce((sum, age, i, arr) => sum + age / arr.length, 0)


// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])


// Coding Challenge #18

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT:
 Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/
// const breeds = [
//    {
//       breed: 'German Shepherd',
//       averageWeight: 32,
//       activities: ['fetch', 'swimming'],
//    },
//    {
//       breed: 'Dalmatian',
//       averageWeight: 24,
//       activities: ['running', 'fetch', 'agility'],
//    },
//    {
//       breed: 'Labrador',
//       averageWeight: 28,
//       activities: ['swimming', 'fetch'],
//    },
//    {
//       breed: 'Beagle',
//       averageWeight: 12,
//       activities: ['digging', 'fetch'],
//    },
//    {
//       breed: 'Husky',
//       averageWeight: 26,
//       activities: ['running', 'agility', 'swimming'],
//    },
//    {
//       breed: 'Bulldog',
//       averageWeight: 36,
//       activities: ['sleeping'],
//    },
//    {
//       breed: 'Poodle',
//       averageWeight: 18,
//       activities: ['agility', 'fetch'],
//    },
// ];


// // 1
// const huskyWeight = breeds.find(({ breed }) => breed === 'Husky')?.averageWeight
// console.log(huskyWeight)
// //2
// const dogBothActivities = breeds.find(({ activities }) => activities.includes('running') && activities.includes('fetch'))?.breed
// console.log(dogBothActivities)
// //3
// const allActivities = breeds.flatMap((dog) => dog.activities)
// console.log(allActivities)
// //4
// const uniqueActivities = [...new Set(allActivities)]
// console.log(uniqueActivities)
// //5
// const swimmingAndOthers = new Set(breeds.filter((dog) => dog.activities.includes('swimming')).flatMap((swimDog) => swimDog.activities))
// swimmingAndOthers.delete('swimming')
// const swimmingAdjacent = [...swimmingAndOthers]
// console.log(swimmingAdjacent)
// //6
// const isAllDogsWeghtMoreThan10 = breeds.every(({ averageWeight }) => averageWeight >= 10)
// console.log(isAllDogsWeghtMoreThan10)
// //7
// const isSomeDogsAreActive = breeds.some(({ activities }) => activities.length >= 3)
// console.log(isSomeDogsAreActive)
// //bonus
// const dogsThatLikesFetching = breeds.filter(({ activities }) => activities.includes('fetch'))
// const biggestFetcher = dogsThatLikesFetching.reduce((acc, v) => v.averageWeight > acc.averageWeight ? v : acc, dogsThatLikesFetching[0]).breed
// console.log(biggestFetcher)


// Coding Challenge #19

/*
Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
*/


// const dogs = [
//    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//    { weight: 8, curFood: 200, owners: ['Matilda'] },
//    { weight: 13, curFood: 211, owners: ['Sarah', 'John', 'Leo'] },
//    { weight: 18, curFood: 244, owners: ['Joe'] },
//    { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// //1
// //can also be done by forEach
// for (const dog of dogs) {
//    dog.recFood = Math.floor(dog.weight ** 0.75 * 28)
// }
// console.log(dogs)
// //2

// //recFood*0.9 <= currFud >= recFood*1.1
// const SarahDog = dogs.find(({ owners }) => owners.includes('Sarah'))
// if (SarahDog.curFood >= SarahDog.recFood * 1.1) {
//    console.log('Sarah Dog eats to much')
// } else if (SarahDog.curFood <= SarahDog.recFood * 0.9) {
//    console.log('Sarah Dog eats to little')
// } else {
//    console.log('Sarah Dog eats normal')
// }
// console.log(SarahDog)

// //3
// const groupedDogs = Object.groupBy(dogs, ({ curFood, recFood }) => {
//    if (curFood >= recFood * 1.1) {
//       return 'tooMuchFood'
//    } if (curFood <= recFood * 0.9) {
//       return 'tooLittleFood'
//    }
//    return 'normal'
// });

// const ownersTooMuch = [...new Set(groupedDogs.tooMuchFood.flatMap(({ owners }) => owners))]
// const ownersTooLittle = [...new Set(groupedDogs.tooLittleFood.flatMap(({ owners }) => owners))]
// console.log(ownersTooMuch, ownersTooLittle)

// //4
// console.log(`${ownersTooMuch.join(' and ')}'s dogs eats too much!`)
// console.log(`${ownersTooLittle.join(' and ')}'s dogs eats too little!`)

// //5
// const isAnyDogEatsExactlyRec = dogs.some(({ recFood, curFood }) => recFood === curFood)
// console.log(isAnyDogEatsExactlyRec)

// //6
// const isAllDogEatsAnought = dogs.every(({ recFood, curFood }) => curFood >= recFood * 0.9 && curFood <= recFood * 1.1)
// console.log(isAllDogEatsAnought)

// //7
// const normalAmoungOfFoodDogs = groupedDogs.normal
// console.log(normalAmoungOfFoodDogs)

// //8
// const groupOfDogsByFoodAmoung = Object.groupBy(dogs, ({ curFood, recFood }) => {
//    if (curFood >= recFood * 1.1) return 'too-much'
//    if (curFood <= recFood * 0.9) return 'too-little'
//    if (curFood === recFood) return 'exact'
// });
// console.log(groupOfDogsByFoodAmoung)

// //9
// const groupOfDogsOwnersAmoung = Object.groupBy(dogs, ({ owners }) => {
//    return owners.length
// });
// console.log(groupOfDogsOwnersAmoung)

// //10
// const sortedDogs = dogs.toSorted((a, b) => a.recFood - b.recFood)
// console.log(dogs)
// console.log(sortedDogs)


// Coding Challenge #20

/*
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// const Car = function (make, speed) {
//    this.make = make;
//    this.speed = speed;
// }

// Car.prototype.accelerate = function () {
//    this.speed += 10
//    console.log(this.speed)
// }

// Car.prototype.brake = function () {
//    this.speed -= 5
//    console.log(this.speed)
// }


// const BMW = new Car('BMW', 120)
// const Mercedes = new Car('Mercedes', 95)

// BMW.accelerate()
// BMW.brake()

// Mercedes.brake()
// Mercedes.accelerate()



///////////////////////////////////////
// Coding Challenge #21

/*
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/


// class Car {
//    constructor(name, speed) {
//       this.name = name;
//       this.speed = speed;

//    }
//    accelerate() {
//       this.speed += 10
//       console.log(this.speed)
//    }

//    brake() {
//       this.speed -= 5
//       console.log(this.speed)
//    }

//    get speedUS() {
//       return this.speed / 1.6
//    }

//    set speedUS(newSpeed) {
//       this.speed = newSpeed * 1.6
//    }

//    static get description() {
//       return 'Simple car class'
//    }
// }

// const ford = new Car('Ford', 120)

// console.log(ford)



// Coding Challenge #22

/*
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/


// const Car = function (make, speed) {
//    this.make = make;
//    this.speed = speed;
// }

// Car.prototype.accelerate = function () {
//    this.speed += 10
//    console.log(this.speed)
// }

// Car.prototype.brake = function () {
//    this.speed -= 5
//    console.log(this.speed)
// }

// const ElectricCar = function (make, speed, charge) {
//    Car.call(this, make, speed)//we just call this function on {} and it give it properties from Car, just as function call but with this as {} from ElectricCar
//    this.charge = charge;

// }

// ElectricCar.prototype = Object.create(Car.prototype)
// ElectricCar.prototype.constructor = ElectricCar;

// ElectricCar.prototype.chargeBattery = function (chargeTo) {
//    this.charge = chargeTo;
//    console.log(this.make + ' was charged to ' + this.charge + '%')
// }

// ElectricCar.prototype.accelerate = function () {
//    this.charge -= 1;
//    this.speed += 20;
//    console.log(`${this.make} going at ${this.speed}km/h with charge of ${this.charge}`)
// }

// const tesla = new ElectricCar('Tesla', 120, 50)
// console.log(tesla)


///////////////////////////////////////
// Coding Challenge #23

/* 
1. Re-create challenge #22, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/


class CarCl {
   constructor(make, speed) {
      this.make = make;
      this.speed = speed;
   }
   accelerate() {
      this.speed += 10
      console.log(this.speed)
   }
   brake() {
      this.speed -= 5
      console.log(this.speed)
   }
}

class EVCl extends CarCl {
   #charge;
   constructor(make, speed, charge) {
      super(make, speed)
      this.#charge = charge;
   }
   chargeBattery(chargeTo) {
      this.#charge = chargeTo;
      console.log(this.make + ' was charged to ' + this.#charge + '%')
      return this;
   }
   accelerate() {
      this.#charge -= 1;
      this.speed += 20;
      console.log(`${this.make} going at ${this.speed}km/h with charge of ${this.#charge}`)
      return this;
   }
   brake() {
      this.speed -= 10;
      console.log(`${this.make} going at ${this.speed}km/h with charge of ${this.#charge}`)
      return this;
   }
}

const Rivian = new EVCl('Rivian', 120, 23)
