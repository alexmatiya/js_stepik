// Перед вами массив с названиями столиц некоторых стран. Используя метод filter, создайте новый массив, который будет содержать только те столицы, которые начинаются с буквы "А". Выведите массив

const prompt = require("prompt-sync")();


const capitals = [
    "Токио", "Афины", "Нью-Дели", "Сеул", "Джакарта", "Багдад", "Астана", "Москва", "Анкара"
  ];


const capitalsOnA = capitals.filter((capital) => {
    return capital.startsWith("А")
});

console.log(capitalsOnA)
