// Объявите функцию, в которой будут содержаться инструкции запроса числа от пользователя и вывода квадрата этого числа. Вызовите эту функцию.

function getSquareNumber() {
    let number = Number(prompt())
    console.log(number ** 2)
}

getSquareNumber()