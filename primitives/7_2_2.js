// Напишите программу, которая запрашивает ввод строки. Если эта строка содержит символ "д" или символ "н", то программа выводит всю строку в верхнем регистре, а иначе выводится строка в нижнем регистре.

const prompt = require("prompt-sync")();

let word = prompt()

if (word.includes("д") || word.includes("н")) {
    res = word.toUpperCase()
    console.log(res)
}
else {
    res = word.toLowerCase()
    console.log(res)
}