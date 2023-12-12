// Напишите программу, которая запрашивает у пользователя строку и затем выводит эту строку в обратном порядке и в нижнем регистре.

const prompt = require("prompt-sync")();

const words = prompt()

const reversedStr = words.split('').reverse().join('');

console.log(reversedStr.toLowerCase());