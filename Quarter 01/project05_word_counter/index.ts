import inquirer from "inquirer"
import chalk from "chalk"
import chalkAnimation from "chalk-animation"


let welcome_msg = "\n<== Words & Characters Counter ==>\n"
let closing_msg = "\n<== Counter Ends ==>"

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
    let answers = await inquirer.prompt([
        {
            name:"ask",
            type:"string",
            message:"Write Keywords or Paragraph to Count Words and Characters?"
        }
    ])
// code operation
    let result = answers.ask.split(" ")
    let words=0
    let character = 0
    result.map((sys:any)=>{
        if(sys != ""){
            words++
            let char = sys.split("")    
            char.map(()=>{
            character++
            })
        }else{
            return
        }
    })
    

    //display of results
console.log(`Words = ${words}`)
console.log(`Characters = ${character}`)
    
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

