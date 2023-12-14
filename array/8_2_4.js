// Запросите у пользователя произвольные значения через запятую с пробелом и поместите их в массив
// Далее, запросите у пользователя начальный и конечный индексы (включительно) поочерёдно для среза массива. 
// Используя метод slice, создайте новый массив, содержащий элементы, указанные пользователем, и выведите элементы массива через запятую с пробелом.
// Sample Input 1:

// я, ты, мы, он
// 1
// 2
// Sample Output 1:

// ты, мы
const prompt = require("prompt-sync")();

let seq  = prompt().split(", ")
let startSlice = Number(prompt())
let endSlice = Number(prompt())

res = seq.slice(startSlice, endSlice + 1 )

console.log(res.join(", "))