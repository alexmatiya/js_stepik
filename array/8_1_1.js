// Перед вами массив fruits, в котором перечислены фрукты. Вам нужно удалить первые два фрукта из массива и добавить на их место "Апельсин" и "Банан" с помощью методов массива. Выведите окончательный массив.

const prompt = require("prompt-sync")();


let fruits = ["Яблоко", "Груша", "Вишня", "Абрикос"];

fruits[0] = "Апельсин"
fruits[1] = "Банан"
console.log(fruits)