// Напишите программу, которая запрашивает у пользователя площадь основания S и высоту h, затем позволяет выбрать для какой фигуры найти объем: для цилиндра или для конуса. Затем объявляются две стрелочные функции: calculateCylinderVolume и calculateConeVolume, каждая из которых принимает параметры фигуры и возвращает объем. 

// Объем цилиндра = площадь основания * высота

// Объем конуса = 1/3 * площадь основания * высота

const prompt = require("prompt-sync")();


let s = Number(prompt())
let h = Number(prompt())
let figure = prompt()

let calculateCylinderVolume = (a, b) => a * b
let calculateConeVolume = (a, b) => 1 / 3 * a * b

if (figure === "цилиндр") {
    console.log("Объем цилиндра: " + calculateCylinderVolume(s,h))
}
else if (figure === "конус") {
    console.log("Объем конуса: " + calculateConeVolume(s,h))
}
else {
    console.log("неизвестная фигура")
}