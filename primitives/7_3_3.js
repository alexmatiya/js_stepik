// Напишите программу, которая запрашивает у пользователя ввод произвольной строки, а затем выводит каждый второй символ этой строки на отдельной строке в верхнем регистре.

const prompt = require("prompt-sync")();

const words = prompt()

for (let i = 1; i < words.length; i+=2) {
    console.log(words[i].toLocaleUpperCase())
}
