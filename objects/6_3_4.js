// Перед вами программа, которая сперва запрашивает у пользователя сумму, а потом спрашивает, какую операцию он хочет с ней совершить: внести эту сумму на счет или снять эту сумму со счета. Если сумма снятия превышает баланс, программа выводит сообщение о недостатке средств. Вставьте вместо троеточий верные инструкции.

const prompt = require("prompt-sync")();

const amount = Number(prompt());
const choice = prompt()

let bankAccount = {
    balance: 500,
    deposit(amount) {
        this.balance += amount
        console.log(this.balance)
    },
    withdraw(amount) {
        if (this.balance < amount) {
            console.log("Недостаточно средств на счете")
        }
        else {
            this.balance -= amount
            console.log(this.balance)
        }
    },
};
  

if (choice === "внести") {
    bankAccount.deposit(amount)
}
else if (choice === "снять") {
    bankAccount.withdraw(amount)
}