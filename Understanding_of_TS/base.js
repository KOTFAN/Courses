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
