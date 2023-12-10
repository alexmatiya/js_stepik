// Перед вами объект, в который записывается информация от пользователя об автомобиле. Выведите эту информацию в соответствии с заявленным форматом.

const prompt = require("prompt-sync")();


const brand = prompt();
const model = prompt();
let car = {
  brand,
  model,
};

console.log(car.brand, car.model)