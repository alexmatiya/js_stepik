// Создайте объект trip с информацией о путешествии. Попросите пользователя ввести следующие данные о путешествии:

// Место назначения.
// Дату начала путешествия.
// Длительность путешествия (в днях).
// Затем программа использует этот объект для вывода информации о путешествии.

const prompt = require("prompt-sync")();


let country = prompt()
let startDate = prompt()
let durationWeekend = prompt()

let trip = {
    country,
    startDate,
    durationWeekend,
}

console.log(trip.startDate + " вы отправляетесь в " + trip.country + " на " + trip.durationWeekend + " дней" )