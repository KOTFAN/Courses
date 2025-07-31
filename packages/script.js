import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

const a = { b: 12, c: { d: 3, a: 5 } };
const b = cloneDeep(a);
a.b = 100;
console.log(a, b);

console.log("23456");
