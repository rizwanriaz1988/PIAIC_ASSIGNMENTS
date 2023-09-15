import inquirer from "inquirer"
import chalk from "chalk"
import chalkAnimation from "chalk-animation"
import { resolve } from "path"



let welcome_msg = "\n     <== COUNT DOWN TIMER ==>\n"
let closing_msg = "   <== TIMER ENDS ==>"

async function welcome(msg:string){

    let anim = chalkAnimation.rainbow(msg)
    let strict = await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            anim.stop()
            resolve()
        }, 1000);
    })
    

}
var target_dateTime: any;
async function start_question(){
    // call of prompt
    var answers = await inquirer.prompt([
        {
            name:"time",
            type:"input",
            message:"Set Timer in Milliseconds:",
            validate:valid
        }
    ])

    target_dateTime = Date.now() + parseInt(answers.time)
    
}

async function valid(input:any){
    if(input){  //for empty     
        if (Number.isInteger(parseFloat(input)) == true){    //to check either number or not
            return true       
        }else{
            return "Enter Valid Number"
        }
    }else{
        return "Enter Some Number" //for empty
    }
}



async function operation() {
    let current_dateTime = Date.now()
    let timer_Time =  target_dateTime - current_dateTime
    
    let strict = await new Promise<void>((resolve, reject) => {        


        if (timer_Time <= 0) {
            welcome(closing_msg).then(()=>{
                resolve()
            })
        //     return continue
          } else {
            // setTimeout(operation,1000)
            const seconds = Math.floor((timer_Time / 1000) % 60);
            const minutes = Math.floor((timer_Time / 1000 / 60) % 60);
            const hours = Math.floor((timer_Time / 1000 / 3600) % 24);
        
            console.log(`Time remaining: ${hours}:${minutes}:${seconds}`);
            // setTimeout(operation,1000)
            setTimeout(async()=>{
                await operation()
                resolve()
            },1000)
          }
    })      
    
}

async function again(){
    do{
                await welcome(welcome_msg) 
                await start_question()
                await operation()
                // await welcome(closing_msg)
                var again_ask = await inquirer.prompt(
                    {
                        type: "input",
                        name: "again_asking",
                        message: "Are you want to set Timer again? (Y|N)"
                    }        
                )
            }while(again_ask.again_asking == "Y" || again_ask.again_asking == "y")

    process.exit()
        
}

again()

