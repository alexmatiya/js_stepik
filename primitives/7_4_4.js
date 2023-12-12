// Напишите программу, которая запрашивает радиус круга у пользователя и вычисляет его площадь, используя значение числа π (пи) как константу. Затем программа возводит площадь в 3 степень с помощью функции Math.pow() и выводит результат, округленный до ближайшего целого числа.

const prompt = require("prompt-sync")();

let radius = Number(prompt())

function getAreaCircle(radius){
    // Площадь круга в 3-й степени
    let area = Math.PI * radius ** 2
    return Math.round(area ** 3)
}

console.log(getAreaCircle(radius))