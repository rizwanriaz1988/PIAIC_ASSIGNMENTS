/*
------Question 01 :----------
prepare a quiz with inquirer and chalk.
*/
import inquirer from "inquirer";
import chalk from "chalk";
import q_bank from "./question bank.js";
let score = 0;
for (let i = 0; i < q_bank.length; i++) {
    let answers = await inquirer.prompt([{
            name: "ans",
            type: q_bank[i].type,
            message: `${chalk.redBright(`${q_bank[i].message}`)}`,
            choices: q_bank[i].choices,
        }
    ]);
    if (answers.ans == q_bank[i].key) {
        score++;
    }
}
let percentage = Math.round(score / q_bank.length * 100);
// console.log(chalk.red("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old."));
// console.log(chalk.red(`${answers.addition}`));
// console.log(chalk.red(`${answers.key}`));
console.log(`${chalk.whiteBright(`Questions Attempted: ${q_bank.length}`)}\n${chalk.yellow(`Correct Answered: ${score}`)}\n${chalk.greenBright(`Percentage: ${percentage}%`)}`);
