// Перед вами программа, которая должна выводить специальность и средний балл студента, взяв данные из объекта student. Вставьте вместо многоточий свойства со значениями, которые пользователь вводит самостоятельно.

const prompt = require("prompt-sync")();


let major = prompt();
let gpa = Number(prompt());
let student = {
    major,
    gpa,
};

console.log("Специальность студента: " + student.major);
console.log("Средний балл студента: " + student.gpa);