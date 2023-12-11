// Перед вами та же программа, но теперь формат вывода сообщения изменен. Напишите функцию с одной инструкцией console.log(), в которой должны быть использованы спецсимволы.

const prompt = require("prompt-sync")();

const itemName = prompt();
const itemPrice = Number(prompt());
const quantity = Number(prompt());

function calculateTotal(name, price, count) {
    res = `Вы выбрали "${name}" по цене ${price} рублей за штуку.\nКоличество: ${count} шт.\nИтого: ${price * count} рублей.`
    return res
}

const message = calculateTotal(itemName, itemPrice, quantity);
console.log(message);