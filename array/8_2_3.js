// Запросите у пользователя произвольные значения через запятую с пробелом. Поместите их в массив и переведите в числовой тип данных. Выведите массив.

// Sample Input 1:

// 1, 2, три, 4, пять
// Sample Output 1:

// [ 1, 2, 'три', 4, 'пять' ]
const prompt = require("prompt-sync")();

const seq = prompt().split(", ")

let res = []

for (let i of seq) {
    if (!isNaN(i)) {
        res.push(Number(i))
    }
    else {
        res.push(i)
    }
}

console.log(res)