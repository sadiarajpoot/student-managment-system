#! /usr/bin/env node 
console.log("=".repeat(70));
console.log(chalk.bold.yellowBright("\n\t\t WELLCOME TO WORD COUNTER BY SADIA KHAN"));
console.log("=".repeat(70));
import inquirer from "inquirer";
import chalk from "chalk";
const randomNumber = 10000 + Math.floor(Math.random() * 9000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "students", type: "input", message: "Enter student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter a non-empty value.";
        },
    },
    {
        name: "courses", type: "list", message: "select the course to enroll",
        choices: ["MS.office", "HTML", "CSS", "TypeScript", "python", "javaScript"]
    }
]);
const tutionFee = {
    "MS.office": 2000,
    "HTML": 2000,
    "CSS": 2000,
    "TypeScript": 3000,
    "python": 2000,
    "javaScript": 3000
};
console.log(`\ntuition Fees: ${tutionFee[answer.courses]}/-\n`);
console.log(`balance : ${myBalance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment", type: "list", message: "Select payment method :",
        choices: ["easypaisa", "bank transfer", "jazzcash"]
    }, {
        name: "amount", type: "input", message: "transfer money:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter a non-empty value ";
        },
    }
]);
console.log(`\nYou select payment method ${paymentType.payment}`);
const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tutionFees === paymentAmount) {
    console.log(`Congratulation , you have to successfully enrolled in ${answer.courses}`);
    let ans = await inquirer.prompt([
        {
            name: "select", type: "list", message: "What would you like to do next ? ",
            choices: ["view status", "Exit "]
        }
    ]);
    if (ans.select === "view status") {
        console.log("\n*************status**************");
        console.log(`Student Name :${answer.students}`);
        console.log(`Student ID :${randomNumber}`);
        console.log(`course : ${answer.courses}`);
        console.log(`Tuition Fees Paid : ${paymentAmount}`);
        console.log(`balance : ${myBalance += paymentAmount}`);
    }
    else {
        console.log("\nExisting Student Managment System\n");
    }
}
else {
    console.log("invaild amount due to course\n");
}
