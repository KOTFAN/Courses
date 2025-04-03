'use strict'

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



document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const textarea = document.querySelector('textarea')



document.querySelector('button').addEventListener('click', () => {
   const inputData = textarea.value.split('\n')
   const res = []


   for (const line of inputData) {
      const lineData = line.toLowerCase().trim().split('_')
      console.log(lineData)
      const resLineArr = [];
      for (let i = 0; i < lineData.length; i++) {
         lineData[i] = lineData[i].trim()
         if (lineData[i] !== '') {
            if (i === 0) {
               resLineArr.push(lineData[i])
            } else {
               resLineArr.push(lineData[i][0].toUpperCase() + lineData[i].slice(1))
            }

         }

      }
      res.push(resLineArr.join(''))
   }
   console.log(res.join('\n'))
})

