// Перепишите код из предыдущего шага, используя стрелочные функции.

const prompt = require("prompt-sync")();


let a = Number(prompt());

let isEven = a => a % 2 === 0

console.log(isEven(a))