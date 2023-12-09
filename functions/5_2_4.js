// Напишите программу, которая запрашивает у пользователя четыре числа и объявляет функцию compareAndPrintMax. Эта функция принимает четыре числа как параметры и сравнивает их, затем выводит сообщение о том, какое число больше.
const prompt = require("prompt-sync")();

function compareAndPrintMax(num1, num2, num3, num4) {
    let maxNum = Math.max(num1, num2, num3, num4);
    console.log(maxNum);
}

let num1 = Number(prompt("Введите первое число:"));
let num2 = Number(prompt("Введите второе число:"));
let num3 = Number(prompt("Введите третье число:"));
let num4 = Number(prompt("Введите четвертое число:"));

compareAndPrintMax(num1, num2, num3, num4);