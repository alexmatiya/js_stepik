// Создайте объект book с информацией о книге. Попросите пользователя ввести следующие данные о книге:

// Название книги.
// Автор книги.
// Год издания книги.
// Затем напишите программу, которая использует этот объект для вывода информации о книге в заявленном формате.

const prompt = require("prompt-sync")();


let nameBook = prompt()
let authorBook = prompt()
let yearPublication = prompt()

let book = {
    nameBook,
    authorBook,
    yearPublication,
}

console.log("Название книги: " + book.nameBook)
console.log("Автор книги: " + book.authorBook)
console.log("Год издания книги: " + book.yearPublication)