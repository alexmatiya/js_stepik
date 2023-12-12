// Напишите программу, которая запрашивает у пользователя ввести строку и символ. Программа должна подсчитать, сколько раз данный символ встречается в введенной строке, а затем вывести это количество.

const prompt = require("prompt-sync")();

const words = prompt()
let symbol = prompt()

countSymbols = 0

for (let i = 0; i < words.length; i++) {
    if (words[i] === symbol) {
        countSymbols++
    }
}
console.log(`Символ "${symbol}" встречается ${countSymbols} раз(-а)`)