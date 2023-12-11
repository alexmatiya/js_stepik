// Перед вами объект catalogue, в котором содержится свойство magazine: 5. Измените значение этого свойства на вводимое пользователем числовое значение и выведите его, но только если оно не меньше 10 и не больше 50. Если введенное значение находится вне данного диапазона, сообщите об этом пользователю в заявленном формате. 

const prompt = require("prompt-sync")();

const catalogue = {
    magazine: 5,
}

catalogue.magazine = Number(prompt())
 
if (catalogue.magazine >= 10 && catalogue.magazine <= 50) {
    console.log(catalogue.magazine)
}
else {
    console.log("Введите число в диапазоне от 10 до 50 включительно")
}