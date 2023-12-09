
// Напишите программу, которая запрашивает у пользователя три числа и объявляет функцию, которая принимает три числа как параметры и возвращает их среднее арифметическое. Выведите удвоенное значение среднего арифметического.

const prompt = require("prompt-sync")();

function arithmeticMean(a, b, c) {
    return ((a + b + c) / 3)
}

num1 = Number(prompt())
num2 = Number(prompt())
num3 = Number(prompt())

res = arithmeticMean(num1,num2,num3) * 2

console.log(res)