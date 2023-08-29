import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

//chalk animations

async function sleep(ms:number) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  

async function welcome(){
chalkAnimation.rainbow("\n      C A L C U L A T O R"); // Animation starts
// setTimeout(() => {
    // rainbow.stop(); // Animation stops
    await sleep(500);
    console.log(`${chalk.white(` 
     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|\n`)}`)

// return
};




//take and validate input from prompt
async function calculator (){
    let answers = await inquirer.prompt([
        {
            name:"first_num",
            type:"input",
            message:"Enter First Number:",
            validate: valid   
        },
        {
            name:"second_num",
            type:"input",
            message:"Enter Second Number:",
            validate: valid 
        },
        {
            name:"operation",
            type:"list",
            message:"Select Operation",
            choices:[addition,subtraction,division,multiplication]
        }
    ])

    if(answers.operation == "addition"){
        console.log(chalk.yellow(`Answer is: ${addition(parseFloat(answers.first_num),parseFloat(answers.second_num))}`))
    }else if(answers.operation == "subtraction"){
        console.log(chalk.yellow(`Answer is: ${subtraction(parseFloat(answers.first_num),parseFloat(answers.second_num))}`))
    }else if(answers.operation == "division"){
        console.log(chalk.yellow(`Answer is: ${division(parseFloat(answers.first_num),parseFloat(answers.second_num))}`))
    }else if(answers.operation == "multiplication"){
        console.log(chalk.yellow(`Answer is: ${multiplication(parseFloat(answers.first_num),parseFloat(answers.second_num))}`))
    }
}

// arithmetic functions declared
function addition(x:number,y:number){
    return x+y
}
function subtraction(x:number,y:number){
    return x-y
}
function division(x:number,y:number){
    return x/y
}
function multiplication(x:number,y:number){
    return x*y
}

// function to validate the numbers

async function valid(input:any) {
        if(input){
            if(isNaN(parseFloat(input))){
                return "Enter Valid Number"
            }else{
                return true
            }
            return true
        }else{
            return "Enter some Number"
        }
}


// function to repeat the calculator
async function startAgain(){
    do {
            await welcome();
            await calculator();
            var again = await inquirer.prompt({
                    name:"againSelect",
                    type:"input",
                    message:"Are you want to run again (Y|N)"
                })
        }while(again.againSelect == "Y" || again.againSelect == "y")                
    
}

// function call
// welcome()
startAgain()

