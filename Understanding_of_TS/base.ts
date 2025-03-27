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



let someValue: any = "123";
let strLength: number = (someValue as string).length;
console.log(strLength);



type networkUser = {
   name: string;
   age: number;
   role?: Role
}

const kotfan: networkUser = {
   name: 'Kotfan',
   age: 20,
   role: 'admin'
}


interface LibreryUser {
   name: string,
   bornAt: number,
   takeBooks: string[]
}


let Olex: LibreryUser = {
   name: 'Olex',
   bornAt: 1999,
   takeBooks: ["Solo Levelitg 1st book", "ddd"],
   isBaned: false,
}


interface LibreryUser {
   name: string,
   bornAt: number,
   takeBooks: string[],
   isBaned?: boolean,
}


let Vlad: LibreryUser = {
   name: 'Vlad',
   bornAt: 1009,
   takeBooks: ["Bible", "Codex Gigas"],
   isBaned: true,
}



interface LibreryInternetUser extends LibreryUser {
   isOnline: boolean;
   onlineBooks: string[];
   role: Role;
}


let Sasha: LibreryInternetUser = {
   name: "Sasha",
   bornAt: 2000,
   takeBooks: [],
   isOnline: true,
   onlineBooks: [],
   role: 'admin'
}



console.log(Sasha)



type Person = {
   firstName: string;
   lastName: string;
};

type Employee = Person & {
   company: string;
   employeeId: number;
};




let ALFRED: Employee = {
   firstName: 'alfred',
   lastName: 'jecson',
   company: 'Leetcode',
   employeeId: 9999
}


