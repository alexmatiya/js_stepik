// Напишите программу, которая запрашивает у пользователя число и объявляет стрелочную функцию, которая принимает число в качестве параметра и возвращает куб этого числа.

const prompt = require("prompt-sync")();

let num = Number(prompt());

let getExtend3 = a => a ** 3

console.log(getExtend3(num))