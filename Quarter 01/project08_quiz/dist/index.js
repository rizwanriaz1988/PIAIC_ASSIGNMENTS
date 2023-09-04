#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import q_bank from "./question bank.js";
import chalkAnimation from "chalk-animation";
let welcome_msg = "\n<== Math Quiz ==>\n";
let closing_msg = "\n<== Quiz End ==>";
async function welcome(param) {
    let msg = chalkAnimation.rainbow(param);
    let promise = await new Promise((resolve, reject) => {
        setTimeout(() => {
            msg.stop();
            resolve();
        }, 1000);
    });
}
async function operation() {
    let score = 0;
    let quiz_questions = 10;
    var rand_q_array = [];
    if (quiz_questions <= q_bank.length) {
        for (let i = 0; i < quiz_questions; i++) {
            do {
                var rand_q = Math.floor(Math.random() * q_bank.length);
            } while (rand_q_array.includes(rand_q));
            rand_q_array.push(rand_q);
            let answers = await inquirer.prompt([{
                    name: "ans",
                    type: q_bank[rand_q].type,
                    message: `${chalk.redBright(`${q_bank[rand_q].message}`)}`,
                    choices: q_bank[rand_q].choices,
                }
            ]);
            if (answers.ans == q_bank[rand_q].key) {
                score++;
            }
        }
        let percentage = Math.round(score / quiz_questions * 100);
        console.log(`${chalk.whiteBright(`Questions Attempted: ${quiz_questions}`)}\n${chalk.yellow(`Correct Answered: ${score}`)}\n${chalk.greenBright(`Percentage: ${percentage}%`)}`);
    }
    else {
        console.log(chalk.redBright("Error: Reduce No Of Questions"));
    }
}
async function again() {
    do {
        await welcome(welcome_msg);
        await operation();
        await welcome(closing_msg);
        var again_ask = await inquirer.prompt([{
                type: "input",
                name: "ask",
                message: "Do you want to attempt again (Y|N) ?"
            }]);
    } while (again_ask.ask == "Y" || again_ask.ask == "y");
}
again();
// console.log(rand_q_array) 
//# sourceMappingURL=index.js.map