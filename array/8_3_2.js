// Запросите у пользователя ввод названий столиц через пробел и поместите их в массив. Если массив содержит элемент "Андорра-Ла-Велла", выведите массив со столицами, которые заканчиваются на букву А. Если не содержит - выведите массив со столицами, которые заканчиваются на букву Н.

// Sample Input 1:

// Пекин Берлин Бишкек Алжир Канберра Вашингтон Махачкала
// Sample Output 1:

// [ 'Пекин', 'Берлин', 'Вашингтон' ]
const prompt = require("prompt-sync")();

const capitals = prompt().split(" ")

if (capitals.includes("Андорра-Ла-Велла")) {
    const res = capitals.filter((capital) => {
        return capital.endsWith("а")})
        console.log(res)
}
else {
    const res = capitals.filter((capital) => {
        return capital.endsWith("н")})
        console.log(res)
}

