import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
// =============== Version 1 ===============
let welcome_msg = "\n     Let's Play Game\n\n <== GUESSING NUMBER ==>\n";
let closing_msg = "<== GAME OVER ==>";
async function welcome(msg) {
    let anim = chalkAnimation.rainbow(msg);
    let strict = await new Promise((resolve, reject) => {
        setTimeout(() => {
            anim.stop();
            resolve();
        }, 1000);
    });
}
async function receiving() {
    let credit = 0;
    for (let i = 0; i < 9; i++) {
        let answers = await inquirer.prompt({
            name: "input_num",
            type: "input",
            message: "Enter Number (0-9)",
            validate: valid
        });
        let guess_num = parseInt(answers.input_num);
        let auto_num = Math.floor(Math.random() * 9);
        if (auto_num === guess_num) {
            console.log(`Your Number : ${guess_num}`);
            console.log(`Auto Number : ${auto_num}`);
            console.log(chalk.greenBright("Congratulations!!!"));
            credit++;
        }
        else {
            console.log(`Your Number : ${guess_num}`);
            console.log(`Auto Number : ${auto_num}`);
            console.log(chalk.redBright("Oops! Try Again"));
        }
    }
    console.log(chalk.yellowBright(`Points Earned : ${credit}`));
}
async function valid(input) {
    if (input) { //for empty     
        if (Number.isInteger(parseFloat(input)) == true) { //to check either number or not
            if (input >= 0 && input <= 9) {
                return true;
            }
            else {
                return "Enter Single Digit Number";
            }
        }
        else {
            return "Enter Valid Number(0-9)";
        }
    }
    else {
        return "Enter Some Number(0-9)"; //for empty
    }
}
async function again() {
    do {
        await welcome(welcome_msg);
        await receiving();
        await welcome(closing_msg);
        var again_ask = await inquirer.prompt({
            type: "input",
            name: "again_asking",
            message: "Are you want to play again? (Y|N)"
        });
    } while (again_ask.again_asking == "Y" || again_ask.again_asking == "y");
}
again();
// ====================END==================== 
//# sourceMappingURL=index.js.map