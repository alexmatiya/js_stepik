// Перед вами программа, которая сначала запрашивает количество элементов массива, а затем элементы массива по одному соответствующее количество раз. Программа добавляет каждый элемент, введенный пользователем, в конец массива. Далее, с помощью цикла for...of в массив lengths поочерёдно добавляются длина каждого элемента массива userArray.  Заполните тела циклов так, чтобы программа работала.

const prompt = require("prompt-sync")();


const numElements = Number(prompt("Введите количество элементов в массиве:"));
const userArray = [];
const lengths = [];

for (let i = 0; i < numElements; i++) {
    userArray.push(prompt())
}

for (const word of userArray) {
    lengths.push(word.length)
}

console.log(lengths);