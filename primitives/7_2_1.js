// Попросите пользователя ввести строку. Если длина строки меньше 5 символов, добавьте к строке "!" и выведите результат, иначе добавьте к строке "?" и также выведите результат.

const prompt = require("prompt-sync")();

let word = prompt()

if (word.length < 5) {
    console.log(`${word}!`)
}
else {
    console.log(`${word}?`)
}