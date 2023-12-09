// Напишите программу, которая запрашивает у пользователя два набора из двух чисел и объявляет две функции: findMax и compareMax. Функция findMax принимает два числа как параметры и возвращает большее из них. Функция compareMax принимает результаты нахождения максимума из двух наборов чисел как параметры и выводит сообщение о том, какое число больше.

const prompt = require("prompt-sync")();

let num1 = Number(prompt())
let num2 = Number(prompt())
let num3 = Number(prompt())
let num4 = Number(prompt())

function findMax(a,b) {
    if (a > b) {
    return a}
    else {
    return b}
}

function compareMax(a, b) {
    if (a > b) {
    console.log("Максимальное число первого набора больше")}
    else if (a < b) {
    console.log("Максимальное число второго набора больше")}
    else {
    console.log("Максимальные числа наборов равны")}
}

compareMax(findMax(num1,num2), findMax(num3,num4))