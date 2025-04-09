let arr = ["non", "asal", "banan", "olma", "Aziza", "gul", "mashina"];

let wordsWithN = [];
let wordsWithoutN = [];

for (let word of arr) {
  if (word.includes("n")) {
    wordsWithN.push(word);
  } else {
    wordsWithoutN.push(word);
  }
}

console.log("n harfi ishtirok etgan sozlar:", wordsWithN);
console.log("n harfi ishtirok etmagan sozlar:", wordsWithoutN);