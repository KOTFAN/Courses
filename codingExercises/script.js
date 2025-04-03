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


const game = {
   team1: 'Bayern Munich',
   team2: 'Borrussia Dortmund',
   players: [
      [
         'Neuer',
         'Pavard',
         'Martinez',
         'Alaba',
         'Davies',
         'Kimmich',
         'Goretzka',
         'Coman',
         'Muller',
         'Gnarby',
         'Lewandowski',
      ],
      [
         'Burki',
         'Schulz',
         'Hummels',
         'Akanji',
         'Hakimi',
         'Weigl',
         'Witsel',
         'Hazard',
         'Brandt',
         'Sancho',
         'Gotze',
      ],
   ],
   score: '4:0',
   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
   date: 'Nov 9th, 2037',
   odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
   },
};



const players1 = [...game.players[0]]
const players2 = [...game.players[1]]

const [gk1, ...fieldPlayers1] = players1
const [gk2, ...fieldPlayers2] = players2

const allPlayers = [...players1, ...players2]

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
const players2Final = [...players2]

const [team1, draw, team2] = [...Object.values(game.odds)]


function printGoals() {
   const goalsMade = arguments.length

   const PlayersGoalsNums = {}

   for (let player of arguments) {
      if (PlayersGoalsNums[player]) {
         ++PlayersGoalsNums[player]
      } else {
         PlayersGoalsNums[player] = 1
      }
   }

   Object.freeze(PlayersGoalsNums)
   for (let PlayerGoalsNum of Object.entries(PlayersGoalsNums)) {
      console.log(`Player ${PlayerGoalsNum[0]} made ${PlayerGoalsNum[1]} of ${goalsMade} in this game!`)
   }

}

const coefs = {
   [team1]: [game.team1],
   [team2]: [game.team2],
}


console.log(`Team ${coefs[String(Math.min(...(Object.keys(coefs).map((s) => parseFloat(s)))))]} has the biggest chanses to win this game`)

printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels', 'Hummels')


//Challenge #10



//Challenge #11



//Challenge #12