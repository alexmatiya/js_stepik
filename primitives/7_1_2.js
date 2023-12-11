// Перед вами программа, которая выводит информацию о личности в определенном формате, взяв ее из объекта, свойства которого вводятся пользователем. Вместо многоточия вставьте интерполированную строку правильным образом.

const prompt = require("prompt-sync")();

const person = {};
person.name = prompt();
person.age = Number(prompt());
const info = `Имя: ${person.name}, Возраст: ${person.age} лет`;
console.log(info);