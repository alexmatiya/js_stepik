// Перед вами программа, которая запрашивает у пользователя строку, а затем выводит каждый символ этой строки на отдельной строке в нижнем регистре. Вставьте вместо многоточия верное выражение.
const prompt = require("prompt-sync")();

const sentence = prompt();
for (let i = 0; i < sentence.length; i++) {
    console.log(sentence[i].toLowerCase());
}