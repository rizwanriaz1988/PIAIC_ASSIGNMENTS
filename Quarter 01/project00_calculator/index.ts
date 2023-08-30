import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { resolve } from "path";

//chalk animations


async function welcome(){
    let anime = chalkAnimation.rainbow("\n      C A L C U L A T O R"); // Animation starts
    await new Promise<void>((resolve, reject) => {          // this promise await will ensure the execution of this code i.e. settimeout(), without await it will not ensure the completion of promise
        
        setTimeout(()=>{
        anime.stop()
        resolve()           //this will go along with settimeout to waiting 
        },1000)
        
    })

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
startAgain()

