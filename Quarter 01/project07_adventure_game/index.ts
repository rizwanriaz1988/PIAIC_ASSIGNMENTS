import inquirer from "inquirer"
import chalk from "chalk"
import chalkAnimation from "chalk-animation"
import { mainModule } from "process"

let welcomeMsg = "<== Welcome to the Dungeon! ==>\n==============================="
let closeMsg = "<== Game Over ==>"


const operations = [
    {
        type:"rawlist",
        name:"selectOperation",
        message:"What you like to do?",
        choices:["Attack","Drink Health Portion","Run"]
    }
]

const askAgain = [{
    type:"confirm",
    name:"againAsk",
    message:"Are You Want to Play Again?"
}
]

let characters = [ "Skeleton","Ghoulgeist","Zombieclaw","Bonefiend","Mummylord","Wendigo","Chimera","Hydra","Banshee","Succubus","Kraken","Minotaur",]


//questioning function
let heroHPstart = 100
let hpLife = 3

let characterHP:number
let character:string
let drinkHP:number

async function randomStatsGeneration(){
    characterHP = Math.floor(Math.random()*99)
    character = characters[Math.floor(Math.random()*characters.length)]
    drinkHP = Math.floor(Math.random()*99)
}


async function questioning() {

    do{
    randomStatsGeneration()
    console.log(`${chalk.yellowBright(`\n* ${character} has appeared *\n`)}`);
    
            do{
                console.log (`${chalk.green(`\nYour HP = ${heroHPstart}`)}`);
                console.log(`${chalk.redBright(`${character} HP = ${characterHP}\n`)}`);

                //select operations
                await inquirer.prompt(operations)
                .then(async (answers)=>{
                    if(answers.selectOperation === "Attack"){
                        // let charHPcollision = Math.floor(Math.random()*characterHP)
                        // let heroHPcollision = Math.floor(Math.random()*heroHPstart)
                        let charHPcollision = Math.floor(Math.random()*25)
                        let heroHPcollision = Math.floor(Math.random()*25)

                        characterHP = characterHP - charHPcollision
                        heroHPstart = heroHPstart - heroHPcollision
                        
                        console.log(`\n${chalk.greenBright(`You strike the ${character} for ${charHPcollision} Damage`)}`);
                        console.log(`${chalk.redBright(`You receive ${heroHPcollision} in retaliation\n`)}`)

                        if(characterHP<=0){
                            console.log(`${chalk.magentaBright(`Congratulations!!!\n${character} is Defeated\n`)}`);
                            
                            }else if(heroHPstart<=0){
                                console.log(`${chalk.magentaBright(`Opss!!!\nYou are Defeated\n`)}`);
                                await welcome(closeMsg)
                                // await againAsking()
                                if(await againAsking()){
                                    heroHPstart = 100
                                    await main()

                                }else{
                                    process.exit()
                                }


                        }

                    }else if(answers.selectOperation === "Drink Health Portion"){
                        if(hpLife >=1){
                            heroHPstart = heroHPstart + 25
                            hpLife--
                        }else {
                            console.log(`\n${chalk.cyanBright(`You have No life left\n`)}`); 
                        }
                        

                    }else if(answers.selectOperation === "Run"){
                        await questioning()
                        

                    }

         })
    }while(characterHP>0 && heroHPstart>0)


}while(characterHP<=0)


// process.exit()






}

//again asking function
async function againAsking() {
    const response =  await inquirer.prompt(askAgain)
    return response.againAsk
}

//welcome function
async function welcome(msg:any) {
    let anime = chalkAnimation.rainbow(msg)
    await new Promise<void>((resolve, reject) => {
        setTimeout(()=>{
            anime.stop()
            resolve()
        },1000)
    })
    
}



async function main() {

    do{
        await welcome(welcomeMsg)
        await questioning()
        await welcome(closeMsg)


    }while(await againAsking())
    
}


main()