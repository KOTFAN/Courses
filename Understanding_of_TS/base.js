console.log("Hello TypeScript's World");
var userName;
userName = 'KOTFAN';
var direction;
direction = 'down';
// direction = 'j'
console.log(direction);
var user = {
    name: 'Kotfan',
    age: 20,
};
console.log(user);
var v;
v = 'not null or undefined';
v = true;
var DaysOfTheWeek;
(function (DaysOfTheWeek) {
    DaysOfTheWeek["Monday"] = "Monday";
    DaysOfTheWeek["Tuesday"] = "Tuesday";
    DaysOfTheWeek["Wednesday"] = "Wednesday";
    DaysOfTheWeek["Thursday"] = "Thursday";
    DaysOfTheWeek["Friday"] = "Friday1";
    DaysOfTheWeek["Saturday"] = "Saturday";
    DaysOfTheWeek["Sunday"] = "Sunday";
})(DaysOfTheWeek || (DaysOfTheWeek = {}));
var UserRole = 'blocked';
console.log(UserRole);
function showError(errorMesage) {
    console.log(errorMesage);
    throw new Error(errorMesage);
}
function log(message) {
    console.log(message);
}
function add(a, b) {
    return a + b;
}
// let a = showError('asdfghjkl')
// console.log(a)
function sendRequest(cb) {
    cb('Request done');
}
sendRequest(log);
var someValue = "123";
var strLength = someValue.length;
console.log(strLength);
var kotfan = {
    name: 'Kotfan',
    age: 20,
    role: 'admin'
};
var Olex = {
    name: 'Olex',
    bornAt: 1999,
    takeBooks: ["Solo Levelitg 1st book", "ddd"],
    isBaned: false,
};
var Vlad = {
    name: 'Vlad',
    bornAt: 1009,
    takeBooks: ["Bible", "Codex Gigas"],
    isBaned: true,
};
var Sasha = {
    name: "Sasha",
    bornAt: 2000,
    takeBooks: [],
    isOnline: true,
    onlineBooks: [],
    role: 'admin'
};
console.log(Sasha);
