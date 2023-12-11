// Создайте объект c единственным методом, который принимает два числа, введенных пользователем, как параметры и выводит остаток от деления первого числа на второе. 
const prompt = require("prompt-sync")();

num1 = Number(prompt())
num2 = Number(prompt())

let calcul = {
    divisionRemainder(a, b) {
        return a % b
    } 
}

console.log(calcul.divisionRemainder(num1, num2))