// Перед вами программа, которая принимает название товара, цену товара за штуку и количество товара и выводит сообщение в определенном формате с помощью функции calculateTotal с тремя параметрами. Напишите функцию calculateTotal. Используйте интерполяцию.

const prompt = require("prompt-sync")();


const itemName = prompt();
const itemPrice = Number(prompt());
const quantity = Number(prompt());

function calculateTotal(name, price, count) {
    res = `Вы выбрали ${count} товаров "${name}" по цене ${price} рублей за штуку. Итого: ${price * count} рублей.`
    return res
}

const message = calculateTotal(itemName, itemPrice, quantity);
console.log(message);