import inquirer from "inquirer";
import chalk from "chalk";
import q_bank from "./question bank.js";
import chalkAnimation from "chalk-animation";

let welcome_msg = "\n<== Math Quiz ==>\n"
let closing_msg = "\n<== Quiz End ==>"

async function welcome(param:any) {
    let msg = chalkAnimation.rainbow(param)
    let promise = await new Promise<void>((resolve, reject) => {
        setTimeout(()=>{
            msg.stop()
            resolve()
        },1000)
    })
}


async function operation(){
let score = 0
for(let i=0;i<q_bank.length;i++){
let answers = await inquirer.prompt([{
    name: "ans",
    type: q_bank[i].type,
    message: `${chalk.redBright(`${q_bank[i].message}`)}`,
    choices:q_bank[i].choices,
    }
]);

if (answers.ans==q_bank[i].key){
    score ++
}
}
let percentage = Math.round(score/q_bank.length*100)
console.log(`${chalk.whiteBright(`Questions Attempted: ${q_bank.length}`)}\n${chalk.yellow(`Correct Answered: ${score}`)}\n${chalk.greenBright(`Percentage: ${percentage}%`)}`);
}


async function again(){
    do{
        await welcome(welcome_msg)
        await operation()
        await welcome(closing_msg)

        var again_ask = await inquirer.prompt([{
            type: "input",
            name: "ask",
            message: "Do you want to attempt again (Y|N) ?"     
        }])
    }while(again_ask.ask == "Y" || again_ask.ask == "y")    
}

again()