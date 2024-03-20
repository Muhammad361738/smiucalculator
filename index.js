#! /usr/bin/env node
import inquirer from "inquirer";
// Asking Question from user 
let answer = await inquirer.prompt([
    { message: "Enter the first number", type: "number", name: "firstNumber" },
    { message: "Enter the Second number", type: "number", name: "secondNumber" },
    { message: "Select one operator to perform operation", type: "list", name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "(Division"] },
]);
console.log(answer);
// conditional statement if else
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please put valid operator");
}
