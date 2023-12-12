// Создайте массив users, запросите у пользователя ввод двух имен и добавьте их в массив. Затем выведите обновленный массив

const prompt = require("prompt-sync")();

name1 = prompt()
name2 = prompt()
users = [name1, name2]

console.log(users)