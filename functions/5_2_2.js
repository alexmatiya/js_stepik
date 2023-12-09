// Напишите программу, которая запрашивает у пользователя число, а затем объявите функцию, которая принимает это число как параметр и выводит его факториал на экран. Вызовите функцию.

const prompt = require("prompt-sync")();

let num = Number(prompt("Введите целое число "))

function getFactorial(number) {
    return (number != 1) ? number * getFactorial(number - 1) : 1;
}
console.log(getFactorial(num))