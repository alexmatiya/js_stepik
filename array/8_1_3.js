// Создайте массив users, запросите у пользователя ввод трех имен и добавьте их в массив. Затем выведите 1-й и 3-й элемент массива в заявленном формате.

const prompt = require("prompt-sync")();


users = [prompt(), prompt(), prompt()]

console.log(`${users[0]} и ${users[2]}`)