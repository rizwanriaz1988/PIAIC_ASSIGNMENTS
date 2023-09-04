#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import chalk from "chalk"

/* =============== Version 1 ===============
let welcome_msg = "\n     Let's Play Game\n\n <== GUESSING NUMBER ==>\n"
let closing_msg = "<== GAME OVER ==>"
async function welcome(msg:string){

    let anim = chalkAnimation.rainbow(msg)
    let strict = await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            anim.stop()
            resolve()
        }, 1000);
    })
    

}
async function receiving() {
    let credit = 0
    for (let i =0;i<9;i++){
    let answers = await inquirer.prompt(
    {
        name: "input_num",
        type: "input",
        message: "Enter Number (0-9)",
        validate: valid
    }
)

    let guess_num = parseInt(answers.input_num)
    let auto_num = Math.floor(Math.random()*9)
    if(auto_num === guess_num){
        console.log(`Your Number : ${guess_num}`)
        console.log(`Auto Number : ${auto_num}`)
        console.log(chalk.greenBright("Congratulations!!!"))
        credit++
    }else{
        console.log(`Your Number : ${guess_num}`)
        console.log(`Auto Number : ${auto_num}`)
        console.log(chalk.redBright("Oops! Try Again"))
    }
    }
    console.log(chalk.yellowBright(`Points Earned : ${credit}`))
    

}
async function valid(input:any){
if(input){  //for empty
    if (Number.isInteger(parseFloat(input)) == true){    //to check either number or not
        if(input>=0 && input<=9){
            return true
        }else{
            return "Enter Single Digit Number"
        }
    }else{
        return "Enter Valid Number(0-9)"
    }
}else{
    return "Enter Some Number(0-9)" //for empty
}
}
async function again(){
    do{
        await welcome(welcome_msg)
        await receiving()
        await welcome(closing_msg)
    var again_ask = await inquirer.prompt(
        {
            type: "input",
            name: "again_asking",
            message: "Are you want to play again? (Y|N)"
        }
    )
}while(again_ask.again_asking == "Y" || again_ask.again_asking == "y")
}
again()
 ====================END====================  */



//  =============== Version 2 ===============
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
    let auto_num = Math.floor(Math.random() * 25);
    let attempt = 0
    do {
        
        let answers = await inquirer.prompt({
            name: "input_num",
            type: "input",
            message: "Enter Number (0-25)",
            validate: valid
        });
        var guess_num = parseInt(answers.input_num);
        attempt++

        if (auto_num === guess_num){
            console.log(chalk.greenBright("Congratulations!!!"))
            if (attempt == 1){
                console.log(chalk.yellowBright(`Total Attempts: ${attempt}`))
                await welcome("    Wonderful");
            }else{
                console.log(chalk.yellowBright(`Total Attempts: ${attempt}`))
            }
            
        }else if (auto_num !== guess_num && guess_num>auto_num){
            console.log(chalk.redBright(`Your Number is too big. Try another number...`))
                
        }else{
            console.log(chalk.redBright(`Your Number is too small. Try another number...`))
        }

    } while (auto_num !== guess_num);
}

async function valid(input) {
    if (input) { //for empty     
        if (Number.isInteger(parseFloat(input)) == true) { //to check either number or not
            if (input >= 0 && input <= 25) {
                return true;
            }
            else {
                return "Enter Number Between 0 and 25";
            }
        }
        else {
            return "Enter Valid Number(0-25)";
        }
    }
    else {
        return "Enter Some Number(0-25)"; //for empty
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
            message: "Do you want to play again? (Y|N)"
        });
    } while (again_ask.again_asking == "Y" || again_ask.again_asking == "y");
}
again();
