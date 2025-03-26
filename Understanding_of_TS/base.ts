console.log("Hello TypeScript's World")


let userName: string;
userName = 'KOTFAN';
let direction: 'left' | 'right' | 'up' | 'down';
direction = 'down'
// direction = 'j'

console.log(direction)



const user: {
   name: string | undefined,
   age: number | undefined,
} = {
   name: 'Kotfan',
   age: 20,
}

console.log(user)


let v: {};
v = 'not null or undefined'
v = true



enum DaysOfTheWeek {
   Monday = 'Monday',
   Tuesday = 'Tuesday',
   Wednesday = 'Wednesday',
   Thursday = 'Thursday',
   Friday = 'Friday1',
   Saturday = 'Saturday',
   Sunday = 'Sunday',
}

type Role = 'admin' | 'editor' | 'guest' | 'blocked';

let UserRole: Role = 'blocked';

console.log(UserRole)




function showError(errorMesage: string): never {
   console.log(errorMesage);
   throw new Error(errorMesage);
}

function log(message: string) {
   console.log(message)
}

function add(a: number, b: number): number {
   return a + b;
}

// let a = showError('asdfghjkl')
// console.log(a)


function sendRequest(cb: (m: string) => void) {
   cb('Request done')
}


sendRequest(log)