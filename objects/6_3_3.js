// Перед вами объект, который содержит значение основания. Добавьте в объект метод, который принимает от пользователя число Y, как параметр и возводит число Y - 2 в степень Y. Напишите инструкции ввода числа Y и вывода результата выполнения метода.

const prompt = require("prompt-sync")();

let Y = Number(prompt());
const calculator = {
    base: Y - 2,
    power() {
        console.log(this.base **  Y)
    }
};
calculator.power(Y);