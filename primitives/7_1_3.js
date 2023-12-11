// Создайте объект budget со свойствами income (доход) и expenses (расходы), значения которых вводятся пользователем и методом calculateProfit, который высчитывает прибыль по следующей формуле:

// Прибыль = доход - расходы
// Если прибыль положительная, программа выводит значение прибыли. Если прибыль равна нулю, программа выводит сообщение о том, что пользователь отработал в ноль. Если прибыль отрицательна, программа выводит насколько пользователь ушел в минус. 

// Используйте интерполяцию.
const prompt = require("prompt-sync")();


const budget = {
    income : Number(prompt()),
    expenses : Number(prompt()),
    calculateProfit() {
        return this.income - this.expenses
    }
}

profit = budget.calculateProfit()

if (profit === 0) {
    console.log("Вы отработали в ноль")
}
else if (profit > 0) {
    console.log(`Ваша прибыль составляет ${profit} рублей`)
}
else {
    console.log(`Вы ушли в минус на ${Math.abs(profit)} рублей`)
}
