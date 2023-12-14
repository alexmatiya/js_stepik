// Запросите у пользователя произвольные строковые значения через запятую с пробелом и поместите их в массив. Выведите получившийся массив.

// Sample Input 1:

// с, т, ё, п, и, к
// Sample Output 1:

// [ 'с', 'т', 'ё', 'п', 'и', 'к' ]

const prompt = require("prompt-sync")();

const seq = prompt()

const res = seq.split(", ")

console.log(res)