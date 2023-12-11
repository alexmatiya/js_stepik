// Напишите программу, которая запрашивает ввод строки. Если эта строка начинается с буквы "ж" в верхнем или нижнем регистре, программа выводит длину строки, а иначе выводится сообщение "Попробуйте снова". Используйте метод startsWith.

const prompt = require("prompt-sync")();

word = prompt()

if (word.startsWith("ж") || word.startsWith("Ж")){
    console.log(word.length)
}
else {
    console.log("Попробуйте снова")
}