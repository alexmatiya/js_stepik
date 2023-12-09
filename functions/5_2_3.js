// Напишите программу, которая запрашивает у пользователя два числа и сравнивает их. Затем объявите функцию, которая принимает два числа как параметры и выводит на экран сообщение о том, какое число больше.
const prompt = require("prompt-sync")();


let num1 = Number(prompt()) 
let num2 = Number(prompt()) 

function getMoreNumber(number1, number2) {
    if (number1 > number2) {
        console.log(number1 + " больше, чем " + number2)}
    else if (number1 < number2) {
        console.log(number2 + " больше, чем " + number1)}
    else {
        console.log(number1 + " равно " + number2)}
}    

getMoreNumber(num1, num2)