// Напишите программу, которая запрашивает у пользователя два набора из двух чисел и объявляет две функции: calculateAverage и compareAverages. Функция calculateAverage принимает два числа как параметры и возвращает их среднее арифметическое. Функция compareAverages принимает результаты средних значений из двух наборов чисел как параметры и выводит сообщение о том, какое среднее значение больше.

const prompt = require("prompt-sync")();

let num1 = Number(prompt())
let num2 = Number(prompt())
let num3 = Number(prompt())
let num4 = Number(prompt())


function compareAverages(a, b) {
    return ((a + b) / 2);
}
function calculateAverage(a ,b) {
    if (a > b) {
        console.log("Среднее значение первого набора больше")}
    else if (a < b) {
        console.log("Среднее значение второго набора больше")
    }
    else {
        console.log("Средние значения наборов равны")
    }
}

calculateAverage(compareAverages(num1, num2), compareAverages(num3, num4))