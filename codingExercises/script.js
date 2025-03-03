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

let bills = [125, 555, 44];

const calcTip = (bill) => {
   return 50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.2
}
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(tips)
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(totals)
console.log(bills)