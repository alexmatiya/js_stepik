// Напишите программу, которая запрашивает у пользователя два числа и операцию (+, -, * или /). Затем объявите функцию, которая принимает два числа и операцию как параметры и выводит на экран результат выполнения выбранной операции. Если пользователь ввел неверный оператор, программа выводит "Неверный оператор"
const prompt = require("prompt-sync")();


function calculate(num1, num2, operator) {
    switch(operator) {
        case "+":
            console.log(num1 + num2);
            break;
        case "-":
            console.log(num1 - num2);
            break;
        case "*":
            console.log(num1 * num2);
            break;
        case "/":
            console.log(num1 / num2);
            break;
        default:
            console.log("Неверный оператор");
    }
}

let num1 = Number(prompt("Введите первое число:"));
let num2 = Number(prompt("Введите второе число:"));
let operator = prompt("Введите оператор (+, -, *, /):");

calculate(num1, num2, operator);