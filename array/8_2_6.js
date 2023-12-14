// Запросите у пользователя произвольные значения через запятую с пробелом и поместите их в массив.
// Далее, запросите у пользователя индексы элементов, которые они хотят вывести и в каком порядке через запятую.
// Выведите через пробел запрошенные элементы массива.
// Sample Input 1:

// 1, 2, 3
// 0, 2, 1
// Sample Output 1:

// 1 3 2

const prompt = require("prompt-sync")();

let seq = prompt().split(", ")
let indexes = prompt().split(", ")

let res = []

for (const i of indexes) {
    res.push(seq[i])
}

console.log(res.join(" "))