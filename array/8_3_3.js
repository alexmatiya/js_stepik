// Запросите у пользователя строковые значения через пробел и поместите их в массив. Используя метод map, создайте новый массив, который будет содержать эти значения, написанные заглавными буквами.

// Sample Input 1:

// do a barrel roll
// Sample Output 1:

// [ 'DO', 'A', 'BARREL', 'ROLL' ]
const prompt = require("prompt-sync")();

let seq = prompt().split(" ")

let seqUpper = seq.map((variable) => variable.toUpperCase());

console.log(seqUpper)