// Перед вами объект catalogue, в котором содержится свойство magazine: 5. Удалите это свойство из объекта и добавьте в объект свойство newspaper с числовым значением, которое пользователь вводит самостоятельно. Выведите значение свойства newspaper. 

const prompt = require("prompt-sync")();

const catalogue = {
    magazine: 5,
}

delete catalogue.magazine
catalogue.newspaper = Number(prompt())

console.log(catalogue.newspaper)