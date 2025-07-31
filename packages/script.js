import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

const a = { b: 12, c: { d: 3, a: 5 } };
const b = cloneDeep(a);
a.b = 100;
console.log(a, b);

console.log("23456");

const anime = "One Panch Man";
fetch("https://api.animechan.io/v1/anime/One Piece")
  .then((res) => {
    console.log(res);
    if (res.ok) {
      return res.json();
    }
  })
  .then((data) => console.log(data.data.summary))
  .catch((err) => console.error(err));
