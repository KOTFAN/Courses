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
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

console.log(BMIMark > BMIJohn ? `Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!` : `John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)

