// Перед вами программа, которая должна запрашивать баланс банковского счета у пользователя и выводить сообщение о балансе в заявленном формате. Вставьте вместо многоточия объявление метода для объекта.

const prompt = require("prompt-sync")();


const balance = Number(prompt())        
let bankAccount = {
  balance,
  checkBalance() {
    console.log("Ваш текущий баланс: " + this.balance + " долларов")
  }
};
bankAccount.checkBalance();